<template>
    <div class="chart_contents type_multiple_radial">
        <canvas ref="canvas" width="330" height="330"></canvas>
    </div>
</template>
<script setup>
const props = defineProps({
    values: Array, // values는 배열 형태의 Props
    circleValue: Object // circleValue는 객체 형태의 Props
});

// datasets 예시 [[값, 색상, 마커 값], [...]]
// const values = [
//     [20, 'gray', 2],
//     [40, 'orange', 3],
//     [50, 'lightgreen', 4],
//     [60, 'skyblue', 5]
// ];

const canvas = ref(null);
const animationSpeed = 0.02; // 게이지 차는 애니메이션 속도
const gaugeRadius = 50; // 전체 원 반지름
const markerRadius = 10; // 마커 값 반지름
const trackWidth = 15; // 각 트랙의 너비
const trackSpacing = 10; // 각 트랙 사이 간격
const minValue = 0; // 최소 0 고정
const maxValue = 100; // 최대 0 고정
let animationProgress = 0; // 애니메이션 진행 상태

onMounted(() => {
    const ctx = canvas.value.getContext('2d');
    const centerX = canvas.value.width / 2;
    const centerY = canvas.value.height / 2;

    // 각 게이지 그리기
    const drawGauge = (value, color, trackIndex, totalTracks) => {
        let anglePerValue = (Math.PI * 2) / (maxValue - minValue);
        let startAngle = -Math.PI / 2;
        let endAngle = 360;

        // 회색 바탕 게이지 그리기
        ctx.beginPath();
        ctx.arc(centerX, centerY, gaugeRadius + (trackWidth + trackSpacing) * trackIndex, endAngle, startAngle, true);
        ctx.strokeStyle = '#dddddd';
        ctx.lineWidth = trackWidth;
        ctx.stroke();
        ctx.closePath();

        // 색상 게이지 그리기
        startAngle = -Math.PI / 2;
        endAngle = startAngle + value * anglePerValue * animationProgress;
        ctx.beginPath();
        ctx.arc(centerX, centerY, gaugeRadius + (trackWidth + trackSpacing) * trackIndex, startAngle, endAngle);
        ctx.strokeStyle = color;
        ctx.lineWidth = trackWidth;
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.closePath();

        // 마커 그리기
        const markerX = centerX + (gaugeRadius + (trackWidth + trackSpacing) * trackIndex) * Math.cos(endAngle);
        const markerY = centerY + (gaugeRadius + (trackWidth + trackSpacing) * trackIndex) * Math.sin(endAngle);
        ctx.beginPath();
        ctx.arc(markerX, markerY, markerRadius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();

        // 마커 안에 값 넣기
        ctx.fillStyle = 'white';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(props.values[trackIndex][2], markerX, markerY);
    };
    // 모든 게이지 그리기(반복문)
    const drawGaugeTracks = () => {
        props.values.forEach(([value, color], index) => {
            drawGauge(value, color, index, props.values.length);
        });
    };
    // 중앙 원 그리기
    const drawCircleInCenter = () => {
        // 중앙에 원 그리기
        ctx.beginPath();
        ctx.arc(centerX, centerY, 30, 0, 2 * Math.PI);
        ctx.fillStyle = '#dddddd';
        ctx.fill();
        ctx.closePath();

        // 중앙에 원 값 넣기
        ctx.fillStyle = 'black'; //
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(props.circleValue.correctRate, centerX - 8, centerY - 8);
        ctx.font = 'bold 12px Arial';
        ctx.fillText('%', centerX + 16, centerY - 6);
        ctx.font = 'bold 12px Arial';
        ctx.fillText(props.circleValue.totalCount + '개', centerX, centerY + 15);
    };
    // 애니메이션 함수
    const animate = () => {
        if (animationProgress < 1) {
            animationProgress += animationSpeed;

            ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
            drawCircleInCenter();
            drawGaugeTracks();
            requestAnimationFrame(animate);
        }
    };

    animate();
});
</script>
