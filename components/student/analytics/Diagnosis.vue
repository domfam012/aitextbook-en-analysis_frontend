<template>
    <v-card elevation="0" class="v-card-lightblue">
        <v-card-item>
            <v-card-title class="d-flex align-center">
                <span class="mr-5"> 나의 학습 분석</span>
                <div class="d-flex">
                    <div class="select_box_wrap mgr10">
                        <v-select
                            v-model="select"
                            :items="selectItems"
                            class="type_primary_fill"
                            :menu-props="{ contentClass: 'primary_fill_item' }"
                            item-title="txt"
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
                    <range-date-picker />
                </div>
            </v-card-title>
        </v-card-item>
        <v-card-text class="py20 px40">
            <v-row no-gutters class="gap6">
                <v-col>
                    <div class="learningDiagnostics">
                        <ChartBasicBar chartTitle="단어 학습 진단" />
                    </div>
                </v-col>
                <v-col>
                    <div class="learningDiagnostics">
                        <ChartBasicBar chartTitle="누적 학습 시간" />
                    </div>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>
<script setup>
const select = ref('최근 7일');
const selectItems = ref(['최근 7일', '최근 30일']);

const apiMyLessonStore = useApiMyLessonStore();
const { wordDiagnosisState, cumulativeTimeState } = storeToRefs(apiMyLessonStore);

onMounted(async => {
    apiMyLessonStore.getMyLessonCumulativeLearningTime();
    apiMyLessonStore.getMyLessonWordDiagnostics();
});
</script>
