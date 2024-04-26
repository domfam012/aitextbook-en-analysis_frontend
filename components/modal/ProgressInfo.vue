<template>
    <v-dialog v-model="modalData.isOpen" width="auto">
        <v-card class="dialog px30 py20" width="167.5rem" height="83rem">
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
                    ></v-select>
                    <h1>진도 학습 이력</h1>
                </div>
                <v-btn class="icon_close" @click="closeModal"><i class="ico close_30 ico_size_lg"></i></v-btn>
            </div>
            <div class="dialog_body">
                <div class="table_wrap scrollable_container">
                    <div class="inline_wrap">
                        <div class="inner_header">
                            <span>완료한 학습 차시:</span>
                            <span class="font-color-orange">13</span>
                            <span class="font-weight-bold">/64</span>
                        </div>
                        <div class="extra">
                            <span>누적 학습시간:</span>
                            <span class="font-weight-bold">6시간 41분</span>
                        </div>
                    </div>
                    <div class="table_items scrollable">
                        <v-data-table :headers="lessonHeaders" :items="lessons" v-model:expanded="expanded">
                            <template #item="{ toggleExpand, item, index, column, internalItem }">
                                <tr>
                                    <!--                                    <td v-if="item.title" :rowspan="item.title && 3" class="bg-color-light text_left vertical-top">-->
                                    <!--                                        {{ item.title }}-->
                                    <!--                                    </td>-->
                                    <td>{{ item.sessId }}</td>
                                    <td>
                                        <div class="buttons gap05" v-if="item.noteYn">
                                            <v-btn rounded flat size="small" class="color_green">차시 복습</v-btn>
                                            <!-- !NOTE 노트 업로드 시 class="button_note"에 .upload 추가 됩니다. -->
                                            <v-btn
                                                rounded
                                                flat
                                                size="small"
                                                class="button_note"
                                                @click="expandPanel(toggleExpand, internalItem)"
                                                >노트</v-btn
                                            >
                                        </div>
                                        <div class="buttons gap05" v-if="item.noteYn === false">
                                            <v-btn rounded flat size="small" class="color_red">결석 복습</v-btn>
                                        </div>
                                    </td>

                                    <td class="text_left class-box">
                                        <v-list variant="flat" density="compact" v-for="word in item.contents">
                                            <v-list-item>
                                                <p class="tit_txt">{{ word.eng }}</p>
                                                <p class="sub_txt">{{ word.kor }}</p>
                                            </v-list-item>
                                        </v-list>
                                    </td>
                                    <td>{{ item.date }}</td>
                                    <td>{{ item.time }}</td>
                                    <td>{{ item.percent }}%</td>
                                </tr>
                            </template>
                            <!-- 행 확장 패널 -->
                            <template v-slot:expanded-row="{ columns, item, internalItem }">
                                <tr>
                                    <td :colspan="columns.length" class="table_panel">
                                        <!-- 패널 내용 -->
                                        <v-carousel hide-delimiters height="auto" class="type_fraction">
                                            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                                                <v-sheet>
                                                    <div class="d-flex justify-center align-center">
                                                        <img src="@/assets/images/temp/img_progressInfo.png" alt="slide image" />
                                                    </div>
                                                </v-sheet>
                                            </v-carousel-item>
                                        </v-carousel>
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
const { modalData, closeModal } = useModalStore();

const progressInfo = ref(true);
const expanded = ref([]);

const select = ref({ state: '학기 전체' });
const items = ref([{ state: '학기 전체' }, { state: '1학기' }, { state: '2학기' }]);
const slides = ref(['First', 'Second', 'Third', 'Fourth', 'Fifth']);

