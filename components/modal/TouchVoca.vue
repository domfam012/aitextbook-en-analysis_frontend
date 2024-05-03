<template>
    <v-dialog v-model="modalData.isOpen" width="auto">
        <v-card class="dialog pda20" width="138rem" height="80rem">
            <div class="dialog_header">
                <div class="inline_wrap gap1">
                    <h1>나의</h1>
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
                        @update:model-value="handleGetTouchVoca"
                    ></v-select>
                    <h1>Touch VOCA 학습이력</h1>
                </div>
                <v-btn class="icon_close" @click="closeModal"><i class="ico close_30 ico_size_lg"></i></v-btn>
            </div>
            <div class="dialog_body">
                <div class="chart_combination">
                    <!-- 차트영역 입니다. -->
                    <ChartCombination v-if="isReady" :chartData="chartData" />
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script setup>
import dayjs from 'dayjs';

const { modalData, closeModal } = useModalStore();

const chartData = ref({
    labels: [],
    datasets: [
        {
            type: 'line',
            data: [],
            order: 1,
            borderWidth: 2,
            borderColor: '#139D42',
            pointStyle: 'circle',
            pointBackgroundColor: '#139D42',
            pointRadius: 4, // 데이터 레이블 설정,
            datalabels: {
                display: 'true',
                color: '#171717',
                align: 'top',
                formatter: function (value, context) {
                    return value + '%';
                },
                backgroundColor: 'white',
                borderColor: '#373737',
                borderWidth: 1,
                borderRadius: 5,
                textAlign: 'center',
                offset: 10,
                font: function (context) {
                    var height = context.chart.height;
                    // var size의 값이 최소 사이즈시 12가 되도록 잡아 주세요.
                    var size = Math.round(height / 40);
                    return {
                        family: 'NotoSansKR',
                        size: size * 1.25, // 1920에 20
                        weight: 700
                    };
                }
            }
        },
        {
            type: 'bar',
            label: '응시한 단어 수',
            data: [],
            backgroundColor: '#324d7e',
            stack: 'total',
            order: 2,
            barPercentage: 0.35,
            categoryPercentage: 0.7
        },
        {
            type: 'bar',
            label: '알고 있는 단어 수',
            data: [],
            backgroundColor: '#80c7fd',
            stack: 'word',
            order: 2,
            barPercentage: 2.5,
            categoryPercentage: 0.3
        },
        {
            type: 'bar',
            label: '조금 알거나 모르는 단어 수',
            data: [],
            backgroundColor: '#ffc008',
            stack: 'word',
            order: 2,
            barPercentage: 2.5,
            categoryPercentage: 0.3
        },
        {
            type: 'bar',
            label: '모르는 단어 수',
            data: [],
            backgroundColor: '#ffa503',
            stack: 'word',
            order: 2,
            barPercentage: 2.5,
            categoryPercentage: 0.3
        }
    ]
});

const touchVoca = ref(true);
const select = ref({ state: '최근 7일', value: 7 });
const items = ref([
    { state: '최근 7일', value: 7 },
    { state: '최근 15일', value: 15 },
    { state: '최근 30일', value: 30 }
]);
const isReady = ref(false);

const apiTodayStore = useApiTodayStore();
const calendarStore = useApiCalendarStore();

const { formatDate } = storeToRefs(calendarStore);
const { todayState } = storeToRefs(apiTodayStore);

const handleGetTouchVoca = async () => {
    await apiTodayStore.getTodayTouchVocaLearning(select.value.value);
    await calcRecentSelectDate();
    await mapDataSet();
    isReady.value = true;
};

const calcRecentSelectDate = async () => {
    const currentDate = new Date(formatDate.value);
    const sevenDaysAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
    const dateList = [];
    for (let i = 0; i < select.value.value; i++) {
        const date = new Date(sevenDaysAgo.getTime() + i * 24 * 60 * 60 * 1000);
        const formatDate = dayjs(date).format('M월 D일');
        dateList.push(formatDate);
    }
    dateList.value = dateList;
    chartData.value.labels = dateList;
};

const mapDataSet = async () => {
    const avgList = todayState?.value?.map(item => item.avgAnswrRt);
    const wrdTotList = todayState?.value?.map(item => item.wrdTot);
    const wrdKnowCntList = todayState?.value?.map(item => item.wrdKnowCnt);
    const wrdLittleknowCntList = todayState?.value?.map(item => item.wrdLittleknowCnt);
    const wrdUnknownCntList = todayState?.value?.map(item => item.wrdUnknownCnt);
    chartData.value.datasets[0].data = avgList;
    chartData.value.datasets[1].data = wrdTotList;
    chartData.value.datasets[2].data = wrdKnowCntList;
    chartData.value.datasets[3].data = wrdLittleknowCntList;
    chartData.value.datasets[4].data = wrdUnknownCntList;
};

onMounted(async () => {
    await handleGetTouchVoca();
});
</script>
