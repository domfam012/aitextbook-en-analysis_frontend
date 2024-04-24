// 숫자 색칠판 완성하기 팝업 > 남은색깔 조각 > 색깔조각 개수
// API 작업 실제 종료일 2024-03-19
// API 개발 완료

const data = {
    dataSize: 0,
    timestamp: '2024-04-03T18:00:53.749810525',
    httpCode: 200,
    message: '조회성공',
    data: {
        dt: '2024-04-03T09:00:53.831Z',
        semId: 0,
        studName: '홍길동',
        studNo: 2,
        clssUuid: 'string',
        tchrUuid: 'string',
        studUuid: 'string',
        hstTyp: 'string',
        colorLstnnCnt: 0,
        colorSpkngCnt: 0,
        colorRedngCnt: 0,
        colorWritngCnt: 0,
        colorViewCnt: 0,
        colorPrsntCnt: 0,
        etlDttm: '2024-04-03T09:00:53.831Z'
    }
};

export default defineEventHandler(() => {
    return data;
});
