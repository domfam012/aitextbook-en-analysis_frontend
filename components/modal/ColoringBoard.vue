<template>
    <!-- 숫자색칠판 완성하기 팝업 -->
    <v-dialog v-model="modalData.isOpen" width="auto">
        <v-card class="dialog piece-xxxlg collectedColor">
            <div class="tabs fluid">
                <div class="d-flex">
                    <div class="avatar avatar-box" v-if="colorBoardState">
                        <v-img :src="useAsset('images/temp/img_pho_st01.png')" alt="아바타 이미지" class="avatar-item" />
                        <div class="avatar-info">
                            <span class="info_number">{{ colorBoardState[selected]?.studId }}번</span>
                            <span class="info_name">{{ colorBoardState[selected]?.studName }}</span>
                        </div>
                    </div>
                    <div v-else>
                        <span class="font-header2">숫자 색칠판 완성하기</span>
                    </div>
                    <v-tabs v-model="tab" @update:model-value="resetPage">
                        <v-tab value="one" class="color_piece" valiant="outlined">수집한 색깔 조각</v-tab>
                        <v-tab value="two" class="color_piece" valiant="outlined">남은 색깔 조각</v-tab>
                    </v-tabs>
                </div>
                <v-window v-model="tab">
                    <v-window-item value="one">
                        <v-card height="fit-content" :elevation="0" class="rounded-0">
                            <div class="d-flex">
                                <!-- Note. modal 내에 텍스트가 있을 시 content에 has_title를 추가합니다.(없을 시 제거) -->
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
                                        <!-- Note. 텍스트가 있을 시 추가합니다. -->
                                        <div class="inner_title" v-if="mode === 'student'">
                                            <h4 class="bullet text-left">선생님의 도장이 찍힌 도안은 색깔 조각을 옮길 수 없습니다</h4>
                                        </div>
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
                                            <v-card max-height="49.5rem" :elevation="0" class="rounded-0">
                                                <TeacherAnalyticsLearnColorBoard :grid="JSON.parse(item?.dsgnUseInfo)" :paintable="true" />
                                            </v-card>
                                        </v-carousel-item>
                                    </v-carousel>
                                    <v-carousel
                                        hide-delimiters
                                        hide-delimiter-background
                                        show-arrows
                                        height="fit-content"
                                        v-model="page"
                                        v-if="studentCollectedColorBoardState?.length > 0"
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

                                        <v-carousel-item v-for="(item, index) in studentCollectedColorBoardState" :key="index">
                                            <v-card max-height="49.5rem" :elevation="0" class="rounded-0">
                                                <TeacherAnalyticsLearnColorBoard
                                                    :grid="JSON.parse(item?.dsgnUseInfo)"
                                                    :paintable="true"
                                                    :stamp="item.stampId"
                                                />
                                            </v-card>
                                        </v-carousel-item>
                                    </v-carousel>
                                    <!-- 인디케이터 -->
                                    <div class="indicator">
                                        <span class="txt_wrap"
                                            ><em>{{ page + 1 }}</em> /
                                            <span>
                                                {{
                                                    mode === 'teacher' ? lessonPopupState?.length : studentCollectedColorBoardState?.length
                                                }}</span
                                            ></span
                                        >
                                    </div>
                                </div>
                                <!-- 색깔 조각 영역 -->
                                <div class="side-rlt">
                                    <!-- 교사 색깔조각 -->
                                    <v-list bg-color="transparent" v-if="mode === 'teacher'">
                                        <!-- v-btn으로 변경건, v-list-item에 클래스 추가 -->
                                        <v-list-item class="line_colunm">
                                            <p class="name">'듣기' 색깔 조각</p>
                                            <v-btn flat rounded class="btn_brush">
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_01"></i>
                                                    <em>X</em>
                                                    <span>{{ collectedColorState && collectedColorState[0].colorLstnnCnt }}개</span>
                                                </div>
                                            </v-btn>
                                        </v-list-item>
                                        <v-list-item class="line_colunm">
                                            <p class="name">'읽기' 색깔 조각</p>
                                            <v-btn flat rounded class="btn_brush">
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_02"></i>
                                                    <em>X</em>
                                                    <span>{{ collectedColorState && collectedColorState[0].colorRedngCnt }}개</span>
                                                </div>
                                            </v-btn>
                                        </v-list-item>
                                        <v-list-item class="line_colunm">
                                            <p class="name">'보기' 색깔 조각</p>
                                            <v-btn flat rounded class="btn_brush">
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_03"></i>
                                                    <em>X</em>
                                                    <span>{{ collectedColorState && collectedColorState[0].colorViewCnt }}개</span>
                                                </div>
                                            </v-btn>
                                        </v-list-item>
                                        <v-list-item class="line_colunm">
                                            <p class="name">'말하기' 색깔 조각</p>
                                            <v-btn flat rounded class="btn_brush">
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_04"></i>
                                                    <em>X</em>
                                                    <span>{{ collectedColorState && collectedColorState[0].colorSpkngCnt }}개</span>
                                                </div>
                                            </v-btn>
                                        </v-list-item>

                                        <v-list-item class="line_colunm">
                                            <p class="name">'쓰기' 색깔 조각</p>
                                            <v-btn flat rounded class="btn_brush">
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_06"></i>
                                                    <em>X</em>
                                                    <span>{{ collectedColorState && collectedColorState[0].colorWritngCnt }}개</span>
                                                </div>
                                            </v-btn>
                                        </v-list-item>
                                    </v-list>
                                    <!-- 학생 색깔 조각 -->
                                    <div class="side-rlt" v-else>
                                        <v-list bg-color="transparent">
                                            <v-list-item @click="selectedColor = 'blue'">
                                                <div class="text-center">
                                                    <p class="name">'듣기' 색깔 조각</p>
                                                    <div class="brush_num">
                                                        <i class="ico ico_size_9_half brush_01"></i>
                                                        <em>X</em>
                                                        <span>
                                                            {{
                                                                studnetCollectedColorState &&
                                                                studnetCollectedColorState[0].colorLstnnCnt + '개'
                                                            }}
                                                        </span>
                                                    </div>
                                                </div>
                                            </v-list-item>
                                            <v-list-item @click="selectedColor = 'yellow'">
                                                <div class="text-center">
                                                    <p class="name">'읽기' 색깔 조각</p>
                                                    <div class="brush_num">
                                                        <i class="ico ico_size_9_half brush_02"></i>
                                                        <em>X</em>
                                                        <span>
                                                            {{
                                                                studnetCollectedColorState &&
                                                                studnetCollectedColorState[0].colorRedngCnt + '개'
                                                            }}
                                                        </span>
                                                    </div>
                                                </div>
                                            </v-list-item>
                                            <v-list-item @click="selectedColor = 'red'">
                                                <div class="text-center">
                                                    <p class="name">'보기' 색깔 조각</p>
                                                    <div class="brush_num">
                                                        <i class="ico ico_size_9_half brush_03"></i>
                                                        <em>X</em>
                                                        <span>
                                                            {{
                                                                studnetCollectedColorState &&
                                                                studnetCollectedColorState[0].colorViewCnt + '개'
                                                            }}
                                                        </span>
                                                    </div>
                                                </div>
                                            </v-list-item>
                                            <v-list-item @click="selectedColor = 'green'">
                                                <div class="text-center">
                                                    <p class="name">'말하기' 색깔 조각</p>
                                                    <div class="brush_num">
                                                        <i class="ico ico_size_9_half brush_04"></i>
                                                        <em>X</em>
                                                        <span>
                                                            {{
                                                                studnetCollectedColorState &&
                                                                studnetCollectedColorState[0].colorSpkngCnt + '개'
                                                            }}
                                                        </span>
                                                    </div>
                                                </div>
                                            </v-list-item>
                                            <v-list-item @click="selectedColor = 'darkgreen'">
                                                <div class="text-center">
                                                    <p class="name">'쓰기' 색깔 조각</p>
                                                    <div class="brush_num">
                                                        <i class="ico ico_size_9_half brush_06"></i>
                                                        <em>X</em>
                                                        <span>
                                                            {{
                                                                studnetCollectedColorState &&
                                                                studnetCollectedColorState[0].colorWritngCnt + '개'
                                                            }}
                                                        </span>
                                                    </div>
                                                </div>
                                            </v-list-item>
                                            <!-- <v-list-item>
                                                <div class="text-center">
                                                    <p class="name">'제시하기' 색깔 조각</p>
                                                    <div class="brush_num">
                                                        <i class="ico ico_size_9_half brush_06"></i>
                                                        <em>X</em>
                                                        <span>{{ remainingColorState[0]?.colorPrsntCnt }}개</span>
                                                    </div>
                                                </div>
                                            </v-list-item> -->
                                        </v-list>
                                    </div>
                                </div>
                            </div>
                        </v-card>
                        <div class="dialog_btn_wrap mgt30">
                            <v-btn rounded flat class="outlined size_md" @click="closeModal">닫기</v-btn>
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
                                                <TeacherAnalyticsLearnColorBoard :grid="JSON.parse(item?.dsgnUseInfo)" />
                                            </v-card>
                                        </v-carousel-item>
                                    </v-carousel>
                                    <v-carousel
                                        hide-delimiters
                                        hide-delimiter-background
                                        show-arrows
                                        height="fit-content"
                                        v-model="page"
                                        v-if="studentColorBoardState?.length > 0"
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

                                        <v-carousel-item v-for="(item, index) in studentColorBoardState" :key="index">
                                            <v-card max-height="49.5rem" :elevation="0" class="rounded-0">
                                                <TeacherAnalyticsLearnColorBoard
                                                    :grid="item?.dsgnUseInfo"
                                                    :page="page"
                                                    :selectedColor="selectedColor"
                                                    :paintable="true"
                                                    :is-edit="true"
                                                />
                                            </v-card>
                                        </v-carousel-item>
                                    </v-carousel>
                                    <!-- 인디케이터 -->
                                    <div class="indicator">
                                        <span class="txt_wrap"
                                            ><em>{{ page + 1 }}</em> /
                                            <span>
                                                {{ mode === 'teacher' ? lessonPopupState?.length : studentColorBoardState?.length }}</span
                                            ></span
                                        >
                                    </div>
                                </div>
                                <!-- 색깔 조각 영역 -->
                                <div class="side-rlt" v-if="mode === 'teacher'">
                                    <v-list bg-color="transparent">
                                        <v-list-item @click="selectedColor = 'blue'">
                                            <div class="text-center">
                                                <p class="name">'듣기' 색깔 조각</p>
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_01"></i>
                                                    <em>X</em>
                                                    <span>
                                                        <span>{{ remainingColorState && remainingColorState[0].colorLstnnCnt }}개</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </v-list-item>
                                        <v-list-item @click="selectedColor = 'yellow'">
                                            <div class="text-center">
                                                <p class="name">'읽기' 색깔 조각</p>
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_02"></i>
                                                    <em>X</em>
                                                    <span>
                                                        <span>{{ remainingColorState && remainingColorState[0].colorRedngCnt }}개</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </v-list-item>
                                        <v-list-item @click="selectedColor = 'red'">
                                            <div class="text-center">
                                                <p class="name">'보기' 색깔 조각</p>
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_03"></i>
                                                    <em>X</em>
                                                    <span>
                                                        <span>{{ remainingColorState && remainingColorState[0].colorViewCnt }}개</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </v-list-item>
                                        <v-list-item @click="selectedColor = 'green'">
                                            <div class="text-center">
                                                <p class="name">'말하기' 색깔 조각</p>
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_04"></i>
                                                    <em>X</em>
                                                    <span>{{ remainingColorState && remainingColorState[0].colorSpkngCnt }}개</span>
                                                </div>
                                            </div>
                                        </v-list-item>
                                        <v-list-item @click="selectedColor = 'darkgreen'">
                                            <div class="text-center">
                                                <p class="name">'쓰기' 색깔 조각</p>
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_06"></i>
                                                    <em>X</em>

                                                    <span>{{ remainingColorState && remainingColorState[0].colorWritngCnt }}개</span>
                                                </div>
                                            </div>
                                        </v-list-item>
                                        <!-- <v-list-item>
                                                <div class="text-center">
                                                    <p class="name">'제시하기' 색깔 조각</p>
                                                    <div class="brush_num">
                                                        <i class="ico ico_size_9_half brush_06"></i>
                                                        <em>X</em>
                                                        <span>{{ remainingColorState[0]?.colorPrsntCnt }}개</span>
                                                    </div>
                                                </div>
                                            </v-list-item> -->
                                    </v-list>
                                </div>
                                <div class="side-rlt" v-else>
                                    <v-list bg-color="transparent">
                                        <v-list-item @click="selectedColor = 'blue'">
                                            <div class="text-center">
                                                <p class="name">'듣기' 색깔 조각</p>
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_01"></i>
                                                    <em>X</em>
                                                    <span>
                                                        {{
                                                            mode === 'teacher' && remainingColorState && remainingColorState.length > 0
                                                                ? remainingColorState[0].colorLstnnCnt + '개'
                                                                : studentRemainingColorState[0]?.colorLstnnCnt + '개'
                                                        }}
                                                    </span>
                                                </div>
                                            </div>
                                        </v-list-item>
                                        <v-list-item @click="selectedColor = 'yellow'">
                                            <div class="text-center">
                                                <p class="name">'읽기' 색깔 조각</p>
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_02"></i>
                                                    <em>X</em>
                                                    <span>
                                                        {{
                                                            mode === 'teacher' && remainingColorState && remainingColorState.length > 0
                                                                ? remainingColorState[0].colorRedngCnt + '개'
                                                                : studentRemainingColorState[0]?.colorRedngCnt + '개'
                                                        }}
                                                    </span>
                                                </div>
                                            </div>
                                        </v-list-item>
                                        <v-list-item @click="selectedColor = 'red'">
                                            <div class="text-center">
                                                <p class="name">'보기' 색깔 조각</p>
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_03"></i>
                                                    <em>X</em>
                                                    <span>
                                                        {{
                                                            mode === 'teacher' && remainingColorState && remainingColorState.length > 0
                                                                ? remainingColorState[0].colorViewCnt + '개'
                                                                : studentRemainingColorState[0]?.colorViewCnt + '개'
                                                        }}
                                                    </span>
                                                </div>
                                            </div>
                                        </v-list-item>
                                        <v-list-item @click="selectedColor = 'green'">
                                            <div class="text-center">
                                                <p class="name">'말하기' 색깔 조각</p>
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_04"></i>
                                                    <em>X</em>
                                                    <span>
                                                        {{
                                                            mode === 'teacher' && remainingColorState && remainingColorState.length > 0
                                                                ? remainingColorState[0].colorSpkngCnt + '개'
                                                                : studentRemainingColorState[0]?.colorSpkngCnt + '개'
                                                        }}
                                                    </span>
                                                </div>
                                            </div>
                                        </v-list-item>
                                        <v-list-item @click="selectedColor = 'darkgreen'">
                                            <div class="text-center">
                                                <p class="name">'쓰기' 색깔 조각</p>
                                                <div class="brush_num">
                                                    <i class="ico ico_size_9_half brush_06"></i>
                                                    <em>X</em>
                                                    <span>
                                                        {{
                                                            mode === 'teacher' && remainingColorState && remainingColorState.length > 0
                                                                ? remainingColorState[0].colorWritngCnt + '개'
                                                                : studentRemainingColorState[0]?.colorWritngCnt + '개'
                                                        }}
                                                    </span>
                                                </div>
                                            </div>
                                        </v-list-item>
                                        <!-- <v-list-item>
                                                <div class="text-center">
                                                    <p class="name">'제시하기' 색깔 조각</p>
                                                    <div class="brush_num">
                                                        <i class="ico ico_size_9_half brush_06"></i>
                                                        <em>X</em>
                                                        <span>{{ remainingColorState[0]?.colorPrsntCnt }}개</span>
                                                    </div>
                                                </div>
                                            </v-list-item> -->
                                    </v-list>
                                </div>
                            </div>
                        </v-card>
                        <div class="dialog_btn_wrap mgt30">
                            <v-btn rounded flat class="outlined size_md" @click="closeModal">닫기</v-btn>
                            <v-btn rounded flat class="primary size_md" v-if="mode === 'student'">저장</v-btn>

                            <v-btn rounded flat class="primary" @click="stamp = true" v-if="mode === 'teacher'">피드백 도장 보내기</v-btn>
                        </div>
                    </v-window-item>
                </v-window>
            </div>
        </v-card>

        <!-- 피드백 도장 보내기 -->
        <div class="feedbackStampList" v-if="stamp">
            <v-sheet class="px40 py40">
                <h3 class="text-center mb30">학생에게 어떤 도장을 보낼까요?</h3>
                <v-item-group v-model="selectedStamp" mandatory class="d-flex flex-wrap gap3 py20" style="width: 57rem">
                    <div v-for="(item, index) in stampList" class="item" :key="index">
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
                                <v-img :src="item.path" alt="참 잘했어요" />
                            </v-card>
                        </v-item>
                    </div>
                </v-item-group>
                <div class="dialog_btn_wrap mgt30 gap1 d-flex justify-center">
                    <v-btn rounded flat class="outlined size_md" @click="stamp = false">취소</v-btn>
                    <v-btn rounded flat class="primary" @click="sendStamp" v-if="mode === 'teacher'">피드백 도장 보내기</v-btn>
                </div>
            </v-sheet>
        </div>
    </v-dialog>
