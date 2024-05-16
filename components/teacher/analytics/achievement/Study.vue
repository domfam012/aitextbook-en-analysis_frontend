<template>
    <div class="inner_title gap2">
        <h3 class="bullet">{{ t('analytics.study.text') }}</h3>
        <div class="buttons">
            <v-btn rounded flat size="small" class="secondary" @click="checkAllCheckBox">{{ t('analytics.study.selectAll') }}</v-btn>
            <v-btn rounded flat size="small" class="secondary" @click="resetCheckBox">{{ t('analytics.study.deSelect') }}</v-btn>
            <v-btn rounded flat size="small" class="primary" @click="sendAiRecommendationData">{{ t('analytics.study.send') }}</v-btn>
        </div>
    </div>
    <div class="scrollable_x mgt10">
        <div class="card_items">
            <template v-if="aiCustomizedDataState.length > 5">
                <div class="item" v-for="item in aiCustomizedDataState.slice(0, 5)" :key="item">
                    <div class="image_wrap">
                        <v-checkbox class="type_list" v-model="selectedItems" :value="item"></v-checkbox>
                        <v-img :src="item.problemContentUrl" />
                    </div>
                    <div class="text_wrap">
                        <p>{{ item.contentsName }}</p>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="item" v-for="item in aiCustomizedDataState" :key="item">
                    <div class="image_wrap">
                        <v-checkbox class="type_list" v-model="selectedItems" :value="item"></v-checkbox>
                        <v-img :src="item.problemContentUrl" />
                    </div>
                    <div class="text_wrap">
                        <p>{{ item.contentsName }}</p>
                    </div>
                </div>
            </template>
        </div>
    </div>
    <!-- // 개인별 학업 성취율에 따른 추천컨텐츠_수동출제전환시 -->
</template>

<script setup>
const { t } = useI18n();
const props = defineProps(['item']);

const learnStore = useApiLearnStore();
const { aiCustomizedDataState } = storeToRefs(learnStore);

const selectedItems = ref([]);

/**
 * 개인별 학업 성취율에 따른 추천컨텐츠 보내기
 */
const sendAiRecommendationData = async () => {
    const customizedData = {
        chId: props.item.chId,
        sessId: props.item.sessId,
        achvRt: props.item.achvRtAvg,
        studUuid: props.item.studUuid,
        contentArr: selectedItems.value.map(item => item.problemContentId)
    };
    await learnStore.postLearnAiCustomizedData(customizedData);
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

onMounted(async () => {
    await learnStore.getLearnAiCustomizedData({
        chId: props.item.chId,
        sessId: props.item.sessId,
        achvRt: props.item.achvRtAvg,
        studUuid: props.item.studUuid
    });
});
</script>
