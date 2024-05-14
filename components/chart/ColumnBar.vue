<template>
    <div class="extra">
        <p class="bullet">{{ t('chart.columnBar.scale') }}</p>
    </div>
    <div class="chart_contents type_column_bar">
        <Bar :data="emotionChart" :options="chartOptions" :plugins="[plugin]"></Bar>
    </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs';
const { t } = useI18n();
const { emotionChart } = storeToRefs(useApiRecordHistoryStore());
const chartOptions = ref({
    maintainAspectRatio: false,
    chartArea: {
        backgroundColor: '#F8F8F8'
    },
    // barThickness: 6, // 막대의 너비 조절
    categorySpacing: 3,
    barPercentage: 0.4,
    scales: {
        x: {
            grid: {
                display: false
            },
            ticks: {
                color: '#171717',
                font: function (context) {
                    var height = context.chart.height;
                    var size = Math.round(height / 25); // 1920에 16
                    return {
                        family: 'NotoSansKR',
                        size: size * 1.25,
                        weight: 500
                    };
                },
                autoSkip: false
            }
        },
        y: {
            border: {
                display: false
            },

            grid: {
                display: true,
                drawBorder: false,
                color: function (context) {
                    return context.index % 2 === 0 ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0)'; // 짝수: 그리드 색상 / 홀수: 투명
                },
                lineWidth: 1
            },
            ticks: {
                padding: 10,
                color: '#171717',
                font: function (context) {
                    var height = context.chart.height;
                    // var size의 값이 최소 사이즈시 12가 되도록 잡아 주세요.
                    var size = Math.round(height / 25);
                    return {
                        family: 'NotoSansKR',
                        size: size,
                        weight: 500
                    };
                },
                callback: function (value, index, values) {
                    // 레이블에 소수점 이하 값이 있는 경우에만 소수점을 표시합니다.
                    return Number.isInteger(value) ? value : value.toFixed(1);
                }
            },
            suggestedMin: 0,
            suggestedMax: 5 //max 게이지
        }
    },
    plugins: {
        datalabels: {
            display: true,
            borderColor: '#373737',
            borderRadius: 6,
            borderWidth: 1,
            color: '#171717',
            backgroundColor: '#fff',
            padding: {
                top: 2,
                right: 10,
                bottom: 2,
                left: 10
            },
            formatter: function (value, context) {
                return context.chart.data[value];
            }
        },
        chartArea: {
            backgroundColor: 'rgba(251, 85, 85, 0.4)'
        },

        legend: {
            display: false
        }
    }
});

// odd 배경색 넣기
const plugin = {
    id: 'custom_canvas_background_color',
    beforeDraw: (chart, args, options) => {
        if (chart.data.datasets[0]?.data && chart.options.chartArea && chart.options.chartArea.backgroundColor) {
            var ctx = chart.ctx;
            var chartArea = chart.chartArea;
            var values = chart.data.datasets[0]?.data;
            var rowCount = Math.ceil(Math.max.apply(null, values) / 0.9);
            var width = chartArea.right - chartArea.left;
            var height = chartArea.bottom - chartArea.top;
            var rowHeight = height / rowCount;
            ctx.save();
            ctx.fillStyle = chart.options.chartArea.backgroundColor;
            var startPoint = chartArea.top + rowHeight;
            while (startPoint < chartArea.bottom) {
                ctx.fillRect(chartArea.left, startPoint, width, rowHeight);
                startPoint += rowHeight * 2;
            }
            ctx.restore();
        }
    }
};
</script>
