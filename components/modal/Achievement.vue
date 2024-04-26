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
                    ></v-select>
                    <h1>영역별 학업 성취율</h1>
                </div>
                <v-btn class="icon_close" @click="closeModal"><i class="ico close_30 ico_size_lg"></i></v-btn>
            </div>
            <div class="dialog_body">
                <v-slide-group show-arrows class="type_rounded">
                    <v-slide-group-item v-slot="{ isSelected, toggle }">
                        <v-btn rounded flat :class="isSelected ? 'active' : undefined" @click="toggle">9월 1일 월요일</v-btn>
                    </v-slide-group-item>
                    <v-slide-group-item v-slot="{ isSelected, toggle }">
                        <v-btn rounded flat :class="isSelected ? 'active' : undefined" @click="toggle">9월 2일 월요일</v-btn>
                    </v-slide-group-item>
                    <v-slide-group-item v-slot="{ isSelected, toggle }">
                        <v-btn rounded flat :class="isSelected ? 'active' : undefined" @click="toggle">9월 3일 월요일</v-btn>
                    </v-slide-group-item>
                    <v-slide-group-item v-slot="{ isSelected, toggle }">
                        <v-btn rounded flat :class="isSelected ? 'active' : undefined" @click="toggle">9월 4일 월요일</v-btn>
                    </v-slide-group-item>
                    <v-slide-group-item v-slot="{ isSelected, toggle }">
                        <v-btn rounded flat :class="isSelected ? 'active' : undefined" @click="toggle">9월 5일 월요일</v-btn>
                    </v-slide-group-item>
                    <v-slide-group-item v-slot="{ isSelected, toggle }">
                        <v-btn rounded flat :class="isSelected ? 'active' : undefined" @click="toggle">9월 6일 월요일</v-btn>
                    </v-slide-group-item>
                    <v-slide-group-item v-slot="{ isSelected, toggle }">
                        <v-btn rounded flat :class="isSelected ? 'active' : undefined" @click="toggle">9월 1일 월요일</v-btn>
                    </v-slide-group-item>
                    <v-slide-group-item v-slot="{ isSelected, toggle }">
                        <v-btn rounded flat :class="isSelected ? 'active' : undefined" @click="toggle">9월 1일 월요일</v-btn>
                    </v-slide-group-item>
                    <v-slide-group-item v-slot="{ isSelected, toggle }">
                        <v-btn rounded flat :class="isSelected ? 'active' : undefined" @click="toggle">9월 1일 월요일</v-btn>
                    </v-slide-group-item>
                    <v-slide-group-item v-slot="{ isSelected, toggle }">
                        <v-btn rounded flat :class="isSelected ? 'active' : undefined" @click="toggle">9월 1일 월요일</v-btn>
                    </v-slide-group-item>
                    <v-slide-group-item v-slot="{ isSelected, toggle }">
                        <v-btn rounded flat :class="isSelected ? 'active' : undefined" @click="toggle">9월 1일 월요일</v-btn>
                    </v-slide-group-item>
                </v-slide-group>

                <div class="chart_radar">
                    <ChartRadar :radar-chart="chartData" />
                    <!-- !NOTE 차트 라벨부분 입니다.-->
                    <div class="chart-bar">
                        <div class="use-word">
                            <span class="bullet color-1"></span>
                            <p>{{ mode === 'student' ? user.name : '' }} 학생</p>
                        </div>
                        <div class="use-word">
                            <span class="bullet color-2"></span>
                            <p>반 평균</p>
                        </div>
                        <div class="use-word">
                            <span class="bullet color-3"></span>
                            <p>지역 평균</p>
                        </div>
                    </div>
                    <!-- // 차트 라벨부분 입니다. -->
                </div>
            </div>
        </v-card></v-dialog
    >
</template>

<script setup>
const { mode } = storeToRefs(useApiUserStore());
const { user } = storeToRefs(useApiUserStore());
const selection = ref(0);
const { modalData, closeModal } = useModalStore();

const chartData = {
    labels: ['듣기', '말하기', '쓰기', '제시하기', '보기', '읽기'],
    datasets: [
        {
            type: 'radar',
            label: `${mode === 'student' ? user.name : ''} 학생`,
            data: [4, 2, 3, 2, 2.5, 3.8],
            borderWidth: 3,
            borderColor: '#46A7E5',
            pointStyle: 'circle',
            pointBackgroundColor: '#46A7E5',
            backgroundColor: 'rgba(81, 179, 233,0.2)'
        },
        {
            type: 'radar',
            label: '반 평균',
            data: [3.2, 2.5, 3, 3.5, 3.8, 4.5],
            borderWidth: 3,
            borderColor: '#B0B0B0',
            pointStyle: 'circle',
            pointBackgroundColor: '#B0B0B0',
            backgroundColor: 'transparent'
        },
        {
            type: 'radar',
            label: '지역 평균',
            data: [2.8, 3.2, 3.8, 3, 3, 2.4],
            borderWidth: 3,
            borderColor: '#FFBF00',
            pointStyle: 'circle',
            pointBackgroundColor: '#FFBF00',
            backgroundColor: 'transparent'
        }
    ]
};
const achievement = ref(true);
const select = ref({ state: '최근 7일' });
const items = ref([{ state: '최근 7일' }, { state: '최근 15일' }, { state: '최근 20일' }]);
</script>
