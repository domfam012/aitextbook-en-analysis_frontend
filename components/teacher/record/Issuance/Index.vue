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
                    <v-btn-toggle v-model="selectedStudent" class="d-flex flex-column" mandatory>
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
            <TeacherRecordIssuanceGrade v-else-if="clampType === 'clamp_center'" :editMode="editMode" />
            <!-- 발행 완료 건수 -->
            <IssuancePart v-else-if="clampType === 'clamp_right'" />
        </div>
        <div class="mgt30 gap1 d-flex justify-center position-relative">
            <v-btn @click="cancelMode(editMode)" rounded flat size="large" class="outlined">취소</v-btn>
            <v-btn rounded flat size="large" class="primary">저장</v-btn>
            <v-btn @click="editOrResetText(editMode)" rounded flat size="large" class="primary position-absolute" style="right: 0">{{
                editMode ? '편집 초기화' : '텍스트 편집'
            }}</v-btn>
        </div>
    </div>
</template>

<script setup>
//[교사]생활기록부_학습이력수집 API
const { learningHistoryCollectionStudent } = storeToRefs(useApiRecordHistoryStore());

const { clampType } = storeToRefs(useApiRecordStore());
const { qualificationByUnitStudentList } = storeToRefs(useApiRecordGradeStore());

const selectedStudent = ref([]);
const studentList = computed(() => {
    if (clampType.value === 'clamp_left') {
        return learningHistoryCollectionStudent.value;
    } else if (clampType.value === 'clamp_center') {
        return qualificationByUnitStudentList.value;
    } else if (clampType.value === 'clamp_right') {
        return [];
    }
});
const editMode = ref(false); // 편집 모드

/**
 * 텍스트 편집 또는 텍스트 리셋
 * @constructor
 */
const editOrResetText = mode => {
    if (mode) {
    } else {
        editMode.value = !editMode.value;
    }
};

/**
 * 취소 버튼
 * @param mode
 */
const cancelMode = mode => {
    if (mode) {
        editMode.value = !editMode.value;
    }
};
</script>
