<template>
    <div class="analytics">
        <AuthInfo />
        <div class="d-flex mb-5 gap2">
            <!-- 캘린더 -->
            <Calendar />
            <!-- 수업 정보 -->
            <TeacherAnalyticsLesson />
        </div>
        <div v-if="lessonCommonState.isExpand">
            <!--  학업 성취율 테이블 -->
            <TeacherAnalyticsAchievement v-if="lessonCommonState.tab === 'one'" />
            <TeacherAnalyticsAccumulation v-if="lessonCommonState.tab === 'two'" />
        </div>
        <div class="d-flex gap2">
            <!-- 독려 리스트 -->
            <TeacherAnalyticsLevel />
            <!-- 학습 분석 -->
            <TeacherAnalyticsLearn />
        </div>
    </div>
</template>

<script setup>
const lessonStore = useApiLessonStore();
const { lessonCommonState } = storeToRefs(lessonStore);
</script>

<style lang="scss" scoped></style>
