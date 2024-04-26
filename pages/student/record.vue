<template>
    <!-- 생활기록 부 메인 -->
    <StudentRecord />
    <!-- <Empty /> -->
</template>

<script setup>
onBeforeMount(async () => {
    //토큰
    useToken('student');
});
</script>

<style lang="scss" scoped></style>
