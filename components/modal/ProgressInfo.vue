<template>
    <v-btn class="primary" @click="progressInfo = true"> Open Dialog </v-btn>
    <!-- 진도학습이력 팝업 -->
    <v-dialog v-model="progressInfo" width="auto">
        <v-card class="dialog px30 py20" width="167.5rem" height="83rem">
            <div class="dialog_header">
                <div class="inline_wrap gap1">
                    <h1>나의</h1>
                    <v-select
                        v-model="select"
                        :items="items"
                        class="type_primary_fill"
                        :menu-props="{ contentClass: 'primary_fill_item' }"
                        item-title="state"
                        item-value="abbr"
                        label="Select"
                        variant="outlined"
                        persistent-hint
                        rounded
                        return-object
                        single-line
                        hide-details
                    ></v-select>
                    <h1>진도 학습 이력</h1>
                </div>
                <v-btn class="icon_close" @click="progressInfo = false"><i class="ico close_30 ico_size_lg"></i></v-btn>
            </div>
            <div class="dialog_body">
                <div class="table_wrap scrollable_container">
                    <div class="inline_wrap">
                        <div class="inner_header">
                            <span>완료한 학습 차시:</span>
                            <span class="font-color-orange">13</span>
                            <span class="font-weight-bold">/64</span>
                        </div>
                        <div class="extra">
                            <span>누적 학습시간:</span>
                            <span class="font-weight-bold">6시간 41분</span>
                        </div>
                    </div>
                    <div class="table_items scrollable">
                        <v-data-table>
                            <colgroup>
                                <col width="18%" />
                                <col width="6%" />
                                <col width="15%" />
                                <col width="*" />
                                <col width="10%" />
                                <col width="10%" />
                                <col width="6%" />
                            </colgroup>
                            <thead>
                                <!-- !NOTE  v-data-table 데이터 입력시 th의 class="v-data-table__td v-data-table-column--align-center v-data-table__th" 싹다 빼주세요. 자동으로 입력됩니다. -->
                                <tr>
                                    <th class="v-data-table__td v-data-table-column--align-center v-data-table__th">Lesson</th>
                                    <th class="v-data-table__td v-data-table-column--align-center v-data-table__th">차시</th>
                                    <th class="v-data-table__td v-data-table-column--align-center v-data-table__th">학습 바로가기</th>
                                    <th class="v-data-table__td v-data-table-column--align-center v-data-table__th">학습 내용</th>
                                    <th class="v-data-table__td v-data-table-column--align-center v-data-table__th">학습 날짜</th>
                                    <th class="v-data-table__td v-data-table-column--align-center v-data-table__th">학습한 시간</th>
                                    <th class="v-data-table__td v-data-table-column--align-center v-data-table__th">완료율</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowspan="3" class="bg-color-light text_left vertical-top">1. How Are You?</td>
                                    <td>1</td>
                                    <td>
                                        <div class="buttons gap05">
                                            <v-btn rounded flat size="small" class="color_green">차시 복습</v-btn>
                                            <!-- !NOTE 노트 업로드 시 class="button_note"에 .upload 추가 됩니다. -->
                                            <v-btn rounded flat size="small" class="button_note">노트</v-btn>
                                        </div>
                                    </td>
                                    <td class="text_left class-box">
                                        <v-list variant="flat" density="compact">
                                            <v-list-item>
                                                <p class="tit_txt">Get Ready</p>
                                                <p class="sub_txt">때에 맞는 인사하기</p>
                                            </v-list-item>
                                            <v-list-item>
                                                <p class="tit_txt">Let’s Learn</p>
                                                <p class="sub_txt">학습 내용 알아보기</p>
                                            </v-list-item>
                                            <v-list-item>
                                                <p class="tit_txt">Look and Think</p>
                                                <p class="sub_txt">동영상 보고 표현 이해하기</p>
                                            </v-list-item>
                                            <v-list-item>
                                                <p class="tit_txt">Let’s Learn</p>
                                                <p class="sub_txt">실생활 동영상 보며 대화하기</p>
                                            </v-list-item>
                                            <v-list-item>
                                                <p class="tit_txt">Chant</p>
                                                <p class="sub_txt">찬트 하며 표현 익히기</p>
                                            </v-list-item>
                                            <v-list-item>
                                                <p class="tit_txt">Play Time 1</p>
                                                <p class="sub_txt">몸으로 말해요</p>
                                            </v-list-item>
                                        </v-list>
                                    </td>
                                    <td>06월 24일 (월)</td>
                                    <td>05시간 30분</td>
                                    <td>100%</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <div class="buttons gap05">
                                            <v-btn rounded flat size="small" class="color_green">차시 복습</v-btn>
                                            <!-- !NOTE 노트 업로드 시 class="button_note"에 .upload 추가 됩니다. -->
                                            <v-btn rounded flat size="small" class="button_note upload">노트</v-btn>
                                        </div>
                                    </td>
                                    <td class="text_left class-box">
                                        <v-list variant="flat" density="compact">
                                            <v-list-item>
                                                <p class="tit_txt">Look and Think</p>
                                                <p class="sub_txt">동영상 보고 표현 이해하기</p>
                                            </v-list-item>
                                            <v-list-item>
                                                <p class="tit_txt">Let’s Learn</p>
                                                <p class="sub_txt">실생활 동영상 보며 대화하기</p>
                                            </v-list-item>
                                            <v-list-item>
                                                <p class="tit_txt">Chant</p>
                                                <p class="sub_txt">찬트 하며 표현 익히기</p>
                                            </v-list-item>
                                            <v-list-item>
                                                <p class="tit_txt">Play Time 1</p>
                                                <p class="sub_txt">몸으로 말해요</p>
                                            </v-list-item>
                                        </v-list>
                                    </td>
                                    <td>06월 24일 (월)</td>
                                    <td>05시간 30분</td>
                                    <td>100%</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <div class="buttons gap05">
                                            <v-btn rounded flat size="small" class="color_red">결석 복습</v-btn>
                                        </div>
                                    </td>
                                    <td class="text_left class-box">&nbsp;</td>
                                    <td>06월 24일 (월)</td>
                                    <td>05시간 30분</td>
                                    <td>100%</td>
                                </tr>
                                <tr>
                                    <td class="bg-color-light text_left vertical-top">2. My name...</td>
                                    <td>1</td>
                                    <td>
                                        <div class="buttons gap05">
                                            <v-btn rounded flat size="small" class="color_green">차시 복습</v-btn>
                                            <!-- !NOTE 노트 업로드 시 class="button_note"에 .upload 추가 됩니다. -->
                                            <v-btn rounded flat size="small" class="button_note upload">노트</v-btn>
                                        </div>
                                    </td>
                                    <td class="text_left class-box">
                                        <v-list variant="flat" density="compact">
                                            <v-list-item>
                                                <p class="tit_txt">Get Ready</p>
                                                <p class="sub_txt">때에 맞는 인사하기</p>
                                            </v-list-item>
                                            <v-list-item>
                                                <p class="tit_txt">Let’s Learn</p>
                                                <p class="sub_txt">학습 내용 알아보기</p>
                                            </v-list-item>
                                            <v-list-item>
                                                <p class="tit_txt">Look and Think</p>
                                                <p class="sub_txt">동영상 보고 표현 이해하기</p>
                                            </v-list-item>
                                            <v-list-item>
                                                <p class="tit_txt">Let’s Learn</p>
                                                <p class="sub_txt">실생활 동영상 보며 대화하기</p>
                                            </v-list-item>
                                            <v-list-item>
                                                <p class="tit_txt">Chant</p>
                                                <p class="sub_txt">찬트 하며 표현 익히기</p>
                                            </v-list-item>
                                            <v-list-item>
                                                <p class="tit_txt">Play Time 1</p>
                                                <p class="sub_txt">몸으로 말해요</p>
                                            </v-list-item>
                                        </v-list>
                                    </td>
                                    <td>06월 24일 (월)</td>
                                    <td>05시간 30분</td>
                                    <td>100%</td>
                                </tr>
                                <tr>
                                    <td colspan="7" class="no_border fraction_wrap">
                                        <v-carousel hide-delimiters height="auto" class="type_fraction">
                                            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                                                <v-sheet>
                                                    <div class="d-flex justify-center align-center">
                                                        <img src="@/assets/images/temp/img_progressInfo.png" alt="slide image" />
                                                    </div>
                                                </v-sheet>
                                            </v-carousel-item>
                                        </v-carousel>
                                        <div class="fraction">
                                            <span class="number">1</span>
                                            <span class="total">/ 5</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-color-light text_left vertical-top">&nbsp;</td>
                                    <td>2</td>
                                    <td>
                                        <div class="buttons gap05">
                                            <v-btn rounded flat size="small" class="color_green">차시 복습</v-btn>
                                            <!-- !NOTE 노트 업로드 시 class="button_note"에 .upload 추가 됩니다. -->
                                            <v-btn rounded flat size="small" class="button_note">노트</v-btn>
                                        </div>
                                    </td>
                                    <td class="text_left class-box">
                                        <v-list variant="flat" density="compact">
                                            <v-list-item>
                                                <p class="tit_txt">Get Ready</p>
                                                <p class="sub_txt">때에 맞는 인사하기</p>
                                            </v-list-item>
                                            <v-list-item>
                                                <p class="tit_txt">Let’s Learn</p>
                                                <p class="sub_txt">학습 내용 알아보기</p>
                                            </v-list-item>
                                            <v-list-item>
                                                <p class="tit_txt">Look and Think</p>
                                                <p class="sub_txt">동영상 보고 표현 이해하기</p>
                                            </v-list-item>
                                            <v-list-item>
                                                <p class="tit_txt">Let’s Learn</p>
                                                <p class="sub_txt">실생활 동영상 보며 대화하기</p>
                                            </v-list-item>
                                            <v-list-item>
                                                <p class="tit_txt">Chant</p>
                                                <p class="sub_txt">찬트 하며 표현 익히기</p>
                                            </v-list-item>
                                            <v-list-item>
                                                <p class="tit_txt">Play Time 1</p>
                                                <p class="sub_txt">몸으로 말해요</p>
                                            </v-list-item>
                                        </v-list>
                                    </td>
                                    <td>06월 24일 (월)</td>
                                    <td>05시간 30분</td>
                                    <td>100%</td>
                                </tr>
                            </tbody>
                        </v-data-table>
                    </div>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>
<script setup>
import { ref } from 'vue';

const progressInfo = ref(true);
const select = ref({ state: '학기 전체' });
const items = ref([{ state: '학기 전체' }, { state: '1학기' }, { state: '2학기' }]);

const slides = ref(['First', 'Second', 'Third', 'Fourth', 'Fifth']);
</script>
