<template>
    <div class="learningDiagnostics" :class="{ solid: solidColor }">
        <h3 class="learn-title bullet-bot">{{ chartTitle }}</h3>
        <div class="chart-bar">
            <v-row no-gutters class="gap2">
                <v-col>
                    <!-- 범례 -->
                    <div class="use-word" v-for="(item, index) in series" :key="index">
                        <span class="bullet" :class="item.color" />
                        <p>{{ item.label }}</p>
                    </div>
                </v-col>
                <v-col>
                    <div class="progress-background" v-for="(item, index) in series" :key="index">
                        <div class="progress-date" :class="[item.color, { white: item.value >= 70 }]" :style="`width: ${item.value}%`">
                            <span>{{ item.value }}</span>
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
    chartTitle: {
        type: String,
        default: '차트제목'
    },
    basicChart: {
        type: Array,
        default: false
    }
});
const series = [
    { value: 50, color: 'color-1', label: '범례1' },
    { value: 50, color: 'color-2', label: '범례1' },
    { value: 50, color: 'color-3', label: '범례1' },
    { value: 50, color: 'color-4', label: '범례1' },
    { value: 80, color: 'color-5', label: '범례1' },
    { value: 80, color: 'color-6', label: '범례1' }
];
</script>
