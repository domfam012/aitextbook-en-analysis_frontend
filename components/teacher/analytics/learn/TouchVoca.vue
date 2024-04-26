<template>
    <v-sheet class="inner_contents chart_multiple_radialbars">
        <!-- 데이터 있을 때 -->
        <v-list v-if="vocaState?.length !== 0" class="chart_wrap gap3" max-width="105rem">
            <v-list-item
                v-for="(item, index) in renderAll ? vocaState : vocaState?.slice(0, currentPage * 3 + 3)"
                :key="index"
                class="chart"
            >
                <div class="avatar avatar-box" @click="openModal({ type: 'vocaLearningStatus' })">
                    <!-- !NOTE API 학생 정보 데이터 추가 요청중. 2024-04-12 (파라미터 변경될 수 있음.) -->
                    <v-img :src="item.profile" alt="아바타 이미지" class="avatar-item" max-width="5rem" />
                    <div class="avatar-info">
                        <span class="info_number">{{ `${item.number}번` }}</span>
                        <span class="info_name">{{ `${item.studName}번` }}</span>
                    </div>
                </div>
                <!-- !NOTE API 차트 중앙 원 안에 총 개수 값 스키마에도 없어 추가 요청중. 2024-04-24 -->
                <ChartMultipleRadialbars
                    @click="openModal({ type: 'vocaLearningStatus' })"
                    :values="[
                        [item.wrdUnknownCnt, '#B0B0B0', item.wrdUnknownCnt],
                        [item.wrdLittleknowCnt, '#FFBF00', item.wrdLittleknowCnt],
                        [item.wrdKnowCnt, '#42C5B1', item.wrdKnowCnt],
                        [item.wrdTot, '#46A7E5', item.wrdTot]
                    ]"
                    :circle-value="{
                        correctRate: item.avgAnswrRt,
                        totalCount: 36
                    }"
                />
            </v-list-item>
        </v-list>
        <!-- 
            !NOTE (임시 개발 노출용)데이터가 없는 경우 기획 노출 문구 확인 후 디자인 및 퍼블리싱 요청 필요. 
            - components/teacher/analytics/learn/TouchVoca.vue 퍼블리싱 작업안되어 있는 UI.
        -->
        <div v-else class="card_no_data">
            <i class="ico no_voca ico_size_25" />
            <p>아직 응시한 학생이 없습니다.</p>
        </div>

        <div class="chart-bar">
            <div class="use-word">
                <span class="bullet color-1"></span>
                <p>응시한 단어 수</p>
            </div>
            <div class="use-word">
                <span class="bullet color-2"></span>
                <p>알고 있는 단어 수</p>
            </div>
            <div class="use-word">
                <span class="bullet color-3"></span>
                <p>조금 알거나 모르는 단어 수</p>
            </div>
            <div class="use-word">
                <span class="bullet color-4"></span>
                <p>모르는 단어 수</p>
            </div>
        </div>
        <div class="page_buttons mgt30">
            <v-btn rounded flat class="secondary" :disabled="renderAll" @click="emit('page', currentPage + 1)">{{
                `3명 더 보기 (${currentPage + 1}/${Math.ceil(vocaState?.length / 3)})`
            }}</v-btn>
        </div>
    </v-sheet>

    <ModalVocaLearningStatus v-if="modalData.type === 'vocaLearningStatus'" />
</template>

<script setup>
import avatarSrc from '@/assets/images/temp/img_pho_st01.png';
const apiClassStore = useApiTeacherClassStore();
const { vocaState } = storeToRefs(apiClassStore);
const { modalData, openModal } = useModalStore();
const props = defineProps({
    currentPage: {
        type: Number,
        required: true
    }
});
const emit = defineEmits(['page']);
const renderAll = computed(() => props.currentPage + 1 === Math.ceil(vocaState.value?.length / 3));
</script>
