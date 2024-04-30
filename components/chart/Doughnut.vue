<template>
    <div class="chart_donut">
        <div class="chart_contents type_donut">
            <canvas ref="chart" width="348" height="348"></canvas>
            <div class="text_wrap">
                <span>얼마나</span>
                <strong>{{ getTypeText }}</strong>
            </div>
        </div>
        <div class="chart-bar">
            <div v-if="props.type === 'often'" v-for="(item, index) in oftenLegends" :key="index" class="use-word">
                <span class="bullet" :class="`color-${index + 1}`"></span>
                <p>{{ item.text }}</p>
            </div>
            <div v-if="props.type === 'much' && props.legend" v-for="(count, index) in props.legend" :key="index" class="use-word">
                <span class="bullet" :class="`color-${index + 1}`"></span>
                <p v-if="count === Number.MAX_SAFE_INTEGER" class="legend-text">색깔 조각 {{ props.legend.length }}개 이상</p>
                <p v-else-if="index === props.legend.length - 1" class="legend-text">색깔 조각 {{ count }}개 미만</p>
                <p v-else class="legend-text">색깔 조각 {{ count }}~{{ props.legend[index + 1] - 1 }}개</p>
            </div>
            <div v-if="props.type === 'long' && props.legend" v-for="(time, idx) in props.legend" :key="idx" class="use-word">
                <span class="bullet" :class="`color-${idx + 1}`"></span>
                <p v-if="idx === 0" class="legend-text">누적 학습 시간 {{ time }}분 이상</p>
                <p v-else-if="idx === props.legend.length - 1" class="legend-text">
                    누적 학습 시간 {{ props.legend[props.legend.length - 1] }}분 이하
                </p>
                <p v-else class="legend-text">누적 학습 시간 {{ time }}~{{ props.legend[idx - 1] - 1 }}분</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const { $Chart } = useNuxtApp();
const props = defineProps({ type: String, chartData: Object, legend: Array });
const chart = ref(null);

// 얼마나 자주 범례
const oftenLegends = [
    { text: '10회 이상 방문' },
    { text: '6~9회 방문' },
    { text: '3~5회 방문' },
    { text: '1~2회 방문' },
    { text: '방문 기록 없음' }
];

const getTypeText = computed(() => {
    if (props.type === 'often') {
        return '자주';
    }
    if (props.type === 'much') {
        return '많이';
    }
    if (props.type === 'long') {
        return '오래';
    }
});

const chartOptions = ref({
    layout: {
        padding: 50
    },
    plugins: {
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
    ctx.fillStyle = '#000'; // 텍스트 색상
    ctx.font = `bold 12px Arial`;
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
    ctx.fillStyle = '#000'; // 텍스트 색상
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
    new $Chart(chart.value, {
        data: props.chartData,
        options: chartOptions.value
    });
});
</script>
