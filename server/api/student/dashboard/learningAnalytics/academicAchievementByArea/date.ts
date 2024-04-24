// 영역별 학업 성취도 팝업 > 날짜 목록
// APi 개발 완료

const data = {
    dataSize: 7,
    timestamp: '2024-04-03T17:37:14.33496197',
    httpCode: 200,
    message: '조회성공',
    data: [
        {
            acitve: 0,
            today: 0,
            dayOfWeek: '수',
            year: 2024,
            month: 4,
            day: 3,
            strYmd: '2024-04-3'
        },
        {
            acitve: 0,
            today: 0,
            dayOfWeek: '화',
            year: 2024,
            month: 4,
            day: 2,
            strYmd: '2024-04-2'
        },
        {
            acitve: 0,
            today: 0,
            dayOfWeek: '월',
            year: 2024,
            month: 4,
            day: 1,
            strYmd: '2024-04-1'
        },
        {
            acitve: 0,
            today: 0,
            dayOfWeek: '일',
            year: 2024,
            month: 3,
            day: 31,
            strYmd: '2024-03-31'
        },
        {
            acitve: 0,
            today: 0,
            dayOfWeek: '토',
            year: 2024,
            month: 3,
            day: 30,
            strYmd: '2024-03-30'
        },
        {
            acitve: 0,
            today: 0,
            dayOfWeek: '금',
            year: 2024,
            month: 3,
            day: 29,
            strYmd: '2024-03-29'
        },
        {
            acitve: 0,
            today: 0,
            dayOfWeek: '목',
            year: 2024,
            month: 3,
            day: 28,
            strYmd: '2024-03-28'
        }
    ]
};

export default defineEventHandler(() => {
    return data;
});
