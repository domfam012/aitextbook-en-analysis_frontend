<template>
    <v-card variant="outlined">
        <v-btn rounded flat class="close_button" @click="closeTable">
            <i class="ico ico_size_10 close_circle"></i>
        </v-btn>
        <TablePanel :currentPageCount="currentPageCount" />
        <div class="page_buttons">
            <v-btn rounded flat class="secondary" @click="getMorePage"
                >5명 더보기 ({{ currentPageCount / 5 }}/{{ Math.ceil(teacherColorMatchedGroupState.length / 5) }})</v-btn
            >
        </div>
    </v-card>
</template>

<script setup>
const currentPageCount = ref(5);

const lessonStore = useApiLessonStore();
const learnStore = useApiLearnStore();

const { teacherColorMatchedGroupState } = storeToRefs(learnStore);
const { lessonCommonState } = storeToRefs(lessonStore);

/**
 * 더보기 버튼
 */
const getMorePage = () => {
    const totalPageCount = teacherColorMatchedGroupState.value.length;
    if (totalPageCount > currentPageCount.value) {
        currentPageCount.value = currentPageCount.value * 2;
    }
};
const closeTable = () => {
    lessonCommonState.value.selectedColorGroup = null;
    lessonCommonState.value.isExpand = false;
};
</script>
