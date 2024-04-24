// 숫자 색칠판 완성하기 팝업 > 수집한 색깔조각 > 색깔조각 개수
// API 작업 실제 종료일 2024-03-19
// API 개발 완료

const data = {
    success: true,
    dataSize: 1,
    timestamp: '2024-03-29 01:33:02',
    data: {
        dt: '2024-04-03T08:58:22.438Z',
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
        etlDttm: '2024-04-03T08:58:22.439Z'
    }
};

export default defineEventHandler(() => {
    return data;
});
