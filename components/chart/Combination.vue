<template>
    <div class="chart_contents type_combination">
        <canvas ref="chart"></canvas>
    </div>
</template>

<script setup>
const props = defineProps({
    chartData: Object
});
const { $Chart } = useNuxtApp();
const chart = ref(null);
const chartOptions = ref({
    scales: {
        x: {
            grid: {
                display: false,
                color: '#373737'
            },
            ticks: {
                color: '#171717',
                font: {
                    family: 'NotoSansKR',
                    size: '16',
                    weight: '500'
                }
            }
        },
        y: {
            grid: {
                color: [
                    '#373737',
                    '#B0B0B0',
                    '#B0B0B0',
                    '#B0B0B0',
                    '#B0B0B0',
                    '#B0B0B0',
                    '#B0B0B0',
                    '#B0B0B0',
                    '#B0B0B0',
                    '#B0B0B0',
                    '#B0B0B0'
                ]
            },
            ticks: {
                color: '#171717',
                font: {
                    family: 'NotoSansKR',
                    size: '16',
                    weight: '500'
                },
                padding: 20,
                callback: value => {
                    return value + '%';
                }
            },
            suggestedMin: 0,
            suggestedMax: 100
        }
    },
    plugins: {
        datalabels: {
            display: false
        },

        legend: {
            labels: {
                filter: function (item, chart) {
                    return chart.datasets[item.datasetIndex].type !== 'line';
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

onMounted(() => {
    new $Chart(chart.value, {
        data: props.chartData,
        options: chartOptions.value
    });
});
</script>
