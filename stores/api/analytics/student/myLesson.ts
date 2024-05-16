export interface SectionList {
    sessId: number;
    curriculumSectionId: number;
    nameEng: string;
    nameKor: string;
}

export interface Chapter {
    dt: string;
    sessId: number;
    flflmRt: number;
    totLrnSs: number;
    chName: string;
    step: string;
    absncReviewYn: boolean;
}

export interface MyLesson {
    progressDenominator: number; // 완료한 학습차시 분모
    progressMolecule: number; // 완료한 학습차시 분자
    totalLeaningTimeHours: number; // 누적학습시간 (시간)
    totalLeaningTimeMinutes: number; // 누적학습시간(분)
    chapterList: Chapter[];
    sectionList: SectionList[];
}

export interface lessonDetailState {
    sctnId: number;
    sketchUrl: string;
}

interface DiagnosticParams {
    recent: number;
    startDt: string;
    endDt: string;
}

interface MyLessonProps {
    data: {
        test: string;
    };
}

const defaultUrl = `/student/dashboard/learningAnalytics`;

/**
 * 독려메시지
 */
export const useApiMyLessonStore = defineStore(
    'apiMyLesson',
    () => {
        const { t } = useI18n();
        const myLessonState: Ref<MyLesson> = ref();
        const lessonDetailState: Ref<lessonDetailState[]> = ref();
        const wordDiagnosisState = ref();
        const cumulativeTimeState = ref();
        const selectedDateState = ref({
            start: null,
            end: null
        });
        /**
         * 단어 학습 진단 통계
         * GET
         **/
        const getMyLessonWordDiagnostics = async (params: DiagnosticParams) => {
            let url = '';
            if (params?.recent) {
                url = `recentDay=${params.recent}`;
            } else if (params.startDt && params.endDt) {
                url = `startDt=${params.startDt}&endDt=${params.endDt}`;
            }
            const { data } = await useCustomFetch(`${defaultUrl}/wordLearningDiagnostics?${url}`, {
                method: 'get'
            });
            if (data.value) {
                wordDiagnosisState.value = data.value.data as MyLesson;
            }
        };

        /**
         * 표현 학습 진단 통계
         * GET
         **/
        const getMyLessonRepresentationDiagnostics = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/representationLearningDiagnostics`, {
                method: 'get'
            });
            if (data.value) {
                myLessonState.value = data.value.data as MyLesson;
            }
        };

        /**
         * 누적 학습 시간 통계
         * GET
         **/
        const getMyLessonCumulativeLearningTime = async (params: Object) => {
            let url = '';
            if (params?.recent) {
                url = `recentDay=${params.recent}`;
            } else if (params.startDt && params.endDt) {
                url = `startDt=${params.startDt}&endDt=${params.endDt}`;
            }
            const { data } = await useCustomFetch(`${defaultUrl}/cumulativeLearningTime?${url}`, {
                method: 'get'
            });
            if (data.value) {
                cumulativeTimeState.value = data.value.data as MyLesson;
            }
        };

        /**
         * 진도학습이력 팝업 목록
         * GET
         * @param month 월 선택값(1~12), 전체학기 : 파라미터없이 호출
         */
        const getMyLessonProgressLearningHistory = async (month: number) => {
            const { data } = await useCustomFetch(`${defaultUrl}/progressLearningHistory`, {
                method: 'get',
                params: { month }
            });

            if (data.value) {
                myLessonState.value = data.value.data;
            }
        };

        /**
         * 진도학습이력 팝업
         * 노트 상세
         * GET
         * @param chId 단원
         * @param sessId 차시
         */
        const getMyLessonNoteDetail = async (chId: number, sessId: number) => {
            const { data } = await useCustomFetch(`${defaultUrl}/progressLearningHistory/notes`, {
                method: 'get',
                params: { chId, sessId }
            });
            if (data.value) {
                lessonDetailState.value = data.value.data;
            }
        };

        /**
         * 날짜별 영역별 학업성취도 그래프
         * 그래프 통계
         * GET
         **/
        const achivementGraphState = ref();
        const getMyLessonAcademicAchievementByArea = async (date: string) => {
            const { data } = await useCustomFetch(`${defaultUrl}/academicAchievementByArea?date=${date}`, {
                method: 'get'
            });

            if (data.value) {
                achivementGraphState.value = data.value.data;
                const item = achivementGraphState.value;
                achivementGraphState.value = {
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
                                item?.avgAchvLstnnRtClass || 0,
                                item?.avgAchvSpkngRtClass || 0,
                                item?.avgAchvWritngRtClass || 0,
                                item?.avgAchvPrsntRtClass || 0,
                                item?.avgAchvViewRtClass || 0,
                                item?.avgAchvRedngRtClass || 0
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
                                item?.avgAchvLstnnRtArea || 0,
                                item?.avgAchvSpkngRtArea || 0,
                                item?.avgAchvPrsntRtArea || 0,
                                item?.avgAchvWritngRtArea || 0,
                                item?.avgAchvViewRtArea || 0,
                                item?.avgAchvRedngRtArea || 0
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
         * 영역별 학업 성취도 팝업 날짜 목록
         * 날짜 목록
         * GET
         **/
        const dateListState = ref();
        const getMyLessonAcademicAchievementByAreaDate = async (recentDay: number) => {
            const { data } = await useCustomFetch(`${defaultUrl}/academicAchievementByArea/date?recentDay=${recentDay}`, {
                method: 'get'
            });
            if (data.value) {
                dateListState.value = data.value.data.reverse() as MyLesson;
            }
        };

        /**
         * 학습한 최신단원 목록 조회
         * GET
         */

        // 최근 수업 단원 목록
        const recentLssnLst = ref();
        const getLearningRecentLessons = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/learningRecentLessons`, {
                method: 'get'
            });
            if (data.value) {
                recentLssnLst.value = data.value.data;
            }
        };

        /**
         * 성취 기준 모아보기 팝업
         * GET
         */
        const getMyLessonAchievementCriteria = async (chId: number, orderType: number) => {
            let query = '';
            if (chId && orderType) {
                query = `?chId=${chId}&orderType=${orderType}`;
            }
            const { data } = await useCustomFetch(`${defaultUrl}/achievementCriteria${query}`, {
                method: 'get'
            });
            if (data.value) {
                myLessonState.value = data.value.data as MyLesson;
            }
        };

        return {
            achivementGraphState,
            dateListState,
            myLessonState,
            wordDiagnosisState,
            cumulativeTimeState,
            lessonDetailState,
            selectedDateState,
            getMyLessonWordDiagnostics,
            getMyLessonRepresentationDiagnostics,
            getMyLessonCumulativeLearningTime,
            getMyLessonProgressLearningHistory,
            getMyLessonNoteDetail,
            getMyLessonAcademicAchievementByArea,
            getMyLessonAcademicAchievementByAreaDate,
            getMyLessonAchievementCriteria,
            recentLssnLst,
            getLearningRecentLessons
        };
    },
    {
        persist: false
    }
);
