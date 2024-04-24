<template>
    <v-sheet class="px30 py30 colorLessonInfo">
        <div></div>
        <!-- 데이터 있을 때 -->
        <v-list v-if="chartData1" class="chart_wrap chart_donut">
            <v-list-item class="chart">
                <div class="donut">
                    <ChartDoughnut :type="'often'" :chartData="chartData1" />
                </div>
            </v-list-item>
            <v-list-item class="chart">
                <div class="donut">
                    <ChartDoughnut :type="'much'" :chartData="chartData2" />
                </div>
            </v-list-item>
            <v-list-item class="chart">
                <div class="donut">
                    <ChartDoughnut :type="'long'" :chartData="chartData3" />
                </div>
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
