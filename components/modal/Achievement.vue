<template>
    <v-dialog v-model="modalData.isOpen" width="auto">
        <v-card class="dialog pda20" width="138rem" height="80rem">
            <div class="dialog_header">
                <div class="inline_wrap gap1">
                    <h1>{{ t('modal.achievement.my') }}</h1>
                    <v-select
                        v-model="select"
                        :items="items"
                        class="type_primary_fill"
                        :menu-props="{ contentClass: 'primary_fill_item' }"
                        item-title="state"
                        item-value="abbr"
                        label="Select"
                        variant="outlined"
                        persistent-hint
                        rounded
                        return-object
                        single-line
                        hide-details
                        @update:model-value="getDateList"
                    ></v-select>
                    <h1>{{ t('modal.achievement.achievementArea') }}</h1>
                </div>
                <v-btn class="icon_close" @click="closeModal"><i class="ico close_30 ico_size_lg"></i></v-btn>
            </div>
            <div class="dialog_body">
                <v-slide-group v-model="selectedDate" show-arrows class="type_rounded" @update:model-value="getAchievement">
                    <v-slide-group-item v-slot="{ isSelected, toggle }" v-for="(item, index) in dateListState" :key="index">
                        <v-btn rounded flat :class="{ active: isSelected }" @click="toggle">{{
                            dayjs(item.strYmd).format(t('modal.achievement.day'))
                        }}</v-btn>
                    </v-slide-group-item>
                </v-slide-group>

                <div class="chart_radar w-100 h-100">
                    <ChartRadar v-if="Object.keys(achivementGraphState).length > 0" :radar-chart="achivementGraphState" />
                    <!-- !NOTE 차트 라벨부분 입니다.-->
                    <div class="chart-bar">
                        <div class="use-word">
                            <span class="bullet color-1"></span>
                            <p>{{ mode === 'student' ? user.name : '' }} {{ t('modal.achievement.student') }}</p>
                        </div>
                        <div class="use-word">
                            <span class="bullet color-2"></span>
                            <p>{{ t('modal.achievement.classAverage') }}</p>
                        </div>
                        <div class="use-word">
                            <span class="bullet color-3"></span>
                            <p>{{ t('modal.achievement.regionalAverage') }}</p>
                        </div>
                    </div>
                    <!-- // 차트 라벨부분 입니다. -->
                </div>
            </div>
        </v-card></v-dialog
    >
</template>

<script setup>
const { t } = useI18n();
const mode = useCookie('mode');
const { user } = storeToRefs(useApiUserStore());
const apiLessonStore = useApiMyLessonStore();
const { achivementGraphState } = storeToRefs(useApiMyLessonStore());
const { formatDate } = storeToRefs(useApiCalendarStore());
const { dateListState } = storeToRefs(apiLessonStore);
const { modalData, closeModal } = useModalStore();
const dayjs = useDayjs();

const select = ref({ state: t('modal.achievement.last7day'), value: 7 });
const items = ref([
    { state: t('modal.achievement.last7day'), value: 7 },
    { state: t('modal.achievement.last15day'), value: 15 },
    { state: t('modal.achievement.last20day'), value: 20 }
]);

const selectedDate = ref(null);

const getDateList = async () => {
    await apiLessonStore.getMyLessonAcademicAchievementByAreaDate(select.value.value);
};

const getAchievement = async () => {
    await apiLessonStore.getMyLessonAcademicAchievementByArea(dateListState?.value[selectedDate.value]?.strYmd || formatDate.value);
};

onMounted(async () => {
    await getDateList();
    await getAchievement();
    const today = dayjs().format('YYYY-MM-DD');
    const todayIndex = dateListState.value.findIndex(item => item.strYmd === today);
    if (todayIndex !== -1) {
        selectedDate.value = todayIndex;
    }
});
</script>
