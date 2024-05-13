<template>
    <v-card height="56rem" elevation="0" class="v-card-yellow v-card-with_flag flex-1-1-100">
        <div class="selfCheck">
            <div class="flag flag-left">
                <span>{{ props?.sessionInfo }}차시</span>
            </div>
            <v-card-item>
                <v-card-title>
                    <span> 진도 학습을 스스로 점검해 볼까요?</span>
                    <v-spacer></v-spacer>
                    <v-btn class="icon_only icon_only-sm" rounded flat @click="openModal({ type: 'selfCheck' })"
                        ><i class="ico more"
                    /></v-btn>
                </v-card-title>
            </v-card-item>
            <v-card-text class="px30 py30">
                <v-list class="list_dot py-0">
                    <v-list-item v-for="(question, index) in questionState" :key="index" class="py-0" min-height="auto">{{
                        question?.content
                    }}</v-list-item>
                </v-list>
                <v-chip-group selected-class="active" mandatory v-model="selection" @update:model-value="registerSelfCheck">
                    <v-chip
                        class="px-1 py-1"
                        variant="text"
                        color="transparent"
                        v-for="(item, index) in imojiList"
                        :key="index"
                        :value="item"
                        ><i class="ico" :class="`imoji${index + 1}`"></i>{{ item }}</v-chip
                    >
                </v-chip-group>
            </v-card-text>
        </div>
    </v-card>
    <template v-if="modalData.type === 'selfCheck'">
        <ModalSelfCheck />
    </template>
</template>
<script setup>
const props = defineProps({
    /**
     * 차시 정보 -> 현재 프롭스로 관리하고 있지만 , 전역 store로 관리 예정
     */
    sessionInfo: { type: Number, default: 628 },
    /**
     *
     */
    chId: { type: Number, default: 314 }
});

const imojiList = ref([5, 4, 3, 2, 1]);

const { modalData, openModal } = useModalStore();

const selection = ref(null);

const apiTodayStore = useApiTodayStore();
const { questionState } = storeToRefs(apiTodayStore);

const registerSelfCheck = async () => {
    const data = await apiTodayStore.postTodayFivePointScale({
        chId: props.chId,
        sessId: props.sessionInfo,
        selfCheckScale: selection.value
    });
    return data;
};

onMounted(() => {
    apiTodayStore.getTodayChapterAchievementCriteriaQuestion(props.sessionInfo);
});
</script>
