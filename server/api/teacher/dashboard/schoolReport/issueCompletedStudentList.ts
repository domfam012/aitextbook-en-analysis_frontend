/**
 * 2024.04.16
 * API 200 정상동작 데이터없음 상태
 */
const data = {
    dataSize: 1,
    timestamp: '2024-04-03T17:37:14.33496197',
    httpCode: 200,
    message: '조회성공',
    data: [
        {
            studUuid: '38ed0aa3-b79a-11eb-b9bd-a0d3c1f90e3c',
            studName: '정우성',
            number: 1,
            writeFlag: false
        },
        {
            studUuid: '18a79d80-22ea-47d6-a6d9-f4c6689dd2c3',
            studName: '박보검',
            number: 3,
            writeFlag: false
        }
    ]
};

export default defineEventHandler(() => {
    return data;
});
