<template>
    <v-card elevation="0" class="v-card-darkblue">
        <v-card-item>
            <v-card-title>
                <ul class="divider_group">
                    <li>3학년 {{ issuanceStatus?.currentSemester }}학기</li>
                    <li>
                        AI 수학 생활기록부 발행 현황 :
                        <span class="font-color-yellow">총 {{ issuanceStatus?.schoolReportCount }}명</span>
                    </li>
                </ul>
            </v-card-title>
        </v-card-item>
        <v-container fluid class="pda0">
            <div class="divider_items">
                <div class="item">
                    <strong>학습 이력 수집</strong>
                    <!-- !NOTE 완료되면 하기 <v-btn></v-btn>에 class="type_success"를 추가해주세요. -->
                    <v-btn rounded flat class="color_green type_success" @click="changeClamp('clamp_left')">
                        <div class="inline_wrap">
                            <strong>{{ issuanceStatus?.schoolReportCount }}</strong>
                        </div>
                        <span class="unit">명</span>
                    </v-btn>
                </div>
                <div class="item">
                    <strong>단원별 평어 작성</strong>
                    <v-btn
                        rounded
                        flat
                        class="color_mint"
                        :class="issuanceStatus?.schoolReportLearningDevelopCount === issuanceStatus?.schoolReportCount && 'type_success'"
                        @click="changeClamp('clamp_center')"
                    >
                        <div class="inline_wrap">
                            <strong>{{ issuanceStatus?.schoolReportLearningDevelopCount }}</strong>
                            <span class="number">/{{ issuanceStatus?.schoolReportCount }}</span>
                        </div>
                        <span class="unit">명</span>
                    </v-btn>
                </div>
                <div class="item">
                    <strong>발행 완료 건수</strong>
                    <v-btn
                        rounded
                        flat
                        class="color_skyblue"
                        :class="
                            issuanceStatus?.schoolReportIssueCompletedCount === issuanceStatus?.schoolReportLearningDevelopCount &&
                            'type_success'
                        "
                        @click="changeClamp('clamp_right')"
                    >
                        <div class="inline_wrap">
                            <strong>{{ issuanceStatus?.schoolReportIssueCompletedCount }}</strong>
                            <span class="number">/{{ issuanceStatus?.schoolReportLearningDevelopCount }}</span>
                        </div>
                        <span class="unit">건</span>
                    </v-btn>
                </div>
            </div>
            <div class="extra px30 py20">
                <p class="bullet">위 숫자를 선택하면 AI 수학 생활기록부를 조회하거나 평어를 작성할 수 있어요.</p>
            </div>
        </v-container>
    </v-card>
</template>
<script setup>
const { issuanceStatus, clampType, selectedStudentIndex } = storeToRefs(useApiRecordStore());
const { isEditMode } = storeToRefs(useApiRecordGradeStore());

const changeClamp = clamp => {
    clampType.value = clamp;
    selectedStudentIndex.value = 0;
    isEditMode.value = false;
};

onMounted(async () => {
    await useApiRecordStore().getIssuanceStatus('');
});
</script>
