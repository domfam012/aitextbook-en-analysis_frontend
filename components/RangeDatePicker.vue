<template>
    <div class="date_picker_slot">
        <vc-date-picker
            v-model="selectedDateState"
            is-range
            :model-config="{
                type: 'string',
                mask: 'YYYY-MM-DD'
            }"
            :masks="{ L: 'YYYY-MM-DD', title: 'YYYY년 MMM' }"
            @update:model-value="
                val => {
                    updateRange(val);
                }
            "
        >
            <template #default="{ inputValue, togglePopover }">
                <div class="date_selector">
                    <div class="start_date">
                        <input :value="inputValue.start || 'YYYY.MM.DD'" @click="() => togglePopover()" />
                        <i class="ico calendar" @click="() => togglePopover()"></i>
                    </div>
                    <p>~</p>
                    <div class="end_date">
                        <input :value="inputValue.end || 'YYYY.MM.DD'" @click="() => togglePopover()" />
                        <i class="ico calendar" @click="() => togglePopover()"></i>
                    </div>
                </div>
            </template>
        </vc-date-picker>
    </div>
</template>

<script setup>
const dayjs = useDayjs();
const { openAlert } = useAlertStore();
const apiMyLessonStore = useApiMyLessonStore();
const { selectedDateState } = storeToRefs(apiMyLessonStore);
const { t } = useI18n();

const emit = defineEmits(['updateRange']);

const updateRange = val => {
    selectedDateState.value.start = dayjs(val.start).format('YYYY-MM-DD');
    selectedDateState.value.end = dayjs(val.end).format('YYYY-MM-DD');

    const startDate = dayjs(selectedDateState.value.start);
    const endDate = dayjs(selectedDateState.value.end);
    const differenceInDays = endDate.diff(startDate, 'days');

    if (differenceInDays > 30) {
        openAlert({
            message: t('common.rageDatePicker.warningMsg')
        });
    } else {
        emit('updateRange', {
            startDt: selectedDateState.value.start,
            endDt: selectedDateState.value.end
        });
    }
};
</script>
