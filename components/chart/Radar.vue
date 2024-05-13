<template>
    <div class="chart_contents type_radar">
        <Radar :data="radarChart" :options="chartOptions"></Radar>
    </div>
</template>

<script setup>
import { Radar } from 'vue-chartjs';
const props = defineProps({
    radarChart: Object
});

const chart = ref(null);
const chartOptions = ref({
    onResize: () => {
        if (chart.value !== null) {
            chart.value.style.width = '100%';
            chart.value.style.height = '100%';
        }
    },
    maintainAspectRatio: false,
    scales: {
        r: {
            grid: {
                circular: true,
                color: '#909090'
            },
            beginAtZero: true,
            pointLabels: {
                color: '#171717',
                font: function (context) {
                    var height = context.chart.height;
                    // var size의 값이 최소 사이즈시 12가 되도록 잡아 주세요.
                    var size = Math.round(height / 25);
                    return {
                        family: 'NotoSansKR',
                        size: size * 1.1,
                        weight: 500
                    };
                }
            },
            ticks: {
                display: false
            },
            suggestedMax: 5
        }
    },
    plugins: {
        datalabels: {
            display: false
        },

        legend: {
            labels: function (context) {
                var height = context.chart.height;
                // var size의 값이 최소 사이즈시 12가 되도록 잡아 주세요.
                var size = Math.round(height / 25);

                return {
                    filter: function (item, chart) {
                        return chart.datasets[item.datasetIndex].type !== 'radar';
                    },
                    color: '#171717',
                    font: {
                        family: 'NotoSansKR',
                        size: size * 1.125, // 1920에 18
                        weight: 500
                    },
                    boxWidth: size,
                    boxHeight: size,
                    padding: size * 1.25 // 1920에 20
                };
            },
            onClick: null
        }
    }
});
</script>
