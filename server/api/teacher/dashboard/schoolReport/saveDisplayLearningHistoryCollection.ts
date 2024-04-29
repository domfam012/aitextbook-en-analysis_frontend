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
        corsViewYn: '1',
        drillViewYn: '1',
        vocaViewYn: '1',
        curiViewYn: '1',
        achvViewYn: '1',
        wrdViewYn: '1',
        exprsViewYn: '1',
        wethrViewYn: '1',
        emtViewYn: '1'
    }
};

export default defineEventHandler(() => {
    return data;
});
