<template>
    <v-card elevation="0" max-width="42rem" max-height="54rem">
        <div class="datepicker">
            <v-btn @click="resetDatepicker" flat rounded size="x-small" class="reset_btn">
                <i class="ico calendar_refresh"></i>
                <span class="blind">새로고침</span>
            </v-btn>
            <DatePicker
                v-model="selectedDate"
                ref="calendarRef"
                color="mustard"
                class="my-calendar"
                :attributes="props.student ? attributesStudent : attributes"
                :select-attribute="selectAttribute"
                :masks="{ title: 'YYYY년 MMM' }"
                is-required
                @did-move="handleCalendar($event[0].id)"
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
// props
const props = defineProps({ student: Boolean });

// store
const calendarStore = useApiCalendarStore();
const { selectedDate, currentMonth, comList, plnList, rptList } = storeToRefs(calendarStore);

// composable
const mode = useCookie('mode');
const type = useCookie('type');
const dayjs = useDayjs();

// state
const date = new Date();
const calendarRef = ref(null);
const attributes = ref([]);
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

// 달력 초기화
const resetDatepicker = async () => {
    await handleCalendar(dayjs(date).format('YYYYMM'));
    await calendarRef.value.move(date);
    selectedDate.value = date;
};

// 최초 진입 시 이번 달 이벤트 조회
onMounted(() => {
    handleCalendar(dayjs(date).format('YYYY-MM'));
});

// 월별 이벤트 조회
const handleCalendar = async date => {
    const propsDate = date.split('-').join('');
    await calendarStore.getCalendar(propsDate);

    currentMonth.value = date;

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
        }
    ];
    if (mode.value === 'teacher' && type.value === 'record') {
        attributes.value.push({
            key: '생활기록부 발행 기간',
            class: 'period',
            highlight: {
                start: { fillMode: 'light' },
                base: { fillMode: 'light' },
                end: { fillMode: 'light' }
            },
            dates: rptList.value
        });
    }
};
</script>
