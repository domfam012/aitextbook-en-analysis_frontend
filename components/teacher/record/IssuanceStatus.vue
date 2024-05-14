<template>
    <v-card elevation="0" class="v-card-darkblue">
        <v-card-item>
            <v-card-title>
                <ul class="divider_group">
                    <li>
                        {{ t('record.issuanceStatus.grade') }} {{ semesterInProgress?.currentSemester === 9 ? 1 : 2
                        }}{{ t('record.issuanceStatus.semester') }}
                    </li>
                    <li>
                        {{ t('record.issuanceStatus.title') }}
                        <span class="font-color-yellow">
                            {{
                                t('record.issuanceStatus.totalCnt', {
                                    count: issuanceStatus?.schoolReportCount
                                })
                            }}
                        </span>
                    </li>
                </ul>
            </v-card-title>
        </v-card-item>
        <v-container fluid class="pda0">
            <div class="divider_items">
                <div class="item">
                    <strong>{{ t('record.issuanceStatus.subtitle1') }}</strong>
                    <!-- !NOTE 완료되면 하기 <v-btn></v-btn>에 class="type_success"를 추가해주세요. -->
                    <v-btn rounded flat class="color_green type_success" @click="changeClamp('clamp_left')">
                        <div class="inline_wrap">
                            <strong>{{ issuanceStatus?.schoolReportCount }}</strong>
                        </div>
                        <span class="unit">{{ t('common.unit.person') }}</span>
                    </v-btn>
                </div>
                <div class="item">
                    <strong>{{ t('record.issuanceStatus.subtitle2') }}</strong>
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
                        <span class="unit">{{ t('common.unit.person') }}</span>
                    </v-btn>
                </div>
                <div class="item">
                    <strong>{{ t('record.issuanceStatus.subtitle3') }}</strong>
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
                        <span class="unit">{{ t('common.unit.case') }}</span>
                    </v-btn>
                </div>
            </div>
            <div class="extra px30 py20">
                <p class="bullet">{{ t('record.issuanceStatus.info') }}</p>
            </div>
        </v-container>
    </v-card>
</template>
<script setup>
//현재학기
const { semesterInProgress } = storeToRefs(useApiRecordHistoryStore());
const { issuanceStatus, clampType, selectedStudentIndex } = storeToRefs(useApiRecordStore());
const { isEditMode } = storeToRefs(useApiRecordGradeStore());
const { t } = useI18n();

const changeClamp = clamp => {
    clampType.value = clamp;
    selectedStudentIndex.value = 0;
    isEditMode.value = false;
};

onMounted(async () => {
    // 목록 (학습 이력, 단원별 평어 작성, 발행 완료 건수) API 호출 시 currentSemester: 현재 학기 전달
    await useApiRecordStore().getIssuanceStatus(semesterInProgress.value?.currentSemester);
});
</script>
