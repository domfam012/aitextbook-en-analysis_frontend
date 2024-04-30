/**
 * 2024.04.16
 * API 200 정상동작 / 자료없음 상태
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
            writeFlag: true
        },
        {
            studUuid: '24c75743-47bb-4d48-8495-25bda5c05acf',
            studName: '차은우',
            number: 2,
            writeFlag: true
        },
        {
            studUuid: '18a79d80-22ea-47d6-a6d9-f4c6689dd2c3',
            studName: '박보검',
            number: 3,
            writeFlag: true
        }
    ]
};

export default defineEventHandler(() => {
    return data;
});
