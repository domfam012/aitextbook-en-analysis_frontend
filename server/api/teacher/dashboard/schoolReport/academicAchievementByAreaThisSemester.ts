/**
 * 2024.04.16
 * API 200 정상동작 / data 없음 상태
 */
const data = {
    dataSize: 7,
    timestamp: '2024-04-03T17:37:14.33496197',
    httpCode: 200,
    message: '조회성공',
    data: {
        etlDttm: '2024-04-16T01:46:47.037Z',
        achvLstnnRt: 0,
        achvSpkngRt: 0,
        achvRedngRt: 0,
        achvWritngRt: 0,
        achvViewRt: 0,
        achvPrsntRt: 0,
        classLstnnRt: 0,
        classSpkngRt: 0,
        classRedngRt: 0,
        classWritngRt: 0,
        classViewRt: 0,
        classPrsntRt: 0,
        areaLstnnRt: 0,
        areaPrsntRt: 0,
        areaRedngRt: 0,
        areaSpkngRt: 0,
        areaViewRt: 0,
        areaWritngRt: 0
    }
};

export default defineEventHandler(() => {
    return data;
});
