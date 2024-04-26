// Touch VOCA > 정답률 높은 순
// API 개발 완료

type Data = {
    dataSize: number;
    timestamp: string;
    message: string;
    data: Array<TouchVoca>;
};
type TouchVoca = {
    dt: string; // 알고있는단어 건수
    wrdKnowCnt: number; // 알고있는단어 건수
    wrdLittleknowCnt: number; // 알고있는단어 건수
    wrdUnknownCnt: number; // 알고있는단어 건수
    wrdTot: number; // 알고있는단어 건수
    avgAnswrRt: number; // 알고있는단어 건수
    studName: string; // 학생이름 (2024-04-12 돔팸 요청사항 진행중)
    number: number; // 학생번호 (2024-04-12 돔팸 요청사항 진행중)
    profile: string; //학생프로필 (2024-04-12 돔팸 요청사항 진행중)
};

const data: Data = {
    dataSize: 1,
    timestamp: '2024-03-29 01:33:02',
    message: '목업 API 조회 성공',
    data: [
        {
            dt: '2024-04-04',
            wrdKnowCnt: 60,
            wrdLittleknowCnt: 13,
            wrdUnknownCnt: 77,
            wrdTot: 39,
            avgAnswrRt: 82,
            studName: '늘푸른하늘 10',
            number: 10,
            profile: '/_nuxt/assets/images/temp/img_pho_st01.png'
        },
        {
            dt: '2024-04-04',
            wrdKnowCnt: 30,
            wrdLittleknowCnt: 39,
            wrdUnknownCnt: 69,
            wrdTot: 20,
            avgAnswrRt: 40,
            studName: '늘푸른하늘 11',
            number: 11,
            profile: '/_nuxt/assets/images/temp/img_pho_st01.png'
        },
        {
            dt: '2024-04-04',
            wrdKnowCnt: 11,
            wrdLittleknowCnt: 3,
            wrdUnknownCnt: 6,
            wrdTot: 39,
            avgAnswrRt: 25,
            studName: '늘푸른하늘 12',
            number: 12,
            profile: '/_nuxt/assets/images/temp/img_pho_st01.png'
        },
        {
            dt: '2024-04-16',
            wrdKnowCnt: 40,
            wrdLittleknowCnt: 50,
            wrdUnknownCnt: 60,
            wrdTot: 70,
            avgAnswrRt: 80,
            studName: '늘푸른하늘 13',
            number: 13,
            profile: '/_nuxt/assets/images/temp/img_pho_st01.png'
        },
        {
            dt: '2024-04-16',
            wrdKnowCnt: 30,
            wrdLittleknowCnt: 39,
            wrdUnknownCnt: 69,
            wrdTot: 25,
            avgAnswrRt: 40,
            studName: '늘푸른하늘 14',
            number: 14,
            profile: '/_nuxt/assets/images/temp/img_pho_st01.png'
        },
        {
            dt: '2024-04-16',
            wrdKnowCnt: 43,
            wrdLittleknowCnt: 87,
            wrdUnknownCnt: 56,
            wrdTot: 46,
            avgAnswrRt: 40,
            studName: '늘푸른하늘 15',
            number: 15,
            profile: '/_nuxt/assets/images/temp/img_pho_st01.png'
        }
    ]
};

export default defineEventHandler(async event => {
    return data;
});
