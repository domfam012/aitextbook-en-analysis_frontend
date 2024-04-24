<template>
    <!-- AI talk talk 한눈에 보기 팝업 -->
    <v-dialog v-model="aiTalk" width="auto">
        <v-card class="dialog AI_talk" width="167.5rem" height="83rem">
            <div class="dialog_header">
                <div class="inline_wrap gap1">
                    <h1>AI CURI Talk!</h1>
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
                    <h1>한눈에보기</h1>
                </div>
                <v-btn class="icon_close" @click="aItalk = false"><i class="ico close_30 ico_size_lg"></i></v-btn>
            </div>
            <div class="dialog_body">
                <div class="table_wrap scrollable_container">
                    <div class="inner_header">
                        <span>누적 채팅 횟수:</span>
                        <span class="font-color-orange">42회</span>
                        <span class="mgl10">누적 채팅 시간:</span>
                        <span class="font-color-orange">6시간 41분</span>
                    </div>
                    <div class="table_items scrollable">
                        <v-data-table v-model:expanded="expanded" :headers="basicHeaders" :items="tableBasic" item-value="date">
                            <template v-slot:item="{ item }">
                                <tr v-for="index in 5" :key="index">
                                    <td class="text_center">{{ item.date }}</td>
                                    <td class="text_center">{{ item.time }}</td>
                                    <td>
                                        <v-list class="list_dot">
                                            <v-list-item>{{ item.compliment }}</v-list-item>
                                            <v-list-item>{{ item.compliment2 }}</v-list-item>
                                        </v-list>
                                    </td>
                                    <td>
                                        <v-list class="list_dot">
                                            <v-list-item class="inline_wrap">
                                                {{ item.wrongWord }}
                                                <span class="text_arrow">&rarr;</span>
                                                {{ item.spell }}
                                                <span class="text_err">{{ item.errSpell }}</span>
                                                {{ item.spell2 }}
                                            </v-list-item>
                                        </v-list>
                                    </td>
                                    <td>
                                        <v-list class="list_check text-left">
                                            <v-list-item>{{ item.wrongExpression }}</v-list-item>
                                            <v-list-item>{{ item.wrongExpression2 }}</v-list-item>
                                            <v-list-item>{{ item.wrongExpression3 }}</v-list-item>
                                        </v-list>
                                    </td>
                                    <td class="vertical-top">
                                        <v-list>
                                            <v-list-item>
                                                <p class="mr-1">Q.</p>
                                                {{ item.AI }}
                                            </v-list-item>
                                            <v-list-item>
                                                <p class="mr-1">A:</p>
                                                {{ item.AI2 }}
                                            </v-list-item>
                                        </v-list>
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
const aiTalk = ref(true);
const select = ref({ state: '학기 전체' });
const items = ref([{ state: '학기 전체' }, { state: '1학기' }, { state: '2학기' }]);
</script>

<script>
export default {
    data() {
        return {
            test: true,
            expanded: [],
            basicHeaders: [
                {
                    title: '채팅 날짜',
                    align: 'center',
                    sortable: false,
                    key: 'date'
                },
                { title: '채팅 시간', align: 'center', sortable: false, key: 'time' },
                { title: '칭찬 표현', align: 'center', sortable: false, key: 'compliment' },
                { title: '철자를 틀린 표현', align: 'center', sortable: false, key: 'wrongWord' },
                { title: '잘못된 표현', align: 'center', sortable: false, key: 'wrongExpression' },
                { title: 'AI 표현 도우미', align: 'center', sortable: false, key: 'AI' }
            ],
            tableBasic: [
                {
                    date: 'MM월 DD일 (월)',
                    time: '90분',
                    compliment: 'How are you?',
                    compliment2: 'How about you?',
                    wrongWord: 'moning(x)',
                    spell: 'mo',
                    spell2: 'ning (o)',
                    errSpell: 'r',
                    wrongExpression: 'good night 은 무조건 헤어질 때 하는 인사가 아니에요.',
                    wrongExpression2: '헤어질 때에는 Good bye.',
                    wrongExpression3: '저녁에 잘 자라고 할 때에는 Good night.',
                    AI: '친구들이 주로 쓴 표현은 무엇이 있을까?',
                    AI2: 'What a bout you? 는 상기시킬 때 많이 씁니다.'
                }
            ]
        };
    }
};
</script>
