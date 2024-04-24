// 스스로학습 > 색깔에 맞는 학생 그룹 목록 > 학업성취율 > AI 맞춤자료 보내기
// 유비밸록스 과제생성 API 미확정
// 불가능 (테이블x)

const data = {
    success: true,
    dataSize: 5,
    timestamp: '2024-04-24T02:03:33.634620038',
    data: {
        autoSendYn: false,
        contentsList: [
            {
                contentsId: '1501481b-f628-11ee-a9d1-6045bd452244',
                contentName: '네 자리 수의 덧셈을 해 볼까요',
                contentsUrl:
                    'https://aidtcdn.i-screammedia.com/contents/resources/math/lesson_contents/MC00000018/thumbnail/MC00000018_Teacher.PNG',
                contentsKind: '03'
            },
            {
                contentsId: '9298f1dc-f613-11ee-a9d1-6045bd452244',
                contentName: '두 자리 수의 곱셈을 해 볼까요',
                contentsUrl:
                    'https://aidtcdn.i-screammedia.com/contents/resources/math/lesson_contents/MC00000027/thumbnail/MC00000027_Teacher.PNG'
                // contentsKind: '03'
            },
            {
                metaId: 'dce91efb-7e76-4063-a002-82202a511e20',
                contentName: '다섯 자리 수의 나눗셈을 해 볼까요',
                contentsUrl:
                    'https://aidtcdn.i-screammedia.com/contents/resources/math/lesson_contents/MC00000031/thumbnail/MC00000031_Teacher.PNG'
                // contentsKind: '02'
            },
            {
                contentsId: '63eaed9c-0009-4dee-be50-3eab3cd1d6eb',
                contentName: '세 자리 수의 덧셈을 해 볼까요 (2)',
                contentsUrl:
                    'https://aidtcdn.i-screammedia.com/contents/resources/math/lesson_contents/MC00000034/thumbnail/MC00000034_Teacher.PNG'
                // contentsKind: '02'
            },
            {
                contentsId: 'd7cf595c-c531-44e3-b321-d38af01b5a62',
                contentName: '세 자리 수의 뺄셈을 해 볼까요',
                contentsUrl:
                    'https://aidtcdn.i-screammedia.com/contents/resources/math/lesson_contents/MC00000018/thumbnail/MC00000018_Teacher.PNG'
                // contentsKind: '02'
            }
        ]
    }
};

export default defineEventHandler(() => {
    return data;
});
