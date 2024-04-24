// 단원별 누적 성취율(상단)

const data = {
    "dataSize": 1,
    "timestamp": "2024-04-11T13:27:00.065239893",
    "httpCode": 200,
    "message": "조회성공",
    "data": {
        "fastStudentCount": 10,
        "littleFastStudentCount": 11,
        "littleSlowStudentCount": 4,
        "middleStudentCount": 5,
        "noLeaningStudentCount": 6,
        "slowStudentCount": 4,
    }
}

export default defineEventHandler(() => {
    return data;
});
