<template>
    <v-card elevation="0" min-height="54rem">
        <div class="LearningHistoryStats">
            <v-sheet>
                <div class="title top">
                    <h3>우리 반</h3>
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
                        <div v-if="depth1 !== '누적 학습 기록'" class="select_box_wrap">
                            <v-select
                                v-model="depth2"
                                :items="depth1 === '색칠판 학습 이력' ? select01Items : select02Items"
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
                        <p class="font-body4 bullet">조회일자 : {{ formatDate }}</p>
                    </time>
                    <p v-else class="font-body4 bullet">
                        조회 기간 :
                        {{ getLastMonday().format('YYYY-MM-DD') }} ~
                        {{ getLastSunday().format('YYYY-MM-DD') }}
                    </p>
                </div>
            </v-sheet>
            <TeacherAnalyticsLearnColoring
                v-if="depth1 === '색칠판 학습 이력'"
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
            <TeacherAnalyticsLearnRecord v-if="depth1 === '누적 학습 기록'" />
        </div>
    </v-card>
</template>

<script setup>
const dayjs = useDayjs();
const calendarStore = useApiCalendarStore();
const apiClassStore = useApiTeacherClassStore();
const { calendarState, formatDate } = storeToRefs(calendarStore);
const depth1 = ref('색칠판 학습 이력');
const depth2 = ref({ title: '완성도 Top 5', type: 'perfection' });
const depth1Items = ref(['색칠판 학습 이력', 'Touch Voca', '누적 학습 기록']);
const select01Items = ref([
    { title: '완성도 Top 5', type: 'perfection' },
    { title: '급상승 Top 5', type: 'soaring' },
    { title: '독려 필요 Top 5', type: 'needEncouragement' }
]);
const select02Items = ref([
    { title: '많이 푼 순서', type: 'rankingOfSolvedTheWord' },
    { title: '많이 맞힌 순서', type: 'rankingOfHighCorrectAnswerRate' }
]);
const select03Items = [{ title: '누적 차트', type: 'cumulativeRecord' }];
const currentPage = ref(0);

onMounted(async () => {
    await apiClassStore.getClassColorBoard(depth2.value.type);
});

const changeDepth1 = async () => {
    currentPage.value = 0;
    if (depth1.value === '색칠판 학습 이력') {
        depth2.value = select01Items.value[0];
        await apiClassStore.getClassColorBoard(depth2.value.type);
    } else if (depth1.value === 'Touch Voca') {
        depth2.value = select02Items.value[0];
        await apiClassStore.getClassVocaRanking(depth2.value.type, formatDate.value);
    } else if (depth1.value === '누적 학습 기록') {
        await apiClassStore.getClassCumulativeRecordOften();
        await apiClassStore.getClassCumulativeRecordOMany();
        await apiClassStore.getClassCumulativeRecordOLong();
    }
};

const changeDepth2 = async () => {
    currentPage.value = 0;
    if (depth1.value === '색칠판 학습 이력') {
        await apiClassStore.getClassColorBoard(depth2.value.type);
    } else if (depth1.value === 'Touch Voca') {
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
        await apiClassStore.getClassVocaRanking(depthTwo.value, formatDate.value);
    }
);
</script>
