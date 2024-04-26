<template>
    <div class="inner_section w-100">
        <div class="extra mb20">
            <v-btn rounded flat size="small" class="primary">초기화</v-btn>
        </div>

        <!-- 로그인 횟수와 총 학습 시간 -->
        <v-card elevation="0" class="type_record">
            <v-card-item>
                <v-card-title>
                    <span>로그인 횟수와 총 학습 시간</span>
                    <v-btn class="icon_only size_md" rounded flat><i class="ico tool_delete ico_size_10" /></v-btn>
                </v-card-title>
            </v-card-item>
            <v-container fluid class="card_items gutter_3">
                <div class="card">
                    <p class="title">
                        <i class="ico book2 ico_size_lg" />
                        교과서 학습
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
                <div class="card">
                    <p class="title">
                        <i class="ico drill ico_size_lg" />
                        드릴 학습
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
                <div class="card">
                    <p class="title">
                        <i class="ico voca ico_size_lg" />
                        AI Touch Voca
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
                <div class="card">
                    <p class="title">
                        <i class="ico chat ico_size_lg" />
                        AI CURI Talk
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
                        <span>영역별 학업성취율</span>
                        <v-btn class="icon_only size_md" rounded flat><i class="ico tool_delete ico_size_10" /></v-btn>
                    </v-card-title>
                </v-card-item>
                <v-container fluid>
                    <div class="extra">
                        <p class="bullet">조회 기간: 학기 초 ~ 학기 말</p>
                    </div>
                    <div class="chart_radar">
                        <ChartRadar :chartData="chartRadarData" />
                        <!-- !NOTE 차트 라벨부분 입니다.-->
                        <div class="chart-bar">
                            <div class="use-word">
                                <span class="bullet color-1"></span>
                                <p>김영철 학생</p>
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
                        <span>단원별 학업성취율</span>
                        <v-btn class="icon_only size_md" rounded flat><i class="ico tool_delete ico_size_10" /></v-btn>
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
            <v-card elevation="0" class="type_record">
                <v-card-item>
                    <v-card-title>
                        <span>단어 학습 진단</span>
                        <v-btn class="icon_only size_md" rounded flat><i class="ico tool_delete ico_size_10" /></v-btn>
                    </v-card-title>
                </v-card-item>
                <v-container fluid>
                    <ChartBasicBar :item="wordChart" />
                </v-container>
            </v-card>
            <!-- // 단어 학습 진단 -->

            <!-- 누적 학습 시간 -->
            <v-card elevation="0" class="type_record">
                <v-card-item>
                    <v-card-title>
                        <span>요일별 평균 학습 시간</span>
                        <v-btn class="icon_only size_md" rounded flat><i class="ico tool_delete ico_size_10" /></v-btn>
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
            <v-card elevation="0" class="type_record">
                <v-card-item>
                    <v-card-title>
                        <span>감정 날씨_학기 총계</span>
                        <v-btn class="icon_only size_md" rounded flat><i class="ico tool_delete ico_size_10" /></v-btn>
                    </v-card-title>
                </v-card-item>
                <v-container fluid class="chart_simple_donut">
                    <ChartSimpleDonut :chartData="chartData" />
                </v-container>
            </v-card>
            <!-- // 감정 날씨_학기 총계 -->

            <!-- 학습 정서_학기 평균 -->
            <v-card elevation="0" class="type_record">
                <v-card-item>
                    <v-card-title>
                        <span>학습 정서_학기 평균</span>
                        <v-btn class="icon_only size_md" rounded flat><i class="ico tool_delete ico_size_10" /></v-btn>
                    </v-card-title>
                </v-card-item>
                <v-container fluid>
                    <ChartColumnBar />
                </v-container>
            </v-card>
            <!-- // 학습 정서_학기 평균 -->
        </div>
        <!-- 단원별 교과 학습 발달 사항 -->

        <v-card v-if="clampType === 'clamp_right'" elevation="0" class="type_record mgt40">
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
                    <tr>
                        <td>Lesson 1.<br />How are you?</td>
                        <td>
                            재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수
                            있음.재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어
                            낼 수 있음.
                        </td>
                    </tr>
                    <tr>
                        <td>Lesson 1.<br />How are you?</td>
                        <td>
                            재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수
                            있음.재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어
                            낼 수 있음.
                        </td>
                    </tr>
                    <tr>
                        <td>Lesson 1.<br />How are you?</td>
                        <td>
                            재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수
                            있음.재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어
                            낼 수 있음.
                        </td>
                    </tr>
                    <tr>
                        <td>Lesson 1.<br />How are you?</td>
                        <td>
                            재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수
                            있음.재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어
                            낼 수 있음.
                        </td>
                    </tr>
                    <tr>
                        <td>Lesson 1.<br />How are you?</td>
                        <td>
                            재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수
                            있음.재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어
                            낼 수 있음.
                        </td>
                    </tr>
                    <tr>
                        <td>Lesson 1.<br />How are you?</td>
                        <td>
                            재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수
                            있음.재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어
                            낼 수 있음.
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
                <v-list-item>자기중심적인 사고가 강하지만, 다른 사람의 의견을 존중하고 받아들일 수 있는 자세를 함양해야 함.</v-list-item>
                <v-list-item>교우관계 개선을 위해 협력과 공동 작업을 통해 다른 사람과의 협력능력을 향상시켜야 함.</v-list-item>
                <v-list-item>이기적인 행동을 줄이기 위해 함께 하는 즐거움과 공동 성취감을 강조하는 활동을 도입해야 함.</v-list-item>
            </v-list>
        </v-card>
        <!-- // 담임 선생님의 행동 발달 평가 내용 -->

        <!-- 한 학기 동안 꾸민 색칠 도안 -->
        <v-card elevation="0" class="type_record mgt40">
            <v-card-item>
                <v-card-title>
                    <span>김영철 학생이 한 학기 동안 꾸민 색칠 도안입니다.</span>
                    <v-btn class="icon_only size_md" rounded flat><i class="ico tool_delete ico_size_10" /></v-btn>
                </v-card-title>
            </v-card-item>
            <v-container fluid class="coloring_design">
                <div class="design">
                    <!-- !NOTE 색칠 도안 영역 입니다. -->
                    <v-img :src="coloring" alt="색칠 도안" />
                    <!-- // 색칠 도안 영역 입니다. -->
                </div>
                <div class="design">
                    <v-img :src="coloring" alt="색칠 도안" />
                </div>
                <div class="design">
                    <v-img :src="coloring" alt="색칠 도안" />
                </div>
                <div class="design">
                    <v-img :src="coloring" alt="색칠 도안" />
                </div>
            </v-container>
        </v-card>
        <!-- // 한 학기 동안 꾸민 색칠 도안 -->
    </div>
