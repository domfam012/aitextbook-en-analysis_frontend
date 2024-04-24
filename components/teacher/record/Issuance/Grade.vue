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
            <v-spacer />
            <div class="align d-flex align-center">
                <p>정렬 기준</p>
                <v-btn rounded flat size="small" :class="orderType === 0 ? 'primary' : 'secondary'" @click="orderType = 0">
                    <i class="ico ico_size_6 mgr5" :class="orderType === 0 ? 'descending_white' : 'descending_black'"></i>
                    기본순
                </v-btn>
                <v-btn rounded flat size="small" class="mgl10" :class="orderType === 0 ? 'secondary' : 'primary'" @click="orderType = 1">
                    <i class="ico ico_size_6 mgr5" :class="orderType === 0 ? 'descending_black' : 'descending_white'"></i>
                    인기순
                </v-btn>
            </div>
        </div>
        <TableEdit />
    </div>
</template>
<script setup>
const unitType = ref(0);
const orderType = ref(0);

onMounted(async () => {
    // [교사] 단원별 평어 작성_학생 목록 조회
    await useApiRecordGradeStore().getQualificationByUnitStudentList();
    // [교사] 개인별 평어 목록
    // await useApiRecordGradeStore().getPersonalListOfQualification();
    // [교사] 개인별 평어 편집 조회
    // await useApiRecordGradeStore().getIndividualEditsSearch();
});
</script>
