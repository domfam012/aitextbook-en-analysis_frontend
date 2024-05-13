// 숫자 색칠판 완성하기 팝업 > 남은색깔 조각 > 색깔조각 개수
// API 작업 실제 종료일 2024-03-19
// API 개발 완료

const data = {
    dataSize: 0,
    timestamp: '2024-04-03T18:00:53.749810525',
    httpCode: 200,
    message: '조회성공',
    data: [
        {
            dt: null,
            semId: 9,
            clssUuid: 'ffb159c8-adbf-11ee-a85f-6045bd452244',
            tchrUuid: '38ed0aa3-b79a-11eb-b9bd-a0d3c1f90e3c',
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113',
            hstTyp: '01',
            colorLstnnCnt: 16,
            colorSpkngCnt: 15,
            colorRedngCnt: 9,
            colorWritngCnt: 8,
            colorViewCnt: 7,
            colorPrsntCnt: 6,
            etlDttm: null
        }
    ]
};

export default defineEventHandler(() => {
    return data;
});
