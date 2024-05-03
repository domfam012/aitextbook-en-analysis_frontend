<template>
    <v-card elevation="0" class="v-card-lightblue">
        <v-card-item>
            <v-card-title class="d-flex align-center">
                <span class="mr-5"> 나의 학습 분석</span>
                <div class="d-flex">
                    <div class="select_box_wrap mgr10">
                        <v-select
                            v-model="select"
                            :items="items"
                            class="type_primary_fill"
                            :menu-props="{ contentClass: 'primary_fill_item' }"
                            item-title="state"
                            item-value="abbr"
                            label="Select"
                            variant="outlined"
                            persistent-hint
                            rounded
                            return-object
                            single-line
                            hide-details
                            @update:model-value="handleGetData"
                        ></v-select>
                    </div>
                    <range-date-picker @updateRange="range => handleGetRangeData(range)" />
                </div>
            </v-card-title>
        </v-card-item>
        <v-card-text class="py20 px40">
            <v-row no-gutters class="gap6">
                <v-col>
                    <div class="learningDiagnostics">
                        <h3 class="learn-title bullet-bot">단어 학습 진단</h3>
                        <ChartBasicBar
                            suffix="개"
                            :item="[
                                {
                                    value: wordDiagnosisState?.exprsPrfctUndrsUseCnt,
                                    color: 'color-1',
                                    label: '잘이해하고 활용한 단어'
                                },
                                {
                                    value: wordDiagnosisState?.exprsExprsUndrsUnsdCnt,
                                    color: 'color-2',
                                    label: '이해했으나 활용하지 못한 단어'
                                },
                                {
                                    value: wordDiagnosisState?.exprsWrongExprsUndrsCnt,
                                    color: 'color-3',
                                    label: '조금만 더학습하면 좋을 단어'
                                },
                                {
                                    value: wordDiagnosisState?.exprsSplngWrongKnowCnt,
                                    color: 'color-4',
                                    label: '더열심히 학습해야 할 단어'
                                },
                                { value: wordDiagnosisState?.exprsLrnTotCnt, color: 'color-5', label: '학습한 누적 단어 개수' }
                            ]"
                        />
                    </div>
                </v-col>
                <v-col>
                    <div class="learningDiagnostics">
                        <h3 class="learn-title bullet-bot">요일별 누적 학습 시간</h3>
                        <ChartBasicBar
                            :solidColor="true"
                            suffix="분"
                            :item="[
                                {
                                    value: cumulativeTimeState?.mondayLearnTime,
                                    color: 'color-1',
                                    label: '월요일'
                                },
                                {
                                    value: cumulativeTimeState?.tuesdayLearnTime,
                                    color: 'color-2',
                                    label: '화요일'
                                },
                                {
                                    value: cumulativeTimeState?.wednesdayLearnTime,
                                    color: 'color-3',
                                    label: '수요일'
                                },
                                {
                                    value: cumulativeTimeState?.thursdayLearnTime,
                                    color: 'color-4',
                                    label: '목요일'
                                },
                                { value: cumulativeTimeState?.fridayLearnTime, color: 'color-5', label: '금요일' },
                                { value: cumulativeTimeState?.saturdaySundayLearnTime, color: 'color-6', label: '토요일, 일요일' }
                            ]"
                        />
                    </div>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>
<script setup>
const select = ref({ state: '최근 7일', value: 7 });
const items = ref([
    { state: '최근 7일', value: 7 },
    { state: '최근 30일', value: 30 }
]);
const apiMyLessonStore = useApiMyLessonStore();
const { wordDiagnosisState, cumulativeTimeState } = storeToRefs(apiMyLessonStore);

const handleGetData = () => {
    apiMyLessonStore.getMyLessonCumulativeLearningTime({ recent: select.value.value });
    apiMyLessonStore.getMyLessonWordDiagnostics({ recent: select.value.value });
};
const handleGetRangeData = range => {
    apiMyLessonStore.getMyLessonCumulativeLearningTime({ startDt: range.startDt, endDt: range.endDt });
    apiMyLessonStore.getMyLessonWordDiagnostics({ startDt: range.startDt, endDt: range.endDt });
};

onMounted(async => {
    handleGetData();
});
</script>
