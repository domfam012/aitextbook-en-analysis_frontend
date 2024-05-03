interface RecordList {}
interface StudentList {}
interface Record {}

/**
 * 생활기록부 > 발행현황 > 발행완료건수
 */
const baseUrl = `https://aidtenasis-api.i-screammedia.com`;

export const useApiCompletionStore = defineStore(
    'apiCompleteRecordList',
    () => {
        const mode = useCookie('mode');
        const completionState = ref<RecordList>();

        /**
         * 생활기록부 > 발행현황 > 발행완료건수 > 학생 목록
         */
        const completionStudent = ref([]);
        const getStudentList = async () => {
            const { data } = await useCustomFetch(`${baseUrl}/teacher/dashboard/schoolReport/issueCompletedStudentList`, {
                method: 'get'
            });
            if (data.value) {
                completionStudent.value = data.value.data as RecordList;
            }
        };

        /**
         * 생활기록부 > 발행현황 > 발행완료건수 > 단원별 교과 학습 발달 사항
         */
        const getStudentDevelopmentList = async studUuid => {
            const { data } = await useCustomFetch(
                `${baseUrl}/${mode.value}/dashboard/schoolReport/developmentalProgressInEachUnitOfTheCurriculum`,
                {
                    method: 'get',
                    query: {
                        studUuid: studUuid
                    }
                }
            );
            if (data.value) {
                completionState.value = data.value.data as RecordList;
            }
        };

        /**
         * 생활기록부 > 발행현황 > 발행완료건수 > 부모님 발송 완료 처리
         */
        const putCompletion = async params => {
            const { data } = await useCustomFetch(`${baseUrl}/teacher/dashboard/schoolReport/processingTheCompletionOfTheParentsShipment`, {
                method: 'put',
                body: JSON.stringify(params)
            });
            return data;
        };

        return {
            completionState,
            getStudentList,
            completionStudent,
            getStudentDevelopmentList,
            putCompletion
        };
    },
    {
        persist: false
    }
);
