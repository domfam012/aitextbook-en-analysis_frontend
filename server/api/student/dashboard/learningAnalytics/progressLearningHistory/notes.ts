// 진도학습이력 팝업 노트 상세

const data = {
    dataSize: 5,
    timestamp: '2024-05-08T00:56:14.270180402',
    httpCode: 200,
    message: '조회성공',
    data: [
        {
            sctnId: 40,
            sketchUrl:
                'https://aidtcdn.i-screammedia.com/contents/resources/math/lesson_contents/MC00000018/thumbnail/MC00000018_Teacher.PNG'
        },
        {
            sctnId: 41,
            sketchUrl:
                'https://aidtcdn.i-screammedia.com/contents/resources/math/lesson_contents/MC00000027/thumbnail/MC00000027_Teacher.PNG'
        },
        {
            sctnId: 42,
            sketchUrl:
                'https://aidtcdn.i-screammedia.com/contents/resources/math/lesson_contents/MC00000031/thumbnail/MC00000031_Teacher.PNG'
        },
        {
            sctnId: 43,
            sketchUrl:
                'https://aidtcdn.i-screammedia.com/contents/resources/math/lesson_contents/MC00000034/thumbnail/MC00000034_Teacher.PNG'
        },
        {
            sctnId: 44,
            sketchUrl:
                'https://aidtcdn.i-screammedia.com/contents/resources/math/lesson_contents/MC00000018/thumbnail/MC00000018_Teacher.PNG'
        }
    ]
};

export default defineEventHandler(async event => {
    return data;
});
