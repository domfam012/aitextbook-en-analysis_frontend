<template>
    <div class="text-center pa-4">
        <!-- 숫자색칠판 완성하기 팝업 -->
        <v-dialog v-model="modalData.isOpen" width="auto">
            <v-card class="dialog piece-xxxlg collectedColor">
                <div class="tabs-top">
                    <div class="avatar avatar-box">
                        <v-img :src="useAsset('images/temp/img_pho_st01.png')" alt="아바타 이미지" class="avatar-item" />
                        <div class="avatar-info">
                            <span class="info_number">{{ colorBoardState[selected]?.studNo }}번</span>
                            <span class="info_name">{{ colorBoardState[selected]?.studName }}</span>
                        </div>
                    </div>
                    <div class="round_box_type ml-auto">
                        <v-tabs color="transparent" v-model="tab" @update:model-value="resetPage">
                            <v-tab value="one" class="color_piece" valiant="outlined">남은 색깔 조각</v-tab>
                            <v-tab value="two" class="color_piece" valiant="outlined">수집한 색깔 조각</v-tab>
                        </v-tabs>
                    </div>
                </div>
                <div class="ma-0 pa-0 w-100">
                    <v-window v-model="tab" class="tabs-item">
                        <v-window-item value="one">
                            <v-card height="fit-content" :elevation="0" class="rounded-0">
                                <div class="d-flex">
                                    <div class="content">
                                        <!-- <p class="title_bullet">색칠한 부분을 다시 선택하면 색깔 조각의 원래 자리로 돌아갑니다.</p> -->
                                        <v-carousel
                                            hide-delimiters
                                            hide-delimiter-background
                                            show-arrows
                                            height="fit-content"
                                            v-model="page"
                                            v-if="lessonPopupState?.length > 0"
                                        >
                                            <template v-slot:prev="{ props }">
                                                <v-btn
                                                    flat
                                                    rounded
                                                    size="small"
                                                    @click="props.onClick"
                                                    class="icon_only icon_only-transparent icon_only-36 ml-1"
                                                >
                                                    <div class="ico_outer size_sm">
                                                        <i class="ico size_5 left_24"></i>
                                                        <span class="blind">이전</span>
                                                    </div>
                                                </v-btn>
                                            </template>
                                            <template v-slot:next="{ props }">
                                                <v-btn
                                                    flat
                                                    rounded
                                                    size="small"
                                                    @click="props.onClick"
                                                    class="icon_only icon_only-transparent icon_only-36 mr-1"
                                                >
                                                    <div class="ico_outer size_sm">
                                                        <i class="ico size_5 right_24"></i>
                                                        <span class="blind">다음</span>
                                                    </div>
                                                </v-btn>
                                            </template>

                                            <v-carousel-item v-for="(item, index) in lessonPopupState" :key="index">
                                                <v-card max-height="49.4rem" :elevation="0" class="rounded-0">
                                                    <TeacherAnalyticsLearnColorBoard :grid="item?.dsgnUseInfo" :paintable="true" />
                                                </v-card>
                                            </v-carousel-item>
                                        </v-carousel>
                                        <!-- 인디케이터 -->
                                        <div class="indicator">
                                            <span class="txt_wrap"
                                                ><em>{{ page + 1 }}</em> / <span> {{ lessonPopupState?.length }}</span></span
                                            >
                                        </div>
                                    </div>
                                    <!-- 색깔 조각 영역 -->
                                    <div class="side-rlt">
                                        <v-list bg-color="transparent">
                                            <v-list-item>
                                                <div class="text-center">
                                                    <p class="name">'듣기' 색깔 조각</p>
                                                    <div class="brush_num">
                                                        <i class="ico ico_size_9_half brush_01"></i>
                                                        <em>X</em>
                                                        <span>{{ remainingColorState?.colorLstnnCnt }}개</span>
                                                    </div>
                                                </div>
                                            </v-list-item>
                                            <v-list-item>
                                                <div class="text-center">
                                                    <p class="name">'읽기' 색깔 조각</p>
                                                    <div class="brush_num">
                                                        <i class="ico ico_size_9_half brush_02"></i>
                                                        <em>X</em>
                                                        <span>{{ remainingColorState?.colorRedngCnt }}개</span>
                                                    </div>
                                                </div>
                                            </v-list-item>
                                            <v-list-item>
                                                <div class="text-center">
                                                    <p class="name">'보기' 색깔 조각</p>
                                                    <div class="brush_num">
                                                        <i class="ico ico_size_9_half brush_03"></i>
                                                        <em>X</em>
                                                        <span>{{ remainingColorState?.colorViewCnt }}개</span>
                                                    </div>
                                                </div>
                                            </v-list-item>
                                            <v-list-item>
                                                <div class="text-center">
                                                    <p class="name">'말하기' 색깔 조각</p>
                                                    <div class="brush_num">
                                                        <i class="ico ico_size_9_half brush_04"></i>
                                                        <em>X</em>
                                                        <span>{{ remainingColorState?.colorSpkngCnt }}개</span>
                                                    </div>
                                                </div>
                                            </v-list-item>
                                            <v-list-item>
                                                <div class="text-center">
                                                    <p class="name">'쓰기' 색깔 조각</p>
                                                    <div class="brush_num">
                                                        <i class="ico ico_size_9_half brush_05"></i>
                                                        <em>X</em>
                                                        <span>{{ remainingColorState?.colorWritngCnt }}개</span>
                                                    </div>
                                                </div>
                                            </v-list-item>
                                            <v-list-item>
                                                <div class="text-center">
                                                    <p class="name">'제시하기' 색깔 조각</p>
                                                    <div class="brush_num">
                                                        <i class="ico ico_size_9_half brush_06"></i>
                                                        <em>X</em>
                                                        <span>{{ remainingColorState?.colorPrsntCnt }}개</span>
                                                    </div>
                                                </div>
                                            </v-list-item>
                                        </v-list>
                                    </div>
                                </div>
                            </v-card>
                            <div class="dialog_btn_wrap mgt30">
                                <v-btn rounded flat class="outlined size_md" @click="closeModal">닫기</v-btn>
                                <v-btn rounded flat class="primary" @click="stamp = true">피드백 도장 보내기</v-btn>
                            </div>
                        </v-window-item>

                        <v-window-item value="two">
                            <v-card height="fit-content" :elevation="0" class="rounded-0">
                                <div class="d-flex">
                                    <div class="content">
                                        <!-- <p class="title_bullet">색칠한 부분을 다시 선택하면 색깔 조각의 원래 자리로 돌아갑니다.</p> -->
                                        <v-carousel
                                            hide-delimiters
                                            hide-delimiter-background
                                            show-arrows
                                            height="fit-content"
                                            v-model="page"
                                            v-if="lessonPopupState?.length > 0"
                                        >
                                            <template v-slot:prev="{ props }">
                                                <v-btn
                                                    flat
                                                    rounded
                                                    size="small"
                                                    @click="props.onClick"
                                                    class="icon_only icon_only-transparent icon_only-36 ml-1"
                                                >
                                                    <div class="ico_outer size_sm">
                                                        <i class="ico size_5 left_24"></i>
                                                        <span class="blind">이전</span>
                                                    </div>
                                                </v-btn>
                                            </template>
                                            <template v-slot:next="{ props }">
                                                <v-btn
                                                    flat
                                                    rounded
                                                    size="small"
                                                    @click="props.onClick"
                                                    class="icon_only icon_only-transparent icon_only-36 mr-1"
                                                >
                                                    <div class="ico_outer size_sm">
                                                        <i class="ico size_5 right_24"></i>
                                                        <span class="blind">다음</span>
                                                    </div>
                                                </v-btn>
                                            </template>

                                            <v-carousel-item v-for="(item, index) in lessonPopupState" :key="index">
                                                <v-card max-height="49.4rem" :elevation="0" class="rounded-0">
                                                    <TeacherAnalyticsLearnColorBoard :grid="item?.dsgnUseInfo" :paintable="true" />
                                                </v-card>
                                            </v-carousel-item>
                                        </v-carousel>
                                        <!-- 인디케이터 -->
                                        <div class="indicator">
                                            <span class="txt_wrap"
                                                ><em>{{ page + 1 }}</em> / <span> {{ lessonPopupState?.length }}</span></span
                                            >
                                        </div>
                                    </div>
                                    <!-- 색깔 조각 영역 -->
                                    <div class="side-rlt">
                                        <v-list bg-color="transparent">
                                            <v-list-item>
                                                <div class="text-center">
                                                    <p class="name">'듣기' 색깔 조각</p>
                                                    <div class="brush_num">
                                                        <i class="ico ico_size_9_half brush_01"></i>
                                                        <em>X</em>
                                                        <span>{{ remainingColorState?.colorLstnnCnt }}개</span>
                                                    </div>
                                                </div>
                                            </v-list-item>
                                            <v-list-item>
                                                <div class="text-center">
                                                    <p class="name">'읽기' 색깔 조각</p>
                                                    <div class="brush_num">
                                                        <i class="ico ico_size_9_half brush_02"></i>
                                                        <em>X</em>
                                                        <span>{{ remainingColorState?.colorRedngCnt }}개</span>
                                                    </div>
                                                </div>
                                            </v-list-item>
                                            <v-list-item>
                                                <div class="text-center">
                                                    <p class="name">'보기' 색깔 조각</p>
                                                    <div class="brush_num">
                                                        <i class="ico ico_size_9_half brush_03"></i>
                                                        <em>X</em>
                                                        <span>{{ remainingColorState?.colorViewCnt }}개</span>
                                                    </div>
                                                </div>
                                            </v-list-item>
                                            <v-list-item>
                                                <div class="text-center">
                                                    <p class="name">'말하기' 색깔 조각</p>
                                                    <div class="brush_num">
                                                        <i class="ico ico_size_9_half brush_04"></i>
                                                        <em>X</em>
                                                        <span>{{ remainingColorState?.colorSpkngCnt }}개</span>
                                                    </div>
                                                </div>
                                            </v-list-item>
                                            <v-list-item>
                                                <div class="text-center">
                                                    <p class="name">'쓰기' 색깔 조각</p>
                                                    <div class="brush_num">
                                                        <i class="ico ico_size_9_half brush_05"></i>
                                                        <em>X</em>
                                                        <span>{{ remainingColorState?.colorWritngCnt }}개</span>
                                                    </div>
                                                </div>
                                            </v-list-item>
                                            <v-list-item>
                                                <div class="text-center">
                                                    <p class="name">'제시하기' 색깔 조각</p>
                                                    <div class="brush_num">
                                                        <i class="ico ico_size_9_half brush_06"></i>
                                                        <em>X</em>
                                                        <span>{{ remainingColorState?.colorPrsntCnt }}개</span>
                                                    </div>
                                                </div>
                                            </v-list-item>
                                        </v-list>
                                    </div>
                                </div>
                            </v-card>
                            <div class="dialog_btn_wrap mgt30">
                                <v-btn rounded flat class="outlined size_md" @click="closeModal">닫기</v-btn>
                                <v-btn rounded flat class="primary" @click="stamp = true">피드백 도장 보내기</v-btn>
                            </div>
                        </v-window-item>
                    </v-window>
                </div>
            </v-card>

            <!-- 피드백 도장 보내기 -->
            <div class="feedbackStampList" v-if="stamp">
                <v-sheet class="px40 py40">
                    <h3 class="text-center mb30">학생에게 어떤 도장을 보낼까요?</h3>
                    <v-item-group mandatory class="d-flex flex-wrap gap3 py20" style="max-width: 57rem">
                        <div class="item">
                            <v-item v-slot="{ isSelected, toggle }">
                                <v-card
                                    class="d-flex align-center no-hover"
                                    @click="toggle"
                                    :class="isSelected ? 'checked' : ''"
                                    min-width="100%"
                                    min-height="100%"
                                    flat
                                    :ripple="false"
                                    tile
                                >
                                    <v-img :src="useAsset('images/img_stamp_01.svg')" alt="참 잘했어요" />
                                </v-card>
                            </v-item>
                        </div>
                        <div class="item">
                            <v-item v-slot="{ isSelected, toggle }">
                                <v-card
                                    class="d-flex align-center no-hover"
                                    @click="toggle"
                                    :class="isSelected ? 'checked' : ''"
                                    min-width="100%"
                                    min-height="100%"
                                    flat
                                    :ripple="false"
                                    tile
                                >
                                    <v-img :src="useAsset('images/img_stamp_02.svg')" alt="정말 잘했어요" />
                                </v-card>
                            </v-item>
                        </div>
                        <div class="item">
                            <v-item v-slot="{ isSelected, toggle }">
                                <v-card
                                    class="d-flex align-center no-hover"
                                    @click="toggle"
                                    :class="isSelected ? 'checked' : ''"
                                    min-width="100%"
                                    min-height="100%"
                                    flat
                                    :ripple="false"
                                    tile
                                >
                                    <v-img :src="useAsset('images/img_stamp_03.svg')" alt="세상에 !!!" />
                                </v-card>
                            </v-item>
                        </div>
                        <div class="item">
                            <v-item v-slot="{ isSelected, toggle }">
                                <v-card
                                    class="d-flex align-center no-hover"
                                    @click="toggle"
                                    :class="isSelected ? 'checked' : ''"
                                    min-width="100%"
                                    min-height="100%"
                                    flat
                                    :ripple="false"
                                    tile
                                >
                                    <v-img :src="useAsset('images/img_stamp_04.svg')" alt="이미 최고의 경지" />
                                </v-card>
                            </v-item>
                        </div>
                        <div class="item">
                            <v-item v-slot="{ isSelected, toggle }">
                                <v-card
                                    class="d-flex align-center no-hover"
                                    @click="toggle"
                                    :class="isSelected ? 'checked' : ''"
                                    min-width="100%"
                                    min-height="100%"
                                    flat
                                    :ripple="false"
                                    tile
                                >
                                    <v-img :src="useAsset('images/img_stamp_05.svg')" alt="어떻게 이렇게까지 잘하는 거지" />
                                </v-card>
                            </v-item>
                        </div>
                        <div class="item">
                            <!-- 선택이 되면 .checked 추가 -->
                            <v-item v-slot="{ isSelected, toggle }">
                                <v-card
                                    class="d-flex align-center no-hover"
                                    :class="isSelected ? 'checked' : ''"
                                    @click="toggle"
                                    min-width="100%"
                                    min-height="100%"
                                    flat
                                    :ripple="false"
                                    tile
                                >
                                    <v-img :src="useAsset('images/img_stamp_01.svg')" alt="참 잘했어요" />
                                </v-card>
                            </v-item>
                        </div>
                        <div class="item">
                            <v-item v-slot="{ isSelected, toggle }">
                                <v-card
                                    class="d-flex align-center no-hover"
                                    @click="toggle"
                                    :class="isSelected ? 'checked' : ''"
                                    min-width="100%"
                                    min-height="100%"
                                    flat
                                    :ripple="false"
                                    tile
                                >
                                    <v-img :src="useAsset('images/img_stamp_02.svg')" alt="정말 잘했어요" />
                                </v-card>
                            </v-item>
                        </div>
                        <div class="item">
                            <v-item v-slot="{ isSelected, toggle }">
                                <v-card
                                    class="d-flex align-center no-hover"
                                    @click="toggle"
                                    :class="isSelected ? 'checked' : ''"
                                    min-width="100%"
                                    min-height="100%"
                                    flat
                                    :ripple="false"
                                    tile
                                >
                                    <v-img :src="useAsset('images/img_stamp_03.svg')" alt="세상에 !!!" />
                                </v-card>
                            </v-item>
                        </div>
                        <div class="item">
                            <v-item v-slot="{ isSelected, toggle }">
                                <v-card
                                    class="d-flex align-center no-hover"
                                    @click="toggle"
                                    :class="isSelected ? 'checked' : ''"
                                    min-width="100%"
                                    min-height="100%"
                                    flat
                                    :ripple="false"
                                    tile
                                >
                                    <v-img :src="useAsset('images/img_stamp_04.svg')" alt="이미 최고의 경지" />
                                </v-card>
                            </v-item>
                        </div>
                        <div class="item">
                            <v-item v-slot="{ isSelected, toggle }">
                                <v-card
                                    class="d-flex align-center no-hover"
                                    @click="toggle"
                                    :class="isSelected ? 'checked' : ''"
                                    min-width="100%"
                                    min-height="100%"
                                    flat
                                    :ripple="false"
                                    tile
                                >
                                    <v-img :src="useAsset('images/img_stamp_05.svg')" alt="어떻게 이렇게까지 잘하는 거지" />
                                </v-card>
                            </v-item>
                        </div>
                    </v-item-group>
                    <div class="dialog_btn_wrap mgt30 gap1 d-flex justify-center">
                        <v-btn rounded flat class="outlined size_md" @click="stamp = false">닫기</v-btn>
                        <v-btn rounded flat class="primary">피드백 도장 보내기</v-btn>
                    </div>
                </v-sheet>
            </div>
        </v-dialog>
    </div>
