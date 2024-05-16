<template>
    <v-card elevation="0" height="54rem" class="v-card-green tabs fluid">
        <v-card-item>
            <v-card-title>
                <span class="font-color-primary">
                    <time :datetime="formatDate">
                        {{ dayjs(formatDate).format(t('analytics.timeFormat')) }}
                    </time>
                    {{ t('analytics.curi.index.classInformation') }}
                </span>
                <v-tabs v-model="tab" @update:model-value="handleGetData">
                    <v-tab value="tab1">{{ t('analytics.curi.index.text1') }}</v-tab>
                    <v-tab value="tab2">{{ t('analytics.curi.index.text2') }}</v-tab>
                    <v-tab value="tab3">{{ t('analytics.curi.index.text3') }}</v-tab>
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
const { t } = useI18n();
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
