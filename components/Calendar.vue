<template>
    <v-card elevation="0" max-width="42rem" max-height="54rem">
        <div class="datepicker">
            <v-btn @click="resetDatepicker" flat rounded size="x-small" class="reset_btn">
                <i class="ico calendar_refresh"></i>
                <span class="blind">새로고침</span>
            </v-btn>
            <DatePicker
                v-model="selectedDate"
                color="mustard"
                class="my-calendar"
                :attributes="props.student ? attributesStudent : attributes"
                :select-attribute="selectAttribute"
                :masks="{ title: 'YYYY년 MMM' }"
                is-required
                @dayclick="(a, b) => console.log(a, b)"
            >
            </DatePicker>
            <template v-if="props.student">
                <div class="legend_wrap">
                    <span class="legend" v-for="item in attributesStudent" :key="item.key">
                        <i :class="item.class" />
                        {{ item.key }}
                    </span>
                </div>
            </template>
            <template v-else>
                <div class="legend_wrap">
                    <span class="legend" v-for="item in attributes" :key="item.key">
                        <i :class="item.class" />
                        {{ item.key }}
                    </span>
                </div>
            </template>
        </div>
    </v-card>
</template>

<script setup>
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const attributes = ref([]);
const calendarStore = useApiCalendarStore();
const { calendarState, selectedDate, comList, plnList, rptList } = storeToRefs(calendarStore);
const props = defineProps({ student: Boolean });
const resetDatepicker = () => {
    selectedDate.value = null;
};
onMounted(() => {
    calendarStore.getCalendar();
});
const selectAttribute = ref({
    highlight: {
        style: {
            backgroundColor: '#fff',
            border: '1px solid #000'
        },
        contentStyle: {
            color: '#000000'
        }
    },
    selectedDate: selectedDate.value
});
watch([comList, plnList, rptList], () => {
    attributes.value = [
        {
            key: '수업 예정일',
            class: 'unsubmission',
            highlight: {
                style: {
                    backgroundColor: '#D5D5D5'
                }
            },
            dates: plnList.value
        },
        {
            key: '수업 완료일',
            class: 'submission',
            highlight: {
                style: {
                    backgroundColor: '#139D42'
                }
            },
            dates: comList.value
        },
        {
            key: '생활기록부 발행 기간',
            class: 'period',
            highlight: {
                start: { fillMode: 'light' },
                base: { fillMode: 'light' },
                end: { fillMode: 'light' }
            },
            dates: rptList.value
        }
    ];
});
</script>
