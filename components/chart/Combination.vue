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
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: false,
                color: '#373737'
            },
            ticks: {
                color: '#171717',
                font: function(context){
                    var height = context.chart.height;
                    // var size의 값이 최소 사이즈시 12가 되도록 잡아 주세요.
                    var size = Math.round(height / 40);
                    return {
                        family: 'NotoSansKR',
                        size: size,
                        weight: 500,
                    }
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
                font: function(context){
                    var height = context.chart.height;
                    // var size의 값이 최소 사이즈시 12가 되도록 잡아 주세요.
                    var size = Math.round(height / 40);
                    return {
                        family: 'NotoSansKR',
                        size: size,
                        weight: 500,
                    }
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
            labels: function(context){
                var height = context.chart.height;
                // var size의 값이 최소 사이즈시 12가 되도록 잡아 주세요.
                var size = Math.round(height / 40);

                return {
                    filter: function (item, chart) {
                        return chart.datasets[item.datasetIndex].type !== 'line';
                    },
                    color: '#171717',
                    font: {
                        family: 'NotoSansKR',
                        size: size,
                        weight: 500
                    },
                    boxWidth: size,
                    boxHeight: size,
                    padding: size * 1.25,
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
