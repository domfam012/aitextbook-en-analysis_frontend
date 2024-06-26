// TODO: 재정의 필요
interface Learn {
    success: boolean;
    dataSize: number;
    timestamp: string;
    data: {
        name: string;
    };
}

interface LearnProps {
    // date:string;
    studentSentenceId: number; // 학생 표현 ID
    selectedWord: string; // 선택한 단어
    chId: number;
    sessId: number;
    studUuid: string;
}

export interface TeacherColorMatchedGroup {
    // 학기ID
    semId: number;
    // 학급UUID
    clssUuid: string;
    // 교사UUID
    tchrUuid: string;
    // 학생UUID
    studUuid: string;
    studId: string;
    //  단원ID
    chId: number;
    //  차시ID
    sessId: number;
    // 성취율(평균)
    achvRtAvg: number;
    // 필기노트 건수
    wrtngNoteCnt: number;
    // 드릴학습참여 건수
    drillPrtcpCnt: number;
    // 단어학습 건수
    wrdLrnCnt: number;
    // 챗붓학습건수
    chtLrnCnt: number;
    // 성취기준 자기채점
    achvBaseScale: number;
}

export interface AiCustomizedData {
    contentsId: string;
    contentName: string;
    contentsUrl: string;
    // contentsKind: string;
}

export interface drillLearningParticipation {
    imgSrc: string;
    fileName: string;
    stampId: string;
}

export interface StudentInfoProps {
    studUuid: string;
    chId: number;
    sessId: number;
    semId: number;
}

export interface CuritalkContentProps {
    date: string;
    chId: number;
    sessId: number;
    studUuid: string;
}

export interface AchvGroupProps {
    achvGroupId: string;
    chId: number;
    sessId: number;
    semId: number;
}

export interface WrittenNote {
    title: string;
    description: string;
    count: number;
    imgSrc: [
        {
            img: string;
        }
    ];
}

export interface LearnAchievementPanelParams {
    chId: number;
    sessId: number;
    achvRt: number;
    studUuid: string;
}

export interface WordCount {
    count: number;
    word: string[];
}
export interface WordLearning {
    // 알고 있는 단어
    knownWordsCount: WordCount;
    // 조금 알거나 모르는 단어
    somewhatKnownWordsCount: WordCount;
    // 모르는 단어
    unknownWordsCount: WordCount;
    // 단어 학습 총 개수
    totalWordLearningCount: WordCount;
}

export interface CuritalkSentence {
    curiTalkSentenceId: number; // 큐리톡 id
    curiTalkSentence: string; // string 큐리톡의 표현과 문장
    studentSentenceId: number; // 학생의 표현과 문장 id
    studentSentence: string; //
}

export interface CuritalkContents {
    curiTalkLearningCount: number;
    contents: CuritalkSentence[];
}

const defaultUrl = `/teacher/dashboard/learningAnalytics`;

/**
 * 독려메시지
 */
