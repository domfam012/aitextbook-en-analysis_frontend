/**
 * 2024.04.16
 * API 200 정상동작 / data 없음 상태
 */
const data1 = {
    dataSize: 7,
    timestamp: '2024-04-03T17:37:14.33496197',
    httpCode: 200,
    message: '조회성공',
    data: {
        etlDttm: '2024-04-16T01:46:47.037Z',
        achvLstnnRt: 4, // 학생 듣기 성취율
        achvSpkngRt: 2, // 학생 말하기 성취율
        achvRedngRt: 3, // 학생 읽기 성취율
        achvWritngRt: 2, // 학생 쓰기 성취율
        achvViewRt: 2.5, // 학생 보기 성취율
        achvPrsntRt: 3.8, // 학생 제시하기 성취율
        classLstnnRt: 3.2, // 반평균 듣기 성취율
        classSpkngRt: 2.5, // 반평균 말하기 성취율
        classRedngRt: 3, // 반평균 읽기 성취율
        classWritngRt: 3.5, // 반평균 쓰기 성취율
        classViewRt: 3.8, // 반평균 보기 성취율
        classPrsntRt: 4.5, // 반평균 재시하기 성취율
        areaLstnnRt: 2.8, // 지역평균 듣기 청취율
        areaPrsntRt: 3.2, // 지역평균 쓰기 청취율
        areaRedngRt: 3.8, // 지역평균 읽기 청취율
        areaSpkngRt: 3, // 지역평균 말하기 청취율
        areaViewRt: 3, // 지역평균 보기 청취율
        areaWritngRt: 2.4 // 지역평균 제시하기 청취율
    }
};
const data2 = {
    dataSize: 7,
    timestamp: '2024-04-03T17:37:14.33496197',
    httpCode: 200,
    message: '조회성공',
    data: {
        etlDttm: '2024-04-16T01:46:47.037Z',
        achvLstnnRt: 6, // 학생 듣기 성취율
        achvSpkngRt: 1, // 학생 말하기 성취율
        achvRedngRt: 2, // 학생 읽기 성취율
        achvWritngRt: 5, // 학생 쓰기 성취율
        achvViewRt: 3.5, // 학생 보기 성취율
        achvPrsntRt: 3.1, // 학생 제시하기 성취율
        classLstnnRt: 2.2, // 반평균 듣기 성취율
        classSpkngRt: 1.5, // 반평균 말하기 성취율
        classRedngRt: 5, // 반평균 읽기 성취율
        classWritngRt: 2.5, // 반평균 쓰기 성취율
        classViewRt: 1.8, // 반평균 보기 성취율
        classPrsntRt: 3.5, // 반평균 재시하기 성취율
        areaLstnnRt: 2.4, // 지역평균 듣기 청취율
        areaPrsntRt: 3.1, // 지역평균 쓰기 청취율
        areaRedngRt: 3.4, // 지역평균 읽기 청취율
        areaSpkngRt: 4, // 지역평균 말하기 청취율
        areaViewRt: 2, // 지역평균 보기 청취율
        areaWritngRt: 1.4 // 지역평균 제시하기 청취율
    }
};
const data3 = {
    dataSize: 7,
    timestamp: '2024-04-03T17:37:14.33496197',
    httpCode: 200,
    message: '조회성공',
    data: {
        etlDttm: '2024-04-16T01:46:47.037Z',
        achvLstnnRt: 5, // 학생 듣기 성취율
        achvSpkngRt: 4, // 학생 말하기 성취율
        achvRedngRt: 1, // 학생 읽기 성취율
        achvWritngRt: 5, // 학생 쓰기 성취율
        achvViewRt: 3.5, // 학생 보기 성취율
        achvPrsntRt: 1.8, // 학생 제시하기 성취율
        classLstnnRt: 2.2, // 반평균 듣기 성취율
        classSpkngRt: 3.1, // 반평균 말하기 성취율
        classRedngRt: 4, // 반평균 읽기 성취율
        classWritngRt: 2.1, // 반평균 쓰기 성취율
        classViewRt: 2.5, // 반평균 보기 성취율
        classPrsntRt: 3.6, // 반평균 재시하기 성취율
        areaLstnnRt: 3.5, // 지역평균 듣기 청취율
        areaPrsntRt: 2.7, // 지역평균 쓰기 청취율
        areaRedngRt: 1.4, // 지역평균 읽기 청취율
        areaSpkngRt: 2, // 지역평균 말하기 청취율
        areaViewRt: 5, // 지역평균 보기 청취율
        areaWritngRt: 3.8 // 지역평균 제시하기 청취율
    }
};

export default defineEventHandler(async event => {
    if (event.req.method === 'GET') {
        const { studUuid } = getQuery(event);

        if (studUuid === '38ed0aa3-b79a-11eb-b9bd-a0d3c1f90e3c') {
            return data1;
        } else if (studUuid === '24c75743-47bb-4d48-8495-25bda5c05acf') {
            return data2;
        } else if (studUuid === 'ba2207af-aeb1-4e78-a944-e594ed2acbbc') {
            return data3;
        } else {
            return data1;
        }
    }
});
