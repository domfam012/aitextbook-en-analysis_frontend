<template>
    <div class="authInfo title">
        <div class="d-flex align-center">
            <i class="ico ico_size_4 people mr-2" />
            <p>
                오늘 로그인 횟수 : <span>{{ authState?.count }}</span
                >회
            </p>
        </div>
        <!-- 학생/교사 구분 user로 분기 -->
        <div v-if="user === 'teacher'" class="d-flex align-center mgl30">
            <p>오늘 학습한 내용은 <span>16</span>시 이후에 분석됩니다.</p>
            <v-btn flat rounded class="dark_blue size_xxs ml-2" @click="authStore.getAuthInfo()">
                <i class="ico refresh ico_size_sm mr-1"></i>
                새로고침
            </v-btn>
        </div>
        <!-- (개발용)로그아웃버튼 -->
        <v-btn rounded size="x-small" class="primary ml-2 px-2" color="green" flat @click="useAuthStore().logoutUser()"
            >(개발용)로그아웃</v-btn
        >
        <!-- //(개발용)로그아웃버튼 -->
    </div>
</template>
<script setup>
//학생/교사 구분값
const user = useCookie('user');
//로그인정보API
const authStore = useAuthStore();
const { authState } = storeToRefs(authStore);

onMounted(() => {
    authStore.getAuthInfo();
});
</script>
