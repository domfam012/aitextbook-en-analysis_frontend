<template>
    <v-sheet class="colorLessonInfo">
        <!-- 데이터 있을 때 -->
        <div v-if="curiState?.length > 0" class="inner">
            <div class="inner_title">
                <h3 class="bullet">{{ t('analytics.curi.coloring.text') }}</h3>
            </div>
            <v-list class="d-flex px30 py-0">
                <v-list-item class="px15 py15 cursor" v-for="(item, index) in curiState" :key="index" @click="$event => handleClick(index)">
                    <TeacherAnalyticsLearnColorBoard :stamp="item.stampId" :grid="JSON.parse(item.dsgnUseInfo)" class="mt-3" />
                </v-list-item>
            </v-list>
        </div>

        <!-- 데이터 없을 때 -->
        <div v-else class="card_no_data">
            <i class="ico no_color_board ico_size_25" />
            <p>{{ t('analytics.noData') }}</p>
        </div>
    </v-sheet>
    <Modal v-if="modalData?.type === 'coloring'">
        <ModalColoringBoard v-if="modalData?.isOpen" :selected="selectedIndx" />
    </Modal>
</template>

<script setup>
const { t } = useI18n();
const { modalData, openModal, closeModal } = useModalStore();
const curiStore = useApiCuriStore();

const { curiState } = storeToRefs(curiStore);

const selectedIndx = ref(null);

const handleClick = index => {
    selectedIndx.value = index;
    openModal({ type: 'coloring' });
};
</script>
