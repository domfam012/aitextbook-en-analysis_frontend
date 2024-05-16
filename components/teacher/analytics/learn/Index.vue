<template>
    <v-card elevation="0" min-height="54rem">
        <div class="LearningHistoryStats">
            <v-sheet>
                <div class="title top">
                    <h3>{{ t('analytics.learn.index.class') }}</h3>
                    <div class="d-flex gap1 mgl10">
                        <div class="select_box_wrap">
                            <v-select
                                v-model="depth1"
                                :items="depth1Items"
                                item-title="txt"
                                item-value="abbr"
                                label="Select"
                                variant="outlined"
                                persistent-hint
                                rounded
                                return-object
                                single-line
                                hide-details
                                @update:model-value="changeDepth1"
                            ></v-select>
                        </div>
                        <div v-if="depth1 !== t('analytics.learn.index.cumulativeLearning')" class="select_box_wrap">
                            <v-select
                                v-model="depth2"
                                :items="depth1 === t('analytics.learn.index.coloringBoard') ? select01Items : select02Items"
                                variant="outlined"
                                persistent-hint
                                rounded
                                return-object
                                single-line
                                hide-details
                                @update:model-value="changeDepth2"
                            ></v-select>
                        </div>
                    </div>
                    <v-spacer></v-spacer>
                    <time v-if="depth1 === 'Touch Voca'" :datetime="formatDate">
                        <p class="font-body4 bullet">{{ t('analytics.learn.index.inquiry') }} {{ formatDate }}</p>
                    </time>
                    <p v-else class="font-body4 bullet">
                        {{ t('analytics.learn.index.inquiryPeriod') }}
                        {{ getLastMonday().format('YYYY-MM-DD') }} ~
                        {{ getLastSunday().format('YYYY-MM-DD') }}
                    </p>
                </div>
            </v-sheet>
            <TeacherAnalyticsLearnColoring
                v-if="depth1 === t('analytics.learn.index.coloringBoard')"
                @page="
                    page => {
                        currentPage = page;
                    }
                "
                :current-page="currentPage"
            />
            <TeacherAnalyticsLearnTouchVoca
                v-if="depth1 === 'Touch Voca'"
                @page="
                    page => {
                        currentPage = page;
                    }
                "
                :current-page="currentPage"
            />
            <TeacherAnalyticsLearnRecord v-if="depth1 === t('analytics.learn.index.cumulativeLearning')" />
        </div>
    </v-card>
</template>

<script setup>
const { t } = useI18n();
const dayjs = useDayjs();
const calendarStore = useApiCalendarStore();
const apiClassStore = useApiTeacherClassStore();
const { calendarState, formatDate } = storeToRefs(calendarStore);
const depth1 = ref(t('analytics.learn.index.coloringBoard'));
const depth2 = ref({ title: t('analytics.learn.index.perfection'), type: 'perfection' });
const depth1Items = ref([
    t('analytics.learn.index.coloringBoard'),
    t('analytics.learn.index.touchVoca'),
    t('analytics.learn.index.cumulativeLearning')
]);
const select01Items = ref([
    { title: t('analytics.learn.index.perfection'), type: 'perfection' },
    { title: t('analytics.learn.index.soaring'), type: 'soaring' },
    { title: t('analytics.learn.index.encouragement'), type: 'needEncouragement' }
]);
const select02Items = ref([
    { title: t('analytics.learn.index.text1'), type: 'rankingOfSolvedTheWord' },
    { title: t('analytics.learn.index.text2'), type: 'rankingOfHighCorrectAnswerRate' }
]);
const currentPage = ref(0);

onMounted(async () => {
    await apiClassStore.getClassColorBoard(depth2.value.type);
});

const changeDepth1 = async () => {
    currentPage.value = 0;
    if (depth1.value === t('analytics.learn.index.coloringBoard')) {
        depth2.value = select01Items.value[0];
        await apiClassStore.getClassColorBoard(depth2.value.type);
    } else if (depth1.value === t('analytics.learn.index.touchVoca')) {
        depth2.value = select02Items.value[0];
        await apiClassStore.getClassVocaRanking(depth2.value.type, formatDate.value);
    } else if (depth1.value === t('analytics.learn.index.cumulativeLearning')) {
        await apiClassStore.getClassCumulativeRecordOften();
        await apiClassStore.getClassCumulativeRecordOMany();
        await apiClassStore.getClassCumulativeRecordOLong();
    }
};

const changeDepth2 = async () => {
    currentPage.value = 0;
    if (depth1.value === t('analytics.learn.index.coloringBoard')) {
        await apiClassStore.getClassColorBoard(depth2.value.type);
    } else if (depth1.value === t('analytics.learn.index.touchVoca')) {
        await apiClassStore.getClassVocaRanking(depth2.value.type, formatDate.value);
    }
};

/**
 * 지난 주 월요일 날짜
 */
const getLastMonday = () => {
    const today = dayjs();
    const dayOfWeek = today.day();
    const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    const thisMonday = today.subtract(daysToSubtract, 'day');
    const lastMonday = thisMonday.subtract(7, 'day');
    return lastMonday;
};

/**
 * 지난 주 일요일 날짜
 */
const getLastSunday = () => {
    const lastMonday = getLastMonday();
    const lastSunday = lastMonday.add(6, 'day');
    return lastSunday;
};

// //(임시) 캘린더 클릭한 날짜일 때 touch voca api 호출로 수정 필요할 수 있음.
watch(
    () => formatDate.value,
    async () => {
        // !NOTE API 응답 Data 확인 가능한 일자 확인 요청중. 2024-04-24
        if (depth1.value === 'Touch Voca') {
            await apiClassStore.getClassVocaRanking(depth2.value.type, formatDate.value);
        }
    }
);
</script>
