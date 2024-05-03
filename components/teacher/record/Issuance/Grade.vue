<template>
    <div class="grade">
        <div v-if="!isEditMode" class="top d-flex">
            <div class="type d-flex align-center">
                <p class="">평어 유형</p>
                <v-btn-toggle v-model="unitType" class="d-flex" mandatory density="compact">
                    <v-btn rounded flat size="small" class="secondary"> A형 </v-btn>
                    <v-btn rounded flat size="small" class="secondary"> B형 </v-btn>
                    <v-btn rounded flat size="small" class="secondary"> C형 </v-btn>
                </v-btn-toggle>
            </div>
        </div>
        <TableEdit />
    </div>
</template>
<script setup>
const { isEditMode } = storeToRefs(useApiRecordGradeStore());
const { qualificationByUnitStudentList } = storeToRefs(useApiRecordGradeStore());
const unitType = ref(0);

onMounted(async () => {
    // [교사] 단원별 평어 작성_학생 목록 조회
    await useApiRecordGradeStore().getQualificationByUnitStudentList();

    if (qualificationByUnitStudentList.value[0]?.studUuid) {
        // [교사] 개인별 평어 목록
        await useApiRecordGradeStore().getPersonalListOfQualification({
            studUuid: qualificationByUnitStudentList.value[0].studUuid,
            semId: '1',
            divisionCode: 'A',
            orderLEsson: 'asc',
            orderLevel: 'desc'
        });
    }
});
</script>
