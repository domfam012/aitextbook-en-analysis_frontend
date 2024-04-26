<template>
    <div class="analytics type_student">
        <AuthInfo />
        <div class="title-box">
            <div class="sub_title">
                <p>오늘의 수업 현황</p>
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
            <template v-if="selected === '진도 학습'">
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
import dayjs from 'dayjs';

const todayStore = useApiTodayStore();
const calendarStore = useApiCalendarStore();

const { selectLessonState } = storeToRefs(todayStore);
const { selectedDate } = storeToRefs(calendarStore);

const formatDate = ref(dayjs(selectedDate.value).format('YYYY-MM-DD'));

const selected = ref('진도 학습');
const items = ref(['진도 학습', 'AI CURI Talk!']);

/**
 * 선택된 날짜의 단원/차시 목록 Get
 * @returns {Promise<any>}
 */
const getLessons = async () => {
    const formatDate = ref(dayjs(selectedDate.value).format('YYYY-MM-DD'));
    return await todayStore.getSelDayLearningLessons(formatDate.value);
};

/**
 * 단원/차시 선택 시 학습진단 목록 가져오기
 * @returns {Promise<void>}
 */
const handleText = async () => {
    const formatDate = ref(dayjs(selectedDate.value).format('YYYY-MM-DD'));
    await todayStore.getTodayChapterLearningStatus({
        date: formatDate,
        chId: selectLessonState.value.chId,
        sessId: selectLessonState.value.sessId
    });
};

onMounted(async () => {
    await getLessons();
});

// 날짜 선택 변경 시
watch(selectedDate, getLessons);

// 단원/차시 변경 시
watch(selectLessonState, handleText);
</script>
