<template>
    <!-- (개발용)로그아웃버튼 -->
    <v-btn rounded size="x-small" class="primary ml-2 px-2" color="green" flat @click="useAuthStore().logoutUser()">(개발용)로그아웃</v-btn>
    <!-- //(개발용)로그아웃버튼 -->

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
