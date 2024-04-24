/**
 * 2024.04.16
 * API 200 정상동작
 */
const data = {
    dataSize: 1,
    timestamp: '2024-04-03T17:37:14.33496197',
    httpCode: 200,
    message: '조회성공',
    data: {
        schoolReportCount: 3, // 학습이력수집 건수
        schoolReportLearningDevelopCount: 2, // 단원별 평어 작성 건수
        schoolReportIssueCompletedCount: 0, // 발행완료 건수
        currentSemester: 0, // 생활기록부 학기
        semesterInProgress: 10 // 진행중인 생활기록부 학기 체크 10 : 현재 학기가 1학기이고 생활기록부 발행기간이 아닐때 11 : 현재 학기가 1학기이고 생활기록부 발행기간일때 20 : 현재 학기가 2학기이고 생활기록부 발행기간이 아닐때 21 : 현재 학기가 2학기이고 생활기록부 발행기간일때
    }
};

export default defineEventHandler(() => {
    return data;
});
