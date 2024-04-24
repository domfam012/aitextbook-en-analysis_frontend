// TODO: 재정의 필요
interface Calendar {
    success: boolean;
    dataSize: number;
    timestamp: string;
    data: {
        name: string; // 날짜
    };
}

const dayjs = useDayjs();

/**
 * 캘린더
 */
export const useApiCalendarStore = defineStore(
    'apiCalendar',
    () => {
        // 현재 날짜// 달력 정보
        const calendarState = ref<Calendar>();
        const selectedDate = ref(new Date());
        const formatDate = ref(dayjs(selectedDate.value).format('YYYY-MM-DD'));
        const comList = ref([]);
        const plnList = ref([]);
        const rptList = ref([]);

        /**
         * 달력 > 시간표정보
         */
        const getCalendar = async () => {
            // TODO:URL 미정 - 변경 필요
            const { data } = await useCustomFetch('/calendar', {
                method: 'get'
            });

            if (data.value) {
                calendarState.value = data.value.data.dayLst as Calendar;
                if (calendarState.value.length > 0) {
                    plnList.value = calendarState.value.filter(item => item.plnYn).map(data => new Date(data.dt));
                    comList.value = calendarState.value.filter(item => item.comYn).map(data => new Date(data.dt));
                    rptList.value = calendarState.value.filter(item => item.rptYn).map(data => new Date(data.dt));
                }
            }
        };

        /**
         * 달력 > 나이스 수업시수 동기화
         */
        const getSyncCalendar = async () => {
            // TODO:URL 미정 - 변경 필요
            const { data } = await useCustomFetch('/calendar/sync', {
                method: 'get'
            });
            if (data.value) {
                calendarState.value = data.value.data as Calendar;
            }
        };

        watch(selectedDate, newValue => {
            formatDate.value = dayjs(newValue).format('YYYY-MM-DD');
        });

        return {
            calendarState,
            selectedDate,
            formatDate,
            comList,
            plnList,
            rptList,
            getCalendar,
            getSyncCalendar
        };
    },
    {
        persist: false
    }
);
