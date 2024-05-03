// 오늘의학업 성취율

const data0 = {
    dataSize: 0,
    timestamp: '2024-04-11T13:26:23.705491207',
    httpCode: 200,
    message: '조회성공',
    data: []
};

const data1 = {
    dataSize: 1,
    timestamp: '2024-04-11T13:26:23.705491207',
    httpCode: 200,
    message: '조회성공',
    data: {
        fastStudentCount: 3,
        littleFastStudentCount: 11,
        littleSlowStudentCount: 4,
        middleStudentCount: 4,
        noLeaningStudentCount: 1,
        slowStudentCount: 2
    }
};

export default defineEventHandler(async event => {
    if (event.req.method === 'GET') {
        const { date } = getQuery(event);
        const dateList = [
            '2024-04-03',
            '2024-04-04',
            '2024-04-16',
            '2024-04-26',
            '2024-05-01',
            '2024-05-03',
            '2024-05-04',
            '2024-05-16',
            '2024-05-26',
            '2024-06-01'
        ];
        if (dateList.includes(date)) {
            return data1;
        } else {
            return data0;
        }
    }
});
