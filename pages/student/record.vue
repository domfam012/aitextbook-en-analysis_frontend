<template>
    <template v-if="semesterInProgress">
        <Empty v-if="semesterInProgress.currentSemester === 0" />
        <StudentRecord v-else />
    </template>
</template>

<script setup>
const apiRecordHistory = useApiRecordHistoryStore();
const { semesterInProgress } = storeToRefs(apiRecordHistory);
onBeforeMount(async () => {
    //토큰
    await useToken('student', 'record');
    await apiRecordHistory.getSemesterInProgress();
});
</script>

<style lang="scss" scoped></style>
