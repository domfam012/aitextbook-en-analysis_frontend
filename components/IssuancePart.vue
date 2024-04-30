<template>
    <div class="inner_section w-100">
        <div class="extra mb20">
            <v-btn
                v-if="mode === 'teacher' && clampType === 'clamp_left'"
                rounded
                flat
                size="small"
                class="primary"
                @click="deleteBtn('reset')"
                >초기화</v-btn
            >
            <template v-if="mode === 'teacher' && clampType === 'clamp_right'">
                <v-btn rounded flat size="small" class="primary" @click="savePdf">PDF 저장</v-btn>
                <v-btn rounded flat size="small" class="primary" @click="printPage">인쇄</v-btn>
            </template>
        </div>

        <div id="pdf">
            <!-- 로그인 횟수와 총 학습 시간 -->
            <v-card elevation="0" class="type_record">
                <v-card-item>
                    <v-card-title>
                        <span>로그인 횟수와 총 학습 시간</span>
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
                    <div v-show="corsViewYn === '1'" class="card">
                        <p class="title">
                            <i class="ico book2 ico_size_lg" />
                            교과서 학습
                            <v-btn
                                v-show="deleteBtnVisible"
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
                                    <span>로그인 횟수와 총 학습 시간</span>
                                    <strong class="count"> {{ learningHistoryCollection?.corsLoginTot }}<span>회</span> </strong>
                                </v-card-title>
                            </v-card-item>
                            <v-card-text>
                                <span>총 학습 시간</span>
                                <strong class="hour">{{ formattedCorsTotTime(learningHistoryCollection?.corsTotTime) }}</strong>
                            </v-card-text>
                        </v-card>
                    </div>
                    <div v-show="drillViewYn === '1'" class="card">
                        <p class="title">
                            <i class="ico drill ico_size_lg" />
                            드릴 학습
                            <v-btn
                                v-show="deleteBtnVisible"
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
                                    <span>로그인 횟수와 총 학습 시간</span>
                                    <strong class="count">
                                        {{ learningHistoryCollection?.dirllLoginTot }}
                                        <span>회</span>
                                    </strong>
                                </v-card-title>
                            </v-card-item>
                            <v-card-text>
                                <span>총 학습 시간</span>
                                <strong class="hour">{{ formattedCorsTotTime(learningHistoryCollection?.drillTotTime) }}</strong>
                            </v-card-text>
                        </v-card>
                    </div>
                    <div v-show="vocaViewYn === '1'" class="card">
                        <p class="title">
                            <i class="ico voca ico_size_lg" />
                            AI Touch Voca
                            <v-btn
                                v-show="deleteBtnVisible"
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
                                    <span>로그인 횟수와 총 학습 시간</span>
                                    <strong class="count">
                                        {{ learningHistoryCollection?.vocaLoginTot }}
                                        <span>회</span>
                                    </strong>
                                </v-card-title>
                            </v-card-item>
                            <v-card-text>
                                <span>총 학습 시간</span>
                                <strong class="hour">{{ formattedCorsTotTime(learningHistoryCollection?.vocaTotTime) }}</strong>
                            </v-card-text>
                        </v-card>
                    </div>
                    <div v-show="curiViewYn === '1'" class="card">
                        <p class="title">
                            <i class="ico chat ico_size_lg" />
                            AI CURI Talk
                            <v-btn
                                v-show="deleteBtnVisible"
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
                                    <span>로그인 횟수와 총 학습 시간</span>
                                    <strong class="count">
                                        {{ learningHistoryCollection?.curiLoginTot }}
                                        <span>회</span>
                                    </strong>
                                </v-card-title>
                            </v-card-item>
                            <v-card-text>
                                <span>총 학습 시간</span>
                                <strong class="hour">{{ formattedCorsTotTime(learningHistoryCollection?.curiTotTime) }}</strong>
                            </v-card-text>
                        </v-card>
                    </div>
                </v-container>
            </v-card>
            <!-- // 로그인 횟수와 총 학습 시간 -->
            <div class="chart_wrap mgt40">
                <!-- 이번 학기 영역별 학업 성취도 -->
                <v-card elevation="0" class="type_record">
                    <v-card-item>
                        <v-card-title>
                            <span>영역별 학업 성취율</span>
                        </v-card-title>
                    </v-card-item>
                    <v-container v-if="Object.keys(radarChart).length > 0" fluid>
                        <div class="extra">
                            <p class="bullet">조회 기간: 학기 초 ~ 학기 말</p>
                        </div>
                        <div class="chart_radar">
                            <ChartRadar :radar-chart="radarChart" />
                            <!-- !NOTE 차트 라벨부분 입니다.-->
                            <div class="chart-bar">
                                <div class="use-word">
                                    <span class="bullet color-1"></span>
                                    <p>{{ mode === 'student' ? user.name : '' }} 학생</p>
                                </div>
                                <div class="use-word">
                                    <span class="bullet color-2"></span>
                                    <p>반 평균</p>
                                </div>
                                <div class="use-word">
                                    <span class="bullet color-3"></span>
                                    <p>지역 평균</p>
                                </div>
                            </div>
                            <!-- // 차트 라벨부분 입니다. -->
                        </div>
                    </v-container>
                </v-card>
                <!-- // 이번 학기 영역별 학업 성취도 -->

                <!-- 단원별 영역별 학업 성취도 -->
                <v-card elevation="0" class="type_record">
                    <v-card-item>
                        <v-card-title>
                            <span>단원별 학업 성취율</span>
                        </v-card-title>
                    </v-card-item>
                    <v-container fluid>
                        <div class="extra">
                            <p class="bullet">조회 기간: 학기 초 ~ 학기 말</p>
                        </div>
                        <ChartStackedColumn />
                    </v-container>
                </v-card>
                <!-- // 단원별 영역별 학업 성취도 -->
            </div>
            <div class="chart_wrap mgt40">
                <!-- 단어 학습 진단 -->
                <v-card v-show="wrdViewYn === '1'" elevation="0" class="type_record">
                    <v-card-item>
                        <v-card-title>
                            <span>단어 학습 진단</span>
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
                        <ChartBasicBar :item="wordChart" />
                    </v-container>
                </v-card>
                <!-- // 단어 학습 진단 -->

                <!-- 누적 학습 시간 -->
                <v-card v-show="lrnTimeYn === '1'" elevation="0" class="type_record">
                    <v-card-item>
                        <v-card-title>
                            <span>요일별 평균 학습 시간</span>
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
                        <chartBasicBar :solidColor="true" :item="dayChart" />
                    </v-container>
                </v-card>
                <!-- // 누적 학습 시간 -->
            </div>
            <div class="chart_wrap mgt40">
                <!-- 감정 날씨_학기 총계 -->
                <v-card v-show="wethrViewYn === '1'" elevation="0" class="type_record">
                    <v-card-item>
                        <v-card-title>
                            <span>감정 날씨_학기 총계</span>
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

                <!-- 학습 정서_학기 평균 -->
                <v-card v-show="emtViewYn === '1'" elevation="0" class="type_record">
                    <v-card-item>
                        <v-card-title>
                            <span>학습 정서_학기 평균</span>
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
            </div>
            <!-- 단원별 교과 학습 발달 사항 -->

            <v-card v-if="clampType === 'clamp_right' || mode === 'student'" elevation="0" class="type_record mgt40">
                <v-card-item>
                    <v-card-title>
                        <span>단원별 교과 학습 발달 사항</span>
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

            <!-- 담임 선생님의 행동 발달 평가 내용 -->
            <v-card v-if="clampType === 'clamp_right'" elevation="0" class="type_record mgt40">
                <v-card-item>
                    <v-card-title>
                        <span>담임 선생님의 행동 발달 평가 내용</span>
                    </v-card-title>
                </v-card-item>
                <v-list class="list_dashed">
                    <v-list-item>준법정신이 투철하여 학교 규칙을 엄격히 준수함.</v-list-item>
                    <v-list-item>학교 규칙을 지키면서도 자발적으로 동기부여를 받아야 함을 이해하고 있음.</v-list-item>
                    <v-list-item
                        >자기중심적인 사고가 강하지만, 다른 사람의 의견을 존중하고 받아들일 수 있는 자세를 함양해야 함.</v-list-item
                    >
                    <v-list-item>교우관계 개선을 위해 협력과 공동 작업을 통해 다른 사람과의 협력능력을 향상시켜야 함.</v-list-item>
                    <v-list-item>이기적인 행동을 줄이기 위해 함께 하는 즐거움과 공동 성취감을 강조하는 활동을 도입해야 함.</v-list-item>
                </v-list>
            </v-card>
            <!-- // 담임 선생님의 행동 발달 평가 내용 -->

            <!-- 한 학기 동안 꾸민 색칠 도안 -->
            <v-card elevation="0" class="type_record mgt40">
                <v-card-item>
                    <v-card-title>
                        <span>{{ mode === 'student' ? user.name : '' }} 학생이 한 학기 동안 꾸민 색칠 도안입니다.</span>
                        <v-btn v-if="mode === 'teacher' && clampType === 'clamp_left'" class="icon_only size_md" rounded flat
                            ><i class="ico tool_delete ico_size_10"
                        /></v-btn>
                    </v-card-title>
                </v-card-item>
                <v-container fluid class="coloring_design">
                    <div v-for="(item, index) in colorBoardState?.slice(0, 4)" class="design">
                        <TeacherAnalyticsLearnColorBoard :stamp="item.stampId" :grid="item.areaBaseArr" class="mt-3" />
                    </div>
                </v-container>
            </v-card>
            <!-- // 한 학기 동안 꾸민 색칠 도안 -->
        </div>
    </div>