const lessonHeaders = [
    // { title: 'Lesson', key: 'title', align: 'center', sortable: false, width: '18%' },
    { title: '차시', key: 'sessId', align: 'center', sortable: false, width: '6%' },
    { title: '학습 바로가기', key: 'noteYn', align: 'center', sortable: false, width: '15%' },
    { title: '학습내용', key: 'contents', align: 'center', sortable: false, width: '30%' },
    { title: '학습날짜', key: 'date', align: 'center', sortable: false, width: '10%' },
    { title: '학습한 시간', key: 'time', align: 'center', sortable: false, width: '10%' },
    { title: '완료율', key: 'percent', align: 'center', sortable: false, width: '6%' }
];

const lessons = ref([
    {
        id: '1',
        title: '1. How Are You?',
        name: '111',
        sessId: '1',
        noteYn: true,
        contents: [
            {
                eng: 'Get Ready1',
                kor: '때에 맞는 인사하기1'
            },
            {
                eng: 'Let’s Learn1',
                kor: '학습 내용 알아보기1'
            },
            {
                eng: 'Look and Think1',
                kor: '동영상 보고 표현 이해하기1'
            }
        ],

        date: '2024-06-24',
        time: '05시간 29분',
        percent: 100
    },
    {
        id: '2',
        sessId: '2',
        name: '222',
        noteYn: true,
        contents: [
            {
                eng: 'Get Ready2',
                kor: '때에 맞는 인사하기2'
            },
            {
                eng: 'Let’s Learn2',
                kor: '학습 내용 알아보기2'
            },
            {
                eng: 'Look and Think2',
                kor: '동영상 보고 표현 이해하기2'
            }
        ],

        date: '2024-06-25',
        time: '05시간 30분',
        percent: 90
    },
    {
        id: '3',
        sessId: '3',
        name: '333',
        noteYn: false,
        contents: [
            {
                eng: 'Get Ready3',
                kor: '때에 맞는 인사하기3'
            },
            {
                eng: 'Let’s Learn3',
                kor: '학습 내용 알아보기3'
            },
            {
                eng: 'Look and Think3',
                kor: '동영상 보고 표현 이해하기3'
            }
        ],

        date: '2024-06-26',
        time: '05시간 31분',
        percent: 80
    },
    {
        id: '4',
        title: '2. How Are You?',
        name: '444',
        sessId: '4',
        noteYn: true,
        contents: [
            {
                eng: 'Get Ready3',
                kor: '때에 맞는 인사하기3'
            },
            {
                eng: 'Let’s Learn3',
                kor: '학습 내용 알아보기3'
            },
            {
                eng: 'Look and Think3',
                kor: '동영상 보고 표현 이해하기3'
            }
        ],

        date: '2024-06-25',
        time: '05시간 32분',
        percent: 80
    },
    {
        id: '5',
        sessId: '5',
        name: '555',
        noteYn: true,
        contents: [
            {
                eng: 'Get Ready3',
                kor: '때에 맞는 인사하기3'
            },
            {
                eng: 'Let’s Learn3',
                kor: '학습 내용 알아보기3'
            },
            {
                eng: 'Look and Think3',
                kor: '동영상 보고 표현 이해하기3'
            }
        ],

        date: '2024-06-25',
        time: '05시간 32분',
        percent: 80
    },
    {
        id: '6',
        sessId: '6',
        name: '666',
        noteYn: true,
        contents: [
            {
                eng: 'Get Ready3',
                kor: '때에 맞는 인사하기3'
            },
            {
                eng: 'Let’s Learn3',
                kor: '학습 내용 알아보기3'
            },
            {
                eng: 'Look and Think3',
                kor: '동영상 보고 표현 이해하기3'
            }
        ],

        date: '2024-06-25',
        time: '05시간 32분',
        percent: 80
    }
]);

const expandPanel = (expand, item) => {
    console.log('expand : ', expand);
    console.log('item : ', item);

    if (expand) {
        console.log('들어옴');
        expand(item);
    }

    console.log('expanded : ', expanded);
    console.log('expanded 22: ', expanded.value);
};
</script>

<style scoped>
/*.expand__panel {*/
/*    z-index: 10000;*/
/*    position: absolute;*/
/*    left: 0;*/
/*    !*opacity: 0;*!*/
/*}*/
</style>
