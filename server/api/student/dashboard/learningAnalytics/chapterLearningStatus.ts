// 단원 > 차시 학습 현황
// 빈 데이터 노출
// API 작업 실제 종료일 2024-03-21
// API 개발 완료

const data = {
    success: true,
    dataSize: 1,
    timestamp: '2024-03-29 01:33:02',
    data: [
        {
            sctnId: 43,
            absncReviewYn: 0,
            sctnNameEng: 'Get Ready',
            sctnNameKor: '때에 맞는 인사하기'
        },
        {
            sctnId: 42,
            absncReviewYn: 0,
            sctnNameEng: 'Look and Think',
            sctnNameKor: '동영상 보고 표현 이해하기'
        },
        {
            sctnId: 41,
            absncReviewYn: 0,
            sctnNameEng: 'Let’s Learn',
            sctnNameKor: '실생활 동영상 보며 대화하기'
        },
        {
            sctnId: 40,
            absncReviewYn: 0,
            sctnNameEng: 'Let’s Learn',
            sctnNameKor: '학습 내용 알아보기'
        },
        {
            sctnId: 39,
            absncReviewYn: 0,
            sctnNameEng: 'Chant',
            sctnNameKor: '찬트 하며 표현 익히기'
        },
        {
            sctnId: 38,
            absncReviewYn: 0,
            sctnNameEng: 'Play Time 1',
            sctnNameKor: '몸으로 말해요'
        }
    ]
};

export default defineEventHandler(() => {
    return data;
});
