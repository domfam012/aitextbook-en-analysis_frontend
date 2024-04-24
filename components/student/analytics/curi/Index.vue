<template>
    <v-card elevation="0" height="54rem" class="v-card-green tabs fluid">
        <v-card-item>
            <v-card-title>
                <span class="font-color-primary">3월 17일 화요일 수업 정보 </span>
                <v-tabs v-model="tab">
                    <v-tab value="tab1-1">숫자 색칠판 완성하기</v-tab>
                    <v-tab value="tab1-2">큐리가 칭찬한 표현</v-tab>
                    <v-tab value="tab1-3">큐리가 아쉬워한 표현</v-tab>
                </v-tabs>
                <v-btn class="icon_only" rounded flat><i class="ico more ico_size_10" /></v-btn>
            </v-card-title>
        </v-card-item>
        <v-container fluid>
            <v-window v-model="tab">
                <v-window-item value="tab1-1">
                    <StudentAnalyticsCuriColoring />
                </v-window-item>
                <v-window-item value="tab1-2">
                    <StudentAnalyticsCuriCorrect />
                </v-window-item>
                <v-window-item value="tab1-3">
                    <StudentAnalyticsCuriIncorrect />
                </v-window-item>
            </v-window>
        </v-container>
    </v-card>
</template>
<script>
export default {
    data: () => ({
        tab: null
    })
};
</script>
