<template>
    <div class="center-table">
        <Carousel :breakpoints="breakpoints" class="carousel_mid">
            <Slide v-for="(slide, idx) in lessonAccumulatedState.chapterCount" :key="slide.id">
                <v-data-table
                    :items-per-page="(currentPage + 1) * 5"
                    :headers="tableUnitHead.slice(idx, idx + 1)"
                    :items="tableContent"
                    item-value="number"
                    class="color_gray type_center carousel__item"
                    disable-sort
                >
                    <template v-slot:item="{ item, internalItem, index }">
                        <tr class="carousel_mid_tr">
                            <td :class="getDisableClass(item[idx])">
                                <!--  .emblem_01 미학습,
                                  .emblem_02 느린 학습자,
                                  .emblem_03 조금 느린 학습자,
                                  .emblem_03 중간 학습자,
                                  .emblem_04 조금 빠른 학습자,
                                  .emblem_05 빠른 학습자
                            -->
                                <i
                                    class="emblem"
                                    :class="{
                                        emblem_04: item[idx]?.emblem === '04',
                                        emblem_05: item[idx]?.emblem === '03',
                                        emblem_03: item[idx]?.emblem === '02',
                                        emblem_02: item[idx]?.emblem === '01',
                                        emblem_01: item[idx]?.emblem === '00'
                                    }"
                                    v-if="item[idx]"
                                />
                                <div class="carousel_mid_tr_wrap_btn">
                                    <v-btn
                                        v-if="item[idx]"
                                        variant="text"
                                        :ripple="false"
                                        size="small"
                                        @click="panelToggle(item[idx], index, studentInfo[index], idx)"
                                        :class="{
                                            // no_event: item[idx]?.status !== 6,
                                            ...getClass(item[idx])
                                        }"
                                    >
                                        <span v-if="item[idx]?.emblem !== '00'">{{ addPercentIfNumber(item[idx]) }}</span>
                                        <span v-else-if="item[idx]?.emblem === '00'">{{ t('table.carousel.unlearning') }}</span>
                                        <i
                                            v-if="item[idx]"
                                            class="ico"
                                            :class="{
                                                stamp_complete: item[idx]?.stamp === 1,
                                                stamp_wait: item[idx]?.stamp === 2
                                            }"
                                        />
                                        <!-- 과제보내기 가능  -->
                                        <i class="ico list" v-if="item[idx]?.stamp === 3" />
                                    </v-btn>
                                    <span v-else-if="item[idx] === undefined">{{ t('table.carousel.waitLearning') }} </span>
                                </div>
                            </td>
                        </tr>
                    </template>
                </v-data-table>
            </Slide>
            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
const { t } = useI18n();

const learnStore = useApiLearnStore();
const { currentPage } = storeToRefs(learnStore);
const emit = defineEmits(['panel']);
const breakpoints = {
    // // 700px and up
    // 800: {
    //     itemsToShow: 2,
    //     snapAlign: 'center'
    // },
    // 1024 and up
    800: {
        itemsToShow: 6,
        snapAlign: 'start'
    }
};

const props = defineProps(['lessonAccumulatedState', 'rowIndex', 'columnIndex']);
const lessonStore = useApiLessonStore();
const { lessonAccumulatedState } = storeToRefs(lessonStore);

const tableContent = props.lessonAccumulatedState.map(student => student.avgUnitList);
const studentInfo = props.lessonAccumulatedState.map(student => student.studentInfo);

/**
 * 동적으로 head 렌더링
 * @type {{sortable: boolean, title: string, key: string}[]}
 */
const tableUnitHead = Array.from({ length: lessonAccumulatedState.value.chapterCount }, (_, index) => ({
    title: `${index + 1}${t('table.carousel.unit')}`,
    sortable: false,
    key: `lesson${index}`
}));

// 숫자일경우 under_Line 글자인경우 X
const getClass = value => {
    if (value) {
        return typeof value.percent === 'number' ? 'type_default_underline' : 'txt';
    }
};
// 숫자일경우 disabled
const getDisableClass = value => {
    if (value) {
        if (typeof value.achvRtAvgTot === 'number') {
            return '';
        }
    } else {
        return 'disabled';
    }
};

// 숫자일경우 %추가
const addPercentIfNumber = value => {
    if (value) {
        if (typeof value.achvRtAvg === 'number') {
            return `${value.achvRtAvg}%`;
        }
    } else {
        return t('table.carousel.unlearning');
    }
};

/**
 *
 * @param row 단원/차시 정보
 * @param student 학생정보
 * @param index 테이블 행
 * @param column 테이블 열
 * @returns {Promise<void>}
 */
const panelToggle = async (row, column, student, index) => {
    if (props.rowIndex === row.index && props.columnIndex === column) {
        emit('panel', null, null, null);
    } else {
        // 단원 패널 API 호출
        await lessonStore.getQuestionsByDifficultyLevel({ chId: row.chId, studUuid: student.studUuid, questionTotalCount: 10 });
        emit('panel', index, column, student.studUuid, row.chId);
    }
};
</script>

<style scoped>
.no_event {
    pointer-events: none;
}
</style>
