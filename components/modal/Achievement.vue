<template>
    <v-dialog v-model="modalData.isOpen" width="auto">
        <v-card class="dialog pda20" width="138rem" height="80rem">
            <div class="dialog_header">
                <div class="inline_wrap gap1">
                    <h1>나의</h1>
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
                    <h1>영역별 학업 성취율</h1>
                </div>
                <v-btn class="icon_close" @click="closeModal"><i class="ico close_30 ico_size_lg"></i></v-btn>
            </div>
            <div class="dialog_body">
                <v-slide-group v-model="selectedDate" show-arrows class="type_rounded" @update:model-value="getAchievement">
                    <v-slide-group-item v-slot="{ isSelected, toggle }" v-for="(item, index) in dateListState" :key="index">
                        <v-btn rounded flat :class="isSelected ? 'active' : undefined" @click="toggle">{{
                            dayjs(item.strYmd).format('M월 DD일 dd요일')
                        }}</v-btn>
                    </v-slide-group-item>
                </v-slide-group>

                <div class="chart_radar">
                    <ChartRadar v-if="Object.keys(achivementGraphState).length > 0" :radar-chart="achivementGraphState" />
                    <!-- !NOTE 차트 라벨부분 입니다.-->
                    <div class="chart-bar">
                        <div class="use-word">
                            <span class="bullet color-1"></span>
                            <p>{{ mode === 'student' ? user.name : '' }} 학생</p>
                        </div>
                        <div class="use-word">
                            <span class="bullet color-2"></span>
                            <p>반 평균</p>
                        </div>
                        <div class="use-word">
                            <span class="bullet color-3"></span>
                            <p>지역 평균</p>
                        </div>
                    </div>
                    <!-- // 차트 라벨부분 입니다. -->
                </div>
            </div>
        </v-card></v-dialog
    >
</template>

<script setup>
const mode = useCookie('mode');
const { user } = storeToRefs(useApiUserStore());
const apiLessonStore = useApiMyLessonStore();
const { achivementGraphState } = storeToRefs(useApiMyLessonStore());

const { dateListState } = storeToRefs(apiLessonStore);
const { modalData, closeModal } = useModalStore();
const dayjs = useDayjs();

const achievement = ref(true);
const select = ref({ state: '최근 7일', value: 7 });
const items = ref([
    { state: '최근 7일', value: 7 },
    { state: '최근 15일', value: 15 },
    { state: '최근 20일', value: 20 }
]);

const selectedDate = ref();

const getDateList = () => {
    apiLessonStore.getMyLessonAcademicAchievementByAreaDate(select.value.value);
};

const getAchievement = () => {
    apiLessonStore.getMyLessonAcademicAchievementByArea(dateListState.value[selectedDate.value].strYmd);
};

onMounted(() => {
    getDateList();
    getAchievement();
});
</script>
