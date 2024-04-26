// Touch VOCA > 단어 많이 푼순
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
    dataSize: 3,
    timestamp: '2024-04-03T17:16:32.994609673',
    message: '목업 API 조회 성공',
    data: [
        {
            dt: '2024-04-03',
            wrdKnowCnt: 30,
            wrdLittleknowCnt: 39,
            wrdUnknownCnt: 69,
            wrdTot: 20,
            avgAnswrRt: 40,
            studName: '늘푸른하늘 1',
            number: 1,
            profile: '/_nuxt/assets/images/temp/img_pho_st01.png'
        },
        {
            dt: '2024-04-03',
            wrdKnowCnt: 85,
            wrdLittleknowCnt: 40,
            wrdUnknownCnt: 13,
            wrdTot: 39,
            avgAnswrRt: 25,
            studName: '늘푸른하늘 2',
            number: 2,
            profile: '/_nuxt/assets/images/temp/img_pho_st01.png'
        },
        {
            dt: '2024-04-03',
            wrdKnowCnt: 22,
            wrdLittleknowCnt: 15,
            wrdUnknownCnt: 18,
            wrdTot: 39,
            avgAnswrRt: 82,
            studName: '늘푸른하늘 3',
            number: 3,
            profile: '/_nuxt/assets/images/temp/img_pho_st01.png'
        },
        {
            dt: '2024-04-16',
            wrdKnowCnt: 20,
            wrdLittleknowCnt: 40,
            wrdUnknownCnt: 30,
            wrdTot: 10,
            avgAnswrRt: 50,
            studName: '늘푸른하늘 4',
            number: 4,
            profile: '/_nuxt/assets/images/temp/img_pho_st01.png'
        },
        {
            dt: '2024-04-16',
            wrdKnowCnt: 54,
            wrdLittleknowCnt: 13,
            wrdUnknownCnt: 85,
            wrdTot: 39,
            avgAnswrRt: 25,
            studName: '늘푸른하늘 5',
            number: 5,
            profile: '/_nuxt/assets/images/temp/img_pho_st01.png'
        },
        {
            dt: '2024-04-16',
            wrdKnowCnt: 74,
            wrdLittleknowCnt: 60,
            wrdUnknownCnt: 70,
            wrdTot: 90,
            avgAnswrRt: 82,
            studName: '늘푸른하늘 6',
            number: 6,
            profile: '/_nuxt/assets/images/temp/img_pho_st01.png'
        },
        {
            dt: '2024-04-30',
            wrdKnowCnt: 30,
            wrdLittleknowCnt: 39,
            wrdUnknownCnt: 69,
            wrdTot: 20,
            avgAnswrRt: 40,
            studName: '늘푸른하늘 7',
            number: 7,
            profile: '/_nuxt/assets/images/temp/img_pho_st01.png'
        },
        {
            dt: '2024-04-30',
            wrdKnowCnt: 85,
            wrdLittleknowCnt: 40,
            wrdUnknownCnt: 13,
            wrdTot: 39,
            avgAnswrRt: 25,
            studName: '늘푸른하늘 8',
            number: 8,
            profile: '/_nuxt/assets/images/temp/img_pho_st01.png'
        },
        {
            dt: '2024-04-30',
            wrdKnowCnt: 20,
            wrdLittleknowCnt: 40,
            wrdUnknownCnt: 30,
            wrdTot: 10,
            avgAnswrRt: 100,
            studName: '늘푸른하늘 9',
            number: 9,
            profile: '/_nuxt/assets/images/temp/img_pho_st01.png'
        }
    ]
};
export default defineEventHandler(async event => {
    return data;
});
