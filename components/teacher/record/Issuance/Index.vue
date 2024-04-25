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
                        v-model="selectedStudent"
                        class="d-flex flex-column"
                        mandatory
                        @update:modelValue="handleChangeStudent($event)"
                    >
                        <template v-for="item in studentList">
                            <v-btn rounded flat height="4.6rem" :disabled="item.writeFlag">
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
            <v-btn rounded flat size="large" class="primary">저장</v-btn>
            <v-btn @click="isEditMode = !isEditMode" rounded flat size="large" class="primary position-absolute" style="right: 0">{{
                isEditMode ? '편집 초기화' : '텍스트 편집'
            }}</v-btn>
        </div>
    </div>
</template>

<script setup>
const { learningHistoryCollectionStudent } = storeToRefs(useApiRecordHistoryStore());
const { completionStudent } = storeToRefs(useApiCompletionStore());
const { clampType, issuanceStatus } = storeToRefs(useApiRecordStore());
const { isEditMode, qualificationByUnitStudentList } = storeToRefs(useApiRecordGradeStore());

const selectedStudent = ref(0);

const handleChangeStudent = async studentIndex => {
    // 학생 선택 이벤트
    if (clampType.value === 'clamp_left') {
        await useApiRecordHistoryStore().getLearningHistoryCollection(
            issuanceStatus.value.currentSemester,
            studentList.value[selectedStudent.value].studUuid
        );
    } else if (clampType.value === 'clamp_center') {
        console.log(studentIndex);
    } else if (clampType.value === 'clamp_right') {
        console.log(studentIndex);
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
 * @param mode
 */
const cancelMode = () => {
    selectedStudent.value = 0;
    isEditMode.value = false;
};

const changeClamp = clamp => {
    clampType.value = clamp;
};
</script>
