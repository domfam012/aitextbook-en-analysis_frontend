<template>
    <div style="height: 600px; width: 100%">
        <canvas ref="chart" width="100%" height="100%"></canvas>
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
                display: false
            },
            ticks: {
                font: {
                    weight: '600'
                }
            }
        },
        y: {
            ticks: {
                font: {
                    weight: '500'
                },
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
                font: {
                    weight: '500'
                }
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
