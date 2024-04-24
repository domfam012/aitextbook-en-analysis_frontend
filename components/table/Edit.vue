<template>
    <!-- 테이블 -->
    <div class="grade">
        <v-card>
            <v-btn v-if="!isEditMode" @click="handleRestSelectedItem" rounded flat size="x-small" class="primary position-absolute"
                >선택 초기화</v-btn
            >
            <v-data-table
                :headers="achievementHeaders"
                :items="achievement"
                item-value="number"
                expand-on-click
                class="color_gray type_center"
                :items-per-page="itemPerPage"
            >
                <template #item="{ columns, internalItem, toggleExpand, item, index }">
                    <tr>
                        <td>
                            <span v-html="item.Lesson"></span>
                        </td>
                        <td>
                            <span>{{ item.level }}</span>
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
                        <td v-else :class="addActiveClass(item)" @click="handleSelectItem(item, index)">
                            <div class="edit_text_wrap">
                                <span>{{ item.text }}</span>
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
const { isEditMode } = storeToRefs(useApiRecordGradeStore());

const achievementData = [
    {
        id: 1,
        Lesson: 'Lesson 1. <br/>How are you?',
        level: '상',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.',
        count: 0
    },
    {
        id: 2,
        Lesson: 'Lesson 2. <br/>How are you?',
        level: '상',
        text: '작품을 자세히 관찰하고 그 안에 담긴 유머와 감동을 잡아내어 시화에 표현할 수 있음.',
        count: 0
    },
    {
        id: 3,
        Lesson: 'Lesson 3. <br/>How are you?',
        level: '상',
        text: '내가 할 수 있다는 자신감으로 작품을 해석하고, 그것을 시화로 잘 표현해내어 독자들을 끌어들일 수 있음.',
        count: 0
    },
    {
        id: 4,
        Lesson: 'Lesson 3. <br/>How are you?',
        level: '하',
        text: '작품의 뛰어난 부분을 발견하고, 그것을 시화로 잘 그려내어 독자들에게 재미와 감동을 전달할 수 있음.',
        count: 2
    },
    {
        id: 5,
        Lesson: 'Lesson 4. <br/>How are you?',
        level: '상',
        text: '작품을 이해하고, 그 안에 담긴 재미있는 장면을 잘 포착하여 시화로 표현함으로써 독자들에게 새로운 경험을 제공할 수 있음.',
        count: 0
    },
    {
        id: 6,
        Lesson: 'Lesson 5. <br/>How are you?',
        level: '중',
        text: '작품 속 특별한 순간을 발견하고, 그것을 시화로 잘 나타내어 독자들을 놀라게 할 수 있음.',
        count: 0
    },
    {
        id: 7,
        Lesson: 'Lesson 6. <br/>How are you?',
        level: '중',
        text: '작품을 바르게 해석하고, 그것을 시화로 잘 표현함으로써 독자들에게 새로운 시선을 제공할 수 있음.',
        count: 0
    },
    {
        id: 8,
        Lesson: 'Lesson 7. <br/>How are you?',
        level: '중',
        text: '작품의 중요한 부분을 잘 파악하고, 그것을 시화로 잘 나타내어 독자들을 매료시킬 수 있음.',
        count: 0
    },
    {
        id: 9,
        Lesson: 'Lesson 8. <br/>How are you?',
        level: '상',
        text: '작품의 특별한 장면을 발견하고, 그것을 시화로 잘 그려내어 독자들에게 새로운 감동을 전달할 수 있음.',
        count: 1
    },
    {
        id: 10,
        Lesson: 'Lesson 9. <br/>How are you?',
        level: '상',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.',
        count: 0
    },
    {
        id: 11,
        Lesson: 'Lesson 10. <br/>How are you?',
        level: '상',
        text: '작품을 바르게 이해하고, 그것을 재미있게 시화로 그려내어 독자들의 관심을 사로잡을 수 있음.',
        count: 0
    },
    {
        id: 12,
        Lesson: 'Lesson 11. <br/>How are you?',
        level: '상',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.',
        count: 0
    },
    {
        id: 13,
        Lesson: 'Lesson 12. <br/>How are you?',
        level: '하',
        text: '재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.',
        count: 0
    }
];
const a = { test: 3 };
const b = ref(a);
onMounted(() => {
    b.value.test = 5;
    console.log(a);
});
const selectedItems = ref([]);
const achievement = ref(achievementData);
const itemPerPage = 25;

const achievementHeaders = [
    { title: 'Lesson', key: 'Lesson' },
    { title: '수준', key: 'level' },
    { title: '교과 학습 발달 사항', key: 'text', sortable: false }
];
/**
 * 셀 선택 시 active 클래스 추가
 * @param item
 * @returns {string}
 */
const addActiveClass = item => {
    const result = selectedItems.value.findIndex(lesson => lesson.id === item.id);
    return result !== -1 ? 'active' : '';
};

/**
 * 테이블 셀 선택 시
 * 선택된 값 배열에 추가
 * 오른쪽 인원수 증감
 * @param item 선택한 배열 정보
 * @param index
 */
const handleSelectItem = (item, index) => {
    const findIndex = selectedItems.value.findIndex(lesson => lesson.id === item.id);
    if (findIndex !== -1) {
        if (achievement.value[index].count === 0) {
            achievement.value[index].count = 0;
        } else {
            achievement.value[index].count -= 1;
        }
        // 이미 선택된 경우 제거
        selectedItems.value.splice(findIndex, 1);
    } else {
        achievement.value[index].count += 1;
        // 선택되지 않은 경우 추가
        selectedItems.value.push(item);
    }
};

/**
 * 선택한 셀 초기화
 */
const handleRestSelectedItem = () => {
    console.log(achievementData);
    selectedItems.value = [];
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
