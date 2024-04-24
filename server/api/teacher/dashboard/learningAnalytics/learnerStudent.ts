// 오늘의학업 성취율 > 학습자 학생목록
// API 작업 실제 종료일 2024-03-13

const data = {
    content: [
        {
            dt: null,
            semId: null,
            clssUuid: null,
            tchrUuid: null,
            studUuid: null,
            hstTyp: null,
            colorLstnnCnt: 32,
            colorSpkngCnt: 30,
            colorRedngCnt: 28,
            colorWritngCnt: 26,
            colorViewCnt: 24,
            colorPrsntCnt: 22,
            dsgnId: null,
            dsgnPrgrsRt: null,
            dsgnUseInfo: null,
            dsgnUseColorCnt: null,
            stampId: null,
            etlDttm: '2024-03-20T16:27:03'
        },
        {
            dt: null,
            semId: null,
            clssUuid: null,
            tchrUuid: null,
            studUuid: null,
            hstTyp: null,
            colorLstnnCnt: 19,
            colorSpkngCnt: 19,
            colorRedngCnt: 19,
            colorWritngCnt: 19,
            colorViewCnt: 19,
            colorPrsntCnt: 19,
            dsgnId: null,
            dsgnPrgrsRt: null,
            dsgnUseInfo: null,
            dsgnUseColorCnt: null,
            stampId: null,
            etlDttm: '2024-03-21T17:40:08'
        },
        {
            dt: null,
            semId: null,
            clssUuid: null,
            tchrUuid: null,
            studUuid: null,
            hstTyp: null,
            colorLstnnCnt: 22,
            colorSpkngCnt: 20,
            colorRedngCnt: 18,
            colorWritngCnt: 16,
            colorViewCnt: 14,
            colorPrsntCnt: 12,
            dsgnId: null,
            dsgnPrgrsRt: null,
            dsgnUseInfo: null,
            dsgnUseColorCnt: null,
            stampId: null,
            etlDttm: '2024-03-21T17:07:35'
        }
    ],
    pageable: {
        pageNumber: 0,
        pageSize: 1,
        sort: {
            empty: false,
            unsorted: false,
            sorted: true
        },
        offset: 0,
        unpaged: false,
        paged: true
    },
    totalPages: 3,
    totalElements: 3,
    last: false,
    size: 1,
    number: 0,
    sort: {
        empty: false,
        unsorted: false,
        sorted: true
    },
    numberOfElements: 3,
    first: true,
    empty: false
};

export default defineEventHandler(() => {
    return data;
});
