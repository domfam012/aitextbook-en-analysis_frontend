<template>
    <v-card elevation="0" height="54rem" class="v-card-green tabs fluid">
        <v-card-item>
            <v-card-title>
                <span class="font-color-primary">
                    <time :datetime="formatDate">
                        {{ dayjs(formatDate).format('MM월 DD일 dddd') }}
                    </time>
                    수업 정보
                </span>
                <v-tabs v-model="tab" @update:model-value="handleGetData">
                    <v-tab value="tab1">숫자 색칠판 완성하기</v-tab>
                    <v-tab value="tab2">큐리가 칭찬한 표현</v-tab>
                    <v-tab value="tab3">큐리가 아쉬워한 표현</v-tab>
                </v-tabs>
                <v-btn class="icon_only" rounded flat
                    ><i class="ico more ico_size_10" @click="openModal({ type: 'aiCuri', buttonLabels: [], closeBtnClass: true })"
                /></v-btn>
            </v-card-title>
        </v-card-item>
        <v-container fluid>
            <v-window v-model="tab">
                <v-window-item value="tab1">
                    <StudentAnalyticsCuriColoring />
                </v-window-item>
                <v-window-item value="tab2">
                    <StudentAnalyticsCuriCorrect />
                </v-window-item>
                <v-window-item value="tab3">
                    <StudentAnalyticsCuriIncorrect />
                </v-window-item>
            </v-window>
        </v-container>
    </v-card>

    <Modal v-if="modalData.type === 'aiCuri'"> <ModalCuriTalkInfo /> </Modal>
</template>
<script setup>
const dayjs = useDayjs();
const tab = ref(null);

const calendarStore = useApiCalendarStore();
const curiStore = useApiCuriStore();

const { modalData, openModal, closeModal } = useModalStore();
const { formatDate } = storeToRefs(calendarStore);

const handleGetData = async () => {
    switch (tab.value) {
        case 'tab1':
            await curiStore.getCuriNumColorFragmentDesign();
            break;
        case 'tab2':
            await curiStore.getCuriComplimentExpression();
            break;
        case 'tab3':
            await curiStore.getCuriRegretfulExpression();
            break;
        default:
            break;
    }
};

onMounted(() => {
    handleGetData();
});

watch(
    () => formatDate.value,
    async () => {
        await handleGetData();
    }
);
</script>
