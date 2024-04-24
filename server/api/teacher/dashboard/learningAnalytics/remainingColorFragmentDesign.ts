// 오늘의학업 성취율 > 개인별 숫자 색칠판 현황 팝업 > 남은 색깔조각 도안 정보
// API 작업 실제 종료일 2024-04-19

const data = {
    dataSize: 1,
    timestamp: '2024-04-03T15:32:16.504806848',
    httpCode: 200,
    message: '조회성공',
    data: [
        {
            semId: 9,
            clssUuid: 'c3967784-b8c0-11ee-a85f-6045bd452244',
            tchrUuid: 'ba294ecc-0e2b-4fa9-8baa-ecdef82cff92',
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113',
            dsgnId: 1,

            dsgnPrgrsRt: 0.98,
            dsgnUseInfo: '{"가로": 30, "세로": 40, "전체픽셀": 300}',
            dsgnUseColorCnt: 95,
            stampId: 1,
            etlDttm: null
        }
    ]
};

export default defineEventHandler(() => {
    return data;
});
