<template>
    <v-card variant="outlined">
        <v-btn rounded flat class="close_button" @click="closeTable">
            <i class="ico ico_size_10 close_circle"></i>
        </v-btn>
        <TablePanel />
        <div class="page_buttons">
            <v-btn rounded flat class="secondary" :disabled="renderAll" @click="currentPage = currentPage + 1">
                {{
                    t('analytics.accumulation.more', {
                        currentPage: currentPage + 1,
                        totalPages: Math.ceil(teacherColorMatchedGroupState.resultList?.length / 5)
                    })
                }}
            </v-btn>
        </div>
    </v-card>
</template>

<script setup>
const { t } = useI18n();
const lessonStore = useApiLessonStore();
const learnStore = useApiLearnStore();

const { teacherColorMatchedGroupState, currentPage } = storeToRefs(learnStore);
const { lessonCommonState } = storeToRefs(lessonStore);

const closeTable = () => {
    lessonCommonState.value.selectedColorGroup = null;
    lessonCommonState.value.isExpand = false;
};
const renderAll = computed(() => currentPage.value + 1 === Math.ceil(teacherColorMatchedGroupState.value?.length / 5));
</script>
