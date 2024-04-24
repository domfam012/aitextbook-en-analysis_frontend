<template>
    <div class="inner_title gap2">
        <h3 class="bullet">
            선생님께서는 학생들에게 AI 추천 자료를 <span>{{ autoSendYn ? '자동' : '수동' }} 출제</span>하고 계십니다.
            {{ autoSendYn ? '수동' : '자동' }} 출제로 변경하시려면
            <a href="#" class="text_link" @click="changeSendType(autoSendYn)">여기</a>를 선택하세요.
        </h3>
        <div class="buttons" v-if="autoSendYn === false">
            <v-btn rounded flat size="small" class="secondary" @click="checkAllCheckBox">모두 선택</v-btn>
            <v-btn rounded flat size="small" class="secondary" @click="resetCheckBox">선택 해제</v-btn>
            <v-btn rounded flat size="small" class="primary" @click="sendAiRecommendationData">보내기</v-btn>
        </div>
        <div class="buttons" v-if="autoSendYn">
            <v-btn rounded flat size="small" class="primary" disabled>자동 출제 중</v-btn>
        </div>
    </div>
    <div class="scrollable_x mgt10">
        <div class="card_items">
            <div class="item" v-for="item in aiCustomizedDataState.slice(0, 5)" :key="item">
                <div class="image_wrap">
                    <v-checkbox v-if="autoSendYn === false" class="type_list" v-model="selectedItems" :value="item"></v-checkbox>
                    <v-img :src="item.contentsUrl" />
                </div>
                <div class="text_wrap">
                    <p>{{ item.contentName }}</p>
                </div>
            </div>
        </div>
    </div>
    <!-- // 개인별 학업 성취율에 따른 추천컨텐츠_수동출제전환시 -->
</template>

<script setup>
const props = defineProps(['item']);

const learnStore = useApiLearnStore();
const { aiCustomizedDataState, autoSendYn } = storeToRefs(learnStore);

const selectedItems = ref([]);

/**
 * 개인별 학업 성취율에 따른 추천컨텐츠 보내기
 */
const sendAiRecommendationData = async () => {
    await learnStore.postLearnAiCustomizedData(selectedItems.value);
};

/**
 * 선택해제 버튼
 */
const resetCheckBox = () => {
    selectedItems.value = [];
};

/**
 * 모두 선택 버튼
 */
const checkAllCheckBox = () => {
    selectedItems.value = aiCustomizedDataState.value;
};

/**
 * 자동/수동 출제 타입 변경
 * @param autoSendYn
 * @returns {Promise<void>}
 */
const changeSendType = async autoSendYn => {
    await learnStore.changeAutoSendSettingType(!autoSendYn);
};

onMounted(async () => {
    await learnStore.getLearnAiCustomizedData({
        chId: props.item.chId,
        sessId: props.item.sessId,
        achvRt: props.item.achvRtAvg,
        studUuid: props.item.studUuid
    });
});
</script>
