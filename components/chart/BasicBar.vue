<template>
    <div class="learningDiagnostics" :class="{ solid: solidColor }">
        <div class="chart-bar">
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
    item: {
        type: Array,
        default: false
    }
});
</script>
