<template>
    <div class="learningDiagnostics">
        <div class="chart-bar" :class="{ solid: solidColor }">
            <v-row no-gutters class="gap2">
                <v-col>
                    <!-- 범례 -->
                    <div class="use-word" v-for="(item, index) in item" :key="index">
                        <span class="bullet" :class="item.color" />
                        <p>{{ item.label }}</p>
                    </div>
                </v-col>
                <v-col>
                    <div class="progress-background" v-for="(item, index) in item" :key="index">
                        <div
                            class="progress-date"
                            :class="[item.color, { white: item.value >= 70 }]"
                            :style="`width: ${item.value <= 100 ? item.value : 100}%`"
                        >
                            <p>
                                {{ item.value }}
                                <template v-if="suffix === '분'">
                                    <span v-if="item.value >= 60">{{ suffix }}({{ Math.floor(item.value / 60) }}시간)</span>
                                    <span v-else>{{ suffix }}</span>
                                </template>
                                <template v-else>
                                    <span v-if="item.value >= 70">{{ suffix }}</span>
                                    <span v-else>{{ suffix }}</span>
                                </template>
                            </p>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    // 차트 단색 옵션
    solidColor: {
        type: Boolean,
        default: false
    },
    item: {
        type: Array,
        default: false
    },
    suffix: {
        type: String,
        default: ''
    }
});
const { t } = useI18n();
</script>
