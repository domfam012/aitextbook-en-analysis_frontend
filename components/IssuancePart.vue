<template>
    <v-container fluid class="inner_section">
        <v-row no-gutters>
            <v-col>
                <v-sheet class="extra mb20">
                    <v-btn
                        v-if="mode === 'teacher' && clampType === 'clamp_left'"
                        rounded
                        flat
                        size="small"
                        class="primary"
                        @click="deleteBtn('reset')"
                        >{{ t('common.button.reset') }}</v-btn
                    >
                    <template v-if="mode === 'teacher' && clampType === 'clamp_right'">
                        <v-btn rounded flat size="small" class="primary" @click="savePdf">{{
                            t('record.issuancePart.button.savePDF')
                        }}</v-btn>
                        <v-btn rounded flat size="small" class="primary" @click="printPage">{{
                            t('record.issuancePart.button.print')
                        }}</v-btn>
                    </template>
                </v-sheet>
            </v-col>
        </v-row>
        <div id="pdf">
            <v-row no-gutters>
                <v-col>
                    <!-- 로그인 횟수와 총 학습 시간 -->
                    <v-card elevation="0" class="type_record">
                        <v-card-item>
                            <v-card-title>
                                <span>{{ t('record.issuancePart.title.numOfLoginsAndTotalLearningTime') }}</span>
                                <v-btn
                                    v-if="mode === 'teacher' && clampType === 'clamp_left'"
                                    class="icon_only size_md"
                                    rounded
                                    flat
                                    @click="toggleDeleteBtn"
                                    ><i class="ico tool_delete ico_size_10"
                                /></v-btn>
                            </v-card-title>
                        </v-card-item>
                        <v-container fluid class="card_items gutter_3">
                            <div v-if="corsViewYn === '1'" class="card">
                                <p class="title">
                                    <i class="ico book2 ico_size_lg" />
                                    {{ t('record.issuancePart.textbookLearning') }}
                                    <v-btn
                                        v-if="deleteBtnVisible"
                                        class="icon_only size_md"
                                        rounded
                                        flat
                                        color="primary"
                                        @click="deleteBtn('corsViewYn')"
                                        ><i class="ico tool_delete ico_size_10"
                                    /></v-btn>
                                </p>
                                <v-card elevation="0" class="fill-violet box_contents">
                                    <v-card-item>
                                        <v-card-title>
                                            <span>{{ t('record.issuancePart.title.numOfLoginsAndTotalLearningTime') }}</span>
                                            <strong class="count">
                                                {{ learningHistoryCollection?.corsLoginTot }}<span>{{ t('common.unit.cnt') }}</span>
                                            </strong>
                                        </v-card-title>
                                    </v-card-item>
                                    <v-card-text>
                                        <span>{{ t('record.issuancePart.totalLearningTime') }}</span>
                                        <strong class="hour">{{ formattedCorsTotTime(learningHistoryCollection?.corsTotTime) }}</strong>
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div v-if="drillViewYn === '1'" class="card">
                                <p class="title">
                                    <i class="ico drill ico_size_lg" />
                                    {{ t('record.issuancePart.drillLearning') }}
                                    <v-btn
                                        v-if="deleteBtnVisible"
                                        class="icon_only size_md"
                                        rounded
                                        flat
                                        color="primary"
                                        @click="deleteBtn('drillViewYn')"
                                        ><i class="ico tool_delete ico_size_10"
                                    /></v-btn>
                                </p>
                                <v-card elevation="0" class="fill-violet box_contents">
                                    <v-card-item>
                                        <v-card-title>
                                            <span>{{ t('record.issuancePart.title.numOfLoginsAndTotalLearningTime') }}</span>
                                            <strong class="count">
                                                {{ learningHistoryCollection?.dirllLoginTot }}
                                                <span>{{ t('common.unit.cnt') }}</span>
                                            </strong>
                                        </v-card-title>
                                    </v-card-item>
                                    <v-card-text>
                                        <span>{{ t('record.issuancePart.totalLearningTime') }}</span>
                                        <strong class="hour">{{ formattedCorsTotTime(learningHistoryCollection?.drillTotTime) }}</strong>
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div v-if="vocaViewYn === '1'" class="card">
                                <p class="title">
                                    <i class="ico voca ico_size_lg" />
                                    {{ t('record.issuancePart.AITouchVoca') }}

                                    <v-btn
                                        v-if="deleteBtnVisible"
                                        class="icon_only size_md"
                                        rounded
                                        flat
                                        color="primary"
                                        @click="deleteBtn('vocaViewYn')"
                                        ><i class="ico tool_delete ico_size_10"
                                    /></v-btn>
                                </p>
                                <v-card elevation="0" class="fill-violet box_contents">
                                    <v-card-item>
                                        <v-card-title>
                                            <span>{{ t('record.issuancePart.title.numOfLoginsAndTotalLearningTime') }}</span>
                                            <strong class="count">
                                                {{ learningHistoryCollection?.vocaLoginTot }}
                                                <span>{{ t('common.unit.cnt') }}</span>
                                            </strong>
                                        </v-card-title>
                                    </v-card-item>
                                    <v-card-text>
                                        <span>{{ t('record.issuancePart.totalLearningTime') }}</span>
                                        <strong class="hour">{{ formattedCorsTotTime(learningHistoryCollection?.vocaTotTime) }}</strong>
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div v-if="curiViewYn === '1'" class="card">
                                <p class="title">
                                    <i class="ico chat ico_size_lg" />
                                    {{ t('record.issuancePart.AICURITalk') }}
                                    <v-btn
                                        v-if="deleteBtnVisible"
                                        class="icon_only size_md"
                                        rounded
                                        flat
                                        color="primary"
                                        @click="deleteBtn('curiViewYn')"
                                        ><i class="ico tool_delete ico_size_10"
                                    /></v-btn>
                                </p>
                                <v-card elevation="0" class="fill-violet box_contents">
                                    <v-card-item>
                                        <v-card-title>
                                            <span>{{ t('record.issuancePart.title.numOfLoginsAndTotalLearningTime') }}</span>
                                            <strong class="count">
                                                {{ learningHistoryCollection?.curiLoginTot }}
                                                <span>{{ t('common.unit.cnt') }}</span>
                                            </strong>
                                        </v-card-title>
                                    </v-card-item>
                                    <v-card-text>
                                        <span>{{ t('record.issuancePart.totalLearningTime') }}</span>
                                        <strong class="hour">{{ formattedCorsTotTime(learningHistoryCollection?.curiTotTime) }}</strong>
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-container>
                    </v-card>
                    <!-- // 로그인 횟수와 총 학습 시간 -->
                </v-col>
            </v-row>
            <v-row no-gutters class="chart_wrap mgt40">
                <v-col cols="6">
                    <!-- 이번 학기 영역별 학업 성취도 -->
                    <v-card elevation="0" class="type_record">
                        <v-card-item>
                            <v-card-title>
                                <span>{{ t('record.issuancePart.title.areaAchievementRate') }}</span>
                            </v-card-title>
                        </v-card-item>
                        <v-container v-if="Object.keys(radarChart).length > 0" fluid>
                            <div class="extra">
                                <p class="bullet">{{ t('record.issuancePart.inquiryPeriod') }}</p>
                            </div>
                            <div class="chart_radar">
                                <ChartRadar :radar-chart="radarChart" />
                                <!-- !NOTE 차트 라벨부분 입니다.-->
                                <div class="chart-bar">
                                    <div class="use-word">
                                        <span class="bullet color-1"></span>
                                        <p>{{ mode === 'student' ? user.name : '' }} {{ t('record.issuancePart.student') }}</p>
                                    </div>
                                    <div class="use-word">
                                        <span class="bullet color-2"></span>
                                        <p>{{ t('record.issuancePart.halfAverage') }}</p>
                                    </div>
                                    <div class="use-word">
                                        <span class="bullet color-3"></span>
                                        <p>{{ t('record.issuancePart.regionalAverage') }}</p>
                                    </div>
                                </div>
                                <!-- // 차트 라벨부분 입니다. -->
                            </div>
                        </v-container>
                    </v-card>
                    <!-- // 이번 학기 영역별 학업 성취도 -->
                </v-col>
                <v-col cols="6">
                    <!-- 단원별 영역별 학업 성취도 -->
                    <v-card elevation="0" class="type_record">
                        <v-card-item>
                            <v-card-title>
                                <span>{{ t('record.issuancePart.title.unitAchievementRate') }}</span>
                            </v-card-title>
                        </v-card-item>
                        <v-container fluid>
                            <div class="extra">
                                <p class="bullet">{{ t('record.issuancePart.inquiryPeriod') }}</p>
                            </div>
                            <ChartStackedColumn />
                        </v-container>
                    </v-card>
                    <!-- // 단원별 영역별 학업 성취도 -->
                </v-col>
            </v-row>
            <v-row no-gutters class="chart_wrap mgt40">
                <v-col v-if="wrdViewYn === '1'" :cols="lrnTimeYn === '0' ? 12 : 6">
                    <!-- 단어 학습 진단 -->
                    <v-card elevation="0" class="type_record">
                        <v-card-item>
                            <v-card-title>
                                <span>{{ t('record.issuancePart.title.wordLearningDiagnostics') }}</span>
                                <v-btn
                                    v-if="mode === 'teacher' && clampType === 'clamp_left'"
                                    class="icon_only size_md"
                                    rounded
                                    flat
                                    @click="deleteBtn('wrdViewYn')"
                                    ><i class="ico tool_delete ico_size_10"
                                /></v-btn>
                            </v-card-title>
                        </v-card-item>
                        <v-container fluid>
                            <ChartBasicBar suffix="개" :item="wordChart" />
                        </v-container>
                    </v-card>
                    <!-- // 단어 학습 진단 -->
                </v-col>
                <v-col v-if="lrnTimeYn === '1'" :cols="wrdViewYn === '0' ? 12 : 6">
                    <!-- 누적 학습 시간 -->
                    <v-card elevation="0" class="type_record">
                        <v-card-item>
                            <v-card-title>
                                <span>{{ t('record.issuancePart.title.dayAverageLearningTime') }}</span>
                                <v-btn
                                    v-if="mode === 'teacher' && clampType === 'clamp_left'"
                                    class="icon_only size_md"
                                    rounded
                                    flat
                                    @click="deleteBtn('lrnTimeYn')"
                                    ><i class="ico tool_delete ico_size_10"
                                /></v-btn>
                            </v-card-title>
                        </v-card-item>
                        <v-container fluid>
                            <chartBasicBar :solidColor="true" suffix="분" :item="dayChart" />
                        </v-container>
                    </v-card>
                    <!-- // 누적 학습 시간 -->
                </v-col>
            </v-row>
            <v-row no-gutters class="chart_wrap mgt40">
                <v-col v-if="wethrViewYn === '1'" :cols="emtViewYn === '0' ? 12 : 6">
                    <!-- 감정 날씨_학기 총계 -->
                    <v-card elevation="0" class="type_record">
                        <v-card-item>
                            <v-card-title>
                                <span>{{ t('record.issuancePart.title.emotionalWeather') }}</span>
                                <v-btn
                                    v-if="mode === 'teacher' && clampType === 'clamp_left'"
                                    class="icon_only size_md"
                                    rounded
                                    flat
                                    @click="deleteBtn('wethrViewYn')"
                                    ><i class="ico tool_delete ico_size_10"
                                /></v-btn>
                            </v-card-title>
                        </v-card-item>
                        <v-container v-if="Object.keys(weatherChart).length > 0" fluid class="chart_simple_donut">
                            <ChartSimpleDonut :weather-chart="weatherChart" />
                        </v-container>
                    </v-card>
                    <!-- // 감정 날씨_학기 총계 -->
                </v-col>
                <v-col v-if="emtViewYn === '1'" :cols="wethrViewYn === '0' ? 12 : 6">
                    <!-- 학습 정서_학기 평균 -->
                    <v-card elevation="0" class="type_record">
                        <v-card-item>
                            <v-card-title>
                                <span>{{ t('record.issuancePart.title.learningSentiment') }}</span>
                                <v-btn
                                    v-if="mode === 'teacher' && clampType === 'clamp_left'"
                                    class="icon_only size_md"
                                    rounded
                                    flat
                                    @click="deleteBtn('emtViewYn')"
                                    ><i class="ico tool_delete ico_size_10"
                                /></v-btn>
                            </v-card-title>
                        </v-card-item>
                        <v-container v-if="Object.keys(emotionChart).length > 0" fluid>
                            <ChartColumnBar />
                        </v-container>
                    </v-card>
                    <!-- // 학습 정서_학기 평균 -->
                </v-col>
            </v-row>
            <v-row no-gutters v-if="clampType === 'clamp_right' || mode === 'student'">
                <v-col class="mgt40">
                    <!-- 단원별 교과 학습 발달 사항 -->
                    <v-card elevation="0" class="type_record">
                        <v-card-item>
                            <v-card-title>
                                <span>{{ t('record.issuancePart.title.unitDevelopment') }}</span>
                            </v-card-title>
                        </v-card-item>
                        <v-data-table class="type_line">
                            <colgroup>
                                <col width="15%" />
                                <col width="*" />
                            </colgroup>
                            <tbody>
                                <tr v-for="(item, index) in completionState" :key="index">
                                    <td>Lesson {{ item.chNumber }}.<br />{{ item.chName }}</td>
                                    <td>
                                        {{ item.sentence }}
                                    </td>
                                </tr>
                            </tbody>
                        </v-data-table>
                    </v-card>
                    <!-- // 단원별 교과 학습 발달 사항 -->
                </v-col>
            </v-row>
            <v-row no-gutters v-if="clampType === 'clamp_right'">
                <v-col class="mgt40">
                    <!-- 담임 선생님의 행동 발달 평가 내용 -->
                    <v-card elevation="0" class="type_record">
                        <v-card-item>
                            <v-card-title>
                                <span>{{ t('record.issuancePart.title.behavioralDevelopmentEvaluation') }}</span>
                            </v-card-title>
                        </v-card-item>
                        <v-list class="list_dashed">
                            <v-list-item>{{ t('record.issuancePart.behaviorContent.first') }}</v-list-item>
                            <v-list-item>{{ t('record.issuancePart.behaviorContent.second') }}</v-list-item>
                            <v-list-item>{{ t('record.issuancePart.behaviorContent.third') }}</v-list-item>
                            <v-list-item>{{ t('record.issuancePart.behaviorContent.fourth') }}</v-list-item>
                            <v-list-item>{{ t('record.issuancePart.behaviorContent.fifth') }}</v-list-item>
                        </v-list>
                    </v-card>
                    <!-- // 담임 선생님의 행동 발달 평가 내용 -->
                </v-col>
            </v-row>
            <v-row v-if="colorViewYn === '1'" no-gutters>
                <v-col class="mgt40">
                    <!-- 한 학기 동안 꾸민 색칠 도안 -->
                    <v-card elevation="0" class="type_record">
                        <v-card-item>
                            <v-card-title>
                                <span>{{ mode === 'student' ? user.name : '' }} {{ t('record.issuancePart.colorViewInfo') }}</span>
                                <v-btn v-if="mode === 'teacher' && clampType === 'clamp_left'" class="icon_only size_md" rounded flat
                                    ><i class="ico tool_delete ico_size_10"
                                /></v-btn>
                            </v-card-title>
                        </v-card-item>
                        <v-container fluid class="coloring_design">
                            <div
                                v-for="(item, index) in learningHistoryCollection?.colorInfoList"
                                :key="`colorInfoList_${index}`"
                                class="design"
                            >
                                <TeacherAnalyticsLearnColorBoard :stamp="item.stampId" :grid="JSON.parse(item.dsgnUseInfo)" class="mt-3" />
                            </div>
                        </v-container>
                    </v-card>
                    <!-- // 한 학기 동안 꾸민 색칠 도안 -->
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>
<script setup>
const mode = useCookie('mode');
const { savePdf, printPage } = usePrintSave();
const { user } = storeToRefs(useApiUserStore());
const { completionState } = storeToRefs(useApiCompletionStore());
const { clampType, selectedStudentIndex } = storeToRefs(useApiRecordStore());
const {
    learningHistoryCollection,
    dayChart,
    wordChart,
    emotionChart,
    weatherChart,
    radarChart,
    corsViewYn,
    drillViewYn,
    vocaViewYn,
    curiViewYn,
    wrdViewYn,
    lrnTimeYn,
    wethrViewYn,
    emtViewYn,
    colorViewYn
} = storeToRefs(useApiRecordHistoryStore());
const { learningHistoryCollectionStudent } = storeToRefs(useApiRecordHistoryStore());
const deleteBtnVisible = ref(false);
const { openAlert } = useAlertStore();
const { t } = useI18n();

