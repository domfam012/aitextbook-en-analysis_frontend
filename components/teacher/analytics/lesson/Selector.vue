<template>
    <div class="notice d-flex align-center">
        <div class="box d-flex d-flex align-center">
            <v-btn flat rounded size="small" class="icon_only icon_only-transparent icon_only-sm" @click="handlePrevLesson">
                <div class="size_sm">
                    <i class="ico size_5 left_24"></i>
                    <span class="blind">이전</span>
                </div>
            </v-btn>
            <div class="info">
                <p class="name">{{ teacherLearningSessionState[currentPage]?.chName }}</p>
                <p class="kind">{{ teacherLearningSessionState[currentPage]?.sessionName }}</p>
            </div>
            <v-btn flat rounded size="small" class="icon_only icon_only-transparent icon_only-sm" @click="handleNextLesson">
                <div class="size_sm">
                    <i class="ico size_5 right_24"></i>
                    <span class="blind">다음</span>
                </div>
            </v-btn>
        </div>
        <div class="pages">
            <div>교과서</div>
            <span class="num">{{ teacherLearningSessionState[currentPage]?.bookPageCount }}쪽</span>
        </div>
    </div>
</template>

<script setup>
const dayjs = useDayjs();
const courseStore = useApiCourseStore();
const { teacherLearningSessionState } = storeToRefs(courseStore);
const calendarStore = useApiCalendarStore();
const { formatDate, comList } = storeToRefs(calendarStore);
const props = defineProps({
    currentPage: {
        type: Number,
        required: true
    }
});
const emit = defineEmits(['page']);
/**
 * 이전 단원/차시로 이동
 */
const handlePrevLesson = async () => {
    if (props.currentPage > 0 && comList.value.some(data => dayjs(data).format('YYYY-MM-DD') === formatDate.value)) {
        emit('page', props.currentPage - 1);
    }
};

/**
 * 다음 단원/차시로 이동
 */
const handleNextLesson = async () => {
    if (
        props.currentPage < teacherLearningSessionState.value.length - 1 &&
        comList.value.some(data => dayjs(data).format('YYYY-MM-DD') === formatDate.value)
    ) {
        emit('page', props.currentPage + 1);
    }
};
</script>
