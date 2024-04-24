<template>
    <v-card elevation="0" max-width="42rem" height="54.5rem">
        <div class="mission aILevelTest sm h100">
            <v-sheet class="h100">
                <h3>AI Level Test를 볼 때가 되었어요!</h3>
                <v-card-text class="wrap">
                    <!-- 데이터 있을 때 -->
                    <v-list v-if="encourageState?.length > 0" class="list" density="compact">
                        <v-list-item class="pa-0" v-for="(student, index) in encourageState" :key="index">
                            <div class="name">
                                <p class="txt_num">{{ student.studentNumber }}번</p>
                                <p class="txt_name ellipsis">{{ student.studentName }}</p>
                                <p class="txt_week orange">({{ student.defectWeekCount }}주)</p>
                            </div>
                            <v-list-item-action>
                                <p class="check">
                                    <v-checkbox
                                        v-model="selected"
                                        :value="student"
                                        hide-details
                                        class="default"
                                        density="compact"
                                    ></v-checkbox>
                                </p>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                    <!-- 데이터 없을 때 -->
                    <div v-else class="card_no_data">
                        <i class="ico no_student ico_size_25" />
                        <p>
                            독려 메시지를 보낼 <br />
                            학생이 없습니다.
                        </p>
                    </div>
                    <div class="box_stamp mt-5 mt10 text-center">
                        <v-btn
                            rounded
                            flat
                            class="primary"
                            :disabled="selected.length === 0"
                            @click="openModal({ type: 'encourage', buttonLabels: ['아니오', '예'], closeBtnClass: false })"
                            >독려 메시지 보내기</v-btn
                        >
                    </div>
                </v-card-text>
            </v-sheet>

            <Modal v-if="modalData.type === 'encourage'" @handle-action="sendMessage">
                <p>선택한 학생에게 <em class="font-color-orange">AI Level Test</em>독려 메시지를<br />보내시겠습니까?</p>
            </Modal>
        </div>
    </v-card>
</template>
<script setup>
const selected = ref([]);
const { modalData, openModal, closeModal } = useModalStore();
const { openAlert } = useAlertStore();
const apiEncourageStore = useApiEncourageStore();
const { encourageState } = storeToRefs(apiEncourageStore);

onMounted(() => {
    apiEncourageStore.getEncourage();
});

const sendMessage = () => {
    closeModal();
    // TODO 독려 메시지 보내기 API 연동
    selected.value = [];
    openAlert({ message: 'AI Level Test 독려 메시지를 보냈습니다.' });
};
</script>
<style></style>
