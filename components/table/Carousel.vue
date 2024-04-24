<template>
    <div class="center-table">
        <!-- 스크롤 계속 되는걸 막을 시 추가 :continuous="false" -->
        <v-carousel hide-delimiters class="table-carousel" height="auto">
            <!-- 아이템1 -->
            <v-carousel-item>
                <v-data-table :headers="tableUnitHead" :items="tableContent" item-value="number" class="color_gray type_center">
                    <template v-slot:item="{ item }">
                        <tr>
                            <td>
                                <!-- 차시가 진행되지 않았을 경우 삼각 엠블럼 노출 X -->
                                <!-- 
                                    .emblem_01 미학습,
                                    .emblem_02 느린 학습자,
                                    .emblem_03 조금 느린 학습자,
                                    .emblem_03 중간 학습자,
                                    .emblem_04 조금 빠른 학습자,
                                    .emblem_05 빠른 학습자
                                -->
                                <i class="emblem emblem_02"></i>
                                <v-btn variant="text" :ripple="false" :class="getClass(item.unit01)">{{
                                    addPercentIfNumber(item.unit01)
                                }}</v-btn>

                                <!-- 상황에 맞체 화면에 icon 노출 필요  -->
                                <!-- 출제완료 -->
                                <i class="ico stamp_complete"></i>
                                <!-- 출제대기 -->
                                <!-- <i class="ico stamp_wait"></i> -->
                            </td>
                            <td>
                                <i class="emblem emblem_05"></i>
                                <v-btn variant="text" :ripple="false" :class="getClass(item.unit02)">{{
                                    addPercentIfNumber(item.unit02)
                                }}</v-btn>
                                <i class="ico list"></i>
                            </td>
                            <td>
                                <i class="emblem" :class="item.unit03 === '미학습' ? 'emblem_01' : 'emblem_04'"></i>
                                <v-btn variant="text" :ripple="false" :class="getClass(item.unit03)">{{
                                    addPercentIfNumber(item.unit03)
                                }}</v-btn>
                            </td>
                            <!-- 단원이 진행되지 않았을 경우 .disabled -->
                            <td class="disabled">
                                <span :class="getClass(item.unit04)">{{ item.unit04 }}</span>
                            </td>
                            <td class="disabled">
                                <span :class="getClass(item.unit05)">{{ item.unit05 }}</span>
                            </td>
                            <td class="disabled">
                                <span :class="getClass(item.unit06)">{{ item.unit06 }}</span>
                            </td>
                        </tr>
                    </template>
                </v-data-table>
            </v-carousel-item>
            <!-- 아이템2 -->
            <v-carousel-item>
                <v-data-table :headers="tableUnitHead" :items="tableContent" item-value="number" class="color_gray type_center">
                    <template v-slot:item="{ item }">
                        <tr>
                            <td>
                                <!-- 차시가 진행되지 않았을 경우 삼각 엠블럼 노출 X -->
                                <!-- 
                                    .emblem_01 미학습,
                                    .emblem_02 느린 학습자,
                                    .emblem_03 조금 느린 학습자,
                                    .emblem_03 중간 학습자,
                                    .emblem_04 조금 빠른 학습자,
                                    .emblem_05 빠른 학습자
                                -->
                                <i class="emblem emblem_02"></i>
                                <v-btn variant="text" :ripple="false" :class="getClass(item.unit01)">{{
                                    addPercentIfNumber(item.unit01)
                                }}</v-btn>

                                <!-- 상황에 맞체 화면에 icon 노출 필요  -->
                                <!-- 출제완료 -->
                                <i class="ico stamp_complete"></i>
                                <!-- 출제대기 -->
                                <i class="ico stamp_wait"></i>
                            </td>
                            <td>
                                <i class="emblem emblem_05"></i>
                                <v-btn variant="text" :ripple="false" :class="getClass(item.unit02)">{{
                                    addPercentIfNumber(item.unit02)
                                }}</v-btn>
                                <i class="ico list"></i>
                            </td>
                            <td>
                                <i class="emblem" :class="item.unit03 === '미학습' ? 'emblem_01' : 'emblem_04'"></i>
                                <v-btn variant="text" :ripple="false" :class="getClass(item.unit03)">{{
                                    addPercentIfNumber(item.unit03)
                                }}</v-btn>
                            </td>
                            <!-- 단원이 진행되지 않았을 경우 .disabled -->
                            <td class="disabled">
                                <span :class="getClass(item.unit04)">{{ item.unit04 }}</span>
                            </td>
                            <td class="disabled">
                                <span :class="getClass(item.unit05)">{{ item.unit05 }}</span>
                            </td>
                            <td class="disabled">
                                <span :class="getClass(item.unit06)">{{ item.unit06 }}</span>
                            </td>
                        </tr>
                    </template>
                </v-data-table>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script setup>
// 캐러셀영역
const tableUnitHead = [
    {
        title: '1단원',
        sortable: false,
        key: 'unit01'
    },
    {
        title: '2단원',
        sortable: false,
        key: 'unit02'
    },
    {
        title: '3단원',
        sortable: false,
        key: 'unit03'
    },
    {
        title: '4단원',
        sortable: false,
        key: 'unit04'
    },
    {
        title: '5단원',
        sortable: false,
        key: 'unit05'
    },
    {
        title: '6단원',
        sortable: false,
        key: 'unit06'
    }
];
const tableContent = [
    {
        unit01: 90,
        unit02: 90,
        unit03: 90,
        unit04: '학습대기',
        unit05: '학습대기',
        unit06: '학습대기'
    },
    {
        unit01: 90,
        unit02: 90,
        unit03: 90,
        unit04: '학습대기',
        unit05: '학습대기',
        unit06: '학습대기'
    },
    {
        unit01: 90,
        unit02: 90,
        unit03: 90,
        unit04: '학습대기',
        unit05: '학습대기',
        unit06: '학습대기'
    },
    {
        unit01: 90,
        unit02: 90,
        unit03: '미학습',
        unit04: '학습대기',
        unit05: '학습대기',
        unit06: '학습대기'
    },
    {
        unit01: 90,
        unit02: 90,
        unit03: 90,
        unit04: '학습대기',
        unit05: '학습대기',
        unit06: '학습대기'
    }
];

// 숫자일경우 under_Line 글자인경우 X
const getClass = value => (typeof value === 'number' ? 'type_default_underline' : 'txt');

// 숫자일경우 %추가
const addPercentIfNumber = value => (typeof value === 'number' ? `${value}%` : value);
</script>
