<template>
    <v-sheet class="inner_contents">
        <!-- 데이터 있을 때 -->
        <v-list class="chart_wrap donut_wrap">
            <v-list-item v-if="cumulativeRecordHowOftenState?.areaPercentArr" class="chart">
                <ChartDoughnut :type="'often'" :chartData="cumulativeRecordHowOftenState?.areaPercentArr" :legend="oftenLegends" />
            </v-list-item>
            <v-list-item v-if="cumulativeRecordHowMuchState?.areaPercentArr" class="chart">
                <ChartDoughnut :type="'much'" :chartData="cumulativeRecordHowMuchState?.areaPercentArr" :legend="muchLegendData" />
            </v-list-item>
            <v-list-item v-if="cumulativeRecordHowLongState?.areaPercentArr" class="chart">
                <ChartDoughnut :type="'long'" :chartData="cumulativeRecordHowLongState?.areaPercentArr" :legend="longLegendData" />
            </v-list-item>
        </v-list>
        <div v-if="isNoData" class="card_no_data">
            <i class="ico no_record ico_size_25" />
            <p>{{ t('analytics.learn.record.text') }}</p>
        </div>
    </v-sheet>
</template>
<script setup>
const { t } = useI18n();
// store
const apiClassStore = useApiTeacherClassStore();
const { cumulativeRecordHowLongState, cumulativeRecordHowOftenState, cumulativeRecordHowMuchState } = storeToRefs(apiClassStore);

// 얼마나 자주 범례
const oftenLegends = [
    { text: t('analytics.learn.record.subText1') },
    { text: t('analytics.learn.record.subText2') },
    { text: t('analytics.learn.record.subText3') },
    { text: t('analytics.learn.record.subText4') },
    { text: t('analytics.learn.record.subText5') }
];

// 얼마나 많이 범례
const muchLegendData = [45, 34, 21, 10];

// 얼마나 오래 범례
const longLegendData = [87, 60, 33, 6, 5];

// 누적 학습 기록 없을 경우
const isNoData = computed(() => {
    return (
        !cumulativeRecordHowLongState.value?.areaPercentArr &&
        !cumulativeRecordHowOftenState.value?.areaPercentArr &&
        !cumulativeRecordHowMuchState.value?.areaPercentArr
    );
});
</script>
