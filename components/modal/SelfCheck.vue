<template>
    <v-dialog v-model="modalData.isOpen" width="100%">
        <v-card class="modalSelfCheck student-analysis px30 py20">
            <v-btn density="compact" variants="text" tile elevation="0" min-width="30" min-height="30" class="close px-0">
                <i class="ico close_30 ico_size_lg" @click="closeModal"></i>
            </v-btn>
            <v-card-title class="d-flex justify-center">
                <div class="tit d-flex align-center">
                    <div class="select_box_wrap mgr10">
                        <v-select
                            v-model="select"
                            :items="items"
                            class="type_primary_fill"
                            :menu-props="{ contentClass: 'primary_fill_item' }"
                            feedbackStampList
                            item-title="state"
                            item-value="abbr"
                            label="TEXT"
                            variant="outlined"
                            persistent-hint
                            rounded
                            return-object
                            single-line
                            hide-details
                            @update:model-value="handleGetAchievement"
                        ></v-select>
                    </div>
                    의 성취 기준 모아보기
                </div>
            </v-card-title>
            <div class="mgt20">
                <v-item-group v-model="filter" class="d-flex align-center justify-end">
                    <v-item>
                        <v-btn
                            rounded
                            flat
                            size="small"
                            :class="isSession ? 'primary' : 'secondary'"
                            class="mgr5"
                            @click="() => handleFilter('session')"
                        >
                            <i class="ico ico_size_6 mgr5" :class="isSession ? 'descending_white' : 'descending_black'"></i>
                            단원별
                        </v-btn>
                    </v-item>
                    <v-item>
                        <v-btn rounded flat size="small" :class="!isSession ? 'primary' : 'secondary'" @click="() => handleFilter('date')">
                            <i class="ico ico_size_6 mgr5" :class="!isSession ? 'descending_white' : 'descending_black'"></i>
                            날짜별
                        </v-btn>
                    </v-item>
                </v-item-group>
                <!-- 차시별 리스트 -->
                <div class="class-box">
                    <div class="group" v-for="(item, index) in myLessonState" :key="index">
                        <div class="title_box">
                            <div class="flag flag_position">
                                <span>{{ index + 1 }}차시</span>
                            </div>
                        </div>
                        <div class="contents">
                            <!-- 차시명 -->
                            <div class="inner_box">
                                <v-list variant="flat" class="pa-0" density="compact">
                                    <v-list-item v-for="(section, index) in item.sectionList" :key="index">
                                        <p class="tit_txt">{{ section.nameEng }}</p>
                                        <p class="sub_txt">{{ section.nameKor }}</p>
                                    </v-list-item>
                                </v-list>
                            </div>
                            <!-- 성취기준 -->
                            <div class="achieve_box">
                                <div class="tit">
                                    <span class="box_bg">성취 기준</span>
                                </div>
                                <v-list variant="flat" class="pa-0" density="compact">
                                    <v-list-item-subtitle v-for="(achievement, index) in item.achievementList" :key="index">{{
                                        achievement
                                    }}</v-list-item-subtitle>
                                </v-list>
                            </div>
                            <!-- YYYY.MM.DD 체크 -->
                            <div class="date_box">
                                <div class="tit">
                                    <span class="box_bg">
                                        <time :datetime="item.edlDtm">
                                            {{ dayjs(item.edlDtm).format('MM월 DD일 (dd)') }}
                                        </time>
                                    </span>
                                </div>
                                <div class="d-flex justify-center mt-2">
                                    <v-chip
                                        class="px-1 py-1"
                                        :class="{ active: point === item.selfCheck }"
                                        variant="text"
                                        color="transparent"
                                        v-for="point in 5"
                                        :key="point"
                                        ><i class="ico" :class="`imoji${point}`"
                                    /></v-chip>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { ref } from 'vue';
const dayjs = useDayjs();

const { modalData, closeModal } = useModalStore();

const filter = ref('session');
const isSession = computed(() => filter.value === 'session');

const handleFilter = type => {
    filter.value = type;
    handleGetAchievement();
};

const select = ref({ state: 'Lesson 1', value: 1 });
const items = ref([
    { state: 'Lesson 1', value: 1 },
    { state: 'Lesson 2', value: 2 },
    { state: 'Lesson 3', value: 3 },
    { state: 'Lesson 4', value: 4 },
    { state: 'Lesson 5', value: 5 }
]);

const myLessonStore = useApiMyLessonStore();
const { myLessonState } = storeToRefs(myLessonStore);

const handleGetAchievement = async () => {
    myLessonStore.getMyLessonAchievementCriteria(select.value.value, filter.value);
};

onMounted(() => {
    handleGetAchievement();
});
</script>
