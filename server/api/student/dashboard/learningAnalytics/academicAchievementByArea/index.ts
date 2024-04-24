// 영역별 학업 성취도 > 그래프 통계
// 날짜 클릭 > 상세 학업성취도 그래프?
// 개발 완료

const data = {
    dataSize: 1,
    timestamp: '2024-04-03T17:36:37.131472928',
    httpCode: 200,
    message: '조회성공',
    data: {
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
        avgAchvPrsntRtArea: 0
    }
};

export default defineEventHandler(() => {
    return data;
});
