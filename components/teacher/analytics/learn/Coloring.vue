<template>
    <v-sheet class="px30 py30 colorLessonInfo">
        <!-- 데이터 있을 때 -->
        <div v-if="colorBoardState?.length > 0" class="inner">
            <v-list class="d-flex px30 py-0">
                <v-list-item
                    class="px15 py15"
                    v-for="(item, index) in renderAll ? colorBoardState : colorBoardState?.slice(0, currentPage * 3 + 3)"
                    :key="index"
                    @click="$event => handleClick(index)"
                >
                    <div class="box cursor">
                        <div class="avatar avatar-box">
                            <v-img
                                :src="useAsset('images/temp/img_pho_st01.png')"
                                alt="아바타 이미지"
                                class="avatar-item"
                                max-width="5rem"
                            />
                            <div class="avatar-info">
                                <span class="info_number">{{ item.studNo }}번</span>
                                <span class="info_name">{{ item.studName }}</span>
                            </div>
                        </div>
                        <TeacherAnalyticsLearnColorBoard :stamp="item.stampId" :grid="item.areaBaseArr" class="mt-3" />
                    </div>
                </v-list-item>
            </v-list>
            <div class="bottom_btn_wrap text-center">
                <v-btn rounded flat class="secondary mgt30" :disabled="renderAll" @click="emit('page', currentPage + 1)">
                    <span class="more">{{ `3명 더 보기 (${currentPage + 1}/${Math.ceil(colorBoardState?.length / 3)})` }}</span>
                </v-btn>
            </div>
        </div>
        <!-- 데이터 없을 때 -->
        <div v-else class="card_no_data">
            <i class="ico no_color_board ico_size_25" />
            <p>아직 숫자 색칠판을 시작한 학생이 없습니다.</p>
        </div>
    </v-sheet>
    <Modal v-if="modalData?.type === 'coloring'">
        <ModalColoringBoard :selected="selectedIndx" v-if="modalData?.isOpen" />
    </Modal>
</template>
<script setup>
const { modalData, openModal, closeModal } = useModalStore();
const apiClassStore = useApiTeacherClassStore();
const { colorBoardState } = storeToRefs(apiClassStore);
const props = defineProps({
    currentPage: {
        type: Number,
        required: true
    },
    depth: {
        type: String,
        default: '완성도 Top 5'
    }
});

const selectedIndx = ref(null);

const handleClick = index => {
    selectedIndx.value = index;
    openModal({ type: 'coloring' });
};

const emit = defineEmits(['page']);
const renderAll = computed(() => props.currentPage + 1 === Math.ceil(colorBoardState.value?.length / 3));
</script>
