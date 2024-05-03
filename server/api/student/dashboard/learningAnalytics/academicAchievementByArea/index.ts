// 영역별 학업 성취도 > 그래프 통계
// 날짜 클릭 > 상세 학업성취도 그래프?
// 개발 완료

const data = {
    dataSize: 1,
    timestamp: '2024-04-03T17:36:37.131472928',
    httpCode: 200,
    message: '조회성공',
    data: {
        achvLstnnRt: 3.2,
        achvSpkngRt: 2.5,
        achvRedngRt: 3,
        achvWritngRt: 3.5,
        achvViewRt: 3.8,
        achvPrsntRt: 4.5,
        classLstnnRt: 2.8,
        classSpkngRt: 3.2,
        classRedngRt: 3.8,
        classWritngRt: 3,
        classViewRt: 3,
        classPrsntRt: 2.4,
        areaLstnnRt: 2,
        areaPrsntRt: 1.5,
        areaRedngRt: 2.6,
        areaSpkngRt: 2.5,
        areaViewRt: 3.2,
        areaWritngRt: 4
    }
};

export default defineEventHandler(() => {
    return data;
});
