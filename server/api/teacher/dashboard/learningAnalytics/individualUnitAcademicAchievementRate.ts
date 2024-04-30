// 단원별 누적 성취율 > 개인별 단원 학업성취율
// API 작업 실제 종료일 2024-04-15

const data = {
    success: true,
    dataSize: 1,
    timestamp: '2024-03-29 01:33:02',
    data: [
        {
            id: 1,
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113',
            stuName: '김아미',
            avg: 75,
            lessons: [
                {
                    lesson: 1,
                    achievementRate: 90
                },
                {
                    lesson: 2,
                    achievementRate: 65
                },
                {
                    lesson: 3,
                    achievementRate: 34
                },
                {
                    lesson: 4,
                    achievementRate: 45
                },
                {
                    lesson: 5,
                    achievementRate: 94
                },
                {
                    lesson: 6,
                    achievementRate: 76
                },
                {
                    lesson: 7,
                    achievementRate: 91
                },
                {
                    lesson: 8,
                    achievementRate: 90
                }
            ]
        },
        {
            id: 2,
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113',
            stuName: '장영실',
            avg: 80,
            lessons: [
                {
                    lesson: 1,
                    achievementRate: 90
                },
                {
                    lesson: 2,
                    achievementRate: 65
                },
                {
                    lesson: 3,
                    achievementRate: 34
                },
                {
                    lesson: 4,
                    achievementRate: 45
                },
                {
                    lesson: 5,
                    achievementRate: 94
                },
                {
                    lesson: 6,
                    achievementRate: 76
                },
                {
                    lesson: 7,
                    achievementRate: 91
                },
                {
                    lesson: 8,
                    achievementRate: 90
                }
            ]
        },
        {
            id: 3,
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113',
            stuName: '권율',
            avg: 85,
            lessons: [
                {
                    lesson: 1,
                    achievementRate: 90
                },
                {
                    lesson: 2,
                    achievementRate: 65
                },
                {
                    lesson: 3,
                    achievementRate: 34
                },
                {
                    lesson: 4,
                    achievementRate: 45
                },
                {
                    lesson: 5,
                    achievementRate: 94
                },
                {
                    lesson: 6,
                    achievementRate: 76
                },
                {
                    lesson: 7,
                    achievementRate: 91
                },
                {
                    lesson: 8,
                    achievementRate: 90
                }
            ]
        },
        {
            id: 4,
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113',
            stuName: '장보고',
            avg: 75,
            lessons: [
                {
                    lesson: 1,
                    achievementRate: 90
                },
                {
                    lesson: 2,
                    achievementRate: 65
                },
                {
                    lesson: 3,
                    achievementRate: 34
                },
                {
                    lesson: 4,
                    achievementRate: 45
                },
                {
                    lesson: 5,
                    achievementRate: 94
                },
                {
                    lesson: 6,
                    achievementRate: 76
                },
                {
                    lesson: 7,
                    achievementRate: 91
                },
                {
                    lesson: 8,
                    achievementRate: 90
                }
            ]
        },
        {
            id: 5,
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113',
            stuName: '이순신',
            avg: 95,
            lessons: [
                {
                    lesson: 1,
                    achievementRate: 90
                },
                {
                    lesson: 2,
                    achievementRate: 65
                },
                {
                    lesson: 3,
                    achievementRate: 34
                },
                {
                    lesson: 4,
                    achievementRate: 45
                },
                {
                    lesson: 5,
                    achievementRate: 94
                },
                {
                    lesson: 6,
                    achievementRate: 76
                },
                {
                    lesson: 7,
                    achievementRate: 91
                },
                {
                    lesson: 8,
                    achievementRate: 90
                }
            ]
        },
        {
            id: 6,
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113',
            stuName: '김아무개',
            avg: 65,
            lessons: [
                {
                    lesson: 1,
                    achievementRate: 90
                },
                {
                    lesson: 2,
                    achievementRate: 65
                },
                {
                    lesson: 3,
                    achievementRate: 34
                },
                {
                    lesson: 4,
                    achievementRate: 45
                },
                {
                    lesson: 5,
                    achievementRate: 94
                },
                {
                    lesson: 6,
                    achievementRate: 76
                },
                {
                    lesson: 7,
                    achievementRate: 91
                },
                {
                    lesson: 8,
                    achievementRate: 90
                }
            ]
        },
        {
            id: 7,
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113',
            stuName: '박아미',
            avg: 75,
            lessons: [
                {
                    lesson: 1,
                    achievementRate: 90
                },
                {
                    lesson: 2,
                    achievementRate: 65
                },
                {
                    lesson: 3,
                    achievementRate: 34
                },
                {
                    lesson: 4,
                    achievementRate: 45
                },
                {
                    lesson: 5,
                    achievementRate: 94
                },
                {
                    lesson: 6,
                    achievementRate: 76
                },
                {
                    lesson: 7,
                    achievementRate: 91
                },
                {
                    lesson: 8,
                    achievementRate: 90
                }
            ]
        },
        {
            id: 8,
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113',
            stuName: '김영실',
            avg: 80,
            lessons: [
                {
                    lesson: 1,
                    achievementRate: 90
                },
                {
                    lesson: 2,
                    achievementRate: 65
                },
                {
                    lesson: 3,
                    achievementRate: 34
                },
                {
                    lesson: 4,
                    achievementRate: 45
                },
                {
                    lesson: 5,
                    achievementRate: 94
                },
                {
                    lesson: 6,
                    achievementRate: 76
                },
                {
                    lesson: 7,
                    achievementRate: 91
                },
                {
                    lesson: 8,
                    achievementRate: 90
                }
            ]
        },
        {
            id: 9,
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113',
            stuName: '오권율',
            avg: 85,
            lessons: [
                {
                    lesson: 1,
                    achievementRate: 90
                },
                {
                    lesson: 2,
                    achievementRate: 65
                },
                {
                    lesson: 3,
                    achievementRate: 34
                },
                {
                    lesson: 4,
                    achievementRate: 45
                },
                {
                    lesson: 5,
                    achievementRate: 94
                },
                {
                    lesson: 6,
                    achievementRate: 76
                },
                {
                    lesson: 7,
                    achievementRate: 91
                },
                {
                    lesson: 8,
                    achievementRate: 90
                }
            ]
        },
        {
            id: 10,
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113',
            stuName: '박보고',
            avg: 75,
            lessons: [
                {
                    lesson: 1,
                    achievementRate: 90
                },
                {
                    lesson: 2,
                    achievementRate: 65
                },
                {
                    lesson: 3,
                    achievementRate: 34
                },
                {
                    lesson: 4,
                    achievementRate: 45
                },
                {
                    lesson: 5,
                    achievementRate: 94
                },
                {
                    lesson: 6,
                    achievementRate: 76
                },
                {
                    lesson: 7,
                    achievementRate: 91
                },
                {
                    lesson: 8,
                    achievementRate: 90
                }
            ]
        },
        {
            id: 11,
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113',
            stuName: '장순신',
            avg: 95,
            lessons: [
                {
                    lesson: 1,
                    achievementRate: 90
                },
                {
                    lesson: 2,
                    achievementRate: 65
                },
                {
                    lesson: 3,
                    achievementRate: 34
                },
                {
                    lesson: 4,
                    achievementRate: 45
                },
                {
                    lesson: 5,
                    achievementRate: 94
                },
                {
                    lesson: 6,
                    achievementRate: 76
                },
                {
                    lesson: 7,
                    achievementRate: 91
                },
                {
                    lesson: 8,
                    achievementRate: 90
                }
            ]
        },
        {
            id: 12,
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113',
            stuName: '최아무개',
            avg: 65,
            lessons: [
                {
                    lesson: 1,
                    achievementRate: 90
                },
                {
                    lesson: 2,
                    achievementRate: 65
                },
                {
                    lesson: 3,
                    achievementRate: 34
                },
                {
                    lesson: 4,
                    achievementRate: 45
                },
                {
                    lesson: 5,
                    achievementRate: 94
                },
                {
                    lesson: 6,
                    achievementRate: 76
                },
                {
                    lesson: 7,
                    achievementRate: 91
                },
                {
                    lesson: 8,
                    achievementRate: 90
                }
            ]
        }
    ]
};

