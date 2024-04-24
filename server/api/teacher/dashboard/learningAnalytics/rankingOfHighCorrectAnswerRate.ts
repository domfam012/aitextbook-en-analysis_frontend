// Touch VOCA > 정답률 높은 순
// API 개발 완료

const data = {
    success: true,
    dataSize: 1,
    timestamp: '2024-03-29 01:33:02',
    data: [
        {
            dt: '2024-03-20',
            studUuid: 'ba2207af-aeb1-4e78-a944-e594ed2acbbc',
            wrdKnowCnt: 13,
            wrdLittleknowCnt: 13,
            wrdUnknownCnt: 13,
            wrdTot: 39,
            avgAnswrRt: 82
        },
        {
            dt: '2024-03-20',
            studUuid: '38ed0aa3-b79a-11eb-b9bd-a0d3c1f90e3c',
            wrdKnowCnt: 30,
            wrdLittleknowCnt: 39,
            wrdUnknownCnt: 69,
            wrdTot: 117,
            avgAnswrRt: 40
        },
        {
            dt: '2024-03-20',
            studUuid: '18a79d80-22ea-47d6-a6d9-f4c6689dd2c3',
            wrdKnowCnt: 13,
            wrdLittleknowCnt: 13,
            wrdUnknownCnt: 13,
            wrdTot: 39,
            avgAnswrRt: 25
        }
    ]
};

export default defineEventHandler(() => {
    return data;
});
