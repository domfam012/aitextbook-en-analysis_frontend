<template>
    <div>
        <v-btn rounded size="small" class="primary ml-2 px-2" flat @click="userLogin('login')">로그인</v-btn>
        <v-btn rounded size="small" class="primary ml-2 px-2" flat @click="authStore.logoutUser()">로그아웃</v-btn>

        <v-btn rounded size="small" class="primary ml-2 px-2" color="blue" @click="userLogin('analytics')">학습 분석</v-btn>
        <v-btn rounded size="small" class="primary ml-2 px-2" color="blue" flat @click="userLogin('record')">생활 기록부</v-btn>
    </div>
    <Modal @handle-action="closeModal()" />
</template>

<script setup>
const { openModal, closeModal } = useModalStore();
const authStore = useAuthStore();

//(임시)영어로그인
const userLogin = async page => {
    if (page === 'login') {
        await authStore.loginUser();
    } else {
        const url = new URL(window.location.href);
        const params = url.searchParams;
        const token = params.get('idToken');
        const type = params.get('type');

        if (token && type) {
            authStore.getAuthInfo();
            useRouter().push(`/${type === 'T' ? 'teacher' : 'student'}/${page}?token=${token}`);
        } else {
            alert('로그인 후 이용 가능');
            // openModal({
            //     type: 'login',
            //     message: '로그인',
            //     buttonLabels: ['아니요', '예']
            // });
        }
    }
};
</script>

<style lang="scss" scoped></style>
