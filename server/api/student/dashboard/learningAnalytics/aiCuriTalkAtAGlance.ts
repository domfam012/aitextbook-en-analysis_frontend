// AI CURI talk 한눈에 보기 팝업
// API 작업 실제 종료일 2024-04-19

const data = {
    success: true,
    dataSize: 1,
    timestamp: '2024-03-29 01:33:02',
    data: {
        chtCnt: 43,
        totalChtTime: '6시간 30분',
        chtHistory: [
            {
                date: '2024-03-29',
                time: '90 minutes',
                compliment: 'How are you?',
                compliment2: 'How about you?',
                wrongWord: 'moning(x)',
                spell: 'mo',
                spell2: 'ning (o)',
                errSpell: 'r',
                wrongExpression: 'Good night is not necessarily used as a farewell greeting.',
                wrongExpression2: 'Use Goodbye when parting.',
                wrongExpression3: "Good night is used when wishing someone a good night's sleep.",
                AI: 'What expressions do friends commonly use?',
                AI2: 'What about you? is often used to prompt a response.'
            },
            {
                date: '2024-03-29',
                time: '50 minutes',
                compliment: 'How are you?',
                compliment2: 'How about you?',
                wrongWord: 'moning(x)',
                spell: 'mo',
                spell2: 'ning (o)',
                errSpell: 'r',
                wrongExpression: 'Good night is not necessarily used as a farewell greeting.',
                wrongExpression2: 'Use Goodbye when parting.',
                wrongExpression3: "Good night is used when wishing someone a good night's sleep.",
                AI: 'What expressions do friends commonly use?',
                AI2: 'What about you? is often used to prompt a response.'
            },
            {
                date: '2024-03-29',
                time: '90 minutes',
                compliment: 'How are you?',
                compliment2: 'How about you?',
                wrongWord: 'moning(x)',
                spell: 'mo',
                spell2: 'ning (o)',
                errSpell: 'r',
                wrongExpression: 'Good night is not necessarily used as a farewell greeting.',
                wrongExpression2: 'Use Goodbye when parting.',
                wrongExpression3: "Good night is used when wishing someone a good night's sleep.",
                AI: 'What expressions do friends commonly use?',
                AI2: 'What about you? is often used to prompt a response.'
            }
        ]
    }
};

export default defineEventHandler(() => {
    return data;
});
