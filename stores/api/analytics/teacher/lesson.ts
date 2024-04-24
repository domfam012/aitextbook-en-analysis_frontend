// 학업성취율 공통
export interface AchievementRate {
    // 빠른 학습자 건수
    fastStudentCount: number | null;
    // 조금 빠른 학습자 건수
    littleFastStudentCount: number | null;
    // 중간 학습자 건수
    middleStudentCount: number | null;
    // 조금 느린 학습자 건수
    littleSlowStudentCount: number | null;
    // 느린 학습자 건수
    slowStudentCount: number | null;
    // 미학습 건수
    noLeaningStudentCount: number | null;
}

// 선택한 컬러 그룹 정보
export interface AchievementRateInfo {
    // 선택한 컬러 그룹
    selectedColorGroup: string | null;
    tab: string;
    isExpand: boolean;
}

export interface Lesson {
    dataSize: number | null;
    timestamp: string | null;
    httpCode: number | null;
    message: string | null;
    data: AchievementRate;
}

export interface AssignmentProps {
    data: {
        assignment: string;
    };
}

export interface AchievementRateProps {
    date: string;
    chId: number;
    sessId?: number;
}

/**
 * TODO: 변경 필요
 */
interface LessonProps {
    data: {
        test: string;
    };
}

const defaultUrl = '/teacher/dashboard/learningAnalytics';

/**
 * 성취율 (교사용 > 학습분석 > 오늘의 학업 성취율 / 단원별 누적 성취율 / 팝업)
 */
