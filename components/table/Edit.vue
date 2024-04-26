<template>
    <!-- 테이블 -->
    <div class="grade">
        <v-card>
            <v-btn v-if="!isEditMode" @click="handleRestSelectedItem" rounded flat size="x-small" class="primary position-absolute"
                >선택 초기화</v-btn
            >
            <v-data-table
                :headers="achievementHeaders"
                :items="personalListOfQualification"
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
                                class="no-border"
                                :model-value="item.text"
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
                        <td v-else :class="item.flag && 'active'" @click="handleSelectItem(item, index)">
                            <div class="edit_text_wrap">
                                <span>{{ item.sentence }}</span>
                                <span>{{ item.count }}명</span>
                            </div>
                        </td>
                    </tr>
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>

<script setup>
const { isEditMode, personalListOfQualification } = storeToRefs(useApiRecordGradeStore());

const itemPerPage = 25;
const achievementHeaders = [
    { title: 'Lesson', key: 'lesson' },
    { title: '수준', key: 'level' },
    { title: '교과 학습 발달 사항', key: 'text', sortable: false }
];

/**
 * 셀 선택 & 취소
 */
const handleSelectItem = (item, index) => {
    if (item.flag) {
        item.flag = false;
        item.count -= 1;
    } else {
        item.flag = true;
        item.count += 1;
    }
};

/**
 * 선택한 셀 초기화
 */
const handleRestSelectedItem = () => {
    useApiRecordGradeStore().getPersonalListOfQualification({
        studUuid: qualificationByUnitStudentList.value[studentIndex].studUuid,
        semId: '1',
        divisionCode: 'A',
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
