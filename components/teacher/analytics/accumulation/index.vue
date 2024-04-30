<template>
    <v-sheet>
        <div class="tableCarousel">
            <h3 class="bullet">
                단원별 평균 학업 성취율입니다. 각 단원별 학업 성취율을 클릭하면, 학생별로 단원 평가를 과제로 출제할 수 있습니다.
                <!--                {{ lessonAccumulatedState }}-->
            </h3>
            <v-btn rounded flat class="close_button" @click="closeTable">
                <i class="ico close_circle close position-absolute" />
            </v-btn>
            <div class="box">
                <!--  왼쪽 테이블 영역-->
                <div class="left-table">
                    <v-data-table
                        :items-per-page="(currentPage + 1) * 5"
                        :headers="tableInfoHead"
                        :items="lessonAccumulatedState"
                        item-value="number"
                        class="color_gray type_center"
                    >
                        <template #item="{ item }">
                            <tr>
                                <td class="type_center">
                                    <div variant="text">
                                        {{ item.id }}
                                    </div>
                                </td>
                                <td class="type_center">
                                    <div variant="text">
                                        {{ item.stuName }}
                                    </div>
                                </td>
                            </tr>
                        </template>
                    </v-data-table>
                </div>
                <!-- 캐러셀 영역 -->
                <TableCarousel :lessonAccumulatedState="lessonAccumulatedState" />
                <!-- 오른쪽 테이블 영역 -->
                <div class="right-table">
                    <v-data-table
                        :items-per-page="(currentPage + 1) * 5"
                        :headers="tableAvgInfoHead"
                        :items="lessonAccumulatedState"
                        item-value="number"
                        class="color_gray type_center"
                    >
                        <template #item="{ item }">
                            <tr>
                                <td class="type_center">
                                    <div variant="text">{{ item.avg }}%</div>
                                </td>
                            </tr>
                        </template>
                    </v-data-table>
                </div>

                <!-- 패널 영역 -->
                <!-- top값은 해당 클릭된 영역 기준으로 변경 -->
                <!-- 해당화면 display: none 처리 해당화면 확인시 제거 -->
                <div class="customized" style="top: 26.4rem; display: none">
                    <div class="contents d-flex align-center" style="top: 26.4rem; display: none">
                        <div class="left">
                            <div class="box d-flex align-center">
                                <img src="@/assets/images/img_character.svg" alt="캐릭터" />
                                <div class="mgl20 mgr30">
                                    <h3>단원 평가 AI 맞춤 출제</h3>
                                    <v-btn rounded flat size="small" class="primary mgt10">과제 보내기</v-btn>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="block">
                                <p class="question">단어 문제</p>
                                <div class="d-flex align-center mgt10">
                                    <input type="number" value="5" />
                                    <span class="points mgl10">x 6점 배점</span>
                                </div>
                            </div>
                            <div class="block">
                                <p class="question">표현 문제</p>
                                <div class="d-flex align-center mgt10">
                                    <input type="number" value="5" />
                                    <span class="points mgl10">x 6점 배점</span>
                                </div>
                            </div>
                            <div class="block">
                                <p class="question">상황 문제</p>
                                <div class="d-flex align-center mgt10">
                                    <input type="number" value="5" />
                                    <span class="points mgl10">x 8점 배점</span>
                                </div>
                            </div>
                            <div class="block">
                                <p class="question">총 문항 수</p>
                                <div class="d-flex align-center mgt10">
                                    <!-- 문항 수 15개 고정으로  disabled 처리 했습니다. 수정 필요할시 제거TeacherAnalyticsAccumulationCustomized  -->
                                    <input type="number" value="15" class="total" disabled />
                                    <span class="points mgl10">= 100점 만점</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_buttons">
                <v-btn rounded flat class="secondary" :disabled="renderAll" @click="currentPage = currentPage + 1"
                    >{{ `5명 더 보기 (${currentPage + 1}/${Math.ceil(lessonAccumulatedState?.length / 5)})` }}
                    <!--                  {{-->
                    <!--                        Math.ceil(lessonAccumulatedState.length / 5)-->
                    <!--                    }})-->
                </v-btn>
            </div>
        </div>
    </v-sheet>
</template>
<script setup>
const learnStore = useApiLearnStore();
const lessonStore = useApiLessonStore();
const { lessonAccumulatedState, lessonCommonState } = storeToRefs(lessonStore);
const { currentPage } = storeToRefs(learnStore);
console.log('lessonAccumulatedState : ', lessonAccumulatedState);

// 왼쪽 테이블 header
const tableInfoHead = [
    {
        title: '번호',
        sortable: false,
        key: 'number'
    },
    { title: '이름', sortable: false, key: 'name' }
];

// 오른쪽 평균 성취율 테이블 header
const tableAvgInfoHead = [
    {
        title: '평균 학업 성취율',
        sortable: false,
        key: 'number'
    }
];

const closeTable = () => {
    lessonCommonState.value.selectedColorGroup = null;
    lessonCommonState.value.isExpand = false;
};
const renderAll = computed(() => currentPage.value + 1 === Math.ceil(lessonAccumulatedState.value?.length / 5));
</script>
