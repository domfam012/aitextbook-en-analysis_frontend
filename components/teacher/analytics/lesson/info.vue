<template>
    <v-sheet class="dailyPerformance">
        <div class="tabs fluid" v-if="teacherLearningSessionState.length > 0">
            <v-tabs v-model="lessonCommonState.tab" @update:model-value="updateTab">
                <v-tab value="one"> 오늘의 학업 성취율 </v-tab>
                <v-tab value="two"> 단원별 누적 성취율 </v-tab>
            </v-tabs>
            <!-- 색깔별 그룹 막대 차트-->
            <ChartStackedBar />
        </div>
    </v-sheet>
</template>
<script setup>
const lessonStore = useApiLessonStore();
const courseStore = useApiCourseStore();
const { teacherLearningSessionState } = storeToRefs(courseStore);
const { lessonCommonState, l } = storeToRefs(lessonStore);

const emit = defineEmits(['tab']);
/**
 * 탭 변경 시 API 호출
 * @param newValue
 * @returns {Promise<void>}
 */
const updateTab = () => {
    lessonCommonState.value.selectedColorGroup = null;
    lessonCommonState.value.isExpand = false;
    emit('tab', 0);
};
</script>