</template>
<script setup>
const tab = ref('one');
const stamp = ref(false);
const page = ref(0);
const resetPage = () => (page.value = 0);

const props = defineProps(['selected']);

const { modalData, openModal, closeModal } = useModalStore();

const apiClassStore = useApiTeacherClassStore();
const { colorBoardState } = storeToRefs(apiClassStore);

const lessonApiStore = useApiLessonStore();
const { remainingColorState, collectedColorState, lessonPopupState } = storeToRefs(lessonApiStore);
const colorMode = ref('blue');

const setColor = mode => {
    colorMode.value = mode;
};

const togglePainted = index => {
    if (grid.value[index].color === colorMode.value) grid.value[index].painted = !grid.value[index].painted;
    grid.value[index].color = colorMode.value;
};

onMounted(() => {
    lessonApiStore.getPopupRemainColor();
    lessonApiStore.getPopupCollectedColor();
    lessonApiStore.getPopupRemainColorDesign();
    lessonApiStore.getPopupCollectedColorDesigns();
    // lessonApiStore.getPopupSendFeedbackStamp();
});
</script>

<style scoped lang="scss">
.colorboard {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.grid {
    width: 2.6rem;
    height: 2.6rem;
    border: 0.5px solid #171717;
    cursor: pointer;
}

.painted {
    border: 1px solid black;
    &.blue {
        background: #46a7e5;
    }

    &.green {
        background: #81b01b;
    }

    &.darkgreen {
        background: #0a8;
    }
    &.red {
        background: #fd6e7f;
    }
    &.yellow {
        background: #ffd44d;
    }
}
</style>