//현재학기
const { semesterInProgress } = storeToRefs(useApiRecordHistoryStore());

const toggleDeleteBtn = () => {
    deleteBtnVisible.value = !deleteBtnVisible.value;
};

onMounted(async () => {
    if (mode.value === 'student') {
        await useApiRecordHistoryStore().getAchievementByArea(user.value.semester, user.value.studentId);
        await useApiRecordHistoryStore().getLearningHistoryCollection(user.value.semester, user.value.studentId);
        await useApiCompletionStore().getStudentDevelopmetnList(user.value.studentId);
    } else {
        if (clampType.value === 'clamp_left') {
            await fetchStudentData();
        }
        if (clampType.value === 'clamp_right') {
            await useApiCompletionStore().getStudentList();
            await useApiRecordHistoryStore().getLearningHistoryCollection(
                semesterInProgress.value.currentSemester,
                learningHistoryCollectionStudent.value[0].studUuid
            );
            await useApiCompletionStore().getStudentDevelopmetnList(learningHistoryCollectionStudent.value[0].studUuid);
        }
    }
});
const fetchStudentData = async () => {
    await useApiRecordHistoryStore().getLearningHistoryCollectionStudent();
    await useApiRecordHistoryStore().getLearningHistoryCollection(
        semesterInProgress.value.currentSemester,
        learningHistoryCollectionStudent.value[selectedStudentIndex.value].studUuid
    );
    await useApiRecordHistoryStore().getAchievementByArea(
        semesterInProgress.value.currentSemester,
        learningHistoryCollectionStudent.value[selectedStudentIndex.value].studUuid
    );
};
const mainViews = computed(() => {
    return {
        corsViewYn: corsViewYn.value,
        drillViewYn: drillViewYn.value,
        vocaViewYn: vocaViewYn.value,
        curiViewYn: curiViewYn.value
    };
});

