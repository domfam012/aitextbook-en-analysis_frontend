<template>
    <v-dialog v-model="modalData.isOpen" width="100%">
        <v-card class="modalSelfCheck student-analysis px30 py20">
            <v-btn density="compact" variants="text" tile elevation="0" min-width="30" min-height="30" class="close px-0">
                <i class="ico close_30 ico_size_lg" @click="closeModal"></i>
            </v-btn>
            <v-card-title class="d-flex justify-center">
                <div class="tit d-flex align-center">
                    <div class="select_box_wrap mgr10">
                        <v-select
                            v-model="select"
                            :items="items"
                            class="type_primary_fill"
                            :menu-props="{ contentClass: 'primary_fill_item' }"
                            feedbackStampList
                            item-title="state"
                            item-value="abbr"
                            label="TEXT"
                            variant="outlined"
                            persistent-hint
                            rounded
                            return-object
                            single-line
                            hide-details
                        ></v-select>
                    </div>
                    의 성취 기준 모아보기
                </div>
            </v-card-title>
            <div class="mgt20">
                <div class="d-flex align-center justify-end">
                    <v-btn rounded flat size="small" class="primary mgr10">
                        <i class="ico descending_white ico_size_6 mgr5"></i>
                        단원별
                    </v-btn>
                    <v-btn rounded flat size="small" class="secondary">
                        <i class="ico descending_black ico_size_6 mgr5"></i>
                        날짜별
                    </v-btn>
                </div>

                <!-- 차시별 리스트 -->
                <div class="class-box">
                    <div class="group">
                        <div class="title_box">
                            <div class="flag flag_position">
                                <span>1차시</span>
                            </div>
                        </div>
                        <div class="contents">
                            <!-- 차시명 -->
                            <div class="inner_box">
                                <v-list variant="flat" class="pa-0" density="compact">
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
                                    <v-list-item>
                                        <p class="tit_txt">Play Time 1</p>
                                        <p class="sub_txt">몸으로 말해요</p>
                                    </v-list-item>
                                </v-list>
                            </div>
                            <!-- 성취기준 -->
                            <div class="achieve_box">
                                <div class="tit">
                                    <span class="box_bg">성취 기준</span>
                                </div>
                                <v-list variant="flat" class="pa-0" density="compact">
                                    <v-list-item-subtitle>안부를 묻고 답하는 말을 듣고 이해할 수 있나요?</v-list-item-subtitle>
                                    <v-list-item-subtitle>안부를 묻고 답할 수 있나요?</v-list-item-subtitle>
                                    <v-list-item-subtitle>안부를 묻고 답하는 말을 듣고 이해할 수 있나요?</v-list-item-subtitle>
                                    <v-list-item-subtitle>안부를 묻고 답할 수 있나요?</v-list-item-subtitle>
                                </v-list>
                            </div>
                            <!-- YYYY.MM.DD 체크 -->
                            <div class="date_box">
                                <div class="tit">
                                    <span class="box_bg">YYYY.MM.DD 체크</span>
                                </div>
                                <v-chip-group selected-class="active" mandatory v-model="selection" class="mgt10 py-0">
                                    <v-chip variant="text" color="transparent"><i class="ico imoji1"></i></v-chip>
                                    <v-chip variant="text" color="transparent"><i class="ico imoji2"></i></v-chip>
                                    <v-chip variant="text" color="transparent"><i class="ico imoji3"></i></v-chip>
                                    <v-chip variant="text" color="transparent"><i class="ico imoji4"></i></v-chip>
                                    <v-chip variant="text" color="transparent"><i class="ico imoji5"></i></v-chip>
                                </v-chip-group>
                            </div>
                        </div>
                    </div>
                    <div class="group">
                        <div class="title_box">
                            <div class="flag flag_position">
                                <span>2차시</span>
                            </div>
                        </div>
                        <div class="contents">
                            <!-- 차시명 -->
                            <div class="inner_box">
                                <v-list variant="flat" class="pa-0" density="compact">
                                    <v-list-item>
                                        <p class="tit_txt">Look and Say</p>
                                        <p class="sub_txt">동영상 보고 표현 말하기</p>
                                    </v-list-item>
                                    <v-list-item>
                                        <p class="tit_txt">Song</p>
                                        <p class="sub_txt">Good Morning 노래 부르기</p>
                                    </v-list-item>
                                    <v-list-item>
                                        <p class="tit_txt">Play Time 2</p>
                                        <p class="sub_txt">가위바위보 말판 놀이</p>
                                    </v-list-item>
                                    <v-list-item>
                                        <p class="tit_txt">Around the World</p>
                                        <p class="sub_txt">여러 나라의 아침 인사말</p>
                                    </v-list-item>
                                </v-list>
                            </div>
                            <!-- 성취기준 -->
                            <div class="achieve_box">
                                <div class="tit">
                                    <span class="box_bg">성취 기준</span>
                                </div>
                                <v-list variant="flat" class="pa-0" density="compact">
                                    <v-list-item-subtitle>안부를 묻고 답하는 말을 듣고 이해할 수 있나요?</v-list-item-subtitle>
                                    <v-list-item-subtitle>안부를 묻고 답할 수 있나요?</v-list-item-subtitle>
                                </v-list>
                            </div>
                            <!-- YYYY.MM.DD 체크 -->
                            <div class="date_box">
                                <div class="tit">
                                    <span class="box_bg">YYYY.MM.DD 체크</span>
                                </div>
                                <v-chip-group selected-class="active" mandatory v-model="selection" class="mgt10 py-0">
                                    <v-chip variant="text" color="transparent"><i class="ico imoji1"></i></v-chip>
                                    <v-chip variant="text" color="transparent"><i class="ico imoji2"></i></v-chip>
                                    <v-chip variant="text" color="transparent"><i class="ico imoji3"></i></v-chip>
                                    <v-chip variant="text" color="transparent"><i class="ico imoji4"></i></v-chip>
                                    <v-chip variant="text" color="transparent"><i class="ico imoji5"></i></v-chip>
                                </v-chip-group>
                            </div>
                        </div>
                    </div>
                    <div class="group">
                        <div class="title_box">
                            <div class="flag flag_position">
                                <span>3차시</span>
                            </div>
                        </div>
                        <div class="contents">
                            <!-- 차시명 -->
                            <div class="inner_box">
                                <v-list variant="flat" class="pa-0" density="compact">
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
                                </v-list>
                            </div>
                            <!-- 성취기준 -->
                            <div class="achieve_box">
                                <div class="tit">
                                    <span class="box_bg">성취 기준</span>
                                </div>
                                <v-list variant="flat" class="pa-0" density="compact">
                                    <v-list-item-subtitle>
                                        주요단어 (fine, good, great, bad, morning, afternoon, evening, night) 및 해당 단어가 포함된 문장을
                                        읽고 쓸 수 있나요?
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle
                                        >소리와 철자의 관계를 이해하며 단어 (dog, doll, tall, tiger)를 읽고 쓸 수
                                        있나요?</v-list-item-subtitle
                                    >
                                </v-list>
                            </div>
                            <!-- YYYY.MM.DD 체크 -->
                            <div class="date_box">
                                <div class="tit">
                                    <span class="box_bg">YYYY.MM.DD 체크</span>
                                </div>
                                <v-chip-group selected-class="active" mandatory v-model="selection" class="mgt10 py-0">
                                    <v-chip variant="text" color="transparent"><i class="ico imoji1"></i></v-chip>
                                    <v-chip variant="text" color="transparent"><i class="ico imoji2"></i></v-chip>
                                    <v-chip variant="text" color="transparent"><i class="ico imoji3"></i></v-chip>
                                    <v-chip variant="text" color="transparent"><i class="ico imoji4"></i></v-chip>
                                    <v-chip variant="text" color="transparent"><i class="ico imoji5"></i></v-chip>
                                </v-chip-group>
                            </div>
                        </div>
                    </div>
                    <div class="group">
                        <div class="title_box">
                            <div class="flag flag_position">
                                <span>4차시</span>
                            </div>
                        </div>
                        <div class="contents">
                            <!-- 차시명 -->
                            <div class="inner_box">
                                <v-list variant="flat" class="pa-0" density="compact">
                                    <v-list-item>
                                        <p class="tit_txt">Look and Say</p>
                                        <p class="sub_txt">동여상 보고 표현 말하기</p>
                                    </v-list-item>
                                    <v-list-item>
                                        <p class="tit_txt">Song</p>
                                        <p class="sub_txt">Good Morning 노래 부르기</p>
                                    </v-list-item>
                                    <v-list-item>
                                        <p class="tit_txt">Play Time 2</p>
                                        <p class="sub_txt">가위바위보 말판 놀이</p>
                                    </v-list-item>
                                    <v-list-item>
                                        <p class="tit_txt">Around the World</p>
                                        <p class="sub_txt">여러 나라의 아침 인사말</p>
                                    </v-list-item>
                                </v-list>
                            </div>
                            <!-- 성취기준 -->
                            <div class="achieve_box">
                                <div class="tit">
                                    <span class="box_bg">성취 기준</span>
                                </div>
                                <v-list variant="flat" class="pa-0" density="compact">
                                    <v-list-item-subtitle>안부를 묻고 답하는 말을 듣고 이해할 수 있나요?</v-list-item-subtitle>
                                    <v-list-item-subtitle>안부를 묻고 답할 수 있나요?</v-list-item-subtitle>
                                </v-list>
                            </div>
                            <!-- YYYY.MM.DD 체크 -->
                            <div class="date_box">
                                <div class="tit">
                                    <span class="box_bg">YYYY.MM.DD 체크</span>
                                </div>
                                <v-chip-group selected-class="active" mandatory v-model="selection" class="mgt10 py-0">
                                    <v-chip variant="text" color="transparent"><i class="ico imoji1"></i></v-chip>
                                    <v-chip variant="text" color="transparent"><i class="ico imoji2"></i></v-chip>
                                    <v-chip variant="text" color="transparent"><i class="ico imoji3"></i></v-chip>
                                    <v-chip variant="text" color="transparent"><i class="ico imoji4"></i></v-chip>
                                    <v-chip variant="text" color="transparent"><i class="ico imoji5"></i></v-chip>
                                </v-chip-group>
                            </div>
                        </div>
                    </div>
                    <div class="group">
                        <div class="title_box">
                            <div class="flag flag_position">
                                <span>5차시</span>
                            </div>
                        </div>
                        <div class="contents">
                            <!-- 차시명 -->
                            <div class="inner_box">
                                <v-list variant="flat" class="pa-0" density="compact">
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
                                    <v-list-item>
                                        <p class="tit_txt">Play Time 1</p>
                                        <p class="sub_txt">몸으로 말해요</p>
                                    </v-list-item>
                                </v-list>
                            </div>
                            <!-- 성취기준 -->
                            <div class="achieve_box">
                                <div class="tit">
                                    <span class="box_bg">성취 기준</span>
                                </div>
                                <v-list variant="flat" class="pa-0" density="compact">
                                    <v-list-item-subtitle>안부를 묻고 답하는 말을 듣고 이해할 수 있나요?</v-list-item-subtitle>
                                    <v-list-item-subtitle>안부를 묻고 답할 수 있나요?</v-list-item-subtitle>
                                    <v-list-item-subtitle>안부를 묻고 답하는 말을 듣고 이해할 수 있나요?</v-list-item-subtitle>
                                    <v-list-item-subtitle>안부를 묻고 답할 수 있나요?</v-list-item-subtitle>
                                </v-list>
                            </div>
                            <!-- YYYY.MM.DD 체크 -->
                            <div class="date_box">
                                <div class="tit">
                                    <span class="box_bg">YYYY.MM.DD 체크</span>
                                </div>
                                <v-chip-group selected-class="active" mandatory v-model="selection" class="mgt10 py-0">
                                    <v-chip variant="text" color="transparent"><i class="ico imoji1"></i></v-chip>
                                    <v-chip variant="text" color="transparent"><i class="ico imoji2"></i></v-chip>
                                    <v-chip variant="text" color="transparent"><i class="ico imoji3"></i></v-chip>
                                    <v-chip variant="text" color="transparent"><i class="ico imoji4"></i></v-chip>
                                    <v-chip variant="text" color="transparent"><i class="ico imoji5"></i></v-chip>
                                </v-chip-group>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { ref } from 'vue';
const selection = ref(0);
const { modalData, closeModal } = useModalStore();

const select = ref({ state: 'Lesson 1' });
const items = ref([{ state: 'Lesson 1' }, { state: 'Lesson 2' }, { state: 'Lesson 3' }, { state: 'Lesson 4' }, { state: 'Lesson 5' }]);
</script>
