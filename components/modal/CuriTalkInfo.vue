<template>
    <!-- AI talk talk 한눈에 보기 팝업 -->
    <v-dialog v-model="modalData.isOpen" width="auto">
        <v-card class="dialog AI_talk" width="167.5rem" height="83rem">
            <div class="dialog_header">
                <div class="inline_wrap gap1">
                    <h1>{{ t('modal.curiTalkInfo.AICURITalk') }}</h1>
                    <v-select
                        v-model="select"
                        :items="items"
                        class="type_primary_fill"
                        :menu-props="{ contentClass: 'primary_fill_item' }"
                        item-title="state"
                        item-value="abbr"
                        label="Select"
                        variant="outlined"
                        persistent-hint
                        rounded
                        return-object
                        single-line
                        hide-details
                        @update:model-value="handleGetData"
                    ></v-select>
                    <h1>{{ t('modal.curiTalkInfo.glanceLook') }}</h1>
                </div>
                <v-btn class="icon_close" @click="closeModal"><i class="ico close_30 ico_size_lg"></i></v-btn>
            </div>
            <div class="dialog_body">
                <div class="table_wrap scrollable_container">
                    <div class="inner_header">
                        <span>{{ t('modal.curiTalkInfo.cumulativeChatNum') }}</span>
                        <span class="font-color-orange">{{ curiState?.chtCnt }}{{ t('common.unit.cnt') }}</span>
                        <span class="mgl10">{{ t('modal.curiTalkInfo.cumulativeChatTime') }}</span>
                        <span class="font-color-orange">{{ curiState?.totalChtTime }}</span>
                    </div>
                    <div class="table_items scrollable">
                        <v-data-table :headers="basicHeaders" :items="curiState?.chtHistory" item-value="date">
                            <template v-slot:item="{ item }">
                                <tr>
                                    <td class="text_center">
                                        <time :datetime="item.date">
                                            {{ dayjs(item.date).format(t('modal.curiTalkInfo.day')) }}
                                        </time>
                                    </td>
                                    <td class="text_center">{{ item.time }}</td>
                                    <td>
                                        <v-list class="list_dot">
                                            <v-list-item>{{ item.compliment }}</v-list-item>
                                            <v-list-item>{{ item.compliment2 }}</v-list-item>
                                        </v-list>
                                    </td>
                                    <td>
                                        <v-list class="list_dot">
                                            <v-list-item class="inline_wrap">
                                                {{ item.wrongWord }}
                                                <span class="text_arrow">&rarr;</span>
                                                {{ item.spell }}
                                                <span class="text_err">{{ item.errSpell }}</span>
                                                {{ item.spell2 }}
                                            </v-list-item>
                                        </v-list>
                                    </td>
                                    <td>
                                        <v-list class="list_check text-left">
                                            <v-list-item>{{ item.wrongExpression }}</v-list-item>
                                            <v-list-item>{{ item.wrongExpression2 }}</v-list-item>
                                            <v-list-item>{{ item.wrongExpression3 }}</v-list-item>
                                        </v-list>
                                    </td>
                                    <td class="vertical-top">
                                        <v-list>
                                            <v-list-item>
                                                <p class="mr-1">{{ t('modal.curiTalkInfo.Q') }}</p>
                                                {{ item.AI }}
                                            </v-list-item>
                                            <v-list-item>
                                                <p class="mr-1">{{ t('modal.curiTalkInfo.A') }}</p>
                                                {{ item.AI2 }}
                                            </v-list-item>
                                        </v-list>
                                    </td>
                                </tr>
                            </template>
                        </v-data-table>
                    </div>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>
<script setup>
const { t } = useI18n();
const select = ref({ state: t('modal.curiTalkInfo.wholeSemester'), value: 'total' });
const items = ref([
    { state: t('modal.curiTalkInfo.wholeSemester'), value: 'total' },
    { state: t('modal.curiTalkInfo.1stSemester'), value: '1st' },
    { state: t('modal.curiTalkInfo.2stSemester'), value: '2nd' }
]);
const { modalData, closeModal } = useModalStore();
const curiStore = useApiCuriStore();
const { curiState } = storeToRefs(curiStore);
const dayjs = useDayjs();

const basicHeaders = [
    {
        title: t('modal.curiTalkInfo.chatDate'),
        align: 'center',
        sortable: false,
        key: 'date'
    },
    { title: t('modal.curiTalkInfo.chatTime'), align: 'center', sortable: false, key: 'time' },
    { title: t('modal.curiTalkInfo.expressionPraise'), align: 'center', sortable: false, key: 'compliment' },
    { title: t('modal.curiTalkInfo.misspelledExpression'), align: 'center', sortable: false, key: 'wrongWord' },
    { title: t('modal.curiTalkInfo.wrongExpression'), align: 'center', sortable: false, key: 'wrongExpression' },
    { title: t('modal.curiTalkInfo.aiExpressionHelper'), align: 'center', sortable: false, key: 'AI' }
];

const handleGetData = async () => {
    await curiStore.getCuriAiCuriTalkAtAGlance(select.value.value);
};

onMounted(() => {
    handleGetData();
});
</script>
