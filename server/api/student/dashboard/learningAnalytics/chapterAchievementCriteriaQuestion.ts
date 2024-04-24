// 차시 성취기준 질문형 조회
// API 작업 실제 종료일 2024-04-02
// 04.03 테이블 수정으로인해 다시 개발 진행중

const data = {
    dataSize: 2,
    timestamp: '2024-04-03T17:39:22.223517026',
    httpCode: 200,
    message: '조회성공',
    data: [
        {
            achievementId: '4ff7e649-d141-11ee-a85f-6045bd452244',
            content: '알파벳과 쉽고 간단한 단어의 소리를 듣고 식별한다.'
        },
        {
            achievementId: '4ff7eb98-d141-11ee-a85f-6045bd452244',
            content: '알파벳 대소문자를 식별하여 읽는다.'
        }
    ]
};

export default defineEventHandler(() => {
    return data;
});
