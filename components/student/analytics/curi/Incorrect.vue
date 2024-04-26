<template>
    <v-sheet class="incorrect_wrap">
        <div class="inner_title">
            <h3 class="bullet">철자를 틀린 경우</h3>
        </div>
        <v-list class="list_check">
            <v-list-item v-for="(item, index) in curiState?.wrongSpelling" :key="index">
                <span class="wrong">{{ item?.incorrect }}</span>
                <span class="right">
                    {{ item?.correct }}
                    <!-- <span class="text_err">r</span>ning (o)</span> -->
                </span>
            </v-list-item>
        </v-list>
        <div class="inner_title">
            <h3 class="bullet">잘못된 표현을 쓴 경우</h3>
        </div>
        <v-list class="list_check">
            <v-list-item v-for="(item, index) in curiState?.wrongExpression" :key="index">
                <span>
                    {{ item }}
                </span>
            </v-list-item>
        </v-list>
    </v-sheet>
</template>

<script setup>
const curiStore = useApiCuriStore();
const { curiState } = storeToRefs(curiStore);
</script>
