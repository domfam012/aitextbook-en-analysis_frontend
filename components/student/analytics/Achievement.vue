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
                        <ChartRadar
                            v-if="achivementGraphState && Object.keys(achivementGraphState).length > 0"
                            fluid
                            :radar-chart="achivementGraphState"
                        />
                        <!-- !NOTE 차트 라벨부분 입니다.-->
                        <div class="chart-bar">
                            <div class="use-word">
                                <span class="bullet color-1"></span>
                                <p>{{ mode === 'student' ? user?.name : '' }} 학생</p>
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
const { achivementGraphState } = storeToRefs(useApiMyLessonStore());
</script>
