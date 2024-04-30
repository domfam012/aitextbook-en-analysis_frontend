/**
 * 2024.04.29
 * API 200 정상동작
 */
const data = {
    dataSize: 1,
    timestamp: '2024-04-03T17:37:14.33496197',
    httpCode: 200,
    message: '조회성공',
    data: {
        semId: 0,
        studUuid: 'string',
        corsViewYn: '1', // 교과서 학습
        drillViewYn: '1', // 드릴 학습
        vocaViewYn: '1', // AI VOCA
        curiViewYn: '1', // AI CURY
        wrdViewYn: '1', // 단어 학습 진단
        exprsViewYn: '1', // 요일별 평균 학습 시간
        wethrViewYn: '1', // 감정 날씨_학기 총계
        emtViewYn: '1' // 학습 정서_학기 평균
    }
};

export default defineEventHandler(() => {
    return data;
});
