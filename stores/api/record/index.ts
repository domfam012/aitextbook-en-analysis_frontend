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
