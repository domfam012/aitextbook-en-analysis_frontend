<template>
    <div class="grade">
        <div class="top d-flex">
            <div class="type d-flex align-center">
                <p class="">평어 유형</p>
                <v-btn-toggle v-model="unitType" @update:modelValue="val => console.log(val)" class="d-flex" mandatory density="compact">
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
const unitType = ref(0);
const { qualificationByUnitStudentList } = storeToRefs(useApiRecordGradeStore());

onMounted(async () => {
    // [교사] 단원별 평어 작성_학생 목록 조회
    await useApiRecordGradeStore().getQualificationByUnitStudentList();
    // [교사] 개인별 평어 목록
    await useApiRecordGradeStore().getPersonalListOfQualification({
        studUuid: qualificationByUnitStudentList.value[0].studUuid,
        semId: '1',
        divisionCode: 'A',
        orderLEsson: 'asc',
        orderLevel: 'desc'
    });
    // [교사] 개인별 평어 편집 조회
    // await useApiRecordGradeStore().getIndividualEditsSearch();
});
</script>