</template>
<script setup>
const mode = useCookie('mode');
const tab = ref('one');
const props = defineProps(['selected']);
const selectedColor = ref(null);
const stamp = ref(false);
const page = ref(0);
const selectedStamp = ref(0);
const stampList = [
    { path: useAsset('images/img_stamp_01.svg') },
    { path: useAsset('images/img_stamp_02.svg') },
    { path: useAsset('images/img_stamp_03.svg') },
    { path: useAsset('images/img_stamp_04.svg') },
    { path: useAsset('images/img_stamp_05.svg') },
    { path: useAsset('images/img_stamp_01.svg') },
    { path: useAsset('images/img_stamp_02.svg') },
    { path: useAsset('images/img_stamp_03.svg') },
    { path: useAsset('images/img_stamp_04.svg') },
    { path: useAsset('images/img_stamp_05.svg') }
];
const { modalData, closeModal } = useModalStore();
const apiClassStore = useApiTeacherClassStore();
const { colorBoardState } = storeToRefs(apiClassStore);
const lessonApiStore = useApiLessonStore();
const studentCuriApiStore = useApiCuriStore();
const { remainingColorState, collectedColorState, lessonPopupState } = storeToRefs(lessonApiStore);
const { studentColorBoardState, studnetCollectedColorState, studentRemainingColorState, studentCollectedColorBoardState } =
    storeToRefs(studentCuriApiStore);

const resetPage = () => (page.value = 0);

onMounted(async () => {
    if (mode.value === 'teacher') {
        lessonApiStore.getPopupRemainColor(colorBoardState.value[props.selected].studUuid);
        lessonApiStore.getPopupCollectedColor(colorBoardState.value[props.selected].studUuid);
        lessonApiStore.getPopupRemainColorDesign(colorBoardState.value[props.selected].studUuid);
        lessonApiStore.getPopupCollectedColorDesigns(colorBoardState.value[props.selected].studUuid);
    } else if (mode.value === 'student') {
        await studentCuriApiStore.getCuriNumberOfColorPiecesCollected();
        await studentCuriApiStore.getCuriNumberOfColorPiecesRemaining();
        await studentCuriApiStore.getCuriCollectedColorDesign();
        await studentCuriApiStore.getCuriRemainingColorDesign();
    }
});

const sendStamp = () => {
    useApiLessonStore().getPopupSendFeedbackStamp({
        dsgnId: lessonPopupState?.value[page.value].dsgnId,
        stampId: selectedStamp.value,
        studUuid: `3e61b5aa-d5d5-471c-9ada-fc1140e6f559`
    });
};
</script>
