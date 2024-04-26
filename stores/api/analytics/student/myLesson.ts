// TODO: 재정의 필요
interface MyLesson {
    success: boolean;
    dataSize: number;
    timestamp: string;
    data: {
        name: string;
    };
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
        const myLessonState = ref<MyLesson>();
        const wordDiagnosisState = ref();
        const cumulativeTimeState = ref();
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
         **/
        const getMyLessonProgressLearningHistory = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/progressLearningHistory`, {
                method: 'get'
            });
            if (data.value) {
                myLessonState.value = data.value.data as MyLesson;
            }
        };

        /**
         * 진도학습이력 팝업
         * 노트 상세
         * GET
         * TODO: 현재 URL 존재하지 않음
         **/
        const getMyLessonNoteDetail = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/`, {
                method: 'get'
            });
            if (data.value) {
                myLessonState.value = data.value.data as MyLesson;
            }
        };

        /**
         * 영역별 학업 성취도
         * 그래프 통계
         * GET
         * /student/dashboard/learningAnalytics/academicAchievementByArea
         **/
        const getMyLessonAcademicAchievementByArea = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/academicAchievementByArea`, {
                method: 'get'
            });
            if (data.value) {
                myLessonState.value = data.value.data as MyLesson;
            }
        };

        /**
         * 영역별 학업 성취도 팝업
         * 날짜 목록
         * GET
         **/
        const getMyLessonAcademicAchievementByAreaData = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/academicAchievementByArea/date`, {
                method: 'get'
            });
            if (data.value) {
                myLessonState.value = data.value.data as MyLesson;
            }
        };

        /**
         * 영역별 학업 성취도 팝업
         * 날짜 클릭 > 상세 학업성취도 그래프
         * /student/dashboard/learningAnalytics/academicAchievementByArea
         * GET
         * TODO : 동일한 URL 확인 필요
         **/
        // const getMyLessonAcademicAchievementByArea = async () => {
        //     const { data } = await useCustomFetch(`${defaultUrl}/academicAchievementByArea`, {
        //         method: 'get'
        //     });
        //     if (data.value) {
        //         myLessonState.value = data.value.data as MyLesson;
        //     }
        // };

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
                myLessonState.value = data.value as MyLesson;
            }
        };

        return {
            myLessonState,
            wordDiagnosisState,
            cumulativeTimeState,
            getMyLessonWordDiagnostics,
            getMyLessonRepresentationDiagnostics,
            getMyLessonCumulativeLearningTime,
            getMyLessonProgressLearningHistory,
            getMyLessonNoteDetail,
            getMyLessonAcademicAchievementByArea,
            getMyLessonAcademicAchievementByAreaData,
            getMyLessonAchievementCriteria
        };
    },
    {
        persist: false
    }
);
