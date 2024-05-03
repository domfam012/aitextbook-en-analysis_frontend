<template>
    <div class="chart_contents type_simple_donut">
        <Doughnut :data="weatherChart" :options="chartOptions"></Doughnut>
    </div>
</template>

<script setup>
import { Doughnut } from 'vue-chartjs';
const props = defineProps({
    weatherChart: Object
});
const chart = ref(null);
const chartOptions = ref({
    maintainAspectRatio: false,
    plugins: {
        datalabels: {
            display: 'true',
            color: '#171717',
            align: 'middle',
            formatter: function (value, context) {
                return value;
            },
            textAlign: 'center',
            font: function (context) {
                var height = context.chart.height;
                // var size의 값이 최소 사이즈시 12가 되도록 잡아 주세요.
                var size = Math.round(height / 20);
                return {
                    family: 'NotoSansKR',
                    size: size * 1.25, // 1920에 20
                    weight: 700
                };
            }
        },

        legend: {
            labels: function (context) {
                var height = context.chart.height;
                // var size의 값이 최소 사이즈시 12가 되도록 잡아 주세요.
                var size = Math.round(height / 20);

                return {
                    color: '#171717',
                    font: {
                        family: 'NotoSansKR',
                        size: size,
                        weight: 500
                    },
                    boxWidth: size,
                    boxHeight: size,
                    padding: size * 0.625 //10
                };
            },
            position: 'right'
        }
    }
});
</script>
