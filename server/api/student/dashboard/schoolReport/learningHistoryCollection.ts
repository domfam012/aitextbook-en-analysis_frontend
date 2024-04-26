/**
 * 2024.04.16
 * API 400
 */
const data1 = {
    dataSize: 1,
    timestamp: '2024-04-03T17:37:14.33496197',
    httpCode: 200,
    message: '조회성공',
    data: {
        corsViewYn: 1, // 교과학습여부
        corsLoginTot: 77, // 교과학습로그인횟수
        corsTotTime: 300, // 교과학습총학습시간
        drillViewYn: 1, // 드릴학습여부
        dirllLoginTot: 45, // 드릴학습로그인횟수
        drillTotTime: 150, // 드릴학습총학습시간
        vocaViewYn: 1, // 보카여부
        vocaLoginTot: 217, //보카로그인횟수
        vocaTotTime: 510, // 보카총학습시간
        curiViewYn: 1, // 큐리여부
        curiLoginTot: 37, // 큐리로그인횟수
        curiTotTime: 330, // 큐리총학습시간
        wrdViewYn: 1, // 단어 학습진단 여부
        wrdPrfctUndrsUseCnt: 25, // 잘이해하고 활용한 단어
        wrdExprsUndrsUnsdCnt: 8, // 이해했으나 활용하지 못한 단어
        wrdWrongExprsUndrsCnt: 11, // 조금만 더학습하면 좋을 단어
        wrdSplngWrongKnowCnt: 8, // 더열심히 학습해야 할 단어
        wrdLrnTotCnt: 65, // 학습한 누적 단어 개수
        lrnTimeYn: 1, // 요일별 평균 학습 시간 여부
        lrnTimeMon: 60, // 월
        lrnTimeTues: 21, // 화
        lrnTimeWed: 31, // 수
        lrnTimeThur: 30, // 목
        lrnTimeFri: 40, // 금
        lrnTimeSatSun: 55, // 토,일
        wethrViewYn: 1, // 날씨여부
        wethrVeryClrTot: 5, // 맑음
        wethrCloudyClrTot: 6, // 흐린뒤 갬
        wethrCloudyRainTot: 2, // 흐리고 비
        wethrClrCloudyTot: 3, // 맑았다 흐림
        wethrCloudyThndrTot: 6, // 흐리고 천둥
        wethrHeavyRainTot: 2, // 폭우
        wethrHeavyWindTot: 4, // 바람 많이
        wethrCloudySnowTot: 3, // 흐리고 눈
        wethrNotRspnsTot: 2, // 미응답
        emtViewYn: 1, // 정서 여부
        emtJoyScale: 4.5, // 즐거움
        emtPrideScale: 4.2, // 자부심
        emtFearScale: 1.2, // 두려움
        emtAngryScale: 0.9, // 화, 절망감
        emtBrdmScale: 2.3, // 지루함
        emtAnxtyScale: 1.4 // 학습 환경 불안감
    }
};

const data2 = {
    dataSize: 1,
    timestamp: '2024-04-03T17:37:14.33496197',
    httpCode: 200,
    message: '조회성공',
    data: {
        corsViewYn: 1, // 교과학습여부
        corsLoginTot: 55, // 교과학습로그인횟수
        corsTotTime: 690, // 교과학습총학습시간
        drillViewYn: 1, // 드릴학습여부
        dirllLoginTot: 35, // 드릴학습로그인횟수
        drillTotTime: 250, // 드릴학습총학습시간
        vocaViewYn: 1, // 보카여부
        vocaLoginTot: 112, //보카로그인횟수
        vocaTotTime: 580, // 보카총학습시간
        curiViewYn: 1, // 큐리여부
        curiLoginTot: 27, // 큐리로그인횟수
        curiTotTime: 130, // 큐리총학습시간
        wrdViewYn: 1, // 단어 학습진단 여부
        wrdPrfctUndrsUseCnt: 15, // 잘이해하고 활용한 단어
        wrdExprsUndrsUnsdCnt: 18, // 이해했으나 활용하지 못한 단어
        wrdWrongExprsUndrsCnt: 1, // 조금만 더학습하면 좋을 단어
        wrdSplngWrongKnowCnt: 28, // 더열심히 학습해야 할 단어
        wrdLrnTotCnt: 85, // 학습한 누적 단어 개수
        lrnTimeYn: 1, // 요일별 평균 학습 시간 여부
        lrnTimeMon: 20, // 월
        lrnTimeTues: 31, // 화
        lrnTimeWed: 11, // 수
        lrnTimeThur: 40, // 목
        lrnTimeFri: 20, // 금
        lrnTimeSatSun: 45, // 토,일
        wethrViewYn: 1, // 날씨여부
        wethrVeryClrTot: 3, // 맑음
        wethrCloudyClrTot: 2, // 흐린뒤 갬
        wethrCloudyRainTot: 5, // 흐리고 비
        wethrClrCloudyTot: 2, // 맑았다 흐림
        wethrCloudyThndrTot: 1, // 흐리고 천둥
        wethrHeavyRainTot: 8, // 폭우
        wethrHeavyWindTot: 4, // 바람 많이
        wethrCloudySnowTot: 2, // 흐리고 눈
        wethrNotRspnsTot: 3, // 미응답
        emtViewYn: 1, // 정서 여부
        emtJoyScale: 4.3, // 즐거움
        emtPrideScale: 3.2, // 자부심
        emtFearScale: 1.7, // 두려움
        emtAngryScale: 3.9, // 화, 절망감
        emtBrdmScale: 4.9, // 지루함
        emtAnxtyScale: 1.2 // 학습 환경 불안감
    }
};

