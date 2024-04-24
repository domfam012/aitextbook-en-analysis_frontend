<template>
    <v-card v-if="comList.some(data => dayjs(data).format('YYYY-MM-DD') === formatDate)" elevation="0" max-height="54rem">
        <v-sheet class="dailyPerformance">
            <div class="lessonInfo">
                <h3 class="title">
                    <span>
                        <time :datetime="formatDate">
                            {{ dayjs(formatDate).format('MM월 DD일 dddd') }}
                        </time>
                        수업 정보
                    </span>
                </h3>
                <v-spacer />
                <!-- 단원/차시 정보 -->
                <template v-if="showLessonSelector">
                    <TeacherAnalyticsLessonSelector :current-page="currentPage" @page="handleGetAchievementRate" />
                </template>
            </div>
            <!-- 탭 영역 -->
            <TeacherAnalyticsLessonInfo @tab="handleGetAchievementRate" />
        </v-sheet>
    </v-card>
    <template v-else>
        <v-card elevation="0" height="54rem">
            <v-card-item>
                <v-card-title>
                    <span>
                        <time :datetime="formatDate">
                            {{ dayjs(formatDate).format('MM월 DD일 dddd') }}
                        </time>
                        수업 정보
                    </span>
                </v-card-title>
            </v-card-item>
            <v-card-text>
                <div class="card_no_data">
                    <i class="ico no_class_data ico_size_25" />
                    <p v-if="plnList.some(data => dayjs(data).format('YYYY-MM-DD') === formatDate)" elevation="0" height="54rem">
                        예정된 수업이 <span class="text_err">{{ teacherLearningSessionState.length }}건</span> 있습니다.
                    </p>
                    <p v-else>선택한 날에는 수업이 배정되어 있지 않습니다.</p>
                </div>
            </v-card-text>
        </v-card>
    </template>
</template>

<script setup>
const dayjs = useDayjs();
const courseStore = useApiCourseStore();
const lessonStore = useApiLessonStore();
const calendarStore = useApiCalendarStore();
const { teacherLearningSessionState } = storeToRefs(courseStore);
const { lessonCommonState } = storeToRefs(lessonStore);
const { formatDate, comList, plnList } = storeToRefs(calendarStore);

const currentPage = ref(0);
const handleGetSessionInfos = async () => {
    await courseStore.getLearningSessionInfos(formatDate.value); // 단원 차시 정보
};

const handleGetAchievementRate = async num => {
    currentPage.value = num || 0;
    const { tab } = lessonCommonState.value;
    const { value } = teacherLearningSessionState;
    const { chId, sessId } = value[currentPage.value];
    if (tab === 'one') {
        await lessonStore.getLessonAchievementRate({ date: formatDate.value, chId, sessId });
    }
    if (tab === 'two') {
        await lessonStore.getAccumulatedAchievementRateByUnit({ date: formatDate.value, chId });
    }
};

watch(
    () => formatDate.value,
    async () => {
        reset();
        await handleGetSessionInfos();
        await handleGetAchievementRate();
    }
);

const reset = () => {
    currentPage.value = 0;
    lessonCommonState.value.tab = 'one';
    lessonCommonState.value.isExpand = false;
};

const showLessonSelector = computed(() =>
    [comList, plnList].some(list => list.value.some(data => dayjs(data).format('YYYY-MM-DD') === formatDate.value))
);

onMounted(async () => {
    await handleGetSessionInfos();
    await handleGetAchievementRate();
});
</script>
