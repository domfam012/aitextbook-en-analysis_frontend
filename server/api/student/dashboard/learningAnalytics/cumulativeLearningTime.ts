// 누적 학습 시간 통계
// 400 에러 발생

const data = {
    dataSize: 1,
    timestamp: '2024-04-23T14:38:38.603008699',
    httpCode: 200,
    message: '조회성공',
    data: {
        mondayLearnTime: 0,
        tuesdayLearnTime: 0,
        wednesdayLearnTime: 0,
        thursdayLearnTime: 0,
        fridayLearnTime: 0,
        saturdaySundayLearnTime: 0
    }
};
export default defineEventHandler(() => {
    return data;
});
