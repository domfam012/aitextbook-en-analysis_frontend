interface StudentList {}
interface Record {}
interface RecordCount {}
interface RecordList {}

/**
 * [교사] 생활기록부_학습이력수집
 * [학생] 생활기록부
 */

export const useApiRecordHistoryStore = defineStore(
    'apiRecordHistory',
    () => {
        const mode = useCookie('mode');
        const { t } = useI18n();
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
                    labels: [
                        t('chart.radar.listening'),
                        t('chart.radar.speaking'),
                        t('chart.radar.writing'),
                        t('chart.radar.presenting'),
                        t('chart.radar.viewing'),
                        t('chart.radar.reading')
                    ],
                    datasets: [
                        {
                            type: 'radar',
                            label: t('chart.radar.student'),
                            data: [
                                item?.achvLstnnRt || 0,
                                item?.achvSpkngRt || 0,
                                item?.achvWritngRt || 0,
                                item?.achvPrsntRt || 0,
                                item?.achvViewRt || 0,
                                item?.achvRedngRt || 0
                            ],
                            borderWidth: 3,
                            borderColor: '#46A7E5',
                            pointStyle: 'circle',
                            pointBackgroundColor: '#46A7E5',
                            backgroundColor: 'rgba(81, 179, 233,0.2)'
                        },
                        {
                            type: 'radar',
                            label: t('chart.radar.classAverage'),
                            data: [
                                item?.classLstnnRt || 0,
                                item?.classSpkngRt || 0,
                                item?.classWritngRt || 0,
                                item?.classPrsntRt || 0,
                                item?.classViewRt || 0,
                                item?.classRedngRt || 0
                            ],
                            borderWidth: 3,
                            borderColor: '#909090',
                            pointStyle: 'circle',
                            pointBackgroundColor: '#909090',
                            backgroundColor: 'transparent'
                        },
                        {
                            type: 'radar',
                            label: t('chart.radar.regionalAverage'),
                            data: [
                                item?.areaLstnnRt || 0,
                                item?.areaSpkngRt || 0,
                                item?.areaPrsntRt || 0,
                                item?.areaWritngRt || 0,
                                item?.areaViewRt || 0,
                                item?.areaRedngRt || 0
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
                query: {
                    semiId: 9,
                    studUuid: `3e61b5aa-d5d5-471c-9ada-fc1140e6f559`
                }
            });

            if (data.value) {
                achievementByUnit.value = data.value.data as Record;
            }
        };

        /**
         * [교사/학생] 학습 이력 수집
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
        const colorViewYn = ref('');
        const learningHistoryCollection = ref<Record>();
        const getLearningHistoryCollection = async (semiId: String, studUuid: String) => {
            const modeQueryData = mode.value === 'teacher' ? { semId: semiId, studUuid: studUuid } : { semId: semiId };
            const { data } = await useCustomFetch(`/${mode.value}/dashboard/schoolReport/learningHistoryCollection`, {
                method: 'get',
                query: modeQueryData
            });

            if (data.value) {
                learningHistoryCollection.value = data.value.data as Record;
                const item = learningHistoryCollection.value;
                corsViewYn.value = item.corsViewYn.toString();
                drillViewYn.value = item.drillViewYn.toString();
                vocaViewYn.value = item.vocaViewYn.toString();
                curiViewYn.value = item.curiViewYn.toString();
                wrdViewYn.value = item.wrdViewYn.toString();
                lrnTimeYn.value = item.lrnTimeYn.toString();
                wethrViewYn.value = item.wethrViewYn.toString();
                emtViewYn.value = item.emtViewYn.toString();
                colorViewYn.value = item.colorViewYn.toString();
                wordChart.value = [
                    { value: item.wrdPrfctUndrsUseCnt, color: 'color-1', label: t('chart.basicBar.level4') },
                    { value: item.wrdExprsUndrsUnsdCnt, color: 'color-2', label: t('chart.basicBar.level3') },
                    { value: item.wrdWrongExprsUndrsCnt, color: 'color-3', label: t('chart.basicBar.level2') },
                    { value: item.wrdSplngWrongKnowCnt, color: 'color-4', label: t('chart.basicBar.level1') },
                    { value: item.wrdLrnTotCnt, color: 'color-5', label: t('chart.basicBar.totalLearningWords') }
                ];
                dayChart.value = [
                    { value: item.lrnTimeMon, color: 'color-1', label: t('chart.basicBar.monday') },
                    { value: item.lrnTimeTues, color: 'color-2', label: t('chart.basicBar.tuesday') },
                    { value: item.lrnTimeWed, color: 'color-3', label: t('chart.basicBar.wednesday') },
                    { value: item.lrnTimeThur, color: 'color-4', label: t('chart.basicBar.thursday') },
                    { value: item.lrnTimeFri, color: 'color-5', label: t('chart.basicBar.friday') },
                    { value: item.lrnTimeSatSun, color: 'color-6', label: t('chart.basicBar.weekend') }
                ];

                emotionChart.value = {
                    labels: [
                        [t('chart.columnBar.pleasure')],
                        [t('chart.columnBar.pride')],
                        [t('chart.columnBar.scared')],
                        [t('chart.columnBar.anger')],
                        [t('chart.columnBar.boredom')],
                        [t('chart.columnBar.learningEnvironment'), t('chart.columnBar.anxiety')]
                    ],
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
                            backgroundColor: ['#42C5B1', '#46A7E5', '#636DC4', '#FD6E7F', '#909090', '#FFBF00'],
                            stack: 'word'
                        }
                    ]
                };
                weatherChart.value = {
                    labels: [
                        t('chart.simpleDonut.sunny'),
                        t('chart.simpleDonut.cloudyAndRainy'),
                        t('chart.simpleDonut.cloudyAndThundery'),
                        t('chart.simpleDonut.veryWindy'),
                        t('chart.simpleDonut.unresponsive'),
                        t('chart.simpleDonut.cloudyAndWarm'),
                        t('chart.simpleDonut.sunnyAndCloudy'),
                        t('chart.simpleDonut.heavyRain'),
                        t('chart.simpleDonut.cloudyAndSnowy')
                    ],
                    datasets: [
                        {
                            type: 'doughnut',
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
                query: {
                    semId: params.semId,
                    studUuid: params.studUuid,
                    exprsViewYn: params.exprsViewYn,
                    corsViewYn: params.corsViewYn,
                    drillViewYn: params.drillViewYn,
                    vocaViewYn: params.vocaViewYn,
                    curiViewYn: params.curiViewYn,
                    achvViewYn: params.achvViewYn,
                    wrdViewYn: params.wrdViewYn,
                    wethrViewYn: params.wethrViewYn,
                    emtViewYn: params.emtViewYn,
                    colorViewYn: params.colorViewYn,
                    lrnTimeYn: params.lrnTimeYn
                }
            });

            return { data };
        };

        /**
         * [교사] 학기 현재 진행중인 학기
         */
        const semesterInProgress = ref<Record>();
        const getSemesterInProgress = async () => {
            const { data } = await useCustomFetch(`/${mode.value}/dashboard/schoolReport/schoolReportsemesterInProgress`, {
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
            const { data } = await useCustomFetch(`/student/dashboard/schoolReport/academicAchievementByAreaThisSemester`, {
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
            const { data } = await useCustomFetch(`/student/dashboard/schoolReport/academicAchievementByUnitAndArea`, {
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
            const { data } = await useCustomFetch(`/student/dashboard/schoolReport/developmentalProgressInEachUnitOfTheCurriculum`, {
                method: 'get',
                query: params
            });

            if (data.value) {
                studentDevelopment.value = data.value.data as Record;
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
            colorViewYn,
            //[학생] 생활기록부
            studentAchievementByArea,
            studentAchievementByUnit,
            studentDevelopment,
            getStudentAchievementByArea,
            getStudentAchievementByUnit,
            getStudentDevelopment
        };
    },
    {
        persist: false
    }
);
