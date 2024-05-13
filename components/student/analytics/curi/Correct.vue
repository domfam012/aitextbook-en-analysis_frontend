<template>
    <v-sheet class="incorrect_wrap">
        <div class="inner_title">
            <h3 class="bullet">칭찬한 표현</h3>
        </div>
        <v-list class="list_check" v-if="curiState?.content?.value.length > 0">
            <v-list-item v-for="(item, index) in curiState?.content" :key="index"> {{ item }}</v-list-item>
        </v-list>
        <p class="font-body3 ml-2 mb-4 font-weight-bold" v-else>데이터가 존재하지 않습니다.</p>
    </v-sheet>
</template>
<script setup>
const curiStore = useApiCuriStore();
const { curiState } = storeToRefs(curiStore);
</script>
