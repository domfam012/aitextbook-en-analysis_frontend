<template>
    <v-data-table v-model:expanded="expanded" :headers="basicHeaders" :items="tableBasic" item-value="date">
        <template v-slot:item="{ item }">
            <tr>
                <td class="text_center">{{ item.date }}</td>
                <td class="text_center">{{ item.time }}</td>
                <td>
                    <v-list class="list_dot" v-if="item.compliment.length > 0" v-for="column in item.compliment">
                        <v-list-item>{{ column }}</v-list-item>
                    </v-list>
                </td>
                <td>
                    <v-list class="list_dot">
                        <v-list-item class="inline_wrap">
                            {{ item.wrongWord }}(x)
                            <span class="text_arrow">&rarr;</span>
                            {{ item.spell }}
                            <span class="text_err">{{ item.errSpell }}</span>
                            {{ item.spell2 }}(o)
                        </v-list-item>
                    </v-list>
                </td>
                <td>
                    <v-list class="list_check text-left" v-if="item.wrongExpression.length > 0" v-for="column in item.wrongExpression">
                        <v-list-item>{{ column }}</v-list-item>
                    </v-list>
                </td>
                <td class="vertical-top">
                    <v-list v-if="item.AISupporter.length > 0" v-for="column in item.AISupporter">
                        <v-list-item>
                            <p class="mr-1">Q.</p>
                            {{ column.question }}
                        </v-list-item>
                        <v-list-item>
                            <p class="mr-1">A:</p>
                            {{ column.answer }}
                        </v-list-item>
                    </v-list>
                </td>
            </tr>
        </template>
    </v-data-table>
</template>
<script setup>
const expanded = ref([]);
const basicHeaders = [
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
];

const tableBasic = ref([
    {
        date: '04월 22일 (월)',
        time: '10분',
        compliment: ['How are you?', 'How about you?'],
        wrongWord: 'moning',
        spell: 'mo',
        spell2: 'ning',
        errSpell: 'r',
        wrongExpression: [
            'good night 은 무조건 헤어질 때 하는 인사가 아니에요.',
            '헤어질 때에는 Good bye.',
            '저녁에 잘 자라고 할 때에는 Good night.'
        ],
        AISupporter: [
            {
                question: '친구들이 주로 쓴 표현은 무엇이 있을까?',
                answer: 'What a bout you? 는 상기시킬 때 많이 씁니다.'
            }
        ]
    },
    {
        date: '04월 23일 (화)',
        time: '20분',
        compliment: ['How are you?', 'How about you?', 'Hello World'],
        wrongWord: 'moning',
        spell: 'mo',
        spell2: 'ning',
        errSpell: 'r',
        wrongExpression: [
            'good night 은 무조건 헤어질 때 하는 인사가 아니에요.',
            '헤어질 때에는 Good bye.',
            '저녁에 잘 자라고 할 때에는 Good night.'
        ],
        AISupporter: [
            {
                question: '친구들이 주로 쓴 표현은 무엇이 있을까?',
                answer: 'What a bout you? 는 상기시킬 때 많이 씁니다.'
            }
        ]
    },
    {
        date: '04월 24일 (수)',
        time: '30분',
        compliment: ['How are you?', 'How about you?', 'Lets buy it today'],
        wrongWord: 'moning',
        spell: 'mo',
        spell2: 'ning',
        errSpell: 'r',
        wrongExpression: [
            'good night 은 무조건 헤어질 때 하는 인사가 아니에요.',
            '헤어질 때에는 Good bye.',
            '저녁에 잘 자라고 할 때에는 Good night.'
        ],
        AISupporter: [
            {
                question: '친구들이 주로 쓴 표현은 무엇이 있을까?',
                answer: 'What a bout you? 는 상기시킬 때 많이 씁니다.'
            }
        ]
    }
]);
</script>
