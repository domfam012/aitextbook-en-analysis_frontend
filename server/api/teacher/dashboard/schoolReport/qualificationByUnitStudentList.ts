/**
 * 2024.04.19 API 개발 완료
 */
const data = {
    dataSize: 1,
    timestamp: '2024-04-19T14:10:31.294906318',
    httpCode: 200,
    message: '조회성공',
    data: [
        {
            studUuid: '18a79d80-22ea-47d6-a6d9-f4c6689dd2c3',
            studName: '박보검',
            number: 3,
            writeFlag: true
        },
        {
            studUuid: '24c75743-47bb-4d48-8495-25bda5c05acf',
            studName: '차은우',
            number: 2,
            writeFlag: false
        },
        {
            studUuid: '38ed0aa3-b79a-11eb-b9bd-a0d3c1f90e3c',
            studName: '정우성',
            number: 1,
            writeFlag: false
        }
    ]
};

export default defineEventHandler(() => {
    return data;
});
