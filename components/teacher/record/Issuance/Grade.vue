<template>
    <div class="grade">
        <div v-if="!isEditMode" class="top d-flex">
            <div class="type d-flex align-center">
                <p class="">{{ t('record.issuance.grade.unitType') }}</p>
                <v-btn-toggle
                    v-model="unitType"
                    @update:modelValue="val => updateDivisionCode(val)"
                    class="d-flex"
                    mandatory
                    density="compact"
                >
                    <v-btn rounded flat size="small" class="secondary" value="A"> {{ t('record.issuance.grade.typeA') }} </v-btn>
                    <v-btn rounded flat size="small" class="secondary" value="B"> {{ t('record.issuance.grade.typeB') }} </v-btn>
                    <v-btn rounded flat size="small" class="secondary" value="C"> {{ t('record.issuance.grade.typeC') }} </v-btn>
                </v-btn-toggle>
            </div>
        </div>
        <TableEdit />
    </div>
</template>
<script setup>
const { isEditMode } = storeToRefs(useApiRecordGradeStore());
const { qualificationByUnitStudentList, unitType } = storeToRefs(useApiRecordGradeStore());
const { t } = useI18n();

//현재학기
const { semesterInProgress } = storeToRefs(useApiRecordHistoryStore());

//TODO: 파라미터 동적 변경
onMounted(async () => {
    if (unitType.value !== 'A') unitType.value = 'A';
    // [교사] 단원별 평어 작성_학생 목록 조회
    await useApiRecordGradeStore().getQualificationByUnitStudentList();
    // [교사] 개인별 평어 목록
    await useApiRecordGradeStore().getPersonalListOfQualification({
        studUuid: qualificationByUnitStudentList.value[0].studUuid,
        semId: semesterInProgress.value.currentSemester,
        divisionCode: unitType.value,
        orderLEsson: 'asc',
        orderLevel: 'desc'
    });
});

const updateDivisionCode = async val => {
    await useApiRecordGradeStore().getPersonalListOfQualification({
        studUuid: qualificationByUnitStudentList.value[0].studUuid,
        semId: semesterInProgress.value.currentSemester,
        divisionCode: unitType.value,
        orderLEsson: 'asc',
        orderLevel: 'desc'
    });
};
</script>
