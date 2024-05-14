<template>
    <div class="chart_donut">
        <div class="chart_contents type_donut">
            <canvas ref="chart" width="348" height="348"></canvas>
            <div class="text_wrap">
                <span>{{ t('chart.doughnut.how') }}</span>
                <strong>{{ getTypeText }}</strong>
            </div>
        </div>
        <div class="chart-bar">
            <div v-if="props.type === 'often'" v-for="(item, index) in props.legend" :key="index" class="use-word">
                <span class="bullet" :class="`color-${index + 1}`"></span>
                <p>{{ item.text }}</p>
            </div>
            <div v-if="props.type === 'much'" v-for="(count, index) in props.legend" :key="index" class="use-word">
                <span class="bullet" :class="`color-${index + 1}`"></span>
                <p v-if="count === Number.MAX_SAFE_INTEGER" class="legend-text">
                    {{ t('chart.doughnut.colorPiece') }} {{ props.legend.length }}{{ t('chart.doughnut.numOrMore') }}
                </p>
                <p v-else-if="index === props.legend.length - 1" class="legend-text">
                    {{ t('chart.doughnut.colorPiece') }} {{ count }}{{ t('chart.doughnut.lessThanNum') }}
                </p>
                <p v-else class="legend-text">{{ t('chart.doughnut.colorPiece') }} {{ count }}~{{ props.legend[index + 1] - 1 }}개</p>
            </div>
            <div v-if="props.type === 'long'" v-for="(time, idx) in props.legend" :key="idx" class="use-word">
                <span class="bullet" :class="`color-${idx + 1}`"></span>
                <p v-if="idx === 0" class="legend-text">
                    {{ t('chart.doughnut.cumulativeLearningTime') }} {{ time }}{{ t('chart.doughnut.minutesOrMore') }}
                </p>
                <p v-else-if="idx === props.legend.length - 1" class="legend-text">
                    {{ t('chart.doughnut.cumulativeLearningTime') }} {{ props.legend[props.legend.length - 1]
                    }}{{ t('chart.doughnut.minutesOrLess') }}
                </p>
                <p v-else class="legend-text">
                    {{ t('chart.doughnut.cumulativeLearningTime') }} {{ time }}~{{ props.legend[idx - 1] - 1 }}{{ t('common.unit.min') }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const { t } = useI18n();
const { $Chart } = useNuxtApp();
const props = defineProps({
    type: String,
    chartData: Array,
    legend: Array
});
const chart = ref(null);

const getTypeText = computed(() => {
    if (props.type === 'often') {
        return t('chart.doughnut.often');
    }
    if (props.type === 'much') {
        return t('chart.doughnut.much');
    }
    if (props.type === 'long') {
        return t('chart.doughnut.long');
    }
});

const chartOptions = ref({
    hover: {
        mode: null
    },
    layout: {
        padding: 50
    },
    maintainAspectRatio: false,
    plugins: {
        tooltip: {
            enabled: false
        },
        legend: {
            display: false
        },
        datalabels: {
            display: false
        }
    },
    animation: {
        onComplete: function (animation) {
            // 애니메이션이 완료되면 각 영역 위에 데이터 라벨 그리기
            const chart = animation.chart;

            chart.data.labels.forEach((label, index) => {
                const piece = chart.getDatasetMeta(0).data[index];
                drawLabel(chart, piece, index);
            });
        }
    }
});

const chartData = ref({
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
        {
            type: 'doughnut',
            label: 'My First Dataset',
            data: null,
            backgroundColor: ['#42C5B1', '#FFBF00', '#FF8D00', '#FD6E7F', '#909090'],
            borderColor: ['#42C5B1', '#FFBF00', '#FF8D00', '#FD6E7F', '#909090'],
            hoverOffset: 4,
            cutout: '55%'
        }
    ]
});

function drawLabel(chart, piece, index) {
    const ctx = chart.ctx;
    const { x, y, startAngle, endAngle, innerRadius, outerRadius } = piece;
    const radius = (innerRadius + outerRadius) / 2;
    const midAngle = (startAngle + endAngle) / 2;
    const labelRadius = radius * 1.25; // 테두리로부터 라벨까지의 거리

    // 데이터 라벨의 위치 계산
    const posX = x + labelRadius * Math.cos(midAngle);
    const posY = y + labelRadius * Math.sin(midAngle);

    ctx.save();
    const dataValue = chart.data.datasets[0].data[index];

    // 텍스트 스타일 설정
    ctx.fillStyle = '#171717'; // 텍스트 색상
    ctx.font = '700 1.6rem NotoSansKR';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';

    // 데이터 값 가져오기
    const value = dataValue + '%';

    // 배경 그리기
    ctx.fillStyle = '#fff'; // 배경색 설정

    ctx.beginPath();
    let dataRadius = dataValue / 2;

    ctx.arc(posX, posY, dataRadius + 12, 0, 2 * Math.PI);
    ctx.fill();

    // 텍스트 그리기
    ctx.fillStyle = '#171717'; // 텍스트 색상
    ctx.fillText(value, posX, posY);

    const dataset = chart.data.datasets[0];
    ctx.strokeStyle = dataset.borderColor[index]; // 테두리 색상

    ctx.lineWidth = 3; // 테두리 두께
    ctx.beginPath();
    ctx.arc(posX, posY, dataRadius + 12, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.restore();
}

onMounted(() => {
    chartData.value.datasets[0].data = props.chartData;
    new $Chart(chart.value, {
        data: chartData.value,
        options: chartOptions.value
    });
});
</script>
