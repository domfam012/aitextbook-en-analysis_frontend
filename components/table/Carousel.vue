<template>
    <div class="center-table">
        <Carousel :breakpoints="breakpoints" class="carousel_mid">
            <!-- TODO : 10은 총 단원 수 하드코딩 - API 작업 후 변경 필요-->
            <Slide v-for="(slide, index) in 10" :key="slide.id">
                <v-data-table
                    :items-per-page="(currentPage + 1) * 5"
                    :headers="tableUnitHead.slice(index, index + 1)"
                    :items="tableContent"
                    item-value="number"
                    class="color_gray type_center carousel__item"
                    disable-sort
                >
                    <template v-slot:item="{ item, internalItem }">
                        <tr class="carousel_mid_tr">
                            <td :class="getDisableClass(item[0][`lesson${String(index + 1).padStart(2, '0')}`])">
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
                                        emblem_04:
                                            item[0][`lesson${String(index + 1).padStart(2, '0')}`]?.status === 4 ||
                                            item[0][`lesson${String(index + 1).padStart(2, '0')}`]?.status === 6,
                                        emblem_05: item[0][`lesson${String(index + 1).padStart(2, '0')}`]?.status === 5,
                                        emblem_03: item[0][`lesson${String(index + 1).padStart(2, '0')}`]?.status === 3,
                                        emblem_02: item[0][`lesson${String(index + 1).padStart(2, '0')}`]?.status === 2,
                                        emblem_01: item[0][`lesson${String(index + 1).padStart(2, '0')}`]?.status === 1
                                    }"
                                    v-if="item[0][`lesson${String(index + 1).padStart(2, '0')}`]"
                                />
                                <div class="carousel_mid_tr_wrap_btn">
                                    <v-btn
                                        v-if="item[0][`lesson${String(index + 1).padStart(2, '0')}`]"
                                        variant="text"
                                        :ripple="false"
                                        size="small"
                                        @click="panelToggle(internalItem, index)"
                                        :class="getClass(item[0][`lesson${String(index + 1).padStart(2, '0')}`])"
                                    >
                                        <span v-if="item[0][`lesson${String(index + 1).padStart(2, '0')}`]?.status !== 1">{{
                                            addPercentIfNumber(item[0][`lesson${String(index + 1).padStart(2, '0')}`])
                                        }}</span>
                                        <span v-else-if="item[0][`lesson${String(index + 1).padStart(2, '0')}`]?.status === 1">미학습</span>
                                    </v-btn>
                                    <i
                                        v-if="item[0][`lesson${String(index + 1).padStart(2, '0')}`]"
                                        class="ico"
                                        :class="{
                                            stamp_complete: item[0][`lesson${String(index + 1).padStart(2, '0')}`]?.stamp === 1,
                                            stamp_wait: item[0][`lesson${String(index + 1).padStart(2, '0')}`]?.stamp === 2
                                        }"
                                    />
                                    <i class="ico list" v-if="item[0][`lesson${String(index + 1).padStart(2, '0')}`]?.status === 6" />
                                    <span v-else-if="item[0][`lesson${String(index + 1).padStart(2, '0')}`] === undefined">학습대기</span>
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
const tableContent = props.lessonAccumulatedState.map(student => student.lessons);

/**
 * 동적으로 head 렌더링
 * @type {{sortable: boolean, title: string, key: string}[]}
 */
const tableUnitHead = Array.from({ length: 10 }, (_, index) => ({
    title: `${index + 1}단원`,
    sortable: false,
    key: `lesson${String(index + 1).padStart(2, '0')}`
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
        if (typeof value.achvRtAvgTot === 'number') {
            return `${value.achvRtAvgTot}%`;
        }
    } else {
        return '학습대기';
    }
};

const panelToggle = (row, column) => {
    if (props.rowIndex === row.index && props.columnIndex === column) {
        emit('panel', null, null);
    } else {
        emit('panel', row.index, column);
    }
};
</script>
