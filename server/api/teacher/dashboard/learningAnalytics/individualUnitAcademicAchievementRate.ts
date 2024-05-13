// 단원별 누적 성취율 > 개인별 단원 학업성취율
// API 작업 실제 종료일 2024-04-15

const data = {
    success: true,
    dataSize: 1,
    timestamp: '2024-03-29 01:33:02',
    data: [
        {
            id: 1,
            studUuid: 'aa294ecc-0e2b-4fa9-8baa-111111111113',
            studName: '김아미',
            achvRtAvgTot: 75,
            lessons: [
                {
                    lesson01: {
                        achvRtAvgTot: 91,
                        status: 5,
                        stamp: 2
                    },
                    lesson02: {
                        achvRtAvgTot: 92,
                        status: 6,
                        stamp: 3
                    },
                    lesson03: {
                        achvRtAvgTot: 93,
                        status: 3,
                        stamp: 2
                    },
                    lesson04: {
                        achvRtAvgTot: 94,
                        status: 6,
                        stamp: 3
                    },
                    lesson05: {
                        achvRtAvgTot: 95,
                        status: 3,
                        stamp: 2
                    },
                    lesson06: {
                        achvRtAvgTot: 96,
                        status: 3,
                        stamp: 2
                    }
                }
            ]
        },
        {
            id: 2,
            studUuid: 'bb294ecc-0e2b-4fa9-8baa-222222222224',
            studName: '장영실',
            achvRtAvgTot: 80,
            lessons: [
                {
                    lesson01: {
                        achvRtAvgTot: 91,
                        status: 6,
                        stamp: 3
                    },
                    lesson02: {
                        achvRtAvgTot: 92,
                        status: 3,
                        stamp: 1
                    },
                    lesson03: {
                        achvRtAvgTot: 93,
                        status: 3,
                        stamp: 1
                    },
                    lesson04: {
                        achvRtAvgTot: 94,
                        status: 6,
                        stamp: 3
                    },
                    lesson05: {
                        achvRtAvgTot: 95,
                        status: 3,
                        stamp: 2
                    },
                    lesson06: {
                        achvRtAvgTot: 96,
                        status: 3,
                        stamp: 2
                    }
                }
            ]
        },
        {
            id: 3,
            studUuid: 'cc294ecc-0e2b-4fa9-8baa-333333333335',
            studName: '권율',
            achvRtAvgTot: 85,
            lessons: [
                {
                    lesson01: {
                        achvRtAvgTot: 91,
                        status: 5,
                        stamp: 2
                    },
                    lesson02: {
                        achvRtAvgTot: 92,
                        status: 6,
                        stamp: 3
                    },
                    lesson03: {
                        achvRtAvgTot: 93,
                        status: 2,
                        stamp: 2
                    },
                    lesson04: {
                        achvRtAvgTot: 94,
                        status: 6,
                        stamp: 3
                    },
                    lesson05: {
                        achvRtAvgTot: 95,
                        status: 3,
                        stamp: 2
                    },
                    lesson06: {
                        achvRtAvgTot: 96,
                        status: 3,
                        stamp: 2
                    }
                }
            ]
        },
        {
            id: 4,
            studUuid: 'dd294ecc-0e2b-4fa9-8baa-444444444446',
            studName: '장보고',
            achvRtAvgTot: 75,
            lessons: [
                {
                    lesson01: {
                        achvRtAvgTot: 91,
                        status: 2,
                        stamp: 2
                    },
                    lesson02: {
                        achvRtAvgTot: 92,
                        status: 6,
                        stamp: 3
                    },
                    lesson03: {
                        achvRtAvgTot: 93,
                        status: 3,
                        stamp: 1
                    },
                    lesson04: {
                        achvRtAvgTot: 94,
                        status: 6,
                        stamp: 3
                    },
                    lesson05: {
                        achvRtAvgTot: 95,
                        status: 3,
                        stamp: 2
                    },
                    lesson06: {
                        achvRtAvgTot: 96,
                        status: 1,
                        stamp: 2
                    }
                }
            ]
        },
        {
            id: 5,
            studUuid: 'ee294ecc-0e2b-4fa9-8baa-555555555557',
            studName: '이순신',
            achvRtAvgTot: 95,
            lessons: [
                {
                    lesson01: {
                        achvRtAvgTot: 91,
                        status: 5,
                        stamp: 2
                    },
                    lesson02: {
                        achvRtAvgTot: 92,
                        status: 6,
                        stamp: 3
                    },
                    lesson03: {
                        achvRtAvgTot: 93,
                        status: 3,
                        stamp: 1
                    },
                    lesson04: {
                        achvRtAvgTot: 94,
                        status: 6,
                        stamp: 3
                    },
                    lesson05: {
                        achvRtAvgTot: 95,
                        status: 3,
                        stamp: 1
                    },
                    lesson06: {
                        achvRtAvgTot: 96,
                        status: 3,
                        stamp: 1
                    }
                }
            ]
        },
        {
            id: 6,
            studUuid: 'ff294ecc-0e2b-4fa9-8baa-666666666668',
            studName: '김아무개',
            achvRtAvgTot: 65,
            lessons: [
                {
                    lesson01: {
                        achvRtAvgTot: 91,
                        status: 5,
                        stamp: 2
                    },
                    lesson02: {
                        achvRtAvgTot: 92,
                        status: 6,
                        stamp: 3
                    },
                    lesson03: {
                        achvRtAvgTot: 93,
                        status: 3,
                        stamp: 2
                    },
                    lesson04: {
                        achvRtAvgTot: 94,
                        status: 6,
                        stamp: 3
                    },
                    lesson05: {
                        achvRtAvgTot: 95,
                        status: 3,
                        stamp: 2
                    },
                    lesson06: {
                        achvRtAvgTot: 96,
                        status: 3,
                        stamp: 2
                    }
                }
            ]
        },
        {
            id: 7,
            studUuid: 'gg294ecc-0e2b-4fa9-8baa-777777777779',
            studName: '박아미',
            achvRtAvgTot: 75,
            lessons: [
                {
                    lesson01: {
                        achvRtAvgTot: 91,
                        status: 5,
                        stamp: 2
                    },
                    lesson02: {
                        achvRtAvgTot: 92,
                        status: 6,
                        stamp: 3
                    },
                    lesson03: {
                        achvRtAvgTot: 93,
                        status: 3,
                        stamp: 2
                    },
                    lesson04: {
                        achvRtAvgTot: 94,
                        status: 6,
                        stamp: 3
                    },
                    lesson05: {
                        achvRtAvgTot: 95,
                        status: 3,
                        stamp: 2
                    },
                    lesson06: {
                        achvRtAvgTot: 96,
                        status: 3,
                        stamp: 2
                    }
                }
            ]
        },
        {
            id: 8,
            studUuid: 'hh294ecc-0e2b-4fa9-8baa-888888888880',
            studName: '김영실',
            achvRtAvgTot: 80,
            lessons: [
                {
                    lesson01: {
                        achvRtAvgTot: 91,
                        status: 5,
                        stamp: 2
                    },
                    lesson02: {
                        achvRtAvgTot: 92,
                        status: 6,
                        stamp: 3
                    },
                    lesson03: {
                        achvRtAvgTot: 93,
                        status: 3,
                        stamp: 2
                    },
                    lesson04: {
                        achvRtAvgTot: 94,
                        status: 6,
                        stamp: 3
                    },
                    lesson05: {
                        achvRtAvgTot: 95,
                        status: 3,
                        stamp: 2
                    },
                    lesson06: {
                        achvRtAvgTot: 96,
                        status: 3,
                        stamp: 2
                    }
                }
            ]
        },
        {
            id: 9,
            studUuid: 'ii294ecc-0e2b-4fa9-8baa-999999999991',
            studName: '오권율',
            achvRtAvgTot: 85,
            lessons: [
                {
                    lesson01: {
                        achvRtAvgTot: 91,
                        status: 5,
                        stamp: 2
                    },
                    lesson02: {
                        achvRtAvgTot: 92,
                        status: 6,
                        stamp: 3
                    },
                    lesson03: {
                        achvRtAvgTot: 93,
                        status: 3,
                        stamp: 2
                    },
                    lesson04: {
                        achvRtAvgTot: 94,
                        status: 6,
                        stamp: 3
                    },
                    lesson05: {
                        achvRtAvgTot: 95,
                        status: 3,
                        stamp: 2
                    },
                    lesson06: {
                        achvRtAvgTot: 96,
                        status: 3,
                        stamp: 2
                    }
                }
            ]
        },
        {
            id: 10,
            studUuid: 'jj294ecc-0e2b-4fa9-8baa-000000000002',
            studName: '박보고',
            achvRtAvgTot: 75,
            lessons: [
                {
                    lesson01: {
                        achvRtAvgTot: 91,
                        status: 5,
                        stamp: 2
                    },
                    lesson02: {
                        achvRtAvgTot: 92,
                        status: 6,
                        stamp: 3
                    },
                    lesson03: {
                        achvRtAvgTot: 93,
                        status: 3,
                        stamp: 2
                    },
                    lesson04: {
                        achvRtAvgTot: 94,
                        status: 2,
                        stamp: 2
                    },
                    lesson05: {
                        achvRtAvgTot: 95,
                        status: 3,
                        stamp: 2
                    },
                    lesson06: {
                        achvRtAvgTot: 96,
                        status: 3,
                        stamp: 2
                    }
                }
            ]
        },
        {
            id: 11,
            studUuid: 'kk294ecc-0e2b-4fa9-8baa-aaaaaaaaaaaa',
            studName: '장순신',
            achvRtAvgTot: 95,
            lessons: [
                {
                    lesson01: {
                        achvRtAvgTot: 91,
                        status: 5,
                        stamp: 2
                    },
                    lesson02: {
                        achvRtAvgTot: 92,
                        status: 6,
                        stamp: 3
                    },
                    lesson03: {
                        achvRtAvgTot: 93,
                        status: 3,
                        stamp: 2
                    },
                    lesson04: {
                        achvRtAvgTot: 94,
                        status: 2,
                        stamp: 2
                    },
                    lesson05: {
                        achvRtAvgTot: 95,
                        status: 3,
                        stamp: 2
                    },
                    lesson06: {
                        achvRtAvgTot: 96,
                        status: 3,
                        stamp: 2
                    }
                }
            ]
        },
        {
            id: 12,
            studUuid: 'll294ecc-0e2b-4fa9-8baa-bbbbbbbbbbbb',
            studName: '최아무개',
            achvRtAvgTot: 65,
            lessons: [
                {
                    lesson01: {
                        achvRtAvgTot: 91,
                        status: 5,
                        stamp: 2
                    },
                    lesson02: {
                        achvRtAvgTot: 92,
                        status: 6,
                        stamp: 3
                    },
                    lesson03: {
                        achvRtAvgTot: 93,
                        status: 3,
                        stamp: 2
                    },
                    lesson04: {
                        achvRtAvgTot: 94,
                        status: 2,
                        stamp: 2
                    },
                    lesson05: {
                        achvRtAvgTot: 95,
                        status: 3,
                        stamp: 2
                    },
                    lesson06: {
                        achvRtAvgTot: 96,
                        status: 3,
                        stamp: 2
                    }
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
