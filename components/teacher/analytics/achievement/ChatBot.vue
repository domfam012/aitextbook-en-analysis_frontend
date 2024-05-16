<template>
    <div class="achieveWord">
        <div class="top d-flex align-center">
            <div class="mgr30">
                <!-- 활성화 일경우 .cuteTalk_active -->
                <p
                    v-for="n in 5"
                    :key="n"
                    class="ico"
                    :class="{
                        cuteTalk_active: curitalkContentsState?.curiTalkLearningCount === n,
                        cuteTalk_basis: curitalkContentsState?.curiTalkLearningCount !== n
                    }"
                >
                    {{ n }}
                </p>
            </div>
            <h3 class="bullet">
                {{ t('analytics.chatBot.text') }}
            </h3>
        </div>
        <v-sheet class="bottom mgt20">
            <div class="chat-list">
                <div v-for="(item, index) in curitalkContentsState?.resultList" :key="index" class="group d-flex align-center">
                    <div class="curi-box">
                        <div class="d-flex align-center">
                            <div class="avatar avatar-box">
                                <v-img
                                    :src="useAsset('images/img_cuteTalk.svg')"
                                    :alt="t('analytics.chatBot.profile')"
                                    class="avatar-item avatar-item-60 border-none"
                                />
                            </div>
                            <p class="ml-2 txt">{{ item.curiTalkSentence }}</p>
                        </div>
                    </div>
                    <div class="student">
                        <div class="d-flex align-center">
                            <div class="avatar avatar-box">
                                <v-img
                                    :src="useAsset('images/temp/img_pho_st01.png')"
                                    :alt="t('analytics.chatBot.avatarImg')"
                                    class="avatar-item avatar-item-60"
                                />
                            </div>
                            <p
                                :ref="`textContainers[${index}]`"
                                @mouseup="handleMouseUp(index)"
                                class="ml-2 txt mgr20"
                                :id="'sentence' + item.studentSentenceId"
                            >
                                {{ item.studentSentence }}
                            </p>
                            <v-btn v-if="isTextSelected[index]" rounded flat class="primary" @click="openRegisterModal(index, item)">{{
                                t('analytics.chatBot.noRegistration')
                            }}</v-btn>
                        </div>
                    </div>
                </div>
            </div>
        </v-sheet>

        <Modal @handle-action="register" v-if="modalData.type === 'text-register'">
            {{ t('analytics.chatBot.text1') }} <br />{{ t('analytics.chatBot.text2') }}
        </Modal>

        <Modal v-if="modalData.type === 'text-register-success'">
            <p class="txt">{{ t('analytics.chatBot.registrations') }}</p>
            <p class="mgt10 desc">{{ t('analytics.chatBot.text3') }}</p>
        </Modal>
    </div>
</template>
<script setup>
const { t } = useI18n();
const props = defineProps({ item: Object });
const { modalData, openModal } = useModalStore();
const learnStore = useApiLearnStore();
const calendarStore = useApiCalendarStore();
const { formatDate } = storeToRefs(calendarStore);
const { curitalkContentsState } = storeToRefs(learnStore);

const isTextSelected = ref([false, false, false]);
const registerIndex = ref(0);
const selectedSentenceId = ref(null);

// API 호출 및 초기 진입 시 드래그 처리
onMounted(async () => {
    const { chId, sessId, studUuid } = props.item;
    await learnStore.getLearnCuritalkContents({ date: formatDate.value, chId, sessId, studUuid });
    markSelectedText();
});

const markSelectedText = () => {
    curitalkContentsState.value.resultList.forEach(item => {
        const selectedText = item.selectedSentence;
        if (selectedText) {
            const sentence = document.getElementById('sentence' + item.studentSentenceId);
            const words = sentence.textContent.split(' ');
            //새로운 문장 내용을 구성하여 이전 내용을 대체
            let newSentenceHTML = '';
            words.forEach((word, index) => {
                if (word === selectedText) {
                    const spanHTML = `<span class="text-drag text-register">${word}</span>`;
                    newSentenceHTML += (index === 0 ? '' : ' ') + spanHTML;
                } else {
                    newSentenceHTML += (index === 0 ? '' : ' ') + word;
                }
            });
            // 현재 문장을 비우고 새 HTML 내용을 삽입
            sentence.textContent = ''; // 기존 텍스트 비우기
            sentence.insertAdjacentHTML('afterbegin', newSentenceHTML); // 요소의 첫 번째 자식 요소 바로 앞에 html을 삽입 (afterbegin)
        }
    });
};

const handleMouseUp = index => {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    isTextSelected.value[index] = selectedText.length > 0;

    if (selectedText.length > 0) {
        wrapSelectedTextWithSpan(index);
    }
};

const wrapSelectedTextWithSpan = index => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
    const span = document.createElement('span');
    span.textContent = selectedText;
    span.classList.add('text-drag', `text-drag-${index}`);
    range.deleteContents();
    range.insertNode(span);
};

const openRegisterModal = (index, item) => {
    openModal({ type: 'text-register', buttonLabels: [t('common.button.cancel'), t('analytics.chatBot.registration')] });
    registerIndex.value = index;
    selectedSentenceId.value = item.studentSentenceId;
};
const register = async () => {
    if (true) {
        //성공 시나리오
        const { chId, sessId, studUuid } = props.item;
        const dragElements = document.querySelectorAll(`.text-drag-${registerIndex.value}`);

        let selectedWord = '';
        dragElements.forEach(element => {
            element.classList.add('text-register');
            selectedWord = element.innerHTML;
        });

        // 미노출 단어 등록 API 호출
        await learnStore.postLearnCuritalkUnexposedWords({
            studentSentenceId: selectedSentenceId.value,
            selectedWord,
            chId,
            sessId,
            studUuid
        });

        isTextSelected.value[registerIndex.value] = false;
        openModal({ type: 'text-register-success', buttonLabels: [t('common.button.check')] });
    } else {
        // 실패 시나리오
    }
};
</script>
