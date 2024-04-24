// 단원별 누적 성취율 > 개인별 단원 학업성취율
// API 작업 실제 종료일 2024-04-15

const data = {
    success: true,
    dataSize: 1,
    timestamp: '2024-03-29 01:33:02',
    data: {
        name: '개인별 단원 학업성취율 API'
    }
};

export default defineEventHandler(() => {
    return data;
});
