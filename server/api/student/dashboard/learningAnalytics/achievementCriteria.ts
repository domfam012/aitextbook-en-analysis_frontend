// 차시 성취기준 질문형 조회
// API 작업 실제 종료일 2024-04-02
// 04.03 테이블 수정으로인해 다시 개발 진행중

const data = [
    {
        etlDttm: '2024-04-24T06:40:45.021Z',
        semId: 0,
        clssUuid: 'string',
        tchrUuid: 'string',
        studUuid: 'string',
        chId: 0,
        sessId: 0,
        selfCheck: 5,
        achievementList: [
            '안부를 묻고 답하는 말을 듣고 이해할 수 있나요?',
            '안부를 묻고 답할 수 있나요?',
            '안부를 묻고 답하는 말을 듣고 이해할 수 있나요?',
            '안부를 묻고 답할 수 있나요?'
        ],
        sectionList: [
            {
                sessId: 1,
                curriculumSectionId: 0,
                nameEng: 'Get Ready',
                nameKor: '때에 맞는 인사하기'
            },
            {
                sessId: 1,
                curriculumSectionId: 0,
                nameEng: 'Let’s Learn',
                nameKor: '학습 내용 알아보기'
            },
            {
                sessId: 1,
                curriculumSectionId: 0,
                nameEng: 'Look and Think',
                nameKor: '동영상 보고 표현 이해하기'
            },
            {
                sessId: 1,
                curriculumSectionId: 0,
                nameEng: 'Let’s Learn',
                nameKor: '실생활 동영상 보며 대화하기'
            },
            {
                sessId: 1,
                curriculumSectionId: 0,
                nameEng: 'Chant',
                nameKor: '찬트 하며 표현 익히기'
            },
            {
                sessId: 1,
                curriculumSectionId: 0,
                nameEng: 'Play Time 1',
                nameKor: '몸으로 말해요'
            }
        ],
        orderType: 'string'
    },
    {
        etlDttm: '2024-04-24T06:40:45.021Z',
        semId: 3,
        clssUuid: 'string',
        tchrUuid: 'string',
        studUuid: 'string',
        chId: 0,
        sessId: 2,
        selfCheck: 4,
        achievementList: ['안부를 묻고 답하는 말을 듣고 이해할 수 있나요?', '안부를 묻고 답할 수 있나요?'],
        sectionList: [
            {
                sessId: 2,
                curriculumSectionId: 0,
                nameEng: 'Look and Say',
                nameKor: '실생활 동영상 보며 대화하기'
            },
            {
                sessId: 2,
                curriculumSectionId: 0,
                nameEng: 'Song',
                nameKor: 'Good Morning 노래 부르기'
            },
            {
                sessId: 2,
                curriculumSectionId: 0,
                nameEng: 'Play Time 1',
                nameKor: '몸으로 말해요'
            }
        ],
        orderType: 'string'
    },
    {
        etlDttm: '2024-04-24T06:40:45.021Z',
        semId: 0,
        clssUuid: 'string',
        tchrUuid: 'string',
        studUuid: 'string',
        chId: 0,
        sessId: 0,
        selfCheck: 4,
        achievementList: [
            '주요단어 (fine, good, great, bad, morning, afternoon, evening, night) 및 해당 단어가 포함된 문장을 읽고 쓸 수 있나요?',
            '소리와 철자의 관계를 이해하며 단어 (dog, doll, tall, tiger)를 읽고 쓸 수 있나요?'
        ],
        sectionList: [
            {
                sessId: 2,
                curriculumSectionId: 0,
                nameEng: 'Song',
                nameKor: 'Good Morning 노래 부르기'
            },
            {
                sessId: 2,
                curriculumSectionId: 0,
                nameEng: 'Play Time 1',
                nameKor: '몸으로 말해요'
            }
        ],
        orderType: 'string'
    },
    {
        etlDttm: '2024-04-24T06:40:45.021Z',
        semId: 0,
        clssUuid: 'string',
        tchrUuid: 'string',
        studUuid: 'string',
        chId: 0,
        sessId: 0,
        selfCheck: 3,
        achievementList: ['안부를 묻고 답하는 말을 듣고 이해할 수 있나요?', '안부를 묻고 답할 수 있나요?'],
        sectionList: [
            {
                sessId: 2,
                curriculumSectionId: 0,
                nameEng: 'Look and Say',
                nameKor: '실생활 동영상 보며 대화하기'
            },
            {
                sessId: 2,
                curriculumSectionId: 0,
                nameEng: 'Song',
                nameKor: 'Good Morning 노래 부르기'
            },
            {
                sessId: 2,
                curriculumSectionId: 0,
                nameEng: 'Play Time 1',
                nameKor: '몸으로 말해요'
            }
        ],
        orderType: 'string'
    },
    {
        etlDttm: '2024-04-24T06:40:45.021Z',
        semId: 0,
        clssUuid: 'string',
        tchrUuid: 'string',
        studUuid: 'string',
        chId: 0,
        sessId: 0,
        selfCheck: 2,
        achievementList: ['안부를 묻고 답하는 말을 듣고 이해할 수 있나요?', '안부를 묻고 답할 수 있나요?'],
        sectionList: [
            {
                sessId: 2,
                curriculumSectionId: 0,
                nameEng: 'Look and Say',
                nameKor: '실생활 동영상 보며 대화하기'
            },
            {
                sessId: 2,
                curriculumSectionId: 0,
                nameEng: 'Song',
                nameKor: 'Good Morning 노래 부르기'
            },
            {
                sessId: 2,
                curriculumSectionId: 0,
                nameEng: 'Play Time 1',
                nameKor: '몸으로 말해요'
            },
            {
                sessId: 2,
                curriculumSectionId: 0,
                nameEng: 'Look and Say',
                nameKor: '실생활 동영상 보며 대화하기'
            },
            {
                sessId: 2,
                curriculumSectionId: 0,
                nameEng: 'Song',
                nameKor: 'Good Morning 노래 부르기'
            },
            {
                sessId: 2,
                curriculumSectionId: 0,
                nameEng: 'Play Time 1',
                nameKor: '몸으로 말해요'
            }
        ],
        orderType: 'string'
    }
];

export default defineEventHandler(() => {
    return data;
});