// const data = {
//     dataSize: 3,
//     timestamp: '2024-04-26T17:02:29.32584132',
//     httpCode: 200,
//     message: '조회성공',
//     data: [
//         {
//             studName: '김아미',
//             lesson1: 95,
//             lesson1Yn: 1,
//             lesson2: 100,
//             lesson2Yn: 1,
//             lesson3: 85,
//             lesson3Yn: 1,
//             lesson4: 80,
//             lesson4Yn: 1,
//             lesson5: 90,
//             lesson5Yn: 0,
//             achvRtAvgTot: 90
//         },
//         {
//             studName: '김영숙',
//             lesson1: 75,
//             lesson1Yn: 1,
//             lesson2: 90,
//             lesson2Yn: 1,
//             lesson3: 75,
//             lesson3Yn: 1,
//             lesson4: 70,
//             lesson4Yn: 0,
//             lesson5: 90,
//             lesson5Yn: 0,
//             achvRtAvgTot: 80
//         },
//         {
//             studName: '장영철',
//             lesson1: 75,
//             lesson1Yn: 1,
//             lesson2: 75,
//             lesson2Yn: 1,
//             lesson3: 75,
//             lesson3Yn: 1,
//             lesson4: 75,
//             lesson4Yn: 0,
//             lesson5: 75,
//             lesson5Yn: 0,
//             achvRtAvgTot: 75
//         }
//     ]
// };

export default defineEventHandler(() => {
    return data;
});
