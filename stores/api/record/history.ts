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
        /**
         * [교사] 영역별 학업 성취율
         */
        const achievementByArea = ref<Record>();
        const getAchievementByArea = async params => {
            const { data } = await useCustomFetch(`/teacher/dashboard/schoolReport/academicAchievementByAreaThisSemester`, {
                method: 'get',
                query: params
            });

            if (data.value) {
                achievementByArea.value = data.value.data as Record;
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
        const learningHistoryCollection = ref<Record>();
        const getLearningHistoryCollection = async (semiId: String, studUuid: String) => {
            const { data } = await useCustomFetch(`/teacher/dashboard/schoolReport/learningHistoryCollection`, {
                method: 'get',
                query: {
                    semId: '1',
                    studUuid: studUuid
                }
            });
            if (data.value) {
                learningHistoryCollection.value = data.value.data as Record;
                const item = learningHistoryCollection.value;
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
            const queryString = new URLSearchParams(params).toString();
            const { data } = await useCustomFetch(
                `${basetUrl}/teacher/dashboard/schoolReport/saveDisplayLearningHistoryCollection?${queryString}`,
                {
                    method: 'put'
                }
            );

            return { data };
        };

        /**
         * [교사] 학기 현재 진행중인 학기
         */
        const semesterInProgress = ref<Record>();
        const getSemesterInProgress = async () => {
            const { data } = await useCustomFetch(`${basetUrl}/teacher/dashboard/schoolReport/schoolReportsemesterInProgress`, {
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

        /**
         * [학생] 학기 현재 진행중인 학기
         */
        const studentSemesterInProgress = ref<Record>();
        const getStudentSemesterInProgress = async () => {
            const { data } = await useCustomFetch(`${basetUrl}/student/dashboard/schoolReport/schoolReportsemesterInProgress`, {
                method: 'get'
            });

            if (data.value) {
                studentSemesterInProgress.value = data.value as Record;
            }
        };

        return {
            //[교사] 학습이력수집
            achievementByArea,
            dayChart,
            wordChart,
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

            //[학생] 생활기록부
            studentAchievementByArea,
            studentAchievementByUnit,
            studentDevelopment,
            studentLearningHistoryCollection,
            studentSemesterInProgress,
            getStudentAchievementByArea,
            getStudentAchievementByUnit,
            getStudentDevelopment,
            getStudentLearningHistoryCollection,
            getStudentSemesterInProgress
        };
    },
    {
        persist: false
    }
);
