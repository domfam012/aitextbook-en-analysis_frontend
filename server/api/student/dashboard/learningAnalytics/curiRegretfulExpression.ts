// 큐리가 아쉬워한 표현
// API 작업 실제 종료일 2024-04-18

const data = {
    success: true,
    dataSize: 1,
    timestamp: '2024-03-29 01:33:02',
    data: {
        wrongSpelling: [
            { incorrect: 'moning', correct: 'mor' },
            { incorrect: 'moning', correct: 'mor' }
        ],
        wrongExpression: [
            'good night 은 무조건 헤어질 때 하는 인사가 아니에요.',
            '헤어질 때에는 Good bye.',
            '저녁에 잘 자라고 할 때에는 Good night.'
        ]
    }
};

export default defineEventHandler(() => {
    return data;
});