</template>
<script setup>
import coloring from '@/assets/images/temp/img_coloring_board_full.png';
const { clampType, issuanceStatus } = storeToRefs(useApiRecordStore());
const { learningHistoryCollection, dayChart, wordChart } = storeToRefs(useApiRecordHistoryStore());
const { learningHistoryCollectionStudent } = storeToRefs(useApiRecordHistoryStore());
const wrdData = ref([]);
const lrnTimeData = ref([]);

onMounted(async () => {
    if (clampType.value === 'clamp_left') {
        await useApiRecordHistoryStore().getLearningHistoryCollectionStudent();
        await useApiRecordHistoryStore().getLearningHistoryCollection(
            issuanceStatus.value.currentSemester,
            learningHistoryCollectionStudent.value[0].studUuid
        );
    }
    if (clampType.value === 'clamp_right') {
        await useApiCompletionStore().getStudentList();
    }
});

// 데이터값을 시간 형식으로 변환하는 계산된 속성
const formattedCorsTotTime = item => {
    const Time = item;
    const hours = Math.floor(Time / 60);
    const minutes = Time % 60;
    return `${hours}시간 ${minutes}분`;
};
const chartRadarData = {
    labels: ['듣기', '말하기', '쓰기', '제시하기', '보기', '읽기'],
    datasets: [
        {
            type: 'radar',
            label: '김영철 학생',
            data: [4, 2, 3, 2, 2.5, 3.8],
            borderWidth: 3,
            borderColor: '#46A7E5',
            pointStyle: 'circle',
            pointBackgroundColor: '#46A7E5',
            backgroundColor: 'rgba(81, 179, 233,0.2)'
        },
        {
            type: 'radar',
            label: '반 평균',
            data: [3.2, 2.5, 3, 3.5, 3.8, 4.5],
            borderWidth: 3,
            borderColor: '#B0B0B0',
            pointStyle: 'circle',
            pointBackgroundColor: '#B0B0B0',
            backgroundColor: 'transparent'
        },
        {
            type: 'radar',
            label: '지역 평균',
            data: [2.8, 3.2, 3.8, 3, 3, 2.4],
            borderWidth: 3,
            borderColor: '#FFBF00',
            pointStyle: 'circle',
            pointBackgroundColor: '#FFBF00',
            backgroundColor: 'transparent'
        }
    ]
};
const chartData = {
    labels: ['맑음', '흐리고 비', '흐리고 천둥', '바람 많이', '무응답', '흐린 뒤 갬', '맑았다 흐림', '폭우', '흐리고 눈'],
    datasets: [
        {
            type: 'doughnut',
            label: '맑음',
            data: [10, 5, 5, 5, 4, 4, 7, 4, 3],
            backgroundColor: ['#67CCEE', '#F5B659', '#FF7283', '#59D8AF', '#D0D0D0', '#8EC536', '#AB8FFD', '#F5E3AE', '#EEA0D0'],
            datalabels: {
                display: 'true',
                color: '#171717',
                align: 'middle',
                formatter: function (value, context) {
                    return value;
                },
                textAlign: 'center',
                font: {
                    family: 'NotoSansKR',
                    size: '20',
                    weight: '700'
                }
            },
            spacing: 5
        }
    ]
};
</script>
