<template>
    <v-card-item>
        <v-card-title class="lessonInfo">
            <div class="notice d-flex align-center">
                <div class="box d-flex d-flex align-center">
                    <div class="info">
                        <v-select
                            v-model="depth1"
                            :items="learningLessonsState"
                            item-title="chName"
                            item-value="chName"
                            return-object
                            hide-details
                            @update:modelValue="changeDepth1"
                            ><template #item="{ props }">
                                <v-list-item v-bind="props"></v-list-item>
                            </template>
                        </v-select>
                        <v-select
                            v-model="depth2"
                            :items="depth1.sessionList"
                            item-title="sessName"
                            item-value="sessName"
                            return-object
                            hide-details
                            @update:modelValue="changeDepth2"
                            ><template #item="{ props }">
                                <v-list-item v-bind="props"></v-list-item>
                            </template>
                        </v-select>
                    </div>
                </div>
                <div class="pages">
                    교과서<br />
                    <span class="num">{{ depth2.bookPageCount }}쪽</span>
                </div>
            </div>
            <v-btn class="icon_only icon_only-sm" rounded flat @click="openModal({ type: 'progressInfo' })"><i class="ico more" /></v-btn>
        </v-card-title>
    </v-card-item>
</template>

<script setup>
import dayjs from 'dayjs';

const props = defineProps({
    currentPage: {
        type: Number,
        required: Boolean
    }
});
const { openModal } = useModalStore();
const todayStore = useApiTodayStore();
const calendarStore = useApiCalendarStore();
const { selectedDate } = storeToRefs(calendarStore);
const { learningLessonsState, selectLessonState, selectState } = storeToRefs(todayStore);

const depth1 = ref(selectState);
const depth2 = ref(selectLessonState);

/**
 * 단원 선택
 */
const changeDepth1 = () => {
    // 2depth에 선택한 단원의 첫번쨰 차시 선택되도록 변경
    depth2.value = depth1.value.sessionList[0];
};

/**
 * 차시 선택에 따른 API 호출
 */
const changeDepth2 = async () => {
    const formatDate = ref(dayjs(selectedDate.value).format('YYYY-MM-DD'));
    await todayStore.getTodayChapterLearningStatus({ date: formatDate, chId: depth2.value.chId, sessId: depth2.value.sessId });
};

watch(depth2, changeDepth2);
</script>
