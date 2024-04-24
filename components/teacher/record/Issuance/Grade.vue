<template>
    <div class="grade">
        <div class="top d-flex">
            <div class="type d-flex align-center">
                <p class="">평어 유형</p>
                <v-btn-toggle v-model="typeList" @update:modelValue="val => console.log(val)" class="d-flex" mandatory density="compact">
                    <v-btn rounded flat size="small" class="secondary"> A형 </v-btn>
                    <v-btn rounded flat size="small" class="secondary"> B형 </v-btn>
                    <v-btn rounded flat size="small" class="secondary"> C형 </v-btn>
                </v-btn-toggle>
            </div>
            <v-spacer />
            <div class="align d-flex align-center">
                <p>정렬 기준</p>
                <v-btn rounded flat size="small" class="secondary">
                    <i class="ico descending_black ico_size_6 mgr5"></i>
                    기본순
                </v-btn>
                <v-btn rounded flat size="small" class="primary mgl10">
                    <i class="ico descending_white ico_size_6 mgr5"></i>
                    인기순
                </v-btn>
            </div>
        </div>
        <TableEdit />
    </div>
</template>
<script setup>
const { typeList } = storeToRefs(useApiRecordGradeStore());

onMounted(async () => {
    // [교사] 단원별 평어 작성_학생 목록 조회
    await useApiRecordGradeStore().getQualificationByUnitStudentList();
    // [교사] 개인별 평어 목록
    // await useApiRecordGradeStore().getPersonalListOfQualification();
    // [교사] 개인별 평어 편집 조회
    // await useApiRecordGradeStore().getIndividualEditsSearch();
});
</script>
