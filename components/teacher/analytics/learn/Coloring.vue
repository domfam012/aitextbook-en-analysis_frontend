<template>
    <v-sheet class="px30 py30 colorLessonInfo">
        <!-- 데이터 있을 때 -->
        <div v-if="colorBoardState?.length > 0" class="inner">
            <v-list class="d-flex px30 py-0">
                <v-list-item
                    class="px15 py15 cursor"
                    v-for="(item, index) in renderAll ? colorBoardState : colorBoardState.slice(0, 3)"
                    :key="index"
                    @click="toggleOpen(index)"
                >
                    <div class="avatar avatar-box">
                        <v-img :src="avatarSrc" alt="아바타 이미지" class="avatar-item" max-width="5rem" />
                        <div class="avatar-info">
                            <span class="info_number">{{ item.studNo }}번</span>
                            <span class="info_name">{{ item.studName }}</span>
                        </div>
                    </div>
                    <TeacherAnalyticsLearnColorBoard :stamp="item.stampId" :grid="item.areaBaseArr" class="mt-3" />
                </v-list-item>
            </v-list>
            <div class="bottom_btn_wrap text-center">
                <v-btn rounded flat class="secondary mgt30" v-if="colorBoardState.length > 3 && !renderAll" @click="renderAll = true">
                    <span class="more">더 보기</span>
                </v-btn>
            </div>
        </div>
        <!-- 데이터 없을 때 -->
        <div v-else class="card_no_data">
            <i class="ico no_color_board ico_size_25" />
            <p>아직 숫자 색칠판을 시작한 학생이 없습니다.</p>
        </div>
    </v-sheet>
    <ModalColoringBoard v-if="isOpen" :isOpen="isOpen" @close-modal="toggleOpen" />
</template>
<script setup>
import avatarSrc from '@/assets/images/temp/img_pho_st01.png';

const props = defineProps({ depth: { type: String, default: '완성도 Top 5' } });
const apiClassStore = useApiTeacherClassStore();
const { colorBoardState } = storeToRefs(apiClassStore);
const renderAll = ref(false);
const isOpen = ref(false);
const toggleOpen = () => {
    isOpen.value = !isOpen.value;
};
</script>
