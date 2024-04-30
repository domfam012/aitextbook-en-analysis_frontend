<template>
    <v-card height="56rem" elevation="0" class="v-card-blue flex-1-1-100">
        <div class="achievement">
            <v-card-item>
                <v-card-title>
                    <p>영역별 학업 성취도</p>
                    <v-btn class="icon_only icon_only-sm" rounded flat @click="openModal({ type: 'achievement' })"
                        ><i class="ico more"
                    /></v-btn>
                </v-card-title>
            </v-card-item>
            <v-card-text class="px30 py30">
                <div class="box">
                    <div class="chart_radar">
                        <ChartRadar :radar-chart="chartData" />
                        <!-- !NOTE 차트 라벨부분 입니다.-->
                        <div class="chart-bar">
                            <div class="use-word">
                                <span class="bullet color-1"></span>
                                <p>{{ mode === 'student' ? user.name : '' }} 학생</p>
                            </div>
                            <div class="use-word">
                                <span class="bullet color-2"></span>
                                <p>반 평균</p>
                            </div>
                            <div class="use-word">
                                <span class="bullet color-3"></span>
                                <p>지역 평균</p>
                            </div>
                        </div>
                        <!-- // 차트 라벨부분 입니다. -->
                    </div>
                </div>
            </v-card-text>
        </div>
    </v-card>
    <template v-if="modalData.type === 'achievement'">
        <ModalAchievement />
    </template>
</template>
<script setup>
const mode = useCookie('mode');
const { user } = storeToRefs(useApiUserStore());
const { modalData, openModal } = useModalStore();
const chartData = {
    labels: ['듣기', '말하기', '쓰기', '제시하기', '보기', '읽기'],
    datasets: [
        {
            type: 'radar',
            label: `${mode === 'student' ? user.name : ''} 학생`,
            data: [4, 2, 3, 2, 2.5, 3.8],
            borderWidth: 3,
            borderColor: '#46A7E5',
            pointStyle: 'circle',
            pointBackgroundColor: '#46A7E5',
            backgroundColor: 'rgba(81, 179, 233,0.2)'
        },
        {
            type: 'radar',
            label: '반 평균',
            data: [3.2, 2.5, 3, 3.5, 3.8, 4.5],
            borderWidth: 3,
            borderColor: '#B0B0B0',
            pointStyle: 'circle',
            pointBackgroundColor: '#B0B0B0',
            backgroundColor: 'transparent'
        },
        {
            type: 'radar',
            label: '지역 평균',
            data: [2.8, 3.2, 3.8, 3, 3, 2.4],
            borderWidth: 3,
            borderColor: '#FFBF00',
            pointStyle: 'circle',
            pointBackgroundColor: '#FFBF00',
            backgroundColor: 'transparent'
        }
    ]
};
</script>
