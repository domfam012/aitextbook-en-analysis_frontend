<template>
    <div class="extra">
        <p class="bullet">5점 만점 척도</p>
    </div>
    <div class="columnBar mgt15">
        <div class="chart">
            <canvas ref="chart"></canvas>
        </div>
    </div>
</template>

<script setup>
const { $Chart } = useNuxtApp();
const chart = ref('null');
const { emotionChart } = storeToRefs(useApiRecordHistoryStore());

// const chartData = ref({
//     labels: [['즐거움'], ['자부심'], ['두려움'], ['화, 절망감'], ['지루함'], ['학습환경', '불안감']],
//     datasets: [
//         {
//             data: [4.5, 4.2, 1.2, 0.9, 2.3, 1.4],
//             datalabels: {
//                 anchor: 'end',
//                 align: 'end',
//                 offset: 10,
//                 font: {
//                     weight: 500,
//                     size: 20,
//                     lineHeight: '26px',
//                     family: '"NotoSansKR", sans-serif'
//                 }
//             },
//             backgroundColor: ['#42C5B1', '#46A7E5', '#636DC4', '#FD6E7F', '#B0B0B0', '#FFBF00'],
//             stack: 'word',
//             categoryPercentage: 1,
//             barThickness: 40
//         }
//     ]
// });

const chartOptions = ref({
    chartArea: {
        backgroundColor: '#F8F8F8'
    },
    barThickness: 6, // 막대의 너비 조절
    categorySpacing: 3,
    scales: {
        x: {
            grid: {
                display: false
            },
            ticks: {
                font: {
                    weight: '500',
                    size: 20,
                    color: '#171717',
                    family: '"NotoSansKR", sans-serif',
                    lineHeight: '26px'
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
                font: {
                    weight: '500',
                    size: 16,
                    color: '#171717',
                    family: '"NotoSansKR", sans-serif',
                    lineHeight: '22px'
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
        if (chart.options.chartArea && chart.options.chartArea.backgroundColor) {
            var ctx = chart.ctx;
            var chartArea = chart.chartArea;
            var values = chart.data.datasets[0].data;
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

onMounted(() => {
    new $Chart(chart.value, {
        type: 'bar',
        data: emotionChart.value,
        options: chartOptions.value,
        plugins: [plugin]
    });
});
</script>

<!-- 완료시 삭제 -->
<style scoped>
.columnBar {
    background: #fff !important;
}
</style>
