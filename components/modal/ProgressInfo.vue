<template>
    <v-dialog v-model="modalData.isOpen" width="auto">
        <v-card class="dialog px30 py20" width="167.5rem" height="83rem">
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
                    ></v-select>
                    <h1>{{ t('modal.progressInfo.progressHistory') }}</h1>
                </div>
                <v-btn class="icon_close" @click="closeModal"><i class="ico close_30 ico_size_lg"></i></v-btn>
            </div>
            <div class="dialog_body">
                <div class="table_wrap scrollable_container">
                    <div class="inline_wrap">
                        <div class="inner_header">
                            <span>{{ t('modal.progressInfo.lessonCompleted') }}</span>
                            <span class="font-color-orange">{{ myLessonState?.progressMolecule }}</span>
                            <span class="font-weight-bold">/{{ myLessonState?.progressDenominator }}</span>
                        </div>
                        <div class="extra">
                            <span>{{ t('modal.progressInfo.cumulativeTime') }}</span>
                            <span class="font-weight-bold"
                                >{{ myLessonState?.totalLeaningTimeHours }}:{{ myLessonState?.totalLeaningTimeMinutes }}</span
                            >
                        </div>
                    </div>
                    <div class="table_items scrollable">
                        <v-data-table
                            :headers="lessonHeaders"
                            :items="myLessonState?.chapterList"
                            v-model:expanded="expanded"
                            item-value="sessId"
                        >
                            <template #item="{ toggleExpand, item, index, column, internalItem }">
                                <tr>
                                    <td v-if="item.chName" :rowspan="item.chName" class="bg-color-light text_left vertical-top">
                                        {{ item.chName }}
                                    </td>
                                    <td>{{ item.sessId }}</td>
                                    <td>
                                        <div class="buttons gap05" v-if="item.writingNoteCount > 0">
                                            <v-btn rounded flat size="small" class="color_green">{{
                                                t('modal.progressInfo.afterClass')
                                            }}</v-btn>
                                            <!-- !NOTE 노트 업로드 시 class="button_note"에 .upload 추가 됩니다. -->
                                            <v-btn
                                                rounded
                                                flat
                                                size="small"
                                                class="button_note"
                                                @click="expandPanel(toggleExpand, internalItem, item.sessId, item.chId)"
                                                >{{ t('modal.progressInfo.note') }}</v-btn
                                            >
                                        </div>
                                        <div class="buttons gap05" v-if="item.absncReviewYn">
                                            <v-btn rounded flat size="small" class="color_red">{{
                                                t('modal.progressInfo.absenceReview')
                                            }}</v-btn>
                                        </div>
                                    </td>

                                    <td class="text_left class-box">
                                        <v-list variant="flat" density="compact" v-for="word in item.sectionList">
                                            <v-list-item>
                                                <p class="tit_txt">{{ word.nameEng }}</p>
                                                <p class="sub_txt">{{ word.nameKor }}</p>
                                            </v-list-item>
                                        </v-list>
                                    </td>
                                    <td>{{ dayjs(item.dt).format(t('modal.progressInfo.day')) }}</td>
                                    <!--                                    <td>{{ dayjs(item.totLrnSs).utc().format('HH시간 mm분') }}</td>-->
                                    <td>{{ item.totLrnSs }}</td>
                                    <td>{{ item.flflmRt }}%</td>
                                </tr>
                            </template>
                            <!-- 행 확장 패널 -->
                            <template v-slot:expanded-row="{ columns, item, internalItem }">
                                <tr>
                                    <td :colspan="columns.length" class="no_border fraction_wrap">
                                        <!-- 패널 내용 -->
                                        <v-carousel
                                            hide-delimiters
                                            height="auto"
                                            class="type_fraction"
                                            v-model="currentSlideIndex"
                                            :continuous="false"
                                        >
                                            <v-carousel-item v-for="(slide, i) in lessonDetailState" :key="i">
                                                <v-sheet>
                                                    <div class="d-flex justify-center align-center">
                                                        <img :src="slide.sketchUrl" :alt="'slide img' + i" />
                                                    </div>
                                                </v-sheet>
                                            </v-carousel-item>
                                        </v-carousel>
                                        <div class="fraction">
                                            <span class="number">{{ currentSlideIndex + 1 }}</span>
                                            <span class="total">/ {{ lessonDetailState.length }}</span>
                                        </div>
                                    </td>
                                </tr>
                            </template>
                        </v-data-table>
                    </div>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>
<script setup>
import dayjs from 'dayjs';
const { t } = useI18n();
const lessonStore = useApiMyLessonStore();
const { myLessonState, lessonDetailState } = storeToRefs(lessonStore);

const currentSlideIndex = ref(0); // 현재 슬라이드
const { modalData, closeModal } = useModalStore();

const expanded = ref([]);

const select = ref({ state: t('modal.progressInfo.wholeSemester') }); // 선택된 셀렉트 초기값
const items = ref([{ state: t('modal.progressInfo.wholeSemester') }]); // 전체 셀렉트

const lessonHeaders = [
    { title: t('modal.progressInfo.chName'), key: 'chName', align: 'center', sortable: false, width: '18%' },
    { title: t('modal.progressInfo.sessId'), key: 'sessId', align: 'center', sortable: false, width: '6%' },
    { title: t('modal.progressInfo.noteYn'), key: 'noteYn', align: 'center', sortable: false, width: '15%' },
    { title: t('modal.progressInfo.sectionList'), key: 'sectionList', align: 'center', sortable: false, width: '30%' },
    { title: t('modal.progressInfo.date'), key: 'date', align: 'center', sortable: false, width: '10%' },
    { title: t('modal.progressInfo.time'), key: 'time', align: 'center', sortable: false, width: '10%' },
    { title: t('modal.progressInfo.percent'), key: 'percent', align: 'center', sortable: false, width: '6%' }
];

const expandPanel = async (expand, item, sessId, chId) => {
    if (sessId && chId) {
        await lessonStore.getMyLessonNoteDetail(sessId, chId);
        expand(item);
        for (const key in expanded.value) {
            if (expanded.value[key] !== sessId) {
                delete expanded.value[key];
            }
        }
    }
};

/**
 * 현재 월/이전 월 계산
 */
const getCurrentAndLastMonth = () => {
    const today = dayjs();
    // 현재 월과 이전 월을 계산하여 문자열로 표현합니다.
    const currentMonth = today.format('MM');
    const lastMonth = today.subtract(1, 'month').format('MM');
    // items 배열에 추가
    items.value.push({ state: `${currentMonth}` t('modal.progressInfo.MM')  });
    items.value.push({ state: `${lastMonth}` t('modal.progressInfo.MM')  });
};

const changeSelectMonth = async () => {
    if (select.value.state === t('modal.progressInfo.wholeSemester')) {
        await lessonStore.getMyLessonProgressLearningHistory();
    } else {
        await lessonStore.getMyLessonProgressLearningHistory(select.value.state.replace( t('modal.progressInfo.lessonCompleted') , ''));
    }
};
onMounted(async () => {
    getCurrentAndLastMonth();
});

watch(select, changeSelectMonth, { immediate: true });
</script>
