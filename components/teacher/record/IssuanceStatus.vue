<template>
    <v-card elevation="0" class="v-card-darkblue">
        <v-card-item>
            <v-card-title>
                <ul class="divider_group">
                    <li>3학년 1학기</li>
                    <li>AI 수학 생활기록부 발행 현황 : <span class="font-color-yellow">총 25명</span></li>
                </ul>
            </v-card-title>
        </v-card-item>
        <v-container fluid class="pda0">
            <div class="divider_items">
                <div class="item">
                    <strong>학습 이력 수집</strong>
                    <!-- !NOTE 완료되면 하기 <v-btn></v-btn>에 class="type_success"를 추가해주세요. -->
                    <v-btn rounded flat class="color_green type_success">
                        <div class="inline_wrap">
                            <strong>25</strong>
                        </div>
                        <span class="unit">명</span>
                    </v-btn>
                </div>
                <div class="item">
                    <strong>단원별 평어 작성</strong>
                    <v-btn rounded flat class="color_mint">
                        <div class="inline_wrap">
                            <strong>8</strong>
                            <span class="number">/25</span>
                        </div>
                        <span class="unit">명</span>
                    </v-btn>
                </div>
                <div class="item">
                    <strong>발행 완료 건수</strong>
                    <v-btn rounded flat class="color_skyblue">
                        <div class="inline_wrap">
                            <strong>3</strong>
                            <span class="number">/8</span>
                        </div>
                        <span class="unit">건</span>
                    </v-btn>
                </div>
            </div>
            <div class="extra px30 py20">
                <p class="bullet">위 숫자를 선택하면 AI 수학 생활기록부를 조회하거나 평어를 작성할 수 있어요.</p>
            </div>
        </v-container>
    </v-card>
</template>
