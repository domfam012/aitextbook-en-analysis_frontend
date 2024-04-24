<template>
    <v-card height="56rem" elevation="0" class="v-card-green flex1">
        <div class="touchVoca">
            <v-card-item>
                <v-card-title>
                    <p>오늘의 Touch VOCA</p>
                    <v-spacer></v-spacer>
                    <v-btn class="icon_only icon_only-sm" @click="openModalFunc" rounded flat><i class="ico more" /></v-btn>
                </v-card-title>
            </v-card-item>
            <v-card-text class="px30 py20">
                <div class="box">
                    <ChartMultipleRadialbars :values="values" />
                </div>
            </v-card-text>
        </div>
    </v-card>
    <v-dialog v-model="isOpen" width="100%" v-if="isOpen" />
</template>
<script setup>
const isOpen = ref(false);
const values = [
    [20, 'gray', 2],
    [40, 'orange', 3],
    [50, 'lightgreen', 4],
    [60, 'skyblue', 5]
];
const openModalFunc = () => {
    isOpen.value = !isOpen.value;
};
</script>
