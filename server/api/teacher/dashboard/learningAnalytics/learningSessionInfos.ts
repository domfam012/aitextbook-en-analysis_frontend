//해당일 학습 차시 리스트( 차시명, 교과서 쪽수)

const data0 = {
    dataSize: 0,
    timestamp: '2024-04-10T14:34:46.632925874',
    httpCode: 200,
    message: '조회성공',
    data: []
};

const data1 = {
    dataSize: 3,
    timestamp: '2024-04-10T14:34:46.632925874',
    httpCode: 200,
    message: '조회성공',
    data: [
        {
            dt: null,
            eduOfficeCode: null,
            semId: null,
            clssUuid: null,
            tchrUuid: null,
            studUuid: null,
            lmTypAkey: null,
            chId: 314,
            sessId: 628,
            chName: 'Special Lesson. Digital World 1',
            sessionName: '1차시',
            bookPageCount: 40
        },
        {
            dt: null,
            eduOfficeCode: null,
            semId: null,
            clssUuid: null,
            tchrUuid: null,
            studUuid: null,
            lmTypAkey: null,
            chId: 315,
            sessId: 629,
            chName: 'Special Lesson. Digital World 2',
            sessionName: '2차시',
            bookPageCount: 110
        },
        {
            dt: null,
            eduOfficeCode: null,
            semId: null,
            clssUuid: null,
            tchrUuid: null,
            studUuid: null,
            lmTypAkey: null,
            chId: 316,
            sessId: 630,
            chName: 'Special Lesson. Digital World 3',
            sessionName: '3차시',
            bookPageCount: 220
        }
    ]
};

export default defineEventHandler(async event => {
    if (event.req.method === 'GET') {
        const { date } = getQuery(event);
        const dateList = [
            '2024-04-03',
            '2024-04-04',
            '2024-04-16',
            '2024-04-26',
            '2024-05-01',
            '2024-05-03',
            '2024-05-04',
            '2024-05-16',
            '2024-05-26',
            '2024-06-01'
        ];
        if (dateList.includes(date)) {
            return data1;
        } else {
            return data0;
        }
    }
});
