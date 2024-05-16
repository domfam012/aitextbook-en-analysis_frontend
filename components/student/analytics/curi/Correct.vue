<template>
    <v-sheet class="incorrect_wrap">
        <div class="inner_title">
            <h3 class="bullet">{{ t('analytics.curi.correct.compliment') }}</h3>
        </div>
        <v-list class="list_check" v-if="curiState?.content?.value.length > 0">
            <v-list-item v-for="(item, index) in curiState?.content" :key="index"> {{ item }}</v-list-item>
        </v-list>
        <p class="font-body3 ml-2 mb-4 font-weight-bold" v-else>{{ t('analytics.noData') }}</p>
    </v-sheet>
</template>
<script setup>
const { t } = useI18n();
const curiStore = useApiCuriStore();
const { curiState } = storeToRefs(curiStore);
</script>
