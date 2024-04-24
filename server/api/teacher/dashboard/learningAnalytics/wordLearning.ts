// 스스로학습 > 색깔에 맞는 학생 그룹 목록 > 단어학습
// API 작업 실제 종료일 2024-04-15
// 임시 mock data

const data = {
    success: true,
    dataSize: 1,
    timestamp: '2024-03-29 01:33:02',
    data: {
        // 알고 있는 단어
        knownWordsCount: {
            count: 19,
            word: [
                'apple',
                'school',
                'apple',
                'congratulate',
                'book',
                'apple',
                'school',
                'apple',
                'congratulate',
                'book',
                'apple',
                'school',
                'apple',
                'congratulate',
                'book',
                'apple',
                'school'
            ]
        },
        // 조금 알거나 모르는 단어
        somewhatKnownWordsCount: {
            count: 3,
            word: ['school', 'apple', 'congratulate', 'book', 'apple', 'school', 'apple', 'congratulate', 'book', 'apple']
        },
        // 모르는 단어
        unknownWordsCount: {
            count: 17,
            word: [
                'congratulate',
                'school',
                'book',
                'apple',
                'school',
                'apple',
                'congratulate',
                'book',
                'apple',
                'school',
                'apple',
                'congratulate',
                'book',
                'apple',
                'school',
                'congratulate'
            ]
        },
        // 단어 학습 총 개수
        totalWordLearningCount: {
            count: 2,
            word: ['school', 'apple', 'congratulate', 'book', 'apple', 'school', 'apple', 'congratulate', 'book', 'apple']
        }
    }
};

export default defineEventHandler(() => {
    return data;
});
