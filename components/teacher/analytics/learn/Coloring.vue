<template>
    <v-sheet class="px30 py30 colorLessonInfo">
        <!-- 데이터 있을 때 -->
        <div v-if="colorBoardState?.length > 0" class="inner">
            <v-list class="px30 py-0">
                <v-list-group>
                    <v-row class="row-container">
                        <v-col
                            v-for="(item, index) in renderAll ? colorBoardState : colorBoardState?.slice(0, currentPage * 3 + 3)"
                            :key="index"
                            @click="$event => handleClick(index)"
                        >
                            <v-list-item class="px15 py15">
                                <div class="box cursor">
                                    <div class="avatar avatar-box">
                                        <v-img src="" alt="아바타 이미지" class="avatar-item" max-width="5rem" />
                                        <div class="avatar-info">
                                            <span class="info_number">{{ item.studId }}{{ t('common.unit.no') }}</span>
                                            <span class="info_name">{{ item.studName }}</span>
                                        </div>
                                    </div>
                                    <TeacherAnalyticsLearnColorBoard
                                        :stamp="item.stampId"
                                        :grid="JSON.parse(item.dsgnUseInfo)"
                                        class="mt-3"
                                    />
                                </div>
                            </v-list-item>
                        </v-col>
                    </v-row>
                </v-list-group>
            </v-list>
            <div class="bottom_btn_wrap text-center">
                <v-btn rounded flat class="secondary mgt30" :disabled="renderAll" @click="emit('page', currentPage + 1)">
                    <span class="more">
                        {{
                            t('analytics.coloring.more', {
                                currentPage: currentPage + 1,
                                totalPages: Math.ceil(colorBoardState?.length / 3)
                            })
                        }}
                    </span>
                </v-btn>
            </div>
        </div>
        <!-- 데이터 없을 때 -->
        <div v-else class="card_no_data">
            <i class="ico no_color_board ico_size_25" />
            <p>{{ t('analytics.coloring.text') }}</p>
        </div>
    </v-sheet>
    <Modal v-if="modalData?.type === 'coloring'">
        <ModalColoringBoard :selected="selectedIndx" v-if="modalData?.isOpen" />
    </Modal>
</template>
<script setup>
const { t } = useI18n();
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
