<template>
    <v-btn class="primary" @click="touchVoca = true"> Open Dialog </v-btn>
    <!-- Touch VOCA 학습이력 팝업 -->
    <v-dialog v-model="touchVoca" width="auto">
        <v-card class="dialog pda20 display_block" width="138rem" height="80rem">
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
                    ></v-select>
                    <h1>Touch VOCA 학습이력</h1>
                </div>
                <v-btn class="icon_close" @click="aItalk = false"><i class="ico close_30 ico_size_lg"></i></v-btn>
            </div>
            <div class="dialog_body">
                <div class="chart_combination">
                    <!-- 차트영역 입니다. -->
                    <ChartCombination :chartData="chartData" />
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script setup>
const chartData = {
    labels: ['9월 11일', '9월 12일', '9월 13일', '9월 14일', '9월 15일', '9월 16일', '9월 17일'],
    datasets: [
        {
            type: 'line',
            data: [95, 92, 88, 76, 91, 90, 86],
            order: 1,
            borderWidth: 2,
            borderColor: 'green',
            pointStyle: 'circle',
            pointBackgroundColor: 'green',
            pointRadius: 4, // 데이터 레이블 설정,
            datalabels: {
                display: 'true',
                color: 'black',
                align: 'top',
                formatter: function (value, context) {
                    return value + '%';
                },
                backgroundColor: 'white',
                borderColor: 'black',
                borderWidth: 1,
                borderRadius: 5,
                textAlign: 'center',
                offset: 10
            }
        },
        {
            type: 'bar',
            label: '응시한 단어 수',
            data: [70, 33, 78, 75, 54, 84, 57],
            backgroundColor: '#324d7e',
            stack: 'total',
            order: 2,
            barPercentage: 0.35,
            categoryPercentage: 1.0
        },
        {
            type: 'bar',
            label: '알고 있는 단어 수',
            data: [70 / 3, 11, 26, 25, 18, 28, 19],
            backgroundColor: '#80c7fd',
            stack: 'word',
            order: 2,
            barPercentage: 2.5,
            categoryPercentage: 0.5
        },
        {
            type: 'bar',
            label: '조금 알거나 모르는 단어 수',
            data: [70 / 3, 11, 26, 25, 18, 28, 19],
            backgroundColor: '#ffc008',
            stack: 'word',
            order: 2,
            barPercentage: 2.5,
            categoryPercentage: 0.5
        },
        {
            type: 'bar',
            label: '모르는 단어 수',
            data: [70 / 3, 11, 26, 25, 18, 28, 19],
            backgroundColor: '#ffa503',
            stack: 'word',
            order: 2,
            barPercentage: 2.5,
            categoryPercentage: 0.5
        }
    ]
};

const touchVoca = ref(true);
const select = ref({ state: '최근 7일' });
const items = ref([{ state: '최근 7일' }, { state: '최근 15일' }, { state: '최근 20일' }]);
</script>
