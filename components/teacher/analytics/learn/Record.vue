<template>
    <v-sheet class="inner_contents">
        <!-- 데이터 있을 때 -->
        <v-list v-if="chartData1" class="chart_wrap donut_wrap">
            <v-list-item class="chart">
                <ChartDoughnut :type="'often'" :chartData="chartData1" />
            </v-list-item>
            <v-list-item class="chart">
                <ChartDoughnut :type="'much'" :chartData="chartData2" :legend="muchLegendData" />
            </v-list-item>
            <v-list-item class="chart">
                <ChartDoughnut :type="'long'" :chartData="chartData3" :legend="longLegendData" />
            </v-list-item>
        </v-list>
        <div v-if="!chartData1" class="card_no_data">
            <i class="ico no_record ico_size_25" />
            <p>학습 이력이 없습니다.</p>
        </div>
    </v-sheet>
</template>
<script setup>
const apiClassStore = useApiTeacherClassStore();
const { cumulativeRecordHowLongState, cumulativeRecordHowOftenState, cumulativeRecordHowMuchState } = apiClassStore;

// 얼마나 많이 범례
const muchLegendData = [45, 34, 21, 10];

// 얼마나 오래 범례
const longLegendData = [87, 60, 33, 6, 5];

const chartData1 = ref({
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
        {
            type: 'doughnut',
            label: 'My First Dataset',
            data: [22, 15, 47, 5, 11],
            backgroundColor: ['#42C5B1', '#FFBF00', '#FF8D00', '#FD6E7F', '#B0B0B0'],
            borderColor: ['#42C5B1', '#FFBF00', '#FF8D00', '#FD6E7F', '#B0B0B0'],
            hoverOffset: 4,
            cutout: '55%'
        }
    ]
});

const chartData2 = ref({
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
        {
            type: 'doughnut',
            label: 'My First Dataset',
            data: [50, 25, 15, 7, 11],
            backgroundColor: ['#42C5B1', '#FFBF00', '#FF8D00', '#FD6E7F', '#B0B0B0'],
            borderColor: ['#42C5B1', '#FFBF00', '#FF8D00', '#FD6E7F', '#B0B0B0'],
            hoverOffset: 4,
            cutout: '55%'
        }
    ]
});

const chartData3 = ref({
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
        {
            type: 'doughnut',
            label: 'My First Dataset',
            data: [43, 15, 25, 14, 5],
            backgroundColor: ['#42C5B1', '#FFBF00', '#FF8D00', '#FD6E7F', '#B0B0B0'],
            borderColor: ['#42C5B1', '#FFBF00', '#FF8D00', '#FD6E7F', '#B0B0B0'],
            hoverOffset: 4,
            cutout: '55%'
        }
    ]
});
</script>
