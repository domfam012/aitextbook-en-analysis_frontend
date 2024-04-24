<template>
    <div class="customized">
        <div class="contents d-flex align-center">
            <div class="left">
                <div class="box d-flex align-center">
                    <div class="avatar">
                        <v-img src="@/assets/images/img_character.svg" alt="캐릭터" class="avatar-item-93" />
                    </div>
                    <div class="mgl20 mgr30">
                        <h3>단원 평가 AI 맞춤 출제</h3>
                        <v-btn rounded flat size="small" class="primary mgt10">과제 보내기</v-btn>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="block">
                    <p class="question">단어 문제</p>
                    <div class="d-flex align-center mgt10">
                        <v-text-field type="number" value="5" hide-details variant="filled" />
                        <span class="points mgl10">x 6점 배점</span>
                    </div>
                </div>
                <div class="block">
                    <p class="question">표현 문제</p>
                    <div class="d-flex align-center mgt10">
                        <v-text-field type="number" value="5" hide-details variant="filled" />
                        <span class="points mgl10">x 6점 배점</span>
                    </div>
                </div>
                <div class="block">
                    <p class="question">상황 문제</p>
                    <div class="d-flex align-center mgt10">
                        <v-text-field type="number" value="5" hide-details variant="filled" />
                        <span class="points mgl10">x 8점 배점</span>
                    </div>
                </div>
                <div class="block">
                    <p class="question">총 문항 수</p>
                    <div class="d-flex align-center mgt10">
                        <v-text-field type="number" value="15" class="total" hide-details variant="filled" disabled />
                        <span class="points mgl10">= 100점 만점</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
