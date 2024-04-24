// 독려메시지 대상 조회
// 취소선 API

const data = {
    dataSize: 1,
    timestamp: '2024-04-17T13:14:11.504318571',
    httpCode: 200,
    message: '조회성공',
    data: [
        {
            studentNumber: 1,
            studentName: '홍길동',
            defectWeekCount: 15
        },
        {
            studentNumber: 2,
            studentName: '김길동',
            defectWeekCount: 8
        },
        {
            studentNumber: 3,
            studentName: '이길동',
            defectWeekCount: 3
        },
        {
            studentNumber: 4,
            studentName: '박길동',
            defectWeekCount: 20
        },
        {
            studentNumber: 5,
            studentName: '최길동',
            defectWeekCount: 6
        }
    ]
};

export default defineEventHandler(() => {
    return data;
});
