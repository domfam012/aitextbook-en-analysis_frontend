<template>
    <!-- 테이블 -->
    <div class="grade">
        <v-card>
            <v-btn v-if="!isEditMode" @click="handleResetSelectedItem" rounded flat size="x-small" class="primary position-absolute">{{
                t('table.edit.reset')
            }}</v-btn>
            <v-data-table
                :headers="achievementHeaders"
                :items="isEditMode ? personalListOfQualification.filter(data => data.selectedFlag) : personalListOfQualification"
                item-value="number"
                expand-on-click
                class="color_gray type_center"
                :items-per-page="itemPerPage"
            >
                <template #item="{ columns, internalItem, toggleExpand, item, index }">
                    <tr>
                        <td>
                            <span>Lesson {{ item.chNumber }}.</span>
                            <br />
                            <span>{{ item.chName }}</span>
                        </td>
                        <td>
                            <span>{{ item.levelName }}</span>
                        </td>
                        <template v-if="isEditMode">
                            <v-textarea
                                v-model="item.editSentence"
                                class="no-border"
                                variant="solo"
                                :elevation="0"
                                no-resize
                                rows="1"
                                hide-details
                                tile
                                clearable
                                clear-icon="mdi-close-circle"
                            ></v-textarea>
                        </template>
                        <td v-else :class="item.selectedFlag && 'active'" @click="handleSelectItem(item, index)">
                            <div class="edit_text_wrap">
                                <span>{{ item.sentence }}</span>
                                <span>{{ item.studentCount }}{{ t('common.unit.person') }}</span>
                            </div>
                        </td>
                    </tr>
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>

<script setup>
const { isEditMode, personalListOfQualification, qualificationByUnitStudentList, unitType } = storeToRefs(useApiRecordGradeStore());
const { selectedStudentIndex } = storeToRefs(useApiRecordStore());
const { t } = useI18n();

//현재학기
const { semesterInProgress } = storeToRefs(useApiRecordHistoryStore());

const itemPerPage = 25;
const achievementHeaders = [
    { title: t('table.edit.headers.lesson'), key: 'chNumber' },
    { title: t('table.edit.headers.level'), key: 'levelName' },
    { title: t('table.edit.headers.developments'), key: 'text', sortable: false }
];

/**
 * 셀 선택 & 취소
 */
const handleSelectItem = (item, index) => {
    if (item.selectedFlag) {
        item.selectedFlag = false;
    } else {
        item.selectedFlag = true;
    }
};

/**
 * 선택한 셀 초기화
 */
const handleResetSelectedItem = async () => {
    await useApiRecordGradeStore().getPersonalListOfQualification({
        studUuid: qualificationByUnitStudentList.value[selectedStudentIndex.value].studUuid,
        semId: semesterInProgress.value.currentSemester,
        divisionCode: unitType.value,
        orderLEsson: 'asc',
        orderLevel: 'desc'
    });
};
</script>

<style lang="scss" scoped>
.grade td.active {
    background-color: #e3f5fc;
}
.edit_text_wrap {
    display: flex;
    justify-content: space-between;
}
</style>
