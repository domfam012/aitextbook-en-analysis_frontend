/**
 * 2024.04.29
 * API 200 정상동작
 */
const data = {
    dataSize: 1,
    timestamp: '2024-04-03T17:37:14.33496197',
    httpCode: 200,
    message: '조회성공',
    data: {
        semId: 0,
        studUuid: 'string',
        corsViewYn: 0,
        drillViewYn: 0,
        vocaViewYn: 0,
        curiViewYn: 0,
        achvViewYn: 0,
        wrdViewYn: 0,
        exprsViewYn: 0,
        wethrViewYn: 0,
        emtViewYn: 0
    }
};

export default defineEventHandler(() => {
    return data;
});
