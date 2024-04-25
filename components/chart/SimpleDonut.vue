<template>
    <div class="chart_contents type_simple_donut">
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
        plugins: {
            datalabels: {
                display: false
            },

            legend: {
                labels: {
                    // filter: function (item, chart) {
                    //     return chart.datasets[item.datasetIndex].type !== 'line';
                    // },
                    color: '#171717',
                    font: {
                        family: 'NotoSansKR',
                        size: '16',
                        weight: '500'
                    },
                    boxWidth: 16,
                    boxHeight: 16,
                    padding: 20,
                },
                onClick: null,
                position: 'right',
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