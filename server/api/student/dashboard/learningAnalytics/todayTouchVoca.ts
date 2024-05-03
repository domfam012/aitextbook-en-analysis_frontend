// 그래프 통계
// API 작업 실제 종료일 2024-03-20
// API 개발 완료

const data = {
    dataSize: 0,
    timestamp: '2024-04-03T18:11:10.720370364',
    httpCode: 204,
    message: '자료가 없음',
    data: {
        etlDttm: '2024-05-02T06:21:45.183Z',
        dt: '2024-05-02',
        semId: 0,
        clssUuid: 'string',
        tchrUuid: 'string',
        studUuid: 'string',
        lmTypAkey: 'string',
        chId: 0,
        sessId: 0,
        achvLstnnRt: 0,
        achvSpkngRt: 0,
        achvRedngRt: 0,
        achvWritngRt: 0,
        achvViewRt: 0,
        achvPrsntRt: 0,
        avgAchvLstnnRtClass: 0,
        avgAchvSpkngRtClass: 0,
        avgAchvRedngRtClass: 0,
        avgAchvWritngRtClass: 0,
        avgAchvViewRtClass: 0,
        avgAchvPrsntRtClass: 0,
        avgAchvLstnnRtArea: 0,
        avgAchvSpkngRtArea: 0,
        avgAchvRedngRtArea: 0,
        avgAchvWritngRtArea: 0,
        avgAchvViewRtArea: 0,
        avgAchvPrsntRtArea: 0,
        wrdKnowCnt: 30,
        wrdLittleknowCnt: 10,
        wrdUnknownCnt: 10,
        wrdTot: 50,
        avgAnswrRt: 95,
        startDt: '2024-05-02',
        endDt: '2024-05-02',
        eduOfficeCode: 'string'
    }
};

export default defineEventHandler(() => {
    return data;
});