</template>
<script setup>
const mode = useCookie('mode');
const { savePdf, printPage } = usePrintSave();
const { user } = storeToRefs(useApiUserStore());
const { completionState } = storeToRefs(useApiCompletionStore());
const { clampType, issuanceStatus, selectedStudentIndex } = storeToRefs(useApiRecordStore());
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
    emtViewYn
} = storeToRefs(useApiRecordHistoryStore());
const { learningHistoryCollectionStudent } = storeToRefs(useApiRecordHistoryStore());
const apiClassStore = useApiTeacherClassStore();
const { colorBoardState } = storeToRefs(apiClassStore);
const deleteBtnVisible = ref(false);
const { openAlert } = useAlertStore();
const toggleDeleteBtn = () => {
    deleteBtnVisible.value = !deleteBtnVisible.value;
};

onMounted(async () => {
    if (mode.value === 'student') {
        await useApiRecordHistoryStore().getAchievementByArea(user.value.semester, user.value.studentId);
        await useApiRecordHistoryStore().getLearningHistoryCollection(user.value.semester, user.value.studentId);
        await useApiCompletionStore().getStudentDevelopmetnList(user.value.studentId);
        await useApiTeacherClassStore().getClassColorBoard('perfection');
    } else {
        if (clampType.value === 'clamp_left') {
            await fetchStudentData();
        }
        if (clampType.value === 'clamp_right') {
            await useApiCompletionStore().getStudentList();
            await useApiRecordHistoryStore().getLearningHistoryCollection(
                issuanceStatus.value.currentSemester,
                learningHistoryCollectionStudent.value[0].studUuid
            );
            await useApiCompletionStore().getStudentDevelopmetnList(learningHistoryCollectionStudent.value[0].studUuid);
            await useApiTeacherClassStore().getClassColorBoard('perfection');
        }
    }
});
const fetchStudentData = async () => {
    await useApiRecordHistoryStore().getLearningHistoryCollectionStudent();
    await useApiRecordHistoryStore().getAchievementByArea(
        issuanceStatus.value.currentSemester,
        learningHistoryCollectionStudent.value[selectedStudentIndex.value].studUuid
    );
    await useApiRecordHistoryStore().getLearningHistoryCollection(
        issuanceStatus.value.currentSemester,
        learningHistoryCollectionStudent.value[selectedStudentIndex.value].studUuid
    );
    await useApiTeacherClassStore().getClassColorBoard('perfection');
};
const mainViews = {
    corsViewYn: corsViewYn.value,
    drillViewYn: drillViewYn.value,
    vocaViewYn: vocaViewYn.value,
    curiViewYn: curiViewYn.value
};

