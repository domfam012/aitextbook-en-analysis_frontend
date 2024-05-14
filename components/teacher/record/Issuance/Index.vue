<template>
    <div class="tableEdit" :class="clampType">
        <v-btn
            class="close pa-0 position-absolute"
            :elevation="0"
            density="compact"
            min-width="auto"
            min-height="auto"
            height="auto !important"
            color="transparent"
        >
            <i class="ico close_30 ico_size_lg"></i>
        </v-btn>
        <div class="d-flex gap2">
            <div class="student-num">
                <v-card :elevation="0" color="transparent">
                    <v-btn-toggle
                        v-model="selectedStudentIndex"
                        class="d-flex flex-column"
                        mandatory
                        @update:modelValue="handleChangeStudent"
                    >
                        <template v-for="(item, idx) in studentList?.sort((a, b) => a.writeFlag - b.writeFlag)">
                            <!-- !disabled 처리로 하면 안됨, 클릭은 가능해야함 (기획참고) -->
                            <v-btn
                                v-show="!isEditMode || idx === selectedStudentIndex"
                                :class="[{ temp: item.writeFlag }]"
                                rounded
                                flat
                                height="4.6rem"
                            >
                                <div class="avatar avatar-box">
                                    <div class="avatar-info">
                                        <span class="info_number">{{ item.number + t('common.unit.no') }}</span>
                                        <span class="info_name">{{ item.studName }}</span>
                                    </div>
                                </div>
                            </v-btn>
                        </template>
                    </v-btn-toggle>
                </v-card>
            </div>

            <!-- 학습 이력 수집 -->
            <IssuancePart v-if="clampType === 'clamp_left' && mode" />
            <!-- 테이블 -->
            <TeacherRecordIssuanceGrade v-else-if="clampType === 'clamp_center'" />
            <!-- 발행 완료 건수 -->
            <IssuancePart v-else-if="clampType === 'clamp_right'" />
        </div>
        <div v-if="clampType === 'clamp_center'" class="mgt30 gap1 d-flex justify-center position-relative">
            <v-btn @click="cancelMode" rounded flat size="large" class="outlined">{{ t('common.button.cancel') }}</v-btn>
            <v-btn @click="handleSubmit" rounded flat size="large" class="primary">{{ t('common.button.save') }}</v-btn>
            <v-btn
                @click="handleEditMode"
                rounded
                flat
                size="large"
                class="primary position-absolute"
                :disabled="personalListOfQualification?.filter(data => data.selectedFlag).length === 0"
                style="right: 0"
                >{{ isEditMode ? t('record.issuance.index.reset') : t('record.issuance.index.editText') }}</v-btn
            >
        </div>
    </div>
</template>

<script setup>
const mode = useCookie('mode');
const { learningHistoryCollectionStudent } = storeToRefs(useApiRecordHistoryStore());
const { completionStudent } = storeToRefs(useApiCompletionStore());
const { clampType, selectedStudentIndex } = storeToRefs(useApiRecordStore());
const { isEditMode, qualificationByUnitStudentList, personalListOfQualification, unitType } = storeToRefs(useApiRecordGradeStore());
const { t } = useI18n();

//현재학기
const { semesterInProgress } = storeToRefs(useApiRecordHistoryStore());
const studentSemId = semesterInProgress.value.currentSemester;

const handleChangeStudent = async () => {
    const studentId = studentList.value[selectedStudentIndex.value].studUuid;

    // 학생 선택 이벤트
    if (clampType.value === 'clamp_left') {
        await useApiRecordHistoryStore().getAchievementByArea(studentSemId, studentId);
        await useApiRecordHistoryStore().getLearningHistoryCollection(studentSemId, studentId);
        await useApiTeacherClassStore().getClassColorBoard('perfection');
    } else if (clampType.value === 'clamp_center') {
        // [교사] 개인별 평어 목록
        await useApiRecordGradeStore().getPersonalListOfQualification({
            studUuid: qualificationByUnitStudentList.value[selectedStudentIndex.value]?.studUuid,
            semId: studentSemId,
            divisionCode: unitType.value,
            orderLEsson: 'asc',
            orderLevel: 'desc'
        });
    } else if (clampType.value === 'clamp_right') {
        await useApiRecordHistoryStore().getAchievementByArea(studentSemId, studentId);
        await useApiRecordHistoryStore().getLearningHistoryCollection(studentSemId, studentId);
        await useApiCompletionStore().getStudentDevelopmetnList(studentId);
        await useApiTeacherClassStore().getClassColorBoard('perfection');
    }
};

const studentList = computed(() => {
    if (clampType.value === 'clamp_left') {
        return learningHistoryCollectionStudent.value;
    } else if (clampType.value === 'clamp_center') {
        return qualificationByUnitStudentList.value;
    } else if (clampType.value === 'clamp_right') {
        return completionStudent.value;
    }
});

/**
 * 취소 버튼
 */
const cancelMode = () => {
    selectedStudentIndex.value = 0;
    handleChangeStudent(0);
    isEditMode.value = false;
};

/**
 * 저장 버튼
 */
const handleSubmit = async () => {
    if (isEditMode.value) {
        await useApiRecordGradeStore().putSaveTextEdits(
            personalListOfQualification.value
                .filter(data => data.selectedFlag)
                .map(data => {
                    return {
                        semId: String(semesterInProgress.value.currentSemester),
                        studUuid: studentList.value[selectedStudentIndex.value]?.studUuid,
                        chId: String(data.chId),
                        lrnGrwthIssue: data.sentence
                    };
                })
        );
        isEditMode.value = false;
    } else {
        await useApiRecordGradeStore().putSaveIndividualEdits(
            personalListOfQualification.value
                .filter(data => data.selectedFlag)
                .map(data => {
                    return {
                        semId: semesterInProgress.value.currentSemester,
                        studUuid: studentList.value[selectedStudentIndex.value]?.studUuid,
                        evaluationSentenceId: data.evaluationSentenceId
                    };
                })
        );
    }
};

/**
 * 텍스트 편집, 편집 초기화 버튼
 */
// const copyPersonalListOfQualification = ref([]);
const handleEditMode = () => {
    if (isEditMode.value) {
        personalListOfQualification.value.forEach(element => {
            element.editSentence = element.sentence;
        });
    } else {
        isEditMode.value = true;
    }
};
</script>
<style lang="scss" scoped>
.temp {
    background: #b0b0b0;
    &,
    .info_number,
    .info_name {
        color: #fff;
    }
}
</style>
