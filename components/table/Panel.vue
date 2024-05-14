<template>
    <v-data-table
        v-model:expanded="expanded"
        :items-per-page="(currentPage + 1) * 5"
        :headers="AchievementHeaders"
        :items="teacherColorMatchedGroupState"
        item-key="studId"
        item-value="studUuid"
        class="color_mint type_center"
    >
        <template #item="{ columns, internalItem, item, index }">
            <tr>
                <td v-for="(column, idx) in columns" :key="'a' + item.studId" class="type_center">
                    <v-btn
                        @click="handleExpandPanel(idx, internalItem, column.key)"
                        variant="text"
                        v-if="
                            column.title !== t('table.panel.achvBaseScale') &&
                            column.title !== t('table.panel.studId') &&
                            column.title !== t('table.panel.studName')
                        "
                        :class="{
                            type_blue_underline: column.title !== t('table.panel.studId') && column.title !== t('table.panel.studName')
                        }"
                    >
                        {{ getItemValue(item, column, idx) }}
                    </v-btn>
                    <div variant="text" v-else-if="column.title === t('table.panel.studId') || column.title === t('table.panel.studName')">
                        {{ getItemValue(item, column, idx) }}
                    </div>
                    <span
                        v-if="column.title === t('table.panel.achvBaseScale')"
                        class="ico table_center ico_size_10"
                        :class="getItemValue(item, column, idx) > 2 ? 'type_complete' : 'type_uncompleted'"
                    ></span>
                </td>
            </tr>
        </template>
        <template v-slot:expanded-row="{ columns, item, internalItem }">
            <tr>
                <td :colspan="columns.length" class="table_panel">
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
const learnStore = useApiLearnStore();
const { t } = useI18n();

const { teacherColorMatchedGroupState, currentPage } = storeToRefs(learnStore);
const expanded = ref([]);
const selectedIdx = ref({
    row: null,
    column: null
});
const isPanel = ref(null);

const AchievementHeaders = [
    { title: t('table.panel.studId'), key: 'studId', align: 'center', sortable: false },
    { title: t('table.panel.studName'), key: 'studName', align: 'center', sortable: true },
    { title: t('table.panel.achvRtAvg'), key: 'achvRtAvg', align: 'center', sortable: false },
    { title: t('table.panel.wrtngNoteCnt'), key: 'wrtngNoteCnt', align: 'center', sortable: false },
    { title: t('table.panel.drillPrtcpCnt'), key: 'drillPrtcpCnt', align: 'center', sortable: false },
    { title: t('table.panel.wrdLrnCnt'), key: 'wrdLrnCnt', align: 'center', sortable: false },
    { title: t('table.panel.chtLrnCnt'), key: 'chtLrnCnt', align: 'center', sortable: false },
    { title: t('table.panel.achvBaseScale'), key: 'achvBaseScale', align: 'center', sortable: false }
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
    if (column.title === t('table.panel.chtLrnCnt')) {
        value += t('common.unit.cnt');
    }
    if (column.title === t('table.panel.achvRtAvg')) {
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