export const useApiLearnStore = defineStore(
    'apiLearn',
    () => {
        const teacherColorMatchedGroupState: Ref<TeacherColorMatchedGroup[]> = ref([]);
        const drillLearningListState: Ref<drillLearningParticipation[]> = ref([]);
        const writtenNoteState: Ref<WrittenNote[]> = ref([]);
        const aiCustomizedDataState: Ref<AiCustomizedData[]> = ref([]);
        const wordLearningState: Ref<WordLearning> = ref({});
        const currentPage = ref(0);
        const curitalkContentsState: Ref<CuritalkContents> = ref(null);
        const learnState = ref<Learn>();

        /**
         * [교사용] 학습 결과 > 학습 분석 > 오늘의 학업성취율 테이블
         *  스스로학습 > 색깔에 맞는 학생 그룹 목록 노출
         *  GET
         * @param achvGroupId 컬러그룹ID
         * @param semId 학기ID
         * @param sessId 차시ID
         * @param chId 단원ID
         */
        const getLearnColorMatchedStudentGroups = async ({ achvGroupId, semId, sessId, chId }: AchvGroupProps) => {
            const { data } = await useCustomFetch(`${defaultUrl}/colorMatchedStudentGroups`, {
                method: 'get',
                params: { achvGroupId, semId, sessId, chId }
            });
            if (data.value) {
                teacherColorMatchedGroupState.value = data.value.data;
            }
        };

        /**
         * AI 맞춤자료
         * 스스로학습 > 색깔에 맞는 학생 그룹 목록 > 학업성취율 > AI 맞춤자료 목록
         * GET
         **/
        const getLearnAiCustomizedData = async ({ chId, sessId, achvRt, studUuid }: LearnAchievementPanelParams) => {
            const { data } = await useCustomFetch(`${defaultUrl}/aiCustomizedData`, {
                method: 'get',
                params: { chId, sessId, achvRt, studUuid }
            });

            if (data.value) {
                aiCustomizedDataState.value = data.value.data;
            }
        };

        /**
         *  스스로학습 > 색깔에 맞는 학생 그룹 목록 > 학업성취율 > 자동발송 설정확인
         *  GET
         **/
        const getLearnAutoSendSettings = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/autoSendSettings`, {
                method: 'get'
            });
            if (data.value) {
                learnState.value = data.value.data as Learn;
            }
        };

        /**
         *  스스로학습 > 색깔에 맞는 학생 그룹 목록 > 학업성취율 > AI 맞춤자료 보내기
         *  POST
         **/
        const postLearnAiCustomizedData = async (learnData: any) => {
            const { data } = await useCustomFetch(`${defaultUrl}/aiCustomizedData`, {
                method: 'post',
                body: JSON.stringify(learnData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (data.value) {
                learnState.value = data.value.data;
            }
        };

        /**
         * 필기노트
         * 스스로학습 > 색깔에 맞는 학생 그룹 목록 > 필기노트
         * GET
         **/
        const getLearnWrittenNote = async ({ studUuid, semId, sessId, chId }: StudentInfoProps) => {
            const params = `studUuid=${studUuid}&semId=${semId}&sessId=${sessId}&chId=${chId}`;
            const { data } = await useCustomFetch(`${defaultUrl}/writtenNote?${params}`, {
                method: 'get'
            });
            if (data.value) {
                writtenNoteState.value = data.value.data;
            }
        };

        /**
         *  스스로학습 > 색깔에 맞는 학생 그룹 목록 > 학업성실도
         *  기획 삭제
         *  GET
         **/
        // const getLearnAcademicIntegrity = async () => {
        //     const { data } = await useCustomFetch(`${defaultUrl}/academicIntegrity`, {
        //         method: 'get'
        //     });
        //     if (data.value) {
        //         learnState.value = data.value.data as Learn;
        //     }
        // };

        /**
         * 드릴
         * 스스로학습 > 색깔에 맞는 학생 그룹 목록 > 드릴학습 참여건수
         * GET
         **/
        const getLearnDrillLearningParticipation = async ({ studUuid, semId, sessId, chId }: StudentInfoProps) => {
            const params = `studUuid=${studUuid}&semId=${semId}&sessId=${sessId}&chId=${chId}`;
            const { data } = await useCustomFetch(`${defaultUrl}/drillLearningParticipation?${params}`, {
                method: 'get'
            });
            if (data.value) {
                drillLearningListState.value = data.value.data;
            }
        };

        /**
         * 단어학습
         * 스스로학습 > 색깔에 맞는 학생 그룹 목록 > 단어학습
         * GET
         **/
        const getLearnWordLearning = async ({ studUuid, semId, sessId, chId }: StudentInfoProps) => {
            const { data } = await useCustomFetch(`${defaultUrl}/wordLearning`, {
                method: 'get',
                params: { chId, sessId, semId, studUuid }
            });
            if (data.value) {
                wordLearningState.value = data.value.data;
            }
        };

        /**
         *  스스로학습 > 색깔에 맞는 학생 그룹 목록 > 단어학습 > 단어종류별 상세
         *  GET
         **/
        const getLearnDetailsByWordType = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/detailsByWordType`, {
                method: 'get'
            });
            if (data.value) {
                learnState.value = data.value.data as Learn;
            }
        };

        /**
         * 챗봇학습
         * 스스로학습 > 색깔에 맞는 학생 그룹 목록 > 챗봇학습 > 큐리톡 학습횟수 조회
         * GET
         **/
        const getLearnCuritalkLearningFrequency = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/curitalkLearningFrequency`, {
                method: 'get'
            });
            if (data.value) {
                learnState.value = data.value.data as Learn;
            }
        };

        /**
         *  스스로학습 > 색깔에 맞는 학생 그룹 목록 > 챗봇학습 > 큐리톡 내용 조회(큐리)
         *  GET
         **/
        const getLearnCuritalkContents = async ({ date, chId, sessId, studUuid }: CuritalkContentProps) => {
            const { data } = await useCustomFetch(`${defaultUrl}/curitalkLearningFrequency`, {
                method: 'get',
                params: { date, chId, sessId, studUuid }
            });
            if (data.value) {
                curitalkContentsState.value = data.value.data;
            }
        };

        /**
         *  스스로학습 > 색깔에 맞는 학생 그룹 목록 > 챗봇학습 > 큐리톡 내용 조회(학생)
         *  TODO: 현재 URL 존재하지 않음
         **/
        const getLearnCuritalk = async () => {
            const { data } = await useCustomFetch(`${defaultUrl}/`, {
                method: 'get'
            });
            if (data.value) {
                learnState.value = data.value.data;
            }
        };

        /**
         *  스스로학습 > 색깔에 맞는 학생 그룹 목록 > 챗봇학습 > 큐리톡 미노출 단어 등록
         *  POST
         */
        const postLearnCuritalkUnexposedWords = async ({ studUuid, studentSentenceId, selectedWord, chId, sessId }: LearnProps) => {
            await useCustomFetch(`${defaultUrl}/curitalkUnexposedWords`, {
                method: 'post',
                body: JSON.stringify({ studUuid, studentSentenceId, selectedWord, chId, sessId }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // if (data.value) {
            //     learnState.value = data.value.data;
            // }
        };

        return {
            learnState,
            teacherColorMatchedGroupState,
            drillLearningListState,
            writtenNoteState,
            aiCustomizedDataState,
            wordLearningState,
            curitalkContentsState,
            getLearnColorMatchedStudentGroups,
            getLearnAiCustomizedData,
            getLearnAutoSendSettings,
            postLearnAiCustomizedData,
            getLearnWrittenNote,
            getLearnDrillLearningParticipation,
            // 단어학습
            getLearnWordLearning,
            getLearnDetailsByWordType,
            // 큐리톡
            getLearnCuritalkLearningFrequency,
            getLearnCuritalkContents,
            getLearnCuritalk,
            postLearnCuritalkUnexposedWords,
            currentPage
        };
    },
    {
        persist: false
    }
);
