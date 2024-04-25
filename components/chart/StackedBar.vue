<template>
    <div class="stackedColumn">
        <div class="chart" style="width: 100%">
            <canvas ref="chart" width="100%" height="49.3rem"></canvas>
            <div class="legend d-flex">
                <div class="understand">
                    <span class="bullet"></span>
                    이해
                </div>
                <div class="listen">
                    <span class="bullet"></span>
                    듣기
                </div>
                <div class="talk">
                    <span class="bullet"></span>
                    말하기
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { $Chart } = useNuxtApp();
const chart = ref(document.getElementsByTagName('canvas'));

const chartData = ref({
    labels: ['Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4', 'Lesson 5', 'Lesson 6'],
    datasets: [
        {
            type: 'bar',
            label: '이해',
            data: [3, 11, 6, 10, 10, 13],
            backgroundColor: '#46A7E5',
            stack: 'word',
            categoryPercentage: 1.0,
            barThickness: 65
        },
        {
            type: 'bar',
            label: '듣기',
            data: [3, 11, 6, 10, 10, 13],
            backgroundColor: '#FD6E7F',
            stack: 'word',
            categoryPercentage: 1.0,
            barThickness: 65
        },
        {
            type: 'bar',
            label: '말하기',
            data: [3, 11, 6, 10, 10, 13],
            backgroundColor: '#8DBB2C',
            stack: 'word',
            categoryPercentage: 1.0,
            barThickness: 65
        }
    ]
});

const chartOptions = ref({
    chartArea: {
        backgroundColor: '#F8F8F8'
    },
    barThickness: 10, // 막대의 너비 조절
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
                }
            }
        },
        y: {
            border: {
                display: false
            },

            ticks: {
                font: {
                    weight: '500',
                    size: 16,
                    color: '#171717',
                    family: '"NotoSansKR", sans-serif',
                    lineHeight: '22px'
                }
            },
            suggestedMin: 0,
            suggestedMax: 60 //max 게이지
        }
    },
    plugins: {
        datalabels: {
            display: false
        },
        chartArea: {
            backgroundColor: 'rgba(251, 85, 85, 0.4)'
        },
        // 위치 고정으로 인한 별도 작업
        legend: {
            display: false,
            labels: {
                font: {
                    weight: '500'
                }
            },
            onClick: null,
            position: 'bottom'
        }
    }
});

const plugin = {
    id: 'custom_canvas_background_color',
    beforeDraw: (chart, args, options) => {
        if (chart.options.chartArea && chart.options.chartArea.backgroundColor) {
            var ctx = chart.ctx;
            var chartArea = chart.chartArea;
            var values = chart.data.datasets[0].data;
            var rowCount = Math.ceil(Math.max.apply(null, values) / 2.2);
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
        data: chartData.value,
        options: chartOptions.value,
        plugins: [plugin]
    });
});
</script>
