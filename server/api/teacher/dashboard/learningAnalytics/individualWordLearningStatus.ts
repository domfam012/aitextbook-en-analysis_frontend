// Touch VOCA > 개인별단어 학습현황팝업
// API 개발 완료 -> 400 에러 발생
// API 작업 실제 종료일 2024-03-29

const data = {
    success: true,
    dataSize: 1,
    timestamp: '2024-03-29 01:33:02',
    data: {
        name: '개인별단어 학습현황팝업 API'
    }
};

export default defineEventHandler(() => {
    return data;
});
