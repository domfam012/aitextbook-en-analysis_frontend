<template>
    <v-data-table
        v-model:expanded="expanded"
        :headers="AchievementHeaders"
        :items="teacherColorMatchedGroupState.slice(0, props.currentPageCount)"
        item-value="name"
        class="color_mint type_center"
    >
        <template #item="{ columns, internalItem, item }">
            <tr>
                <td v-for="(column, index) in columns" :key="column.key" class="type_center">
                    <v-btn
                        @click="handleExpandPanel(index, internalItem, column.key)"
                        variant="text"
                        v-if="column.title !== '성취 기준 자기채점' && column.title !== '번호' && column.title !== '이름'"
                        :class="{ type_blue_underline: column.title !== '번호' && column.title !== '이름' }"
                    >
                        {{ getItemValue(item, column, index) }}
                    </v-btn>
                    <div variant="text" v-else-if="column.title === '번호' || column.title === '이름'">
                        {{ getItemValue(item, column, index) }}
                    </div>
                    <span
                        v-if="column.title === '성취 기준 자기채점'"
                        class="ico table_center ico_size_10"
                        :class="getItemValue(item, column, index) > 2 ? 'type_complete' : 'type_uncompleted'"
                    ></span>
                </td>
            </tr>
        </template>
        <template v-slot:expanded-row="{ columns, item, internalItem }">
            <tr>
                <td :colspan="columns.length" class="table_panel">
                    <template v-if="isPanel === 'studName'"> 이름 {{ internalItem.raw.studName }}</template>
                    <template v-if="isPanel === 'achvRtAvg'">
                        <TeacherAnalyticsAchievementStudy :item="item" />
                    </template>
                    <template v-if="isPanel === 'wrtngNoteCnt'">
                        <TeacherAnalyticsAchievementNote :item="item" />
                    </template>
                    <template v-if="isPanel === 'drillPrtcpCnt'">
                        <TeacherAnalyticsAchievementDrill :item="item" />
                    </template>
                    <template v-if="isPanel === 'wrdLrnCnt'">
                        <TeacherAnalyticsAchievementWord :item="item" />
                    </template>
                    <template v-if="isPanel === 'chtLrnCnt'">
                        <TeacherAnalyticsAchievementChatBot :item="item" />
                    </template>
                </td>
            </tr>
        </template>
    </v-data-table>
</template>

<script setup>
const props = defineProps(['currentPageCount']);

const learnStore = useApiLearnStore();

const { teacherColorMatchedGroupState } = storeToRefs(learnStore);
const expanded = ref([]);
const selectedIdx = ref({
    row: null,
    column: null
});
const isPanel = ref(null);

const AchievementHeaders = [
    { title: '번호', key: 'sessId', align: 'center', sortable: false },
    { title: '이름', key: 'studName', align: 'center', sortable: false },
    { title: '학업 성취율', key: 'achvRtAvg', align: 'center', sortable: false },
    { title: '필기노트', key: 'wrtngNoteCnt', align: 'center', sortable: false },
    { title: '드릴 학습 참여 건수', key: 'drillPrtcpCnt', align: 'center', sortable: false },
    { title: '단어 학습', key: 'wrdLrnCnt', align: 'center', sortable: false },
    { title: '챗봇 학습', key: 'chtLrnCnt', align: 'center', sortable: false },
    { title: '성취 기준 자기채점', key: 'achvBaseScale', align: 'center', sortable: false }
];

/**
 * 렌더링 분기처리
 * @param item
 * @param column
 * @param index
 * @returns {*}
 */
const getItemValue = (item, column, index) => {
    let value = item[column.key];
    if (column.title === '번호') {
        value = index + 1;
    }
    if (column.title === '챗봇 학습') {
        value += '회';
    }
    if (column.title === '학업 성취율') {
        value += '%';
    }
    return value;
};

/**
 * 학업성취율 expand 함수
 * @param item
 * @param key
 */
const handleExpandPanel = (index, item, key) => {
    if (selectedIdx.value.row === item.index && selectedIdx.value.column === index) {
        selectedIdx.value = {
            row: null,
            column: null
        };
        expanded.value = [];
        return;
    } else {
        isPanel.value = key;
        selectedIdx.value = {
            row: item.index,
            column: index
        };
        expanded.value = [item.key];
    }
};
</script>
