<template>
    <v-card elevation="0" max-width="42rem" height="54.5rem">
        <div class="mission aILevelTest sm h100">
            <v-sheet class="h100">
                <h3>{{ t('analytics.level.title') }}</h3>
                <v-card-text class="wrap">
                    <!-- 데이터 있을 때 -->
                    <v-list v-if="encourageState?.length > 0" class="list" density="compact">
                        <v-list-item class="pa-0" v-for="(student, index) in encourageState" :key="index">
                            <div class="name">
                                <p class="txt_num">{{ student.studentNumber }}{{ t('common.unit.no') }}</p>
                                <p class="txt_name ellipsis">{{ student.studentName }}</p>
                                <p class="txt_week orange">({{ student.defectWeekCount }} {{ t('analytics.level.count') }})</p>
                            </div>
                            <v-list-item-action>
                                <p class="check">
                                    <v-checkbox
                                        v-model="selected"
                                        :value="student"
                                        hide-details
                                        class="default"
                                        density="compact"
                                        :ripple="false"
                                    ></v-checkbox>
                                </p>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                    <!-- 데이터 없을 때 -->
                    <div v-else class="card_no_data">
                        <i class="ico no_student ico_size_25" />
                        <p>
                            {{ t('analytics.level.noMessage') }} <br />
                            {{ t('analytics.level.noStudent') }}
                        </p>
                    </div>
                    <div class="box_stamp mt-5 mt10 text-center">
                        <v-btn
                            rounded
                            flat
                            class="primary size_md"
                            :disabled="selected.length === 0"
                            @click="
                                openModal({
                                    type: 'encourage',
                                    buttonLabels: [t('common.button.cancel'), t('common.button.check')],
                                    closeBtnClass: false
                                })
                            "
                        >
                            {{ t('analytics.level.message') }}</v-btn
                        >
                    </div>
                </v-card-text>
            </v-sheet>

            <Modal v-if="modalData.type === 'encourage'" @handle-action="sendMessage">
                <p>
                    {{ t('analytics.level.student') }}
                    <em class="font-color-orange"> {{ t('analytics.level.aiLevel') }} </em> {{ t('analytics.level.messages') }}<br />
                    {{ t('analytics.level.send') }}
                </p>
            </Modal>
            <Modal v-if="modalData.type === 'alert'">
                <div class="d-flex align-center flex-wrap justify-center mb-1">
                    <div v-for="(item, index) in selected" :key="index">
                        <span class="num font-color-blue font-weight-extrabold mr-1">{{ item.studentNumber }}{{ t('common.unit.no') }}</span
                        >{{ item.studentName }}
                        <em v-if="index !== selected.length - 1" class="mx-1">,</em>
                    </div>
                </div>
                <p>{{ t('analytics.level.aiMessage') }}</p>
                <!--  post 호출 함수  -->
            </Modal>
        </div>
    </v-card>
</template>
<script setup>
const { t } = useI18n();
const selected = ref([]);
const { modalData, openModal, closeModal } = useModalStore();
const { openAlert } = useAlertStore();
const apiEncourageStore = useApiEncourageStore();
const { encourageState } = storeToRefs(apiEncourageStore);

onMounted(() => {
    apiEncourageStore.getEncourage();
});

const sendMessage = () => {
    apiEncourageStore.postEncourage(selected.value);
    closeModal();
    openModal({ type: 'alert' });

    setTimeout(() => {
        closeModal();
    }, 2000);
};
</script>
