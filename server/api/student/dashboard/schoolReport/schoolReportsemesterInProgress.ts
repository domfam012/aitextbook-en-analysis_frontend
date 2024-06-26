/**
 * API 400 응답
 * 2024.04.12
 */
const data = {
    semId: 0,
    clssUuid: 'string',
    tchrUuid: 'string',
    studUuid: 'string',
    eduOfficeCode: 'string',
    corsViewYn: 0,
    corsLoginTot: 0,
    corsTotTime: 0,
    drillViewYn: 0,
    dirllLoginTot: 0,
    drillTotTime: 0,
    vocaViewYn: 0,
    vocaLoginTot: 0,
    vocaTotTime: 0,
    curiViewYn: 0,
    curiLoginTot: 0,
    curiTotTime: 0,
    achvViewYn: 0,
    achvLstnnRt: 0,
    achvSpkngRt: 0,
    achvRedngRt: 0,
    achvWritngRt: 0,
    achvViewRt: 0,
    achvPrsntRt: 0,
    wrdViewYn: 0,
    wrdPrfctUndrsUseCnt: 0,
    wrdExprsUndrsUnsdCnt: 0,
    wrdWrongExprsUndrsCnt: 0,
    wrdSplngWrongKnowCnt: 0,
    wrdUnknownCnt: 0,
    wrdLrnTotCnt: 0,
    lrnTimeYn: 0,
    lrnTimeMon: 0,
    lrnTimeTues: 0,
    lrnTimeWed: 0,
    lrnTimeThur: 0,
    lrnTimeFri: 0,
    lrnTimeSatSun: 0,
    wethrViewYn: 0,
    wethrVeryClrTot: 0,
    wethrCloudyClrTot: 0,
    wethrCloudyRainTot: 0,
    wethrClrCloudyTot: 0,
    wethrCloudyThndrTot: 0,
    wethrHeavyRainTot: 0,
    wethrHeavyWindTot: 0,
    wethrCloudySnowTot: 0,
    wethrNotRspnsTot: 0,
    emtViewYn: 0,
    emtJoyScale: 0,
    emtPrideScale: 0,
    emtFearScale: 0,
    emtAngryScale: 0,
    emtBrdmScale: 0,
    emtAnxtyScale: 0,
    cnfirmYn: 0,
    issueCompletedYn: 'string',
    classLstnnRt: 0,
    classSpkngRt: 0,
    classRedngRt: 0,
    classWritngRt: 0,
    classViewRt: 0,
    classPrsntRt: 0,
    schoolReportCount: 0,
    schoolReportLearningDevelopCount: 0,
    schoolReportIssueCompletedCount: 0,
    currentSemester: 0,
    schoolReportSemester: 0
};

export default defineEventHandler(() => {
    return data;
});
