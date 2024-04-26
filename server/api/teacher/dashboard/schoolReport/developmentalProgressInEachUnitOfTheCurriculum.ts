const dataList1 = [
    {
        chId: 352,
        chNumber: 1,
        chName: 'What Time Is It?',
        level: 3,
        levelName: '하',
        sentence:
            '하2 - 인물에게 알맞은 표정, 몸짓, 말투를 생각하며 작품을 읽고 이야기에서 장면에 따라 인물의 표정, 몸짓, 말투가 어떻게 다른지 비교를 매우 잘함.',
        evaluationSentenceId: 23653,
        count: 1,
        flag: true
    },
    {
        chId: 352,
        chNumber: 1,
        chName: 'What Time Is It?',
        level: 2,
        levelName: '중상',
        sentence:
            '중상 - 인물에게 알맞은 표정, 몸짓, 말투를 생각하며 작품을 읽고 이야기에서 장면에 따라 인물의 표정, 몸짓, 말투가 어떻게 다른지 비교를 매우 잘함.',
        evaluationSentenceId: 23654,
        count: 3,
        flag: true
    },
    {
        chId: 353,
        chNumber: 1,
        chName: 'Who are you?',
        level: 1,
        levelName: '상',
        sentence:
            '상1 - 재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.',
        evaluationSentenceId: 23657,
        count: 2,
        flag: true
    },
    {
        chId: 353,
        chNumber: 1,
        chName: 'Who are you?',
        level: 2,
        levelName: '중상',
        sentence:
            '중상1 - 재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.',
        evaluationSentenceId: 23658,
        count: 1,
        flag: true
    },

    {
        chId: 354,
        chNumber: 3,
        chName: 'How are you?',
        level: 1,
        levelName: '상',
        sentence: '상 - 독도를 지키려는 조상들의 노력에 관심을 보임.',
        evaluationSentenceId: 23665,
        count: 1,
        flag: true
    }
];
const dataList2 = [
    {
        chId: 352,
        chNumber: 1,
        chName: 'What Time Is It?',
        level: 2,
        levelName: '중상',
        sentence:
            '중상 - 인물에게 알맞은 표정, 몸짓, 말투를 생각하며 작품을 읽고 이야기에서 장면에 따라 인물의 표정, 몸짓, 말투가 어떻게 다른지 비교를 매우 잘함.',
        evaluationSentenceId: 23654,
        count: 3,
        flag: true
    },
    {
        chId: 353,
        chNumber: 1,
        chName: 'Who are you?',
        level: 2,
        levelName: '중상',
        sentence:
            '중상2 - 재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.',
        evaluationSentenceId: 23660,
        count: 1,
        flag: true
    }
];
const dataList3 = [
    {
        chId: 352,
        chNumber: 1,
        chName: 'What Time Is It?',
        level: 2,
        levelName: '중상',
        sentence:
            '중상 - 인물에게 알맞은 표정, 몸짓, 말투를 생각하며 작품을 읽고 이야기에서 장면에 따라 인물의 표정, 몸짓, 말투가 어떻게 다른지 비교를 매우 잘함.',
        evaluationSentenceId: 23654,
        count: 3,
        flag: true
    },
    {
        chId: 353,
        chNumber: 1,
        chName: 'Who are you?',
        level: 1,
        levelName: '상',
        sentence:
            '상1 - 재미있거나 감동적인 부분에 유의하며 작품을 바르게 이해하고, 재미있는 부분이 잘 나타나도록 시화를 잘 만들어 낼 수 있음.',
        evaluationSentenceId: 23657,
        count: 2,
        flag: true
    },
    {
        chId: 354,
        chNumber: 3,
        chName: 'How are you?',
        level: 3,
        levelName: '하',
        sentence: '하2 - 독도를 지키려는 조상들의 노력에 관심을 보임.',
        evaluationSentenceId: 23663,
        count: 1,
        flag: true
    }
];

const data1 = {
    dataSize: 15,
    timestamp: '2024-04-25T14:44:33.623155253',
    httpCode: 200,
    message: '조회성공',
    data: dataList1
};

const data2 = {
    dataSize: 15,
    timestamp: '2024-04-25T14:44:33.623155253',
    httpCode: 200,
    message: '조회성공',
    data: dataList2
};

const data3 = {
    dataSize: 15,
    timestamp: '2024-04-25T14:44:33.623155253',
    httpCode: 200,
    message: '조회성공',
    data: dataList3
};

export default defineEventHandler(async event => {
    if (event.req.method === 'GET') {
        const { studUuid } = getQuery(event);

        if (studUuid === '38ed0aa3-b79a-11eb-b9bd-a0d3c1f90e3c') {
            return data1;
        } else if (studUuid === '24c75743-47bb-4d48-8495-25bda5c05acf') {
            return data2;
        } else if (studUuid === '18a79d80-22ea-47d6-a6d9-f4c6689dd2c3') {
            return data3;
        } else {
            return data1;
        }
    }
});
