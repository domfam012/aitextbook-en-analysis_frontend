interface StudentList {}
interface Record {}
interface RecordCount {}
interface RecordList {}

/**
 * [교사] 생활기록부_학습이력수집
 * [학생] 생활기록부
 */

const basetUrl = `https://aidtenasis-api.i-screammedia.com`;

export const useApiRecordHistoryStore = defineStore(
    'apiRecordHistory',
    () => {
        const mode = useCookie('mode');
        /**
         * [교사] 영역별 학업 성취율
         */
        const radarChart = ref({});
        const achievementByArea = ref<Record>();
        const getAchievementByArea = async (semiId: String, studUuid: String) => {
            const { data } = await useCustomFetch(`/${mode.value}/dashboard/schoolReport/academicAchievementByAreaThisSemester`, {
                method: 'get',
                query: {
                    semId: semiId,
                    studUuid: studUuid
                }
            });

            if (data.value) {
                achievementByArea.value = data.value.data as Record;
                const item = achievementByArea.value;
                radarChart.value = {
                    labels: ['듣기', '말하기', '쓰기', '제시하기', '보기', '읽기'],
                    datasets: [
                        {
                            type: 'radar',
                            label: '학생',
                            data: [
                                item.achvLstnnRt,
                                item.achvSpkngRt,
                                item.achvWritngRt,
                                item.achvPrsntRt,
                                item.achvViewRt,
                                item.achvRedngRt
                            ],
                            borderWidth: 3,
                            borderColor: '#46A7E5',
                            pointStyle: 'circle',
                            pointBackgroundColor: '#46A7E5',
                            backgroundColor: 'rgba(81, 179, 233,0.2)'
                        },
                        {
                            type: 'radar',
                            label: '반 평균',
                            data: [
                                item.classLstnnRt,
                                item.classSpkngRt,
                                item.classWritngRt,
                                item.classPrsntRt,
                                item.classViewRt,
                                item.classRedngRt
                            ],
                            borderWidth: 3,
                            borderColor: '#B0B0B0',
                            pointStyle: 'circle',
                            pointBackgroundColor: '#B0B0B0',
                            backgroundColor: 'transparent'
                        },
                        {
                            type: 'radar',
                            label: '지역 평균',
                            data: [
                                item.areaLstnnRt,
                                item.areaSpkngRt,
                                item.areaPrsntRt,
                                item.areaWritngRt,
                                item.areaViewRt,
                                item.areaRedngRt
                            ],
                            borderWidth: 3,
                            borderColor: '#FFBF00',
                            pointStyle: 'circle',
                            pointBackgroundColor: '#FFBF00',
                            backgroundColor: 'transparent'
                        }
                    ]
                };
            }
        };

        /**
         * [교사] 단원별 학업 성취율
         */
        const achievementByUnit = ref<Record>();
        const getAchievementByUnit = async params => {
            const { data } = await useCustomFetch(`/teacher/dashboard/schoolReport/academicAchievementByUnitAndArea`, {
                method: 'get',
                query: params
            });

            if (data.value) {
                achievementByUnit.value = data.value.data as Record;
            }
        };

        /**
         * [교사] 학습 이력 수집
         * API 연동 완료
         */

        const wordChart = ref([]);
        const dayChart = ref([]);
        const emotionChart = ref({});
        const weatherChart = ref({});
        const corsViewYn = ref('');
        const drillViewYn = ref('');
        const vocaViewYn = ref('');
        const curiViewYn = ref('');
        const wrdViewYn = ref('');
        const lrnTimeYn = ref('');
        const wethrViewYn = ref('');
        const emtViewYn = ref('');
        const learningHistoryCollection = ref<Record>();
        const getLearningHistoryCollection = async (semiId: String, studUuid: String) => {
            const { data } = await useCustomFetch(`/${mode.value}/dashboard/schoolReport/learningHistoryCollection`, {
                method: 'get',
                query: {
                    semId: semiId,
                    studUuid: studUuid
                }
            });
            if (data.value) {
                learningHistoryCollection.value = data.value.data as Record;
                const item = learningHistoryCollection.value;
                corsViewYn.value = item.corsViewYn ? item.corsViewYn.toString() : '';
                drillViewYn.value = item.drillViewYn ? item.drillViewYn.toString() : '';
                vocaViewYn.value = item.vocaViewYn ? item.vocaViewYn.toString() : '';
                curiViewYn.value = item.curiViewYn ? item.curiViewYn.toString() : '';
                wrdViewYn.value = item.wrdViewYn ? item.wrdViewYn.toString() : '';
                lrnTimeYn.value = item.lrnTimeYn ? item.lrnTimeYn.toString() : '';
                wethrViewYn.value = item.wethrViewYn ? item.wethrViewYn.toString() : '';
                emtViewYn.value = item.emtViewYn ? item.emtViewYn.toString() : '';
                wordChart.value = [
                    { value: item.wrdPrfctUndrsUseCnt, color: 'color-1', label: '잘이해하고 활용한 단어' },
                    { value: item.wrdExprsUndrsUnsdCnt, color: 'color-2', label: '이해했으나 활용하지 못한 단어' },
                    { value: item.wrdWrongExprsUndrsCnt, color: 'color-3', label: '조금만 더학습하면 좋을 단어' },
                    { value: item.wrdSplngWrongKnowCnt, color: 'color-4', label: '더열심히 학습해야 할 단어' },
                    { value: item.wrdLrnTotCnt, color: 'color-5', label: '학습한 누적 단어 개수' }
                ];
                dayChart.value = [
                    { value: item.lrnTimeMon, color: 'color-1', label: '월요일' },
                    { value: item.lrnTimeTues, color: 'color-2', label: '화요일' },
                    { value: item.lrnTimeWed, color: 'color-3', label: '수요일' },
                    { value: item.lrnTimeThur, color: 'color-4', label: '목요일' },
                    { value: item.lrnTimeFri, color: 'color-5', label: '금요일' },
                    { value: item.lrnTimeSatSun, color: 'color-6', label: '토요일, 일요일' }
                ];

                emotionChart.value = {
                    labels: [['즐거움'], ['자부심'], ['두려움'], ['화, 절망감'], ['지루함'], ['학습환경', '불안감']],
                    datasets: [
                        {
                            data: [
                                item.emtJoyScale,
                                item.emtPrideScale,
                                item.emtFearScale,
                                item.emtAngryScale,
                                item.emtBrdmScale,
                                item.emtAnxtyScale
                            ],
                            datalabels: {
                                anchor: 'end',
                                align: 'end',
                                offset: 10,
                                font: function (context) {
                                    var height = context.chart.height;
                                    // var size의 값이 최소 사이즈시 12가 되도록 잡아 주세요.
                                    var size = Math.round(height / 25);
                                    return {
                                        family: 'NotoSansKR',
                                        size: size * 1.25, // 1920에 20
                                        weight: 500
                                    };
                                }
                            },
                            backgroundColor: ['#42C5B1', '#46A7E5', '#636DC4', '#FD6E7F', '#B0B0B0', '#FFBF00'],
                            stack: 'word'
                        }
                    ]
                };
                weatherChart.value = {
                    labels: ['맑음', '흐리고 비', '흐리고 천둥', '바람 많이', '미응답', '흐린 뒤 갬', '맑았다 흐림', '폭우', '흐리고 눈'],
                    datasets: [
                        {
                            type: 'doughnut',
                            label: '맑음',
                            data: [
                                item.wethrVeryClrTot,
                                item.wethrCloudyRainTot,
                                item.wethrCloudyThndrTot,
                                item.wethrHeavyWindTot,
                                item.wethrNotRspnsTot,
                                item.wethrCloudyClrTot,
                                item.wethrClrCloudyTot,
                                item.wethrHeavyRainTot,
                                item.wethrCloudySnowTot
                            ],
                            backgroundColor: [
                                '#67CCEE',
                                '#F5B659',
                                '#FF7283',
                                '#59D8AF',
                                '#D0D0D0',
                                '#8EC536',
                                '#AB8FFD',
                                '#F5E3AE',
                                '#EEA0D0'
                            ],
                            datalabels: {
                                display: 'true',
                                color: '#171717',
                                align: 'middle',
                                textAlign: 'center',
                                font: function (context) {
                                    var height = context.chart.height;
                                    // var size의 값이 최소 사이즈시 12가 되도록 잡아 주세요.
                                    var size = Math.round(height / 20);
                                    return {
                                        family: 'NotoSansKR',
                                        size: size * 1.25, // 1920에 20
                                        weight: 700
                                    };
                                }
                            }
                        }
                    ]
                };
            }
        };

        /**
         * [교사] 학습 이력 수집 학생 목록
         */
        const learningHistoryCollectionStudent = ref<StudentList>();
        const getLearningHistoryCollectionStudent = async () => {
            const { data } = await useCustomFetch(`/teacher/dashboard/schoolReport/learningHistoryCollectionStudent`, {
                method: 'get'
            });

            if (data.value) {
                learningHistoryCollectionStudent.value = data.value.data as StudentList;
            }
        };

        /**
         * [교사] 학습 이력 화면 편집
         */

        const putLearningHistoryEdit = async (params: string) => {
            const { data } = await useCustomFetch(`/teacher/dashboard/schoolReport/saveDisplayLearningHistoryCollection`, {
                method: 'put',
                body: JSON.stringify(params)
            });

            return { data };
        };

        /**
         * [교사] 학기 현재 진행중인 학기
         */
        const semesterInProgress = ref<Record>();
        const getSemesterInProgress = async () => {
            const { data } = await useCustomFetch(`${basetUrl}/${mode.value}/dashboard/schoolReport/schoolReportsemesterInProgress`, {
                method: 'get'
            });

            if (data.value) {
                semesterInProgress.value = data.value.data as Record;
            }
        };

        /**
         * [학생] 영역별 학업 성취율
         */
        const studentAchievementByArea = ref<Record>();
        const getStudentAchievementByArea = async (params: string) => {
            const { data } = await useCustomFetch(`${basetUrl}/student/dashboard/schoolReport/academicAchievementByAreaThisSemester`, {
                method: 'get',
                query: params
            });

            if (data.value) {
                studentAchievementByArea.value = data.value.data as Record;
            }
        };

        /**
         * [학생] 단원별 학업 성취율
         */
        const studentAchievementByUnit = ref<Record>();
        const getStudentAchievementByUnit = async (params: string) => {
            const queryString = new URLSearchParams(params).toString();
            const { data } = await useCustomFetch(`${basetUrl}/student/dashboard/schoolReport/academicAchievementByUnitAndArea`, {
                method: 'get',
                query: params
            });

            if (data.value) {
                studentAchievementByUnit.value = data.value.data as Record;
            }
        };

        /**
         * [학생] 단원별 교과 학습 발달 사항
         */
        const studentDevelopment = ref<Record>();
        const getStudentDevelopment = async (params: string) => {
            const { data } = await useCustomFetch(
                `${basetUrl}/student/dashboard/schoolReport/developmentalProgressInEachUnitOfTheCurriculum`,
                {
                    method: 'get',
                    query: params
                }
            );

            if (data.value) {
                studentDevelopment.value = data.value.data as Record;
            }
        };

        /**
         * [학생] 학습 이력 수집
         */
        const studentLearningHistoryCollection = ref<Record>();
        const getStudentLearningHistoryCollection = async (params: string) => {
            const queryString = new URLSearchParams(params).toString();
            const { data } = await useCustomFetch(`${basetUrl}/student/dashboard/schoolReport/learningHistoryCollection`, {
                method: 'get',
                query: params
            });

            if (data.value) {
                studentLearningHistoryCollection.value = data.value.data as StudentList;
            }
        };

        return {
            //[교사] 학습이력수집
            achievementByArea,
            dayChart,
            wordChart,
            emotionChart,
            weatherChart,
            radarChart,
            achievementByUnit,
            learningHistoryCollectionStudent,
            learningHistoryCollection,
            semesterInProgress,
            getAchievementByArea,
            getAchievementByUnit,
            getLearningHistoryCollectionStudent,
            getLearningHistoryCollection,
            putLearningHistoryEdit,
            getSemesterInProgress,
            corsViewYn,
            drillViewYn,
            vocaViewYn,
            curiViewYn,
            wrdViewYn,
            lrnTimeYn,
            wethrViewYn,
            emtViewYn,
            //[학생] 생활기록부
            studentAchievementByArea,
            studentAchievementByUnit,
            studentDevelopment,
            studentLearningHistoryCollection,

            getStudentAchievementByArea,
            getStudentAchievementByUnit,
            getStudentDevelopment,
            getStudentLearningHistoryCollection
        };
    },
    {
        persist: false
    }
);
