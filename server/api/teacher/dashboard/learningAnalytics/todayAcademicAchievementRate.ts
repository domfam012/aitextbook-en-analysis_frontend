// 오늘의학업 성취율

const data = {
    dataSize: 1,
    timestamp: '2024-04-11T13:26:23.705491207',
    httpCode: 200,
    message: '조회성공',
    data: {
        fastStudentCount: 3,
        littleFastStudentCount: 11,
        littleSlowStudentCount: 4,
        middleStudentCount: 4,
        noLeaningStudentCount: 1,
        slowStudentCount: 2
    }
    // data: {
    //     fastStudent: {
    //         id: 1,
    //         count: 3
    //     },
    //     littleFastStudent: {
    //         id: 2,
    //         count: 11
    //     },
    //     littleSlowStudent: {
    //         id: 3,
    //         count: 4
    //     },
    //     middleStudent: {
    //         id: 4,
    //         count: 4
    //     },
    //     noLeaningStudent: {
    //         id: 5,
    //         count: 1
    //     },
    //     slowStudent: {
    //         id: 6,
    //         count: 2
    //     }
    // }
};

export default defineEventHandler(() => {
    return data;
});
