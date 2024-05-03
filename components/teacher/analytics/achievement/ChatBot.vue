<template>
    <div class="achieveWord">
        <div class="top d-flex align-center">
            <div class="mgr30">
                <!-- 활성화 일경우 .cuteTalk_active -->
                <p class="ico cuteTalk_active">1</p>
                <p class="ico cuteTalk_basis">2</p>
                <p class="ico cuteTalk_basis">3</p>
                <p class="ico cuteTalk_basis">4</p>
                <p class="ico cuteTalk_basis">5</p>
            </div>
            <h3 class="bullet">
                학생들의 챗봇 학습 중에서 다소 민감한 주제(다문화, 인권, 장애 관련)의 어휘나 표현들은 드래그하여 미노출 등록을 하세요.
            </h3>
        </div>
        <v-sheet class="bottom mgt20">
            <div class="chat-list">
                <div v-for="(item, index) in temp" :key="index" class="group d-flex align-center">
                    <div class="curi-box">
                        <div class="d-flex align-center">
                            <div class="avatar avatar-box">
                                <v-img
                                    :src="useAsset('images/img_cuteTalk.svg')"
                                    alt="프로필"
                                    class="avatar-item avatar-item-60 border-none"
                                />
                            </div>
                            <p class="ml-2 txt">{{ item.curi }}</p>
                        </div>
                    </div>
                    <div class="student">
                        <div class="d-flex align-center">
                            <div class="avatar avatar-box">
                                <v-img
                                    :src="useAsset('images/temp/img_pho_st01.png')"
                                    alt="아바타 이미지"
                                    class="avatar-item avatar-item-60"
                                />
                            </div>

                            <p :ref="`textContainers[${index}]`" @mouseup="handleMouseUp(index)" class="ml-2 txt mgr20">
                                {{ item.student }}
                            </p>
                            <v-btn v-if="isTextSelected[index]" rounded flat class="primary" @click="openRegisterModal(index)"
                                >미노출 등록</v-btn
                            >
                        </div>
                    </div>
                </div>
            </div>
        </v-sheet>

        <Modal @handle-action="register" v-if="modalData.type === 'text-register'">
            선택한 단어 및 표현을 <br />미노출 등록 하시겠습니까?
        </Modal>

        <Modal v-if="modalData.type === 'text-register-success'">
            <p class="txt">등록되었습니다.</p>
            <p class="mgt10 desc">‘설정 > 미노출단어·표현‘ 에서 확인하실 수 있습니다.</p>
        </Modal>
    </div>
</template>
<script setup>
const { modalData, openModal } = useModalStore();
const textContainers = ref([null, null, null]);
const isTextSelected = ref([false, false, false]);
const registerIndex = ref(0);
const temp = ref([
    {
        curi: 'How are you?',
        student: 'Not so mad'
    },
    {
        curi: 'What is your name?',
        student: 'I`m 9살이야'
    },
    {
        curi: 'How are you? How are you? How are you? How are you?',
        student: 'Thank you'
    }
]);

onMounted(() => {
    // TODO API 호출 및 초기 진입 시 드래그 처리
});

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

const openRegisterModal = index => {
    openModal({ type: 'text-register', buttonLabels: ['취소', '등록'] });
    registerIndex.value = index;
};
const register = () => {
    // TODO 등록 API 호출
    if (true) {
        //성공 시나리오
        const dragElements = document.querySelectorAll(`.text-drag-${registerIndex.value}`);
        dragElements.forEach(element => {
            element.classList.add('text-register');
        });
        isTextSelected.value[registerIndex.value] = false;
        openModal({ type: 'text-register-success', buttonLabels: ['확인'] });
    } else {
        // 실패 시나리오
    }
};
</script>
<style>
/* TODO 퍼블리싱 작업 */
.text-drag {
    height: 3.8rem;
    background: #2ac0aa;
    border-radius: 1rem;
    z-index: -1;
}
.text-register {
    background: black !important;
    color: white;
}
</style>
