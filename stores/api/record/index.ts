interface RecordCount {}

/**
 * [교사] 생활기록부_학습이력수집
 * [학생] 생활기록부
 */

export const useApiRecordStore = defineStore(
    'apiRecord',
    () => {
        const clampType = ref('clamp_left');
        const selectedStudentIndex = ref(0);
        /**
         * [교사] 목록 (학습 이력, 단원별 평어 작성, 발행 완료 건수)
         * @param schoolReportCount 학습이력수집 건수
         * @param schoolReportLearningDevelopCount 단원별 평어 작성 건수
         * @param schoolReportIssueCompletedCount 발행완료 건수
         * @param currentSemester 생활기록부 (0: 발행기간 x, 9: 1학기, 10: 2학기)
         * @param semesterInProgress 진행중인 생활기록부 학기 체크 (10 : 현재 학기가 1학기이고 생활기록부 발행기간이 아닐때, 11 : 현재 학기가 1학기이고 생활기록부 발행기간일때, 20 : 현재 학기가 2학기이고 생활기록부 발행기간이 아닐때, 21 : 현재 학기가 2학기이고 생활기록부 발행기간일때)
         */

        const issuanceStatus = ref<RecordCount>();
        const getIssuanceStatus = async (semiId: String) => {
            const { data } = await useCustomFetch(`/teacher/dashboard/schoolReport/learningHistoryCollectionCount`, {
                method: 'get',
                params: semiId
            });
            if (data.value) {
                issuanceStatus.value = data.value.data as RecordCount;
            }
        };

        return {
            clampType,
            selectedStudentIndex,
            issuanceStatus,
            getIssuanceStatus
        };
    },
    {
        persist: false
    }
);
