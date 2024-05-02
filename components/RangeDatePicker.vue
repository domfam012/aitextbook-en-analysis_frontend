<template>
    <div class="date_picker_slot">
        <vc-date-picker
            v-model="range"
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
            <template #footer>
                <div class="footer_text">
                    <p>
                        <span>{{ footerText }}</span>
                    </p>
                </div>
            </template>
        </vc-date-picker>
    </div>
</template>

<script setup>
const dayjs = useDayjs();
const { openAlert } = useAlertStore();

const emit = defineEmits(['updateRagne']);

const range = ref({
    start: null,
    end: null
});

const updateRange = val => {
    console.log(val);
    range.value.start = dayjs(val.start).format('YYYY-MM-DD');
    range.value.end = dayjs(val.end).format('YYYY-MM-DD');

    const startDate = dayjs(range.value.start);
    const endDate = dayjs(range.value.end);
    const differenceInDays = endDate.diff(startDate, 'days');

    if (differenceInDays > 30) {
        openAlert({
            message: `정확한 분석을 위해 최대 30일까지 조회만 가능합니다.`
        });
    } else {
        emit('updateRange', {
            startDt: range.value.start,
            endDt: range.value.end
        });
    }
};
</script>
