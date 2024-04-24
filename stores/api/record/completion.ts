interface RecordList {}
interface StudentList {}
interface Record {}

/**
 * 생활기록부 > 발행현황 > 발행완료건수
 */
// const basetUrl = `https://aidtenasis-api.i-screammedia.com`;

export const useApiCompletionStore = defineStore(
    'apiCompleteRecordList',
    () => {
        const completionState = ref<RecordList>();

        /**
         * 생활기록부 > 발행현황 > 발행완료건수 > 학생 목록
         */
        const completionStudent = ref([]);
        const getStudentList = async () => {
            const { data } = await useCustomFetch('/teacher/dashboard/schoolReport/issueCompletedStudentList', {
                method: 'get'
            });
            if (data.value) {
                completionStudent.value = data.value.data as RecordList;
            }
        };

        /**
         * 생활기록부 > 발행현황 > 발행완료건수 > 단원별 교과 학습 발달 사항
         */
        const getStudentDevelopmetnList = async () => {
            const { data } = await useCustomFetch('/teacher/dashboard/schoolReport/developmentalProgressInEachUnitOfTheCurriculum', {
                method: 'get'
            });
            if (data.value) {
                completionState.value = data.value.data as RecordList;
            }
        };

        /**
         * 생활기록부 > 발행현황 > 발행완료건수 > 부모님 발송 완료 처리
         */
        const putCompletion = async () => {
            const { data } = await useCustomFetch('/teacher/dashboard/schoolReport/processingTheCompletionOfTheParentsShipment', {
                method: 'put'
            });
            return data;
        };

        return {
            completionState,
            getStudentList,
            completionStudent,
            getStudentDevelopmetnList,
            putCompletion
        };
    },
    {
        persist: false
    }
);
