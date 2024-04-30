<template>
    <!-- 학습분석 메인 -->
    <TeacherAnalytics />
</template>

<script setup>
onBeforeMount(async () => {
    //토큰
    useToken('teacher', 'analytics');
});
</script>

<style lang="scss" scoped></style>
