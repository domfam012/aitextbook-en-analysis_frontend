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
                        <template v-for="(item, idx) in studentList">
                            <!-- !disabled 처리로 하면 안됨, 클릭은 가능해야함 (기획참고) -->
                            <v-btn v-show="!isEditMode || idx === selectedStudentIndex" rounded flat height="4.6rem">
                                <div class="avatar avatar-box">
                                    <div class="avatar-info">
                                        <span class="info_number">{{ item.studId }}</span>
                                        <span class="info_name">{{ item.studName }}</span>
                                    </div>
                                </div>
                            </v-btn>
                        </template>
                    </v-btn-toggle>
                </v-card>
            </div>

            <!-- 학습 이력 수집 -->
            <IssuancePart v-if="clampType === 'clamp_left'" />
            <!-- 테이블 -->
            <TeacherRecordIssuanceGrade v-else-if="clampType === 'clamp_center'" />
            <!-- 발행 완료 건수 -->
            <IssuancePart v-else-if="clampType === 'clamp_right'" />
        </div>
        <div v-if="clampType === 'clamp_center'" class="mgt30 gap1 d-flex justify-center position-relative">
            <v-btn @click="cancelMode" rounded flat size="large" class="outlined">취소</v-btn>
            <v-btn @click="handleSubmit" rounded flat size="large" class="primary">저장</v-btn>
            <v-btn @click="handleEditMode" rounded flat size="large" class="primary position-absolute" style="right: 0">{{
                isEditMode ? '편집 초기화' : '텍스트 편집'
            }}</v-btn>
        </div>
    </div>
</template>

<script setup>
const { learningHistoryCollectionStudent } = storeToRefs(useApiRecordHistoryStore());
const { completionStudent } = storeToRefs(useApiCompletionStore());
const { clampType, issuanceStatus, selectedStudentIndex } = storeToRefs(useApiRecordStore());
const { isEditMode, qualificationByUnitStudentList, personalListOfQualification } = storeToRefs(useApiRecordGradeStore());

const handleChangeStudent = async () => {
    const studentId = studentList.value[selectedStudentIndex.value].studUuid;
    const studentSemId = issuanceStatus.value.currentSemester;

    // 학생 선택 이벤트
    if (clampType.value === 'clamp_left') {
        await useApiRecordHistoryStore().getAchievementByArea(studentSemId, studentId);
        await useApiRecordHistoryStore().getLearningHistoryCollection(studentSemId, studentId);
    } else if (clampType.value === 'clamp_center') {
        // [교사] 개인별 평어 목록
        await useApiRecordGradeStore().getPersonalListOfQualification({
            studUuid: qualificationByUnitStudentList.value[selectedStudentIndex.value]?.studUuid,
            semId: '1',
            divisionCode: 'A',
            orderLEsson: 'asc',
            orderLevel: 'desc'
        });
    } else if (clampType.value === 'clamp_right') {
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
                .filter(data => data.flag)
                .map(data => {
                    return {
                        semId: issuanceStatus.value.currentSemester,
                        studUuid: studentList.value[selectedStudentIndex.value]?.studUuid,
                        chId: data.chId,
                        lrnGrwthIssue: data.sentence
                    };
                })
        );
        isEditMode.value = false;
    } else {
        await useApiRecordGradeStore().putSaveIndividualEdits(
            personalListOfQualification.value
                .filter(data => data.flag)
                .map(data => {
                    return {
                        semId: issuanceStatus.value.currentSemester,
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
        // console.log(copyPersonalListOfQualification.value);
        // personalListOfQualification.value = prevList.value.filter(data => data.flag);
    } else {
        // copyPersonalListOfQualification.value = JSON.parse(JSON.stringify(personalListOfQualification.value));
        isEditMode.value = true;
    }
};
</script>
