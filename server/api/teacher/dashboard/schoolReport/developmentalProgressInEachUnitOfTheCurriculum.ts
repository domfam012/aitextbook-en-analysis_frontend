/**
 * 2024.04.16
 * API 200 정상동작 데이터없음 상태
 */
const data = {
    dataSize: 7,
    timestamp: '2024-04-03T17:37:14.33496197',
    httpCode: 200,
    message: '조회성공',
    data: {
        etlDttm: '2024-04-16T02:08:57.925Z',
        semId: 0,
        clssUuid: 'string',
        tchrUuid: 'string',
        studUuid: 'string',
        chId: 0,
        studName: 'string',
        lrnGrwthIssue: 'string'
    }
};

export default defineEventHandler(() => {
    return data;
});
