<template>
    <v-sheet class="incorrect_wrap">
        <div class="inner_title">
            <h3 class="bullet">철자를 틀린 경우</h3>
        </div>
        <v-list class="list_check" v-if="curiState?.wrongSpelling?.value.length > 0">
            <v-list-item v-for="(item, index) in curiState?.wrongSpelling" :key="index">
                <span class="wrong mr-1">{{ item?.incorrect }}(x)</span>
                <span class="right"> {{ item?.correct }}<span class="text_err">r</span>ning(o) </span>
            </v-list-item>
        </v-list>
        <p class="font-body3 ml-2 mb-4 font-weight-bold" v-else>데이터가 존재하지 않습니다.</p>

        <div class="inner_title">
            <h3 class="bullet">잘못된 표현을 쓴 경우</h3>
        </div>
        <v-list class="list_check" v-if="curiState?.wrongExpression?.value?.length > 0">
            <v-list-item v-for="(item, index) in curiState?.wrongExpression" :key="index">
                <span>
                    {{ item }}
                </span>
            </v-list-item>
        </v-list>
        <p class="font-body3 ml-2 mb-4 font-weight-bold" v-else>데이터가 존재하지 않습니다.</p>
    </v-sheet>
</template>

<script setup>
const curiStore = useApiCuriStore();
const { curiState } = storeToRefs(curiStore);
</script>
