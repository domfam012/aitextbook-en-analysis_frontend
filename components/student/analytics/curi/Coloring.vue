<template>
    <v-sheet class="colorLessonInfo">
        <!-- 데이터 있을 때 -->
        <div v-if="curiState?.length > 0" class="inner">
            <div class="inner_title">
                <h3 class="bullet">학습을 완료할 때마다 색깔 조각이 생깁니다. 도안을 선택해서 완성해 보세요.</h3>
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
            <p>데이터가 존재하지 않습니다.</p>
        </div>
    </v-sheet>
    <Modal v-if="modalData?.type === 'coloring'">
        <ModalColoringBoard v-if="modalData?.isOpen" :selected="selectedIndx" />
    </Modal>
</template>

<script setup>
const { modalData, openModal, closeModal } = useModalStore();
const curiStore = useApiCuriStore();

const { curiState } = storeToRefs(curiStore);

const selectedIndx = ref(null);

const handleClick = index => {
    selectedIndx.value = index;
    openModal({ type: 'coloring' });
};
</script>
