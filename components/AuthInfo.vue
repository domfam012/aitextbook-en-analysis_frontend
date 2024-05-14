<template>
    <div class="authInfo title">
        <div class="d-flex align-center">
            <i class="ico ico_size_4 people mr-2" />
            <p>
                {{ t('common.authInfo.title') }} : <span>{{ authState?.count }}</span
                >{{ t('common.unit.cnt') }}
            </p>
        </div>
        <!-- 학생/교사 구분 mode로 분기 -->
        <div v-if="mode === 'teacher'" class="d-flex align-center mgl30">
            <p>{{ t('common.authInfo.content') }} <span>16</span>{{ t('common.authInfo.content2') }}</p>
            <v-btn flat rounded class="dark_blue size_xxs ml-2" @click="authStore.getAuthInfo()">
                <i class="ico refresh ico_size_sm mr-1"></i>
                {{ t('common.button.refresh') }}
            </v-btn>
        </div>
    </div>
</template>
<script setup>
//학생/교사 구분값
const mode = useCookie('mode');
//로그인정보API
const authStore = useAuthStore();
const { authState } = storeToRefs(authStore);
const { t } = useI18n();

onMounted(() => {
    authStore.getAuthInfo();
});
</script>
