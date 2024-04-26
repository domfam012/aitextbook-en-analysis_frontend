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
    scales: {
        r: {
            grid: {
                circular: true,
                color: '#B0B0B0'
            },
            beginAtZero: true,
            pointLabels: {
                color: '#171717',
                font: {
                    family: 'NotoSansKR',
                    size: '16',
                    weight: '500'
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
            labels: {
                filter: function (item, chart) {
                    return chart.datasets[item.datasetIndex].type !== 'radar';
                },
                color: '#171717',
                font: {
                    family: 'NotoSansKR',
                    size: '16',
                    weight: '500'
                },
                boxWidth: 16,
                boxHeight: 16,
                padding: 20
            },
            onClick: null,
            position: 'bottom'
        }
    }
});
</script>
