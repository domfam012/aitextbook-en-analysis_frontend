// 숫자 색칠판 완성하기 팝업 > 수집한 색깔조각 > 도안
// API 작업 실제 종료일 2024-03-20
// API 개발완료
// 빈데이터 노출

const data = {
    success: true,
    dataSize: 1,
    timestamp: '2024-03-29 01:33:02',
    data: {
        dt: '2024-04-03T08:47:54.306Z',
        semId: 0,
        clssUuid: 'string',
        tchrUuid: 'string',
        studUuid: 'string',
        dsgnId: 0,
        dsgnPrgrsRt: 0,
        dsgnUseInfo: 'string',
        dsgnUseColorCnt: 0,
        stampId: 0,
        etlDttm: '2024-04-03T08:47:54.306Z'
    }
};

export default defineEventHandler(() => {
    return data;
});
