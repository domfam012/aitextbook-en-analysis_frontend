interface RecordList {}
interface StudentList {}
interface Record {}

/**
 * [교사] 생활기록부_단원별평어작성
 */

const basetUrl = `https://aidtenasis-api.i-screammedia.com`;

export const useApiRecordGradeStore = defineStore(
    'apiRecordGrade',
    () => {
        const isEditMode = ref(false);

        /**
         * [교사] 개인별 평어 편집 조회
         */
        const individualEditsSearch = ref<StudentList>();
        const getIndividualEditsSearch = async () => {
            const { data } = await useCustomFetch(`/teacher/dashboard/schoolReport/individualEditsSearch`, {
                method: 'get'
            });

            if (data.value) {
                individualEditsSearch.value = data.value.data as StudentList;
            }
        };

        /**
         * [교사] 개인별 평어 목록
         */
        const personalListOfQualification = ref<StudentList>();
        const getPersonalListOfQualification = async (params: object) => {
            const { data } = await useCustomFetch(`/teacher/dashboard/schoolReport/personalListOfQualification`, {
                method: 'get',
                query: params
            });

            if (data.value) {
                personalListOfQualification.value = data.value.data as StudentList;
            }
        };

        /**
         * [교사] 단원별 평어 작성_평어 조회
         */
        const qualificationByUnit = ref<StudentList>();
        const getQualificationByUnit = async () => {
            const { data } = await useCustomFetch('/teacher/dashboard/schoolReport/qualificationByUnit', {
                method: 'get'
            });

            if (data.value) {
                qualificationByUnit.value = data.value.data as StudentList;
            }
        };

        /**
         * [교사] 단원별 평어 작성_학생 목록 조회
         */
        const qualificationByUnitStudentList = ref<StudentList>();
        const getQualificationByUnitStudentList = async () => {
            const { data } = await useCustomFetch('/teacher/dashboard/schoolReport/qualificationByUnitStudentList', {
                method: 'get'
            });

            if (data.value) {
                qualificationByUnitStudentList.value = data.value.data as StudentList;
            }
        };

        /**
         * [교사] 개인별 평어 저장
         */
        const putSaveIndividualEdits = async (params: Record) => {
            const { data } = await useCustomFetch(`/teacher/dashboard/schoolReport/saveIndividualEdits`, {
                method: 'put',
                params: params
            });
        };

        /**
         * [교사] 텍스트 편집 저장
         */
        const putSaveTextEdits = async (params: Record) => {
            const { data } = await useCustomFetch(`/teacher/teacher/dashboard/schoolReport/saveTextEdits`, {
                method: 'put',
                params: params
            });
        };

        return {
            isEditMode,
            individualEditsSearch,
            personalListOfQualification,
            qualificationByUnit,
            qualificationByUnitStudentList,
            getIndividualEditsSearch,
            getPersonalListOfQualification,
            getQualificationByUnit,
            getQualificationByUnitStudentList,
            putSaveIndividualEdits,
            putSaveTextEdits
        };
    },
    {
        persist: false
    }
);