const views = computed(() => {
    return {
        corsViewYn: corsViewYn.value,
        drillViewYn: drillViewYn.value,
        vocaViewYn: vocaViewYn.value,
        curiViewYn: curiViewYn.value,
        wrdViewYn: wrdViewYn.value,
        lrnTimeYn: lrnTimeYn.value,
        wethrViewYn: wethrViewYn.value,
        emtViewYn: emtViewYn.value,
        colorViewYn: colorViewYn.value
    };
});

const handleZeroCount = item => {
    let zeroCount = 0;
    for (const key in mainViews.value) {
        if (mainViews.value[key] === '0') {
            zeroCount++;
        }
    }
    if (item === 'corsViewYn' || item === 'drillViewYn' || item === 'vocaViewYn' || item === 'curiViewYn') {
        if (zeroCount >= 1) {
            openAlert({ message: t('record.issuancePart.warningMsg') });
            return true;
        }
        lrnTimeYn;
        return false;
    }
};

const deleteBtn = async item => {
    if (handleZeroCount(item)) {
        return;
    }
    if (item === 'reset') {
        for (const key in views.value) {
            views.value[key] = '1';
            mainViews.value[key] = '1';
        }
    } else {
        views.value[item] = '0';
        mainViews.value[item] = '0';
    }
    await useApiRecordHistoryStore().putLearningHistoryEdit({
        semId: user.value.semester,
        studUuid: learningHistoryCollectionStudent.value[selectedStudentIndex.value].studUuid,
        ...views.value
    });
    await useApiRecordHistoryStore().getLearningHistoryCollection(
        semesterInProgress.value.currentSemester,
        learningHistoryCollectionStudent.value[selectedStudentIndex.value].studUuid
    );
};

// 데이터값을 시간 형식으로 변환하는 계산된 속성
const formattedCorsTotTime = item => {
    const Time = item;
    const hours = Math.floor(Time / 60);
    const minutes = Time % 60;
    return `${hours + t('common.unit.hour')} ${minutes + t('common.unit.min')}`;
};
</script>
