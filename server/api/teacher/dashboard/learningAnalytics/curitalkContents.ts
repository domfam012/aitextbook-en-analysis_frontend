// 스스로학습 > 색깔에 맞는 학생 그룹 목록 > 챗봇학습 > 큐리톡 내용 조회(큐리)
// API 작업 실제 종료일 2024-04-09

const data = {
    dataSize: 2,
    timestamp: '2024-05-08T19:34:26.418086306',
    httpCode: 200,
    message: '조회성공',
    data: {
        curiTalkLearningCount: 2, // 큐리톡 학습횟수 (integer)
        contents: [
            {
                curiTalkSentenceId: 1, // 큐리톡 id
                curiTalkSentence: 'How are you?', // string 큐리톡의 표현과 문장
                studentSentenceId: 1, // 학생의 표현과 문장 id
                studentSentence: 'Not so mad', // string 학생의 표현과 문장
                selectedSentence: 'mad' // 등록된 큐리톡 단어
            },
            {
                curiTalkSentenceId: 2,
                curiTalkSentence: 'What is your name?',
                studentSentenceId: 2,
                studentSentence: 'Thank you',
                selectedSentence: 'you'
            },
            {
                curiTalkSentenceId: 3,
                curiTalkSentence: 'What is your color?',
                studentSentenceId: 3,
                studentSentence: 'red',
                selectedSentence: null
            },
            {
                curiTalkSentenceId: 4,
                curiTalkSentence: 'what did you do yesterday',
                studentSentenceId: 4,
                studentSentence: 'I was at home',
                selectedSentence: 'home'
            }
        ]
    }
};

export default defineEventHandler(() => {
    return data;
});