const views = {
    corsViewYn: corsViewYn.value,
    drillViewYn: drillViewYn.value,
    vocaViewYn: vocaViewYn.value,
    curiViewYn: curiViewYn.value,
    wrdViewYn: wrdViewYn.value,
    lrnTimeYn: lrnTimeYn.value,
    wethrViewYn: wethrViewYn.value,
    emtViewYn: emtViewYn.value
};

const handleZeroCount = item => {
    let zeroCount = 0;
    for (const key in mainViews) {
        if (mainViews[key] === '0') {
            zeroCount++;
        }
    }
    if (item === 'corsViewYn' || item === 'drillViewYn' || item === 'vocaViewYn' || item === 'curiViewYn') {
        console.log('@@@@', zeroCount);
        if (zeroCount >= 1) {
            openAlert({ message: '최대 2개 항목 이상 삭제가 불가능합니다.' });
            return true;
        }
        return false;
    }
};

const deleteBtn = async item => {
    if (handleZeroCount(item)) {
        return;
    }
    if (item === 'reset') {
        for (const key in views) {
            views[key] = '1';
        }

        fetchStudentData();
    } else {
        views[item] = '0';
    }
    await useApiRecordHistoryStore().putLearningHistoryEdit({
        semId: user.value.semester,
        studUuid: learningHistoryCollectionStudent.value[selectedStudentIndex.value].studUuid,
        corsViewYn: corsViewYn.value,
        drillViewYn: drillViewYn.value,
        vocaViewYn: vocaViewYn.value,
        curiViewYn: curiViewYn.value,
        wrdViewYn: wrdViewYn.value,
        lrnTimeYn: lrnTimeYn.value,
        wethrViewYn: wethrViewYn.value,
        emtViewYn: emtViewYn.value
    });
    await useApiRecordHistoryStore().getLearningHistoryCollection(
        issuanceStatus.value.currentSemester,
        learningHistoryCollectionStudent.value[selectedStudentIndex.value].studUuid
    );
};

// 데이터값을 시간 형식으로 변환하는 계산된 속성
const formattedCorsTotTime = item => {
    const Time = item;
    const hours = Math.floor(Time / 60);
    const minutes = Time % 60;
    return `${hours}시간 ${minutes}분`;
};
</script>
