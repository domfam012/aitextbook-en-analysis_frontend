<template>
    <!-- 학습분석 메인 -->
    <StudentAnalytics />
</template>

<script setup>
onBeforeMount(async () => {
    //토큰
    useToken('student', 'analytics');
});
</script>

<style lang="scss" scoped></style>
