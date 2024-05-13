export interface Course {
    success: boolean;
    dataSize: number;
    timestamp: string;
    data: {
        name: string;
    };
}

export interface TeacherLearningSession {
    // 일자
    dt: string | null;
    // 교육청코드
    eduOfficeCode: string | null;
    // 학기ID
    semId: number | null;
    // 학급UUID
    clssUuid: string | null;
    // 교사UUID
    tchrUuid: string | null;
    // 학생UUID
    studUuid: string | null;
    // 학습 유형
    lmTypAkey: string | null;

    // 단원ID
    chId: number | null;
    // 차시ID
    sessId: number | null;
    // 단원명
    chName: string | null;
    // 차시명
    sessionName: string | null;
    // 교과서 쪽수
    bookPageCount: number | null;
}

const defaultUrl = '/teacher/dashboard/learningAnalytics';

/**
 * 교과서
 */
export const useApiCourseStore = defineStore(
    'apiCourse',
    () => {
        const courseState = ref<Course>(); // 테스트용
        const teacherLearningSessionState: Ref<TeacherLearningSession[]> = ref([]); //
        const currentPage = ref(0);

        /**
         * 해당일 차시 리스트( 차시명, 차시순서, 교과서 쪽수)
         * parameter : date (선택일자)
         * query : ex) 2024-04-08
         */
        const getLearningSessionInfos = async (date: string) => {
            const { data } = await useCustomFetch(`${defaultUrl}/learningSessionInfos`, {
                method: 'get',
                params: { date }
            });

            if (data.value.data) {
                teacherLearningSessionState.value = data.value.data;
                return data.value.data;
            }
        };

        return {
            courseState,
            teacherLearningSessionState,
            getLearningSessionInfos,
            currentPage
        };
    },
    {
        persist: false
    }
);
