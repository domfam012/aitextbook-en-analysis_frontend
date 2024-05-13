<template>
    <div class="stackedBar">
        <p class="tit bullet mgt30">각 색깔별 학업 성취율 그룹의 숫자를 누르면 자세한 학습자 정보를 확인할 수 있어요.</p>
        <div class="colorGroup mgt30">
            <div class="result_distribution">
                <!-- width 값은 max-width: 1100값을 기준으로 백분률 값 -->
                <template v-if="Array.isArray(lessonState)">
                    <div
                        v-for="(count, item, index) in lessonState[0]"
                        :key="index"
                        :class="'learner' + (6 - index)"
                        :style="{
                            width: calculateWidth(count, lessonState[0].totalCount) + '%',
                            display: item === 'totalCount' ? 'none' : 'inherit'
                        }"
                    >
                        <div class="count_box" @click="handleClickColorGroup(item)" v-if="count > 0 && item !== 'totalCount'">
                            <i class="ico learner6"></i>
                            <span>{{ count }}</span>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div
                        v-for="(count, item, index) in lessonState"
                        :key="index"
                        :class="'learner' + (6 - index)"
                        :style="{
                            width: calculateWidth(count, lessonState.totalCount) + '%',
                            display: item === 'totalCount' ? 'none' : 'inherit'
                        }"
                    >
                        <div class="count_box" @click="handleClickColorGroup(item)" v-if="count > 0 && item !== 'totalCount'">
                            <i class="ico learner6"></i>
                            <span>{{ count }}</span>
                        </div>
                    </div>
                </template>
            </div>
            <v-list class="mgt30 d-flex justify-end" bg-color="transparent" density="compact">
                <v-list-item v-for="(learner, index) in learners" :key="index"
                    ><em :class="`shchme-color-learner${learner.level}`" />{{ learner.text }}</v-list-item
                >
            </v-list>
        </div>
    </div>
</template>

<script setup>
const learnStore = useApiLearnStore();
const lessonStore = useApiLessonStore();
const courseStore = useApiCourseStore();

const { lessonState, lessonCommonState } = storeToRefs(lessonStore);
const { currentPage } = storeToRefs(learnStore);
const { teacherLearningSessionState } = storeToRefs(courseStore);

const learners = [
    { level: 6, text: '미학습' },
    { level: 5, text: '느린 학습자' },
    { level: 4, text: '조금 느린 학습자' },
    { level: 3, text: '중간 학습자' },
    { level: 2, text: '조금 빠른 학습자' },
    { level: 1, text: '빠른 학습자' }
];

/**
 * 컬러 그룹 선택 시 itme 저장 및 성취율 테이블 열기
 * @param item 컬러 그룹
 * TODO: 컬러 그룹 파라미터 적용 필요
 */
const handleClickColorGroup = async item => {
    let achvGroupId = '00';
    if (item === 'slowStudentCount') {
        achvGroupId = '01';
    }
    if (item === 'littleSlowStudentCount') {
        achvGroupId = '02';
    }
    if (item === 'middleStudentCount') {
        achvGroupId = '03';
    }
    if (item === 'littleFastStudentCount') {
        achvGroupId = '04';
    }
    if (item === 'fastStudentCount') {
        achvGroupId = '05';
    }
    if (item === 'noLeaningStudentCount') {
        achvGroupId = '00';
    }

    const lessonState = teacherLearningSessionState.value[0];
    // 학업성취율 탭에서 컬러그룹 선택 시
    if (lessonCommonState.value.tab === 'one') {
        // 컬러그룹에 맞는 성취율 테이블 API 호출
        await learnStore.getLearnColorMatchedStudentGroups({
            achvGroupId: achvGroupId,
            semId: lessonState.semId,
            sessId: lessonState.sessId,
            chId: lessonState.chId
        });
    }
    // TODO: 단원별 누적 성취율 탭에서 컬러그룹 선택 시
    if (lessonCommonState.value.tab === 'two') {
        // 컬러그룹에 맞는 단원별 누적 성취율 테이블 API 호출
        await lessonStore.getUnitAcademicAchievementRate(achvGroupId);
    }
    lessonCommonState.value.isExpand = true;
    lessonCommonState.value.selectedColorGroup = item;
    currentPage.value = 0;
};

/**
 * 색깔별 그룹 width 퍼센트 계산
 * @param count
 * @returns {number}
 */
const calculateWidth = (count, totalCount) => {
    return (count / totalCount) * 100;
};
</script>
