// 스스로학습 > 색깔에 맞는 학생 그룹 목록 노출
// API 작업 실제 종료일 2024-04-01
// API 개발 완료

const data = {
    dataSize: 1,
    timestamp: '2024-04-12T10:47:57.826814213',
    httpCode: 200,
    message: '조회성공',
    data: [
        {
            semId: 1, // 학기ID number
            clssUuid: 'c3967784-b8c0-11ee-a85f-6045bd452244', // 학급UUID string
            tchrUuid: 'ba294ecc-0e2b-4fa9-8baa-ecdef82cff92', // 교사UUID string
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113', // 학생UUID string
            studId: 1,
            studName: '홍길동',
            chId: 1, //  단원ID number
            sessId: 1, //  차시ID number
            achvRtAvg: 30, // 성취율(평균) number
            wrtngNoteCnt: 5, // 필기노트 건수 number
            drillPrtcpCnt: 6, // 드릴학습참여 건수 number
            wrdLrnCnt: 4, // 단어학습 건수 number
            chtLrnCnt: 4, // 챗붓학습건수 number
            achvBaseScale: 5, // 성취기준 자기채점 number
            name: 1
        },
        {
            semId: 1, // 학기ID number
            clssUuid: 'c3967784-b8c0-11ee-a85f-6045bd452244', // 학급UUID string
            tchrUuid: 'ba294ecc-0e2b-4fa9-8baa-ecdef82cff92', // 교사UUID string
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113', // 학생UUID string
            studId: 2,
            studName: '장영실',
            chId: 11, //  단원ID number
            sessId: 21, //  차시ID number
            achvRtAvg: 80, // 성취율(평균) number
            wrtngNoteCnt: 41, // 필기노트 건수 number
            drillPrtcpCnt: 51, // 드릴학습참여 건수 number
            wrdLrnCnt: 61, // 단어학습 건수 number
            chtLrnCnt: 71, // 챗붓학습건수 number
            achvBaseScale: 3, // 성취기준 자기채점 number
            name: 2
        },
        {
            semId: 1, // 학기ID number
            clssUuid: 'c3967784-b8c0-11ee-a85f-6045bd452244', // 학급UUID string
            tchrUuid: 'ba294ecc-0e2b-4fa9-8baa-ecdef82cff92', // 교사UUID string
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113', // 학생UUID string
            studId: 3,
            studName: '장보고',
            chId: 22, //  단원ID number
            sessId: 33, //  차시ID number
            achvRtAvg: 44, // 성취율(평균) number
            wrtngNoteCnt: 55, // 필기노트 건수 number
            drillPrtcpCnt: 66, // 드릴학습참여 건수 number
            wrdLrnCnt: 77, // 단어학습 건수 number
            chtLrnCnt: 88, // 챗붓학습건수 number
            achvBaseScale: 1, // 성취기준 자기채점 number
            name: 3
        },
        {
            semId: 1, // 학기ID number
            clssUuid: 'c3967784-b8c0-11ee-a85f-6045bd452244', // 학급UUID string
            tchrUuid: 'ba294ecc-0e2b-4fa9-8baa-ecdef82cff92', // 교사UUID string
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113', // 학생UUID string
            studId: 4,
            studName: '단군',
            chId: 22, //  단원ID number
            sessId: 33, //  차시ID number
            achvRtAvg: 4, // 성취율(평균) number
            wrtngNoteCnt: 55, // 필기노트 건수 number
            drillPrtcpCnt: 66, // 드릴학습참여 건수 number
            wrdLrnCnt: 77, // 단어학습 건수 number
            chtLrnCnt: 8, // 챗붓학습건수 number
            achvBaseScale: 1, // 성취기준 자기채점 number
            name: 4
        },
        {
            semId: 1, // 학기ID number
            clssUuid: 'c3967784-b8c0-11ee-a85f-6045bd452244', // 학급UUID string
            tchrUuid: 'ba294ecc-0e2b-4fa9-8baa-ecdef82cff92', // 교사UUID string
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113', // 학생UUID string
            studId: 5,
            studName: '춘향',
            chId: 22, //  단원ID number
            sessId: 3, //  차시ID number
            achvRtAvg: 44, // 성취율(평균) number
            wrtngNoteCnt: 5, // 필기노트 건수 number
            drillPrtcpCnt: 6, // 드릴학습참여 건수 number
            wrdLrnCnt: 77, // 단어학습 건수 number
            chtLrnCnt: 8, // 챗붓학습건수 number
            achvBaseScale: 2, // 성취기준 자기채점 number
            name: 5
        },
        {
            semId: 1, // 학기ID number
            clssUuid: 'c3967784-b8c0-11ee-a85f-6045bd452244', // 학급UUID string
            tchrUuid: 'ba294ecc-0e2b-4fa9-8baa-ecdef82cff92', // 교사UUID string
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113', // 학생UUID string
            studId: 6,
            studName: '유관순',
            chId: 2, //  단원ID number
            sessId: 33, //  차시ID number
            achvRtAvg: 4, // 성취율(평균) number
            wrtngNoteCnt: 55, // 필기노트 건수 number
            drillPrtcpCnt: 66, // 드릴학습참여 건수 number
            wrdLrnCnt: 7, // 단어학습 건수 number
            chtLrnCnt: 88, // 챗붓학습건수 number
            achvBaseScale: 5, // 성취기준 자기채점 number
            name: 6
        },
        {
            semId: 1, // 학기ID number
            clssUuid: 'c3967784-b8c0-11ee-a85f-6045bd452244', // 학급UUID string
            tchrUuid: 'ba294ecc-0e2b-4fa9-8baa-ecdef82cff92', // 교사UUID string
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113', // 학생UUID string
            studId: 7,
            studName: '이몽룡',
            chId: 2, //  단원ID number
            sessId: 3, //  차시ID number
            achvRtAvg: 4, // 성취율(평균) number
            wrtngNoteCnt: 55, // 필기노트 건수 number
            drillPrtcpCnt: 6, // 드릴학습참여 건수 number
            wrdLrnCnt: 7, // 단어학습 건수 number
            chtLrnCnt: 8, // 챗붓학습건수 number
            achvBaseScale: 1, // 성취기준 자기채점 number
            name: 7
        },
        {
            semId: 1, // 학기ID number
            clssUuid: 'c3967784-b8c0-11ee-a85f-6045bd452244', // 학급UUID string
            tchrUuid: 'ba294ecc-0e2b-4fa9-8baa-ecdef82cff92', // 교사UUID string
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113', // 학생UUID string
            studId: 8,
            studName: '상길동',
            chId: 1, //  단원ID number
            sessId: 1, //  차시ID number
            achvRtAvg: 30, // 성취율(평균) number
            wrtngNoteCnt: 5, // 필기노트 건수 number
            drillPrtcpCnt: 6, // 드릴학습참여 건수 number
            wrdLrnCnt: 4, // 단어학습 건수 number
            chtLrnCnt: 4, // 챗붓학습건수 number
            achvBaseScale: 5, // 성취기준 자기채점 number
            name: 1
        },
        {
            semId: 1, // 학기ID number
            clssUuid: 'c3967784-b8c0-11ee-a85f-6045bd452244', // 학급UUID string
            tchrUuid: 'ba294ecc-0e2b-4fa9-8baa-ecdef82cff92', // 교사UUID string
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113', // 학생UUID string
            studId: 9,
            studName: '김황영실',
            chId: 11, //  단원ID number
            sessId: 21, //  차시ID number
            achvRtAvg: 80, // 성취율(평균) number
            wrtngNoteCnt: 41, // 필기노트 건수 number
            drillPrtcpCnt: 51, // 드릴학습참여 건수 number
            wrdLrnCnt: 61, // 단어학습 건수 number
            chtLrnCnt: 71, // 챗붓학습건수 number
            achvBaseScale: 3, // 성취기준 자기채점 number
            name: 2
        },
        {
            semId: 1, // 학기ID number
            clssUuid: 'c3967784-b8c0-11ee-a85f-6045bd452244', // 학급UUID string
            tchrUuid: 'ba294ecc-0e2b-4fa9-8baa-ecdef82cff92', // 교사UUID string
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113', // 학생UUID string
            studId: 10,
            studName: '송보고',
            chId: 22, //  단원ID number
            sessId: 33, //  차시ID number
            achvRtAvg: 44, // 성취율(평균) number
            wrtngNoteCnt: 55, // 필기노트 건수 number
            drillPrtcpCnt: 66, // 드릴학습참여 건수 number
            wrdLrnCnt: 77, // 단어학습 건수 number
            chtLrnCnt: 88, // 챗붓학습건수 number
            achvBaseScale: 1, // 성취기준 자기채점 number
            name: 3
        },
        {
            semId: 1, // 학기ID number
            clssUuid: 'c3967784-b8c0-11ee-a85f-6045bd452244', // 학급UUID string
            tchrUuid: 'ba294ecc-0e2b-4fa9-8baa-ecdef82cff92', // 교사UUID string
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113', // 학생UUID string
            studId: 11,
            studName: '조권율',
            chId: 22, //  단원ID number
            sessId: 33, //  차시ID number
            achvRtAvg: 4, // 성취율(평균) number
            wrtngNoteCnt: 55, // 필기노트 건수 number
            drillPrtcpCnt: 66, // 드릴학습참여 건수 number
            wrdLrnCnt: 77, // 단어학습 건수 number
            chtLrnCnt: 8, // 챗붓학습건수 number
            achvBaseScale: 1, // 성취기준 자기채점 number
            name: 4
        },
        {
            semId: 1, // 학기ID number
            clssUuid: 'c3967784-b8c0-11ee-a85f-6045bd452244', // 학급UUID string
            tchrUuid: 'ba294ecc-0e2b-4fa9-8baa-ecdef82cff92', // 교사UUID string
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113', // 학생UUID string
            studId: 12,
            studName: '임꺽정',
            chId: 22, //  단원ID number
            sessId: 3, //  차시ID number
            achvRtAvg: 44, // 성취율(평균) number
            wrtngNoteCnt: 5, // 필기노트 건수 number
            drillPrtcpCnt: 6, // 드릴학습참여 건수 number
            wrdLrnCnt: 77, // 단어학습 건수 number
            chtLrnCnt: 8, // 챗붓학습건수 number
            achvBaseScale: 2, // 성취기준 자기채점 number
            name: 5
        },
        {
            semId: 1, // 학기ID number
            clssUuid: 'c3967784-b8c0-11ee-a85f-6045bd452244', // 학급UUID string
            tchrUuid: 'ba294ecc-0e2b-4fa9-8baa-ecdef82cff92', // 교사UUID string
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113', // 학생UUID string
            studId: 13,
            studName: '구관순',
            chId: 2, //  단원ID number
            sessId: 33, //  차시ID number
            achvRtAvg: 4, // 성취율(평균) number
            wrtngNoteCnt: 55, // 필기노트 건수 number
            drillPrtcpCnt: 66, // 드릴학습참여 건수 number
            wrdLrnCnt: 7, // 단어학습 건수 number
            chtLrnCnt: 88, // 챗붓학습건수 number
            achvBaseScale: 5, // 성취기준 자기채점 number
            name: 6
        },
        {
            semId: 1, // 학기ID number
            clssUuid: 'c3967784-b8c0-11ee-a85f-6045bd452244', // 학급UUID string
            tchrUuid: 'ba294ecc-0e2b-4fa9-8baa-ecdef82cff92', // 교사UUID string
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113', // 학생UUID string
            studId: 14,
            studName: '고환희',
            chId: 2, //  단원ID number
            sessId: 3, //  차시ID number
            achvRtAvg: 4, // 성취율(평균) number
            wrtngNoteCnt: 55, // 필기노트 건수 number
            drillPrtcpCnt: 6, // 드릴학습참여 건수 number
            wrdLrnCnt: 7, // 단어학습 건수 number
            chtLrnCnt: 8, // 챗붓학습건수 number
            achvBaseScale: 1, // 성취기준 자기채점 number
            name: 7
        },
        {
            semId: 1, // 학기ID number
            clssUuid: 'c3967784-b8c0-11ee-a85f-6045bd452244', // 학급UUID string
            tchrUuid: 'ba294ecc-0e2b-4fa9-8baa-ecdef82cff92', // 교사UUID string
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113', // 학생UUID string
            studId: 15,
            studName: '송환희',
            chId: 2, //  단원ID number
            sessId: 3, //  차시ID number
            achvRtAvg: 4, // 성취율(평균) number
            wrtngNoteCnt: 55, // 필기노트 건수 number
            drillPrtcpCnt: 6, // 드릴학습참여 건수 number
            wrdLrnCnt: 7, // 단어학습 건수 number
            chtLrnCnt: 8, // 챗붓학습건수 number
            achvBaseScale: 1, // 성취기준 자기채점 number
            name: 7
        },
        {
            semId: 1, // 학기ID number
            clssUuid: 'c3967784-b8c0-11ee-a85f-6045bd452244', // 학급UUID string
            tchrUuid: 'ba294ecc-0e2b-4fa9-8baa-ecdef82cff92', // 교사UUID string
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113', // 학생UUID string
            studId: 16,
            studName: '김길동',
            chId: 1, //  단원ID number
            sessId: 1, //  차시ID number
            achvRtAvg: 30, // 성취율(평균) number
            wrtngNoteCnt: 5, // 필기노트 건수 number
            drillPrtcpCnt: 6, // 드릴학습참여 건수 number
            wrdLrnCnt: 4, // 단어학습 건수 number
            chtLrnCnt: 4, // 챗붓학습건수 number
            achvBaseScale: 5, // 성취기준 자기채점 number
            name: 1
        },
        {
            semId: 1, // 학기ID number
            clssUuid: 'c3967784-b8c0-11ee-a85f-6045bd452244', // 학급UUID string
            tchrUuid: 'ba294ecc-0e2b-4fa9-8baa-ecdef82cff92', // 교사UUID string
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113', // 학생UUID string
            studId: 17,
            studName: '김영실',
            chId: 11, //  단원ID number
            sessId: 21, //  차시ID number
            achvRtAvg: 80, // 성취율(평균) number
            wrtngNoteCnt: 41, // 필기노트 건수 number
            drillPrtcpCnt: 51, // 드릴학습참여 건수 number
            wrdLrnCnt: 61, // 단어학습 건수 number
            chtLrnCnt: 71, // 챗붓학습건수 number
            achvBaseScale: 3, // 성취기준 자기채점 number
            name: 2
        },
        {
            semId: 1, // 학기ID number
            clssUuid: 'c3967784-b8c0-11ee-a85f-6045bd452244', // 학급UUID string
            tchrUuid: 'ba294ecc-0e2b-4fa9-8baa-ecdef82cff92', // 교사UUID string
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113', // 학생UUID string
            studId: 18,
            studName: '박보고',
            chId: 22, //  단원ID number
            sessId: 33, //  차시ID number
            achvRtAvg: 44, // 성취율(평균) number
            wrtngNoteCnt: 55, // 필기노트 건수 number
            drillPrtcpCnt: 66, // 드릴학습참여 건수 number
            wrdLrnCnt: 77, // 단어학습 건수 number
            chtLrnCnt: 88, // 챗붓학습건수 number
            achvBaseScale: 1, // 성취기준 자기채점 number
            name: 3
        },
        {
            semId: 1, // 학기ID number
            clssUuid: 'c3967784-b8c0-11ee-a85f-6045bd452244', // 학급UUID string
            tchrUuid: 'ba294ecc-0e2b-4fa9-8baa-ecdef82cff92', // 교사UUID string
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113', // 학생UUID string
            studId: 19,
            studName: '이권율',
            chId: 22, //  단원ID number
            sessId: 33, //  차시ID number
            achvRtAvg: 4, // 성취율(평균) number
            wrtngNoteCnt: 55, // 필기노트 건수 number
            drillPrtcpCnt: 66, // 드릴학습참여 건수 number
            wrdLrnCnt: 77, // 단어학습 건수 number
            chtLrnCnt: 8, // 챗붓학습건수 number
            achvBaseScale: 1, // 성취기준 자기채점 number
            name: 4
        },
        {
            semId: 1, // 학기ID number
            clssUuid: 'c3967784-b8c0-11ee-a85f-6045bd452244', // 학급UUID string
            tchrUuid: 'ba294ecc-0e2b-4fa9-8baa-ecdef82cff92', // 교사UUID string
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113', // 학생UUID string
            studId: 20,
            studName: '심사임당',
            chId: 22, //  단원ID number
            sessId: 3, //  차시ID number
            achvRtAvg: 44, // 성취율(평균) number
            wrtngNoteCnt: 5, // 필기노트 건수 number
            drillPrtcpCnt: 6, // 드릴학습참여 건수 number
            wrdLrnCnt: 77, // 단어학습 건수 number
            chtLrnCnt: 8, // 챗붓학습건수 number
            achvBaseScale: 2, // 성취기준 자기채점 number
            name: 5
        },
        {
            semId: 1, // 학기ID number
            clssUuid: 'c3967784-b8c0-11ee-a85f-6045bd452244', // 학급UUID string
            tchrUuid: 'ba294ecc-0e2b-4fa9-8baa-ecdef82cff92', // 교사UUID string
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113', // 학생UUID string
            studId: 21,
            studName: '최관순',
            chId: 2, //  단원ID number
            sessId: 33, //  차시ID number
            achvRtAvg: 4, // 성취율(평균) number
            wrtngNoteCnt: 55, // 필기노트 건수 number
            drillPrtcpCnt: 66, // 드릴학습참여 건수 number
            wrdLrnCnt: 7, // 단어학습 건수 number
            chtLrnCnt: 88, // 챗붓학습건수 number
            achvBaseScale: 5, // 성취기준 자기채점 number
            name: 6
        },
        {
            semId: 1, // 학기ID number
            clssUuid: 'c3967784-b8c0-11ee-a85f-6045bd452244', // 학급UUID string
            tchrUuid: 'ba294ecc-0e2b-4fa9-8baa-ecdef82cff92', // 교사UUID string
            studUuid: 'ba294ecc-0e2b-4fa9-8baa-111111111113', // 학생UUID string
            studId: 22,
            studName: '장환희',
            chId: 2, //  단원ID number
            sessId: 3, //  차시ID number
            achvRtAvg: 4, // 성취율(평균) number
            wrtngNoteCnt: 55, // 필기노트 건수 number
            drillPrtcpCnt: 6, // 드릴학습참여 건수 number
            wrdLrnCnt: 7, // 단어학습 건수 number
            chtLrnCnt: 8, // 챗붓학습건수 number
            achvBaseScale: 1, // 성취기준 자기채점 number
            name: 7
        }
    ]
};

export default defineEventHandler(() => {
    return data;
});
