// 진도학습 메인 > 달력 선택일 학습 단원 목록 조회
// API 작업 실제 종료일 2024-04-01

const data = {
    dataSize: 0,
    timestamp: '2024-04-03T18:08:10.37970902',
    httpCode: 200,
    message: '조회성공',
    data: [
        {
            chId: 314,
            chName: 'Digital World 1',
            sessionList: [
                {
                    chId: 316,
                    sessId: 630,
                    sessName: '1차시',
                    bookPageCount: 100
                },
                {
                    chId: 315,
                    sessId: 629,
                    sessName: '2차시',
                    bookPageCount: 110
                },
                {
                    chId: 314,
                    sessId: 628,
                    sessName: '3차시',
                    bookPageCount: 120
                }
            ]
        },
        {
            chId: 313,
            chName: 'English World 2',
            bookPageCount: 122,
            sessionList: [
                {
                    chId: 312,
                    sessId: 600,
                    sessName: '1차시',
                    bookPageCount: 210
                },
                {
                    chId: 311,
                    sessId: 599,
                    sessName: '2차시',
                    bookPageCount: 220
                }
            ]
        },
        {
            chId: 312,
            chName: 'Korean World 3',
            bookPageCount: 145,
            sessionList: [
                {
                    chId: 309,
                    sessId: 588,
                    sessName: '1차시',
                    bookPageCount: 310
                },
                {
                    chId: 308,
                    sessId: 577,
                    sessName: '2차시',
                    bookPageCount: 320
                },
                {
                    chId: 307,
                    sessId: 576,
                    sessName: '3차시',
                    bookPageCount: 330
                },
                {
                    chId: 306,
                    sessId: 575,
                    sessName: '4차시',
                    bookPageCount: 340
                }
            ]
        }
    ]
};

export default defineEventHandler(() => {
    return data;
});