const data3 = {
    dataSize: 1,
    timestamp: '2024-04-03T17:37:14.33496197',
    httpCode: 200,
    message: '조회성공',
    data: {
        corsViewYn: 1, // 교과학습여부
        corsLoginTot: 67, // 교과학습로그인횟수
        corsTotTime: 170, // 교과학습총학습시간
        drillViewYn: 1, // 드릴학습여부
        dirllLoginTot: 65, // 드릴학습로그인횟수
        drillTotTime: 120, // 드릴학습총학습시간
        vocaViewYn: 1, // 보카여부
        vocaLoginTot: 229, //보카로그인횟수
        vocaTotTime: 510, // 보카총학습시간
        curiViewYn: 1, // 큐리여부
        curiLoginTot: 25, // 큐리로그인횟수
        curiTotTime: 320, // 큐리총학습시간
        wrdViewYn: 1, // 단어 학습진단 여부
        wrdPrfctUndrsUseCnt: 65, // 잘이해하고 활용한 단어
        wrdExprsUndrsUnsdCnt: 28, // 이해했으나 활용하지 못한 단어
        wrdWrongExprsUndrsCnt: 31, // 조금만 더학습하면 좋을 단어
        wrdSplngWrongKnowCnt: 18, // 더열심히 학습해야 할 단어
        wrdLrnTotCnt: 75, // 학습한 누적 단어 개수
        lrnTimeYn: 1, // 요일별 평균 학습 시간 여부
        lrnTimeMon: 30, // 월
        lrnTimeTues: 21, // 화
        lrnTimeWed: 60, // 수
        lrnTimeThur: 10, // 목
        lrnTimeFri: 20, // 금
        lrnTimeSatSun: 55, // 토,일
        wethrViewYn: 1, // 날씨여부
        wethrVeryClrTot: 5, // 맑음
        wethrCloudyClrTot: 4, // 흐린뒤 갬
        wethrCloudyRainTot: 2, // 흐리고 비
        wethrClrCloudyTot: 3, // 맑았다 흐림
        wethrCloudyThndrTot: 2, // 흐리고 천둥
        wethrHeavyRainTot: 2, // 폭우
        wethrHeavyWindTot: 4, // 바람 많이
        wethrCloudySnowTot: 1, // 흐리고 눈
        wethrNotRspnsTot: 6, // 미응답
        emtViewYn: 1, // 정서 여부
        emtJoyScale: 2.5, // 즐거움
        emtPrideScale: 2.3, // 자부심
        emtFearScale: 3.2, // 두려움
        emtAngryScale: 1.9, // 화, 절망감
        emtBrdmScale: 3.2, // 지루함
        emtAnxtyScale: 4.4 // 학습 환경 불안감
    }
};

export default defineEventHandler(async event => {
    if (event.req.method === 'GET') {
        const { studUuid } = getQuery(event);

        if (studUuid === '38ed0aa3-b79a-11eb-b9bd-a0d3c1f90e3c') {
            return data1;
        } else if (studUuid === '24c75743-47bb-4d48-8495-25bda5c05acf') {
            return data2;
        } else if (studUuid === 'ba2207af-aeb1-4e78-a944-e594ed2acbbc') {
            return data3;
        } else {
            return data1;
        }
    }
});
