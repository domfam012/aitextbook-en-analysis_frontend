<template>
    <v-card elevation="0" class="v-card-green dailyPerformance">
        <v-card-item>
            <v-card-title class="lessonInfo">
                <div class="notice d-flex align-center">
                    <div class="box d-flex d-flex align-center">
                        <v-btn flat rounded size="small" class="icon_only icon_only-transparent icon_only-sm">
                            <div class="size_sm">
                                <i class="ico size_5 left_24"></i>
                                <span class="blind">이전</span>
                            </div>
                        </v-btn>
                        <div class="info">
                            <p class="name">Lesson 1. How Are You?</p>
                            <p class="kind">1차시</p>
                        </div>
                        <v-btn flat rounded size="small" class="icon_only icon_only-transparent icon_only-sm">
                            <div class="size_sm">
                                <i class="ico size_5 right_24"></i>
                                <span class="blind">다음</span>
                            </div>
                        </v-btn>
                    </div>
                    <div class="pages">
                        교과서<br />
                        <span class="num">110~113쪽</span>
                    </div>
                </div>
                <v-btn class="icon_only icon_only-sm" rounded flat><i class="ico more" /></v-btn>
            </v-card-title>
        </v-card-item>
        <v-container fluid class="class-box">
            <v-list variant="flat" density="compact">
                <v-list-item>
                    <p class="tit_txt">Get Ready</p>
                    <p class="sub_txt">때에 맞는 인사하기</p>
                    <div class="extra">
                        <v-btn rounded flat size="small" class="primary">복습</v-btn>
                    </div>
                </v-list-item>
                <v-list-item>
                    <p class="tit_txt">Let’s Learn</p>
                    <p class="sub_txt">학습 내용 알아보기</p>
                    <div class="extra">
                        <v-btn rounded flat size="small" class="primary">복습</v-btn>
                    </div>
                </v-list-item>
                <v-list-item>
                    <p class="tit_txt">Look and Think</p>
                    <p class="sub_txt">동영상 보고 표현 이해하기</p>
                    <div class="extra">
                        <v-btn rounded flat size="small" class="primary">복습</v-btn>
                    </div>
                </v-list-item>
                <v-list-item>
                    <p class="tit_txt">Let’s Learn</p>
                    <p class="sub_txt">실생활 동영상 보며 대화하기</p>
                    <div class="extra">
                        <v-btn rounded flat size="small" class="primary">복습</v-btn>
                    </div>
                </v-list-item>
                <v-list-item>
                    <p class="tit_txt">Chant</p>
                    <p class="sub_txt">찬트 하며 표현 익히기</p>
                    <div class="extra">
                        <v-btn rounded flat size="small" class="primary">복습</v-btn>
                    </div>
                </v-list-item>
                <v-list-item>
                    <p class="tit_txt">Play Time 1</p>
                    <p class="sub_txt">몸으로 말해요</p>
                    <div class="extra">
                        <v-btn rounded flat size="small" class="primary">복습</v-btn>
                    </div>
                </v-list-item>
                <v-list-item>
                    <p class="tit_txt">Play Time 1</p>
                    <p class="sub_txt">몸으로 말해요</p>
                    <div class="extra">
                        <v-btn rounded flat size="small" class="primary">복습</v-btn>
                    </div>
                </v-list-item>
            </v-list>
        </v-container>
    </v-card>
</template>
