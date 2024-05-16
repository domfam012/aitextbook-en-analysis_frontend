<template>
    <div class="analytics type_student">
        <AuthInfo />
        <div class="title-box">
            <div class="sub_title">
                <p>{{ t('analytics.index.todayClass') }}</p>
                <v-select
                    v-model="selected"
                    :items="items"
                    class="type_white"
                    :menu-props="{ contentClass: 'white_item' }"
                    item-title="state"
                    item-value="abbr"
                    label="Select"
                    variant="outlined"
                    persistent-hint
                    rounded
                    return-object
                    single-line
                    hide-details
                    base-color="#fff"
                ></v-select>
            </div>
        </div>
        <div class="d-flex mb-5 gap2">
            <Calendar />
            <template v-if="selected === t('analytics.index.pacedLearning')">
                <StudentAnalyticsProgressInfo />
            </template>
            <template v-else>
                <StudentAnalyticsCuri />
            </template>
        </div>
        <div class="d-flex mb-5 gap2">
            <StudentAnalyticsSelfCheck />
            <StudentAnalyticsAchievement />
            <StudentAnalyticsTouchVoca />
        </div>
        <StudentAnalyticsDiagnosis />
    </div>
</template>
<script setup>
const { t } = useI18n();
const todayStore = useApiTodayStore();
const calendarStore = useApiCalendarStore();
const lessonStore = useApiMyLessonStore();

const { selectLessonState } = storeToRefs(todayStore);
const { formatDate } = storeToRefs(calendarStore);

const selected = ref(t('analytics.index.pacedLearning'));
const items = ref([t('analytics.index.pacedLearning'), t('analytics.index.AICURITalk')]);

/**
 * 선택된 날짜의 단원/차시 목록 Get
 * @returns {Promise<any>}
 */
const getLessons = async () => {
    return await todayStore.getSelDayLearningLessons(formatDate.value);
};

/**
 * 선택된 날짜 영역별 성취율
 * @returns {Promise<any>}
 */
const getAchievement = async () => {
    return await lessonStore.getMyLessonAcademicAchievementByArea(formatDate.value);
};

/**
 * 오늘의 Touch VOCA 그래프 통계
 * @returns {Promise<any>}
 */
const getTouchVoca = async () => {
    return await todayStore.getTodayTouchVoca(formatDate.value);
};

/**
 * 단원/차시 선택 시 학습진단 목록 가져오기
 * @returns {Promise<void>}
 */
const handleText = async () => {
    await todayStore.getTodayChapterLearningStatus({
        date: formatDate.value,
        chId: selectLessonState.value.chId,
        sessId: selectLessonState.value.sessId
    });
};

onMounted(async () => {
    await getLessons();
    await getAchievement();
    await getTouchVoca();
});

watch(
    () => formatDate.value,
    async () => {
        await getLessons();
        await getAchievement();
        await getTouchVoca();
    }
);

// 단원/차시 변경 시
watch(
    () => selectLessonState.value,
    async () => {
        if (selectLessonState.value !== undefined) await handleText();
    }
);
</script>
