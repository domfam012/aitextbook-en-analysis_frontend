<template>
    <div class="chatbot">
        <div class="inner">
            <!-- 타이틀 영역 -->
            <v-list class="tit px30 py40" bg-color="transparent">
                <v-list-item class="bullet" v-if="wordLearningState.knownWordsCount">
                    <p>
                        {{ t('analytics.word.text1') }} <span class="num">{{ wordLearningState.knownWordsCount.count }}</span
                        >{{ t('common.unit.num') }}
                    </p>
                </v-list-item>
                <v-list-item class="bullet" v-if="wordLearningState.somewhatKnownWordsCount">
                    <p>
                        {{ t('analytics.word.text2') }} <span class="num">{{ wordLearningState.somewhatKnownWordsCount.count }}</span
                        >{{ t('common.unit.num') }}
                    </p>
                </v-list-item>
                <v-list-item class="bullet" v-if="wordLearningState.unknownWordsCount">
                    <p>
                        {{ t('analytics.word.text3') }}<span class="num">{{ wordLearningState.unknownWordsCount.count }}</span
                        >{{ t('common.unit.num') }}
                    </p>
                </v-list-item>
                <v-list-item class="bullet" v-if="wordLearningState.totalWordLearningCount">
                    <p>
                        {{ t('analytics.word.text4') }}<span class="num">{{ wordLearningState.totalWordLearningCount.count }}</span
                        >{{ t('common.unit.num') }}
                    </p>
                </v-list-item>
            </v-list>
            <!-- 단어 영역 -->
            <v-list class="word" :style="word ? 'display: block' : 'display: none'" bg-color="transparent">
                <v-list-item>
                    <template v-for="item in wordLearningState.knownWordsCount?.word">
                        <p>{{ item }}</p>
                    </template>
                </v-list-item>
                <v-list-item>
                    <template v-for="item in wordLearningState.somewhatKnownWordsCount?.word">
                        <p>{{ item + 'aaa' }}</p>
                    </template>
                </v-list-item>
                <v-list-item>
                    <template v-for="item in wordLearningState.unknownWordsCount?.word">
                        <p>{{ item }}</p>
                    </template>
                </v-list-item>
                <v-list-item>
                    <template v-for="item in wordLearningState.totalWordLearningCount?.word">
                        <p>{{ item }}</p>
                    </template>
                </v-list-item>
            </v-list>
            <!-- 더보기 버튼 -->
            <div class="more" @click="word = !word">
                <div class="ico_outer size_60">
                    <i v-if="word" class="ico left_24"></i>
                    <i v-else class="ico right_24"></i>
                    <span class="blind">{{ t('analytics.word.expand') }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const { t } = useI18n();
const word = ref(false);
const props = defineProps(['item']);

const learnStore = useApiLearnStore();
const { wordLearningState } = storeToRefs(learnStore);

onMounted(async () => {
    await learnStore.getLearnWordLearning({
        chId: props.item.chId,
        sessId: props.item.sessId,
        achvRt: props.item.achvRtAvg,
        studUuid: props.item.studUuid
    });
});
</script>