export const useApiLessonStore = defineStore(
    'apiLesson',
    () => {
        // 성취율 공통
        const lessonCommonState: Ref<AchievementRateInfo> = ref({
            selectedColorGroup: null,
            tab: 'one',
            isExpand: false
        });

        // 오늘의 학업 성취율
        const lessonState: Ref<AchievementRate> = ref();

        // 오늘의 학업 성취율 팝업
        const lessonPopupState = ref<Lesson>();

        // 피드백
        const lessonFeedbackState = ref<Lesson>();

        // 단원별 누적 성취율
        const lessonAccumulatedState = ref<Lesson>();

        /**
         * 오늘의학업 성취율
         * @param date 선택일자
         * @param chId 단원 ID
         * @param sessId 차시ID
         */
        const getLessonAchievementRate = async ({ date, chId, sessId }: AchievementRateProps) => {
            const params = `date=${date}&chId=${chId}&sessId=${sessId}`;
            const { data } = await useCustomFetch(`${defaultUrl}/todayAcademicAchievementRate?${params}`, {
                method: 'get'
            });
            if (data.value) {
                lessonState.value = data.value.data;
            }
        };

        /**
         * 오늘의학업 성취율 > 학습자 학생목록
         */
        const getLessonLearnerStudent = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/learnerStudent`, {
                method: 'get'
            });
            if (data.value) {
                lessonState.value = data.value.data as Lesson;
            }
        };

        /**
         * 선택한 학생 정보
         * 월드버텍이 관리하지 않는 API
         */
        const getLessonChoiceStudent = async () => {
            // TODO:URL 미정 - 변경 필요
            const { data } = await useCustomFetch(`${defaultUrl}/`, {
                method: 'get'
            });
            if (data.value) {
                lessonState.value = data.value.data as Lesson;
            }
        };

        const collectedColorState = ref();
        const remainingColorState = ref<Lesson>();
        /**
         * 오늘의학업 성취율 > 개인별 숫자 색칠판 현황 팝업 > 남은색깔조각 개수
         * GET
         */
        const getPopupRemainColor = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/numberOfColorPiecesRemaining`, {
                method: 'get'
            });
            if (data.value) {
                remainingColorState.value = data.value.data as Lesson;
            }
        };

        /**
         *
         * 오늘의학업 성취율 > 개인별 숫자 색칠판 현황 팝업 > 남은 색깔조각 도안 정보
         * GET
         */
        const getPopupRemainColorDesign = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/remainingColorFragmentDesign`, {
                method: 'get'
            });
            if (data.value) {
                lessonPopupState.value = data.value.data as Lesson;
            }
        };

        /**
         * 오늘의학업 성취율 > 개인별 숫자 색칠판 현황 팝업 > 수집한색깔조각 개수
         * GET
         */
        const getPopupCollectedColor = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/numberOfColorPiecesCollected`, {
                method: 'get'
            });
            if (data.value) {
                collectedColorState.value = data.value.data as Lesson;
            }
        };

        /**
         * 오늘의학업 성취율 > 개인별 숫자 색칠판 현황 팝업 > 수집한색깔조각 전체 도안 정보
         * GET
         */
        const getPopupCollectedColorDesigns = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/listOfCollectedColorFragmentDesigns`, {
                method: 'get'
            });
            if (data.value) {
                lessonPopupState.value = data.value.data as Lesson;
            }
        };

        /**
         * 오늘의학업 성취율 > 개인별 숫자 색칠판 현황 팝업 > 피드백 도장 보내기
         * POST
         */
        const getPopupSendFeedbackStamp = async (stempData: LessonProps) => {
            const { data } = await useCustomFetch(`${defaultUrl}/sendFeedbackStamp`, {
                method: 'post',
                body: JSON.stringify(stempData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (data.value) {
                lessonFeedbackState.value = data.value.data as Lesson;
            }
        };

        /**
         * 오늘의학업 성취율 > 개인별 숫자 색칠판 현황 팝업 > 피드백 도장 조회
         * GET
         */
        const getPopupFeedbackStamp = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/feedbackStamp`, {
                method: 'get'
            });
            if (data.value) {
                lessonFeedbackState.value = data.value.data as Lesson;
            }
        };

        /**
         * 단원별 누적 성취율(상단)
         * GET
         * @param date 선택일자
         * @param chId 단원ID
         */
        const getAccumulatedAchievementRateByUnit = async ({ date, chId }: AchievementRateProps) => {
            const params = `date=${date}&chId=${chId}`;
            const { data } = await useCustomFetch(`${defaultUrl}/accumulatedAchievementRateByUnit?${params}`, {
                method: 'get'
            });
            if (data.value) {
                lessonState.value = data.value.data;
            }
        };

        /**
         * 단원별 누적 성취율 > 개인별 단원 학업성취율
         * 단원별 누적 성취율 테이블
         * GET
         */
        const getUnitAcademicAchievementRate = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/individualUnitAcademicAchievementRate`, {
                method: 'get'
            });
            if (data.value) {
                lessonAccumulatedState.value = data.value.data;
            }
        };

        /**
         * 단원별 누적 성취율 > 개인별 단원 학업성취율 > 맞춤 단원평가 출제 > 난이도별 문항조회
         * GET
         */

        const getQuestionsByDifficultyLevel = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/questionsByDifficultyLevel`, {
                method: 'get'
            });
            if (data.value) {
                lessonAccumulatedState.value = data.value.data as Lesson;
            }
        };

        /**
         * 단원별 누적 성취율 > 개인별 단원 학업성취율 > 맞춤 단원평가 출제 > 과제보내기
         * POST
         * /teacher/dashboard/learningAnalytics/assignment
         */

        const postAssignment = async (assignment: AssignmentProps) => {
            const { data } = await useCustomFetch(`${defaultUrl}/assignment`, {
                method: 'post',
                body: JSON.stringify(assignment),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (data.value) {
                lessonAccumulatedState.value = data.value.data as Lesson;
            }
        };

        return {
            lessonCommonState,
            lessonState,
            lessonPopupState,
            lessonFeedbackState,
            getLessonAchievementRate,
            getLessonLearnerStudent,
            getLessonChoiceStudent,
            // 오늘의학업 성취율 > 개인별 숫자 색칠판 현황 팝업
            remainingColorState,
            collectedColorState,
            getPopupRemainColor,
            getPopupRemainColorDesign,
            getPopupCollectedColor,
            getPopupCollectedColorDesigns,
            // 피드백 관련
            getPopupSendFeedbackStamp,
            getPopupFeedbackStamp,
            // 단원별 누적 성취율
            getAccumulatedAchievementRateByUnit,
            getUnitAcademicAchievementRate,
            getQuestionsByDifficultyLevel,
            postAssignment
        };
    },
    {
        persist: false
    }
);
