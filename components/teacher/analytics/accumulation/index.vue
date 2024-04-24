<template>
    <v-sheet>
        <div class="tableCarousel">
            <h3 class="bullet">
                단원별 평균 학업 성취율입니다. 각 단원별 학업 성취율을 클릭하면, 학생별로 단원 평가를 과제로 출제할 수 있습니다.
            </h3>
            <i class="ico close_circle close position-absolute" @click="closeTable"></i>
            <div class="box">
                <!-- 왼쪽 테이블 영역 -->
                <div class="left-table">
                    <v-data-table :headers="tableInfoHead" :items="tableInfo" item-value="number" class="color_gray type_center">
                    </v-data-table>
                </div>
                <!-- 캐러셀 영역 -->
                <TableCarousel />
                <!-- 오른쪽 테이블 영역 -->
                <div class="right-table">
                    <v-data-table :headers="tableAverageHead" :items="tableAverage" item-value="number" class="color_gray type_center">
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
                <v-btn rounded flat class="secondary">5명 더보기 (1/4)</v-btn>
            </div>
        </div>
    </v-sheet>
</template>
<script setup>
const lessonStore = useApiLessonStore();
const { lessonCommonState } = storeToRefs(lessonStore);
// 이름
const tableInfoHead = [
    {
        title: '번호',
        sortable: false,
        key: 'number'
    },
    { title: '이름', key: 'name' }
];
const tableInfo = [
    {
        number: 1,
        name: '김아미'
    },
    {
        number: 2,
        name: '김아미'
    },
    {
        number: 3,
        name: '김아미'
    },
    {
        number: 4,
        name: '김아미'
    },
    {
        number: 5,
        name: '김아미'
    }
];

// 평균 학업 성취율
const tableAverageHead = [
    {
        title: '평균 학업 성취율',
        sortable: false,
        key: 'average'
    }
];

const tableAverage = [
    {
        average: '75%'
    },
    {
        average: '75%'
    },
    {
        average: '75%'
    },
    {
        average: '75%'
    },
    {
        average: '75%'
    }
];
const closeTable = () => {
    lessonCommonState.value.selectedColorGroup = null;
    lessonCommonState.value.isExpand = false;
};
</script>
