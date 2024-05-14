<template>
    <v-sheet>
        <div class="tableCarousel">
            <h3 class="bullet">
                {{ t('analytics.accumulation.text') }}
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
                        :items="lessonAccumulatedState.resultList"
                        item-value="number"
                        class="color_gray type_center"
                    >
                        <template #item="{ item }">
                            <tr>
                                <td class="type_center">
                                    <div variant="text">
                                        {{ item.studentInfo.studId }}
                                    </div>
                                </td>
                                <td class="type_center">
                                    <div variant="text">
                                        {{ item.studentInfo.studName }}
                                    </div>
                                </td>
                            </tr>
                        </template>
                    </v-data-table>
                </div>
                <!-- 캐러셀 영역 -->
                <TableCarousel
                    @panel="
                        (row, column, student, chId) => {
                            rowIndex = row;
                            columnIndex = column;
                            selectedStudent = student;
                            selectedChid = chId;
                        }
                    "
                    :lessonAccumulatedState="lessonAccumulatedState.resultList"
                    :rowIndex="rowIndex"
                    :columnIndex="columnIndex"
                />
                <!-- 오른쪽 테이블 영역 -->
                <div class="right-table">
                    <v-data-table
                        :items-per-page="(currentPage + 1) * 5"
                        :headers="tableAvgInfoHead"
                        :items="lessonAccumulatedState.resultList"
                        item-value="number"
                        class="color_gray type_center"
                    >
                        <template #item="{ item, index }">
                            {{ item[index] }}
                            <tr>
                                <td class="type_center">
                                    <div variant="text">{{ item.studentInfo?.achvRtAvgTot }}%</div>
                                </td>
                            </tr>
                        </template>
                    </v-data-table>
                </div>
                <div v-if="rowIndex !== null" class="customized" :style="{ top: CalculatePanelHeight(rowIndex) }">
                    <div class="contents d-flex align-center">
                        <div class="left">
                            <div class="box d-flex align-center">
                                <img src="@/assets/images/img_character.svg" alt="캐릭터" />
                                <div class="mgl20 mgr30">
                                    <h3>{{ t('analytics.accumulation.unitAssessmentAI') }}</h3>
                                    <v-btn @click="() => postAssignmentFn()" rounded flat size="small" class="primary mgt10">{{
                                        t('analytics.accumulation.sendAssignment')
                                    }}</v-btn>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="block">
                                <p class="question">{{ t('analytics.accumulation.word') }}</p>
                                <div class="d-flex align-center mgt10">
                                    <input type="number" :value="questionByDifficultState.questionWordCount" disabled />
                                    <span class="points mgl10"
                                        >x {{ questionByDifficultState.questionWordPoint }}{{ t('analytics.accumulation.points') }}
                                    </span>
                                </div>
                            </div>
                            <div class="block">
                                <p class="question">{{ t('analytics.accumulation.expression') }}</p>
                                <div class="d-flex align-center mgt10">
                                    <input type="number" :value="questionByDifficultState.questionExpressCount" disabled />
                                    <span class="points mgl10"
                                        >x {{ questionByDifficultState.questionExpressPoint }}{{ t('analytics.accumulation.points') }}</span
                                    >
                                </div>
                            </div>
                            <div class="block">
                                <p class="question">{{ t('analytics.accumulation.situation') }}</p>
                                <div class="d-flex align-center mgt10">
                                    <input type="number" :value="questionByDifficultState.questionSituationCount" disabled />
                                    <span class="points mgl10"
                                        >x {{ questionByDifficultState.questionSituationPoint
                                        }}{{ t('analytics.accumulation.points') }}</span
                                    >
                                </div>
                            </div>
                            <div class="block">
                                <p class="question">{{ t('analytics.accumulation.totalNumber') }}</p>
                                <div class="d-flex align-center mgt10">
                                    <!-- 문항 수 15개 고정으로  disabled 처리 했습니다. 수정 필요할시 제거TeacherAnalyticsAccumulationCustomized  -->
                                    <input type="number" :value="10" class="total" disabled />
                                    <span class="points mgl10">{{ t('analytics.accumulation.perfectScore') }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_buttons">
                <v-btn rounded flat class="secondary" :disabled="renderAll" @click="currentPage = currentPage + 1">
                    {{
                        $t('analytics.accumulation.more', {
                            currentPage: currentPage + 1,
                            totalPages: Math.ceil(lessonAccumulatedState.resultList?.length / 5)
                        })
                    }}
                </v-btn>
            </div>
        </div>
    </v-sheet>
</template>
<script setup>
const { t } = useI18n();
const learnStore = useApiLearnStore();
const lessonStore = useApiLessonStore();
const { lessonAccumulatedState, lessonCommonState, questionByDifficultState } = storeToRefs(lessonStore);
const { currentPage } = storeToRefs(learnStore);
const rowIndex = ref(null);
const columnIndex = ref(null);
const selectedStudent = ref(null);
const selectedChid = ref(null);

// 왼쪽 테이블 header
const tableInfoHead = [
    {
        title: t('analytics.accumulation.number'),
        sortable: false,
        key: 'number'
    },
    { title: t('analytics.accumulation.name'), sortable: false, key: 'name' }
];

// 오른쪽 평균 성취율 테이블 header
const tableAvgInfoHead = [
    {
        title: t('analytics.accumulation.average'),
        sortable: false,
        key: 'number'
    }
];

const closeTable = () => {
    lessonCommonState.value.selectedColorGroup = null;
    lessonCommonState.value.isExpand = false;
};

const postAssignmentFn = async () => {
    const assignment = {
        chId: selectedChid,
        studUuid: selectedStudent.value,
        questionTotalCount: 10
    };
    await lessonStore.postAssignment(assignment);
};

const CalculatePanelHeight = row => {
    const itemCount = (currentPage.value + 1) * 5;
    const defaultHeight = 19.4 + 7 * row;
    const totalLessons = lessonAccumulatedState.value.length;
    const aType = `${defaultHeight}rem`;
    const bType = `${defaultHeight - 30}rem`;

    if (totalLessons === 1) {
        return aType;
    } else if (totalLessons === 2 && row + 1 === 2) {
        return bType;
    } else if (totalLessons === 2 && row + 1 === 1) {
        return aType;
    } else if ((totalLessons < itemCount && row + 1 === totalLessons) || row + 1 === totalLessons - 1) {
        return bType;
    } else if (row + 1 === itemCount || row + 1 === itemCount - 1) {
        return bType;
    } else {
        return aType;
    }
};

const renderAll = computed(() => currentPage.value + 1 === Math.ceil(lessonAccumulatedState.value?.resultList.length / 5));
</script>
