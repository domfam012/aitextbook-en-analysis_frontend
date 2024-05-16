<template>
    <v-card elevation="0" class="v-card-lightblue">
        <v-card-item>
            <v-card-title class="d-flex align-center">
                <span class="mr-5"> {{ t('analytics.diagnosis.title') }}</span>
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
                        <h3 class="learn-title bullet-bot">{{ t('analytics.diagnosis.wordLearning') }}</h3>
                        <ChartBasicBar
                            :suffix="t('common.unit.num')"
                            :item="[
                                {
                                    value: wordDiagnosisState?.wrdPrfctUndrsUseCnt,
                                    color: 'color-1',
                                    label: t('analytics.diagnosis.text1')
                                },
                                {
                                    value: wordDiagnosisState?.wrdExprsUndrsUnsdCnt,
                                    color: 'color-2',
                                    label: t('analytics.diagnosis.text2')
                                },
                                {
                                    value: wordDiagnosisState?.wrdWrongExprsUndrsCnt,
                                    color: 'color-3',
                                    label: t('analytics.diagnosis.text3')
                                },
                                {
                                    value: wordDiagnosisState?.wrdSplngWrongKnowCnt,
                                    color: 'color-4',
                                    label: t('analytics.diagnosis.text4')
                                },
                                { value: wordDiagnosisState?.wrdLrnTotCnt, color: 'color-5', label: t('analytics.diagnosis.text5') }
                            ]"
                        />
                    </div>
                </v-col>
                <v-col>
                    <div class="learningDiagnostics">
                        <h3 class="learn-title bullet-bot">{{ t('analytics.diagnosis.dayAccumulate') }}</h3>
                        <ChartBasicBar
                            :solidColor="true"
                            :suffix="t('common.unit.min')"
                            :item="[
                                {
                                    value: cumulativeTimeState?.mondayLearnTime,
                                    color: 'color-1',
                                    label: t('analytics.diagnosis.monday')
                                },
                                {
                                    value: cumulativeTimeState?.tuesdayLearnTime,
                                    color: 'color-2',
                                    label: t('analytics.diagnosis.tuesday')
                                },
                                {
                                    value: cumulativeTimeState?.wednesdayLearnTime,
                                    color: 'color-3',
                                    label: t('analytics.diagnosis.wednesday')
                                },
                                {
                                    value: cumulativeTimeState?.thursdayLearnTime,
                                    color: 'color-4',
                                    label: t('analytics.diagnosis.thursday')
                                },
                                {
                                    value: cumulativeTimeState?.fridayLearnTime,
                                    color: 'color-5',
                                    label: t('analytics.diagnosis.friday')
                                },
                                {
                                    value: cumulativeTimeState?.saturdaySundayLearnTime,
                                    color: 'color-6',
                                    label: t('analytics.diagnosis.weekend')
                                }
                            ]"
                        />
                    </div>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>
<script setup>
const { t } = useI18n();
const select = ref({ state: t('analytics.diagnosis.last7day'), value: 7 });
const items = ref([
    { state: t('analytics.diagnosis.last7day'), value: 7 },
    { state: t('analytics.diagnosis.last30day'), value: 30 }
]);
const apiMyLessonStore = useApiMyLessonStore();
const { wordDiagnosisState, cumulativeTimeState, selectedDateState } = storeToRefs(apiMyLessonStore);

const dayjs = useDayjs();

const handleGetData = () => {
    selectedDateState.value = {
        start: dayjs(new Date(new Date().setDate(new Date().getDate() - select.value.value))).format('YYYY-MM-DD'),
        end: dayjs(new Date()).format('YYYY-MM-DD')
    };
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
