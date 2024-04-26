<template>
    <v-sheet class="incorrect_wrap">
        <div class="inner_title">
            <h3 class="bullet">칭찬한 표현</h3>
        </div>
        <v-list class="list_check">
            <v-list-item v-for="(item, index) in curiState?.content" :key="index"> {{ item }}</v-list-item>
        </v-list>
    </v-sheet>
</template>
<script setup>
const curiStore = useApiCuriStore();
const { curiState } = storeToRefs(curiStore);
</script>
