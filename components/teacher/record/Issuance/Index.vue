<template>
    <div class="tableEdit clamp_left">
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
                    <v-btn-toggle v-model="studentList" class="d-flex flex-column" mandatory>
                        <template v-for="item in students">
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
            <!-- 학습 이력 수집 & 발행 완료 건수 -->
            <IssuancePart />
            <!-- 테이블 -->
            <!-- <TeacherRecordIssuanceGrade :editMode="editMode" /> -->
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
const apiRecordHistory = useApiRecordHistoryStore();
const { learningHistoryCollection } = storeToRefs(apiRecordHistory);

const studentList = ref(0);
const editMode = ref(false); // 편집 모드

const students = [
    {
        studUuid: '18a79d80-22ea-47d6-a6d9-f4c6689dd2c3',
        studName: '늘푸른하늘',
        studId: 15,
        writeFlag: false
    },
    {
        studUuid: '24c75743-47bb-4d48-8495-25bda5c05acf',
        studName: '김아미',
        studId: 14,
        writeFlag: false
    },
    {
        studUuid: '38ed0aa3-b79a-11eb-b9bd-a0d3c1f90e3c',
        studName: '홍길동',
        studId: 13,
        writeFlag: false
    },
    {
        studUuid: '38ed0aa3-b79a-11eb-b9bd-a0d3c1f90e3c',
        studName: '장보고',
        studId: 12,
        writeFlag: false
    },
    {
        studUuid: '38ed0aa3-b79a-11eb-b9bd-a0d3c1f90e3c',
        studName: '권율',
        studId: 11,
        writeFlag: false
    },
    {
        studUuid: '38ed0aa3-b79a-11eb-b9bd-a0d3c1f90e3c',
        studName: '이순신',
        studId: 10,
        writeFlag: false
    },
    {
        studUuid: '38ed0aa3-b79a-11eb-b9bd-a0d3c1f90e3c',
        studName: '임꺽정',
        studId: 9,
        writeFlag: true
    },
    {
        studUuid: '38ed0aa3-b79a-11eb-b9bd-a0d3c1f90e3c',
        studName: '세종대왕',
        studId: 8,
        writeFlag: true
    }
];

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

onMounted(async () => {
    //[교사]학습이력수집 API 연동
    await useApiRecordHistoryStore().getLearningHistoryCollection();
    console.log('[교사]학습이력수집 API 연동', learningHistoryCollection.value);
});
</script>
