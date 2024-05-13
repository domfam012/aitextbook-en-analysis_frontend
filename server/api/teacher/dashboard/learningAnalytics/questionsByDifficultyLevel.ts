// 단원별 누적 성취율 > 개인별 단원 학업성취율 > 맞춤 단원평가 출제 > 난이도별 문항조회
// 현재 개발 불가
// API 작업 실제 종료일 2024-04-16
// 스스로학습 > 색깔에 맞는 학생 그룹 목록 > 학업성취율 > AI 맞춤자료 보내기
// 유비밸록스 과제생성 API 미확정
// 불가능 (테이블x)

const data = {
    dataSize: 1,
    timestamp: '2024-05-03T00:05:07.442892947',
    httpCode: 200,
    message: '조회성공',
    data: {
        semId: null,
        clssUuid: null,
        tchrUuid: null,
        chId: 314,
        studUuid: '38ed0aa3-b79a-11eb-b9bd-a0d3c1f90e3c',
        questionWordCount: 1, //단어 문제 수
        questionExpressCount: 2, // 표현 문제 수
        questionSituationCount: 3, // 상황 문제 수
        questionTotalCount: 6, // 총 문항 수
        questionWordPoint: 10, // 단어 문제 배점
        questionExpressPoint: 20, // 표현 문제 배점
        questionSituationPoint: 30 // 상황 문제 배점
    }
};

export default defineEventHandler(() => {
    return data;
});
