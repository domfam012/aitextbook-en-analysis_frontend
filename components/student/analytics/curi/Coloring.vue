<template>
    <v-sheet class="colorLessonInfo">
        <!-- 데이터 있을 때 -->
        <div v-if="colorBoardState?.length > 0" class="inner">
            <div class="inner_title">
                <h3 class="bullet">학습을 완료할 때마다 색깔 조각이 생깁니다. 도안을 선택해서 완성해 보세요.</h3>
            </div>

            <v-list class="d-flex px30 py-0">
                <v-list-item
                    class="px15 py15 cursor"
                    v-for="(item, index) in colorBoardState"
                    :key="index"
                    @click="openModal({ type: 'coloring' })"
                >
                    <div class="avatar avatar-box">
                        <v-img :src="avatar" alt="아바타 이미지" class="avatar-item" max-width="5rem" />
                        <div class="avatar-info">
                            <span class="info_number">{{ item.studNo }}번</span>
                            <span class="info_name">{{ item.studName }}</span>
                        </div>
                    </div>
                    <TeacherAnalyticsLearnColorBoard :stamp="item.stampId" :grid="item.dsgnUseInfo" class="mt-3" />
                </v-list-item>
            </v-list>
        </div>

        <!-- 데이터 없을 때 -->
        <div v-else class="card_no_data">
            <i class="ico no_color_board ico_size_25" />
            <p>완료한 수업이 없습니다.</p>
        </div>
    </v-sheet>
    <Modal v-if="modalData?.type === 'coloring'">
        <ModalColoringBoard v-if="modalData?.isOpen" />
    </Modal>
</template>

<script setup>
import avatar from '@/assets/images/temp/img_pho_st01.png';
import coloringBoard from '@/assets/images/temp/img_coloring_board.png';
import stamp01 from '@/assets/images/img_stamp_01.svg';
import noImages from '@/assets/images/img_noImage.svg';

const { modalData, openModal, closeModal } = useModalStore();
const curiStore = useApiCuriStore();

const { colorBoardState } = storeToRefs(curiStore);
</script>
