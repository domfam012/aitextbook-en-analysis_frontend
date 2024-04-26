// 누적 학습 시간 통계
// 400 에러 발생

const data = {
    dataSize: 1,
    timestamp: '2024-04-23T14:38:38.603008699',
    httpCode: 200,
    message: '조회성공',
    data: {
        mondayLearnTime: 10,
        tuesdayLearnTime: 20,
        wednesdayLearnTime: 30,
        thursdayLearnTime: 20,
        fridayLearnTime: 10,
        saturdaySundayLearnTime: 5
    }
};
export default defineEventHandler(() => {
    return data;
});
