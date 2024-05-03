<template>
    <div class="chart_stacked_column">
        <div class="chart_contents type_stacked_column">
            <canvas ref="chart"></canvas>
        </div>
        <div class="chart-bar">
            <div class="use-word">
                <span class="bullet color-1"></span>
                <p>이해</p>
            </div>
            <div class="use-word">
                <span class="bullet color-2"></span>
                <p>듣기</p>
            </div>
            <div class="use-word">
                <span class="bullet color-3"></span>
                <p>말하기</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const { $Chart } = useNuxtApp();
const chart = ref(null);

const chartData = ref({
    labels: ['Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4', 'Lesson 5', 'Lesson 6'],
    datasets: [
        {
            type: 'bar',
            label: '이해',
            data: [3, 11, 6, 10, 10, 13],
            backgroundColor: '#46A7E5',
            stack: 'word',
            categoryPercentage: 1.0
        },
        {
            type: 'bar',
            label: '듣기',
            data: [3, 11, 6, 10, 10, 13],
            backgroundColor: '#FD6E7F',
            stack: 'word',
            categoryPercentage: 1.0
        },
        {
            type: 'bar',
            label: '말하기',
            data: [3, 11, 6, 10, 10, 13],
            backgroundColor: '#8DBB2C',
            stack: 'word',
            categoryPercentage: 1.0
        }
    ]
});

const chartOptions = ref({
    chartArea: {
        backgroundColor: '#F8F8F8'
    },
    maintainAspectRatio: false,
    categorySpacing: 3,
    barPercentage: 0.5,
    scales: {
        x: {
            grid: {
                display: false
            },
            ticks: {
                color: '#171717',
                font: function (context) {
                    var height = context.chart.height;
                    // var size의 값이 최소 사이즈시 12가 되도록 잡아 주세요.
                    var size = Math.round(height / 25);
                    return {
                        family: 'NotoSansKR',
                        size: size * 1.25, //20
                        weight: 500
                    };
                }
            }
        },
        y: {
            border: {
                display: false
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
