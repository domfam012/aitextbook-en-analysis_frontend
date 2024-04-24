// 단어 학습 진단 통계
// API 개발 완료
// 400 에러 발생
// API 작업 실제 종료일 2024-03-18

const data = {
    dataSize: 0,
    timestamp: '2024-04-03T09:14:28.246Z',
    httpCode: 0,
    message: 'string',
    data: {
        etlDttm: '2024-04-23T05:37:46.409Z',
        learnDgnessDailyId: {
            dt: '2024-04-23',
            semId: 0,
            clssUuid: 'string',
            tchrUuid: 'string',
            studUuid: 'string'
        },
        dt: '2024-04-23T05:37:46.409Z',
        semId: 0,
        clssUuid: 'string',
        tchrUuid: 'string',
        studUuid: 'string',
        wrdPrfctUndrsUseCnt: 0,
        wrdExprsUndrsUnsdCnt: 0,
        wrdWrongExprsUndrsCnt: 0,
        wrdSplngWrongKnowCnt: 0,
        wrdUnknownCnt: 0,
        wrdLrnTotCnt: 0,
        exprsPrfctUndrsUseCnt: 0,
        exprsExprsUndrsUnsdCnt: 0,
        exprsWrongExprsUndrsCnt: 0,
        exprsSplngWrongKnowCnt: 0,
        exprsUnknownCnt: 0,
        exprsLrnTotCnt: 0,
        startDt: '2024-04-23',
        endDt: '2024-04-23'
    }
};

export default defineEventHandler(() => {
    return data;
});
