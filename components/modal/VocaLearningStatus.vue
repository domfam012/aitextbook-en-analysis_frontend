<template>
    <div class="text-center pa-4">
        <!-- voca 학습 현황 모니터링 -->
        <v-dialog v-model="modalData.isOpen" width="auto">
            <v-card class="dialog touchVoca">
                <v-btn class="icon_close" @click="closeModal"><i class="ico close_30 ico_size_lg"></i></v-btn>

                <div class="top">
                    <div class="avatar avatar-box">
                        <v-img src="@/assets/images/temp/img_pho_st01.png" alt="아바타 이미지" class="avatar-item" />
                        <div class="avatar-info">
                            <span class="info_number">15번</span>
                            <span class="info_name">늘푸른하늘</span>
                        </div>
                    </div>
                    <h3><span class="date">2024년 03월 02일</span>에 학습한 Touch VOCA</h3>
                </div>
                <div class="bot">
                    <div class="box">
                        <!-- 
                            상황별 클래스 추가 
                            알고있음  .know
                            조금모르고 있음, 조금 알고있음  .know-little
                            모르고 있음 .not 
                        -->
                        <v-list class="word-list" bg-color="transparent">
                            <v-list-item>
                                <p class="word bullet">apple</p>
                                <p class="wonder know d-flex align-center"><i class="ico exclamationMark"></i>알고 있음</p>
                            </v-list-item>
                            <v-list-item>
                                <p class="word bullet">apple</p>
                                <p class="know-little d-flex align-center"><i class="ico ellipsisMark"></i>조금 모르고 있음</p>
                            </v-list-item>
                            <v-list-item>
                                <p class="word bullet">apple</p>
                                <p class="wonder know d-flex align-center"><i class="ico exclamationMark"></i>알고 있음</p>
                            </v-list-item>
                            <v-list-item>
                                <p class="word bullet">apple</p>
                                <p class="know-little d-flex align-center"><i class="ico ellipsisMark"></i>조금 모르고 있음</p>
                            </v-list-item>
                            <v-list-item>
                                <p class="word bullet">apple</p>
                                <p class="wonder know d-flex align-center"><i class="ico exclamationMark"></i>알고 있음</p>
                            </v-list-item>
                            <v-list-item>
                                <p class="word bullet">apple</p>
                                <p class="know-little d-flex align-center"><i class="ico ellipsisMark"></i>조금 모르고 있음</p>
                            </v-list-item>
                            <v-list-item>
                                <p class="word bullet">apple</p>
                                <p class="wonder know d-flex align-center"><i class="ico exclamationMark"></i>알고 있음</p>
                            </v-list-item>
                            <v-list-item>
                                <p class="word bullet">apple</p>
                                <p class="know-little d-flex align-center"><i class="ico ellipsisMark"></i>조금 모르고 있음</p>
                            </v-list-item>
                            <v-list-item>
                                <p class="word bullet">apple</p>
                                <p class="wonder know d-flex align-center"><i class="ico exclamationMark"></i>알고 있음</p>
                            </v-list-item>
                            <v-list-item>
                                <p class="word bullet">apple</p>
                                <p class="know-little d-flex align-center"><i class="ico ellipsisMark"></i>조금 모르고 있음</p>
                            </v-list-item>
                            <v-list-item>
                                <p class="word bullet">apple</p>
                                <p class="know-little d-flex align-center"><i class="ico ellipsisMark"></i>조금 알고 있음</p>
                            </v-list-item>
                            <v-list-item>
                                <p class="word bullet">apple</p>
                                <p class="not d-flex align-center"><i class="ico questionMark"></i>모르고 있음</p>
                            </v-list-item>
                            <v-list-item>
                                <p class="word bullet">apple</p>
                                <p class="know-little d-flex align-center"><i class="ico ellipsisMark"></i>조금 알고 있음</p>
                            </v-list-item>
                            <v-list-item>
                                <p class="word bullet">apple</p>
                                <p class="not d-flex align-center"><i class="ico questionMark"></i>모르고 있음</p>
                            </v-list-item>
                            <v-list-item>
                                <p class="word bullet">apple</p>
                                <p class="know-little d-flex align-center"><i class="ico ellipsisMark"></i>조금 알고 있음</p>
                            </v-list-item>
                            <v-list-item>
                                <p class="word bullet">apple</p>
                                <p class="not d-flex align-center"><i class="ico questionMark"></i>모르고 있음</p>
                            </v-list-item>
                            <v-list-item>
                                <p class="word bullet">apple</p>
                                <p class="know-little d-flex align-center"><i class="ico ellipsisMark"></i>조금 알고 있음</p>
                            </v-list-item>
                            <v-list-item>
                                <p class="word bullet">apple</p>
                                <p class="not d-flex align-center"><i class="ico questionMark"></i>모르고 있음</p>
                            </v-list-item>
                            <v-list-item>
                                <p class="word bullet">apple</p>
                                <p class="know-little d-flex align-center"><i class="ico ellipsisMark"></i>조금 알고 있음</p>
                            </v-list-item>
                            <v-list-item>
                                <p class="word bullet">apple</p>
                                <p class="not d-flex align-center"><i class="ico questionMark"></i>모르고 있음</p>
                            </v-list-item>
                            <v-list-item>
                                <p class="word bullet">apple</p>
                                <p class="wonder know d-flex align-center"><i class="ico exclamationMark"></i>알고 있음</p>
                            </v-list-item>
                            <v-list-item>
                                <p class="word bullet">apple</p>
                                <p class="know-little d-flex align-center"><i class="ico ellipsisMark"></i>조금 모르고 있음</p>
                            </v-list-item>
                            <v-list-item>
                                <p class="word bullet">apple</p>
                                <p class="not d-flex align-center"><i class="ico questionMark"></i>모르고 있음</p>
                            </v-list-item>
                        </v-list>
                    </div>
                </div>
                <div class="dialog_btn_wrap mgt30 gap1 d-flex justify-center">
                    <v-btn rounded flat class="outlined size_md" @click="closeModal">닫기</v-btn>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
const props = defineProps(['isOpen']);

const { modalData, closeModal } = useModalStore();

const apiClassStore = useApiTeacherClassStore();
</script>
