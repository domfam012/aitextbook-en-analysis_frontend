<template>
    <!-- 생활기록부 메인 -->
    <TeacherRecord />
    <!-- <Empty /> -->
</template>

<script setup>
onBeforeMount(async () => {
    //토큰
    useToken('teacher');
});
</script>

<style lang="scss" scoped></style>
