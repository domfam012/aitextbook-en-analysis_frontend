<template>
    <v-card height="56rem" elevation="0" class="v-card-green flex-1-1-100">
        <div class="touchVoca">
            <v-card-item>
                <v-card-title>
                    <p>{{ t('analytics.touchVoca.title') }}</p>
                    <v-spacer></v-spacer>
                    <v-btn class="icon_only icon_only-sm" @click="openModal({ type: 'touchVoca' })" rounded flat
                        ><i class="ico more"
                    /></v-btn>
                </v-card-title>
            </v-card-item>
            <v-card-text class="px30 py20">
                <div class="box">
                    <div class="chart_multiple_radialbars">
                        <ChartMultipleRadialbars
                            v-if="touchVocaGraph && Object.keys(touchVocaGraph).length > 0"
                            :values="[
                                [touchVocaGraph?.wrdUnknownCnt, '#909090', 2],
                                [touchVocaGraph?.wrdLittleknowCnt, '#FFBB00', 3],
                                [touchVocaGraph?.wrdKnowCnt, '#42C5B1', 4],
                                [touchVocaGraph?.wrdTot, '#0099FF', 5]
                            ]"
                            :circle-value="{
                                correctRate: touchVocaGraph?.avgAnswrRt,
                                totalCount: touchVocaGraph?.wrdTot
                            }"
                        />
                        <div class="chart-bar type_single">
                            <div class="use-word">
                                <span class="bullet color-1"></span>
                                <p>{{ t('analytics.touchVoca.text1') }}</p>
                            </div>
                            <div class="use-word">
                                <span class="bullet color-2"></span>
                                <p>{{ t('analytics.touchVoca.text2') }}</p>
                            </div>
                            <div class="use-word">
                                <span class="bullet color-3"></span>
                                <p>{{ t('analytics.touchVoca.text3') }}</p>
                            </div>
                            <div class="use-word">
                                <span class="bullet color-6"></span>
                                <p>{{ t('analytics.touchVoca.text4') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </v-card-text>
        </div>
    </v-card>
    <template v-if="modalData.type === 'touchVoca'">
        <ModalTouchVoca />
    </template>
</template>
<script setup>
const { t } = useI18n();
const { modalData, openModal } = useModalStore();
const todayStore = useApiTodayStore();
const { touchVocaGraph } = storeToRefs(todayStore);
</script>
