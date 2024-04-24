<template>
    <v-dialog v-model="modalData.isOpen" width="100%"> 영역별 학업 성취도 차트</v-dialog>
</template>

<script setup>
import { ref } from 'vue';
const selection = ref(0);
const { modalData, closeModal } = useModalStore();

const select = ref({ state: 'Lesson 1' });
const items = ref([{ state: 'Lesson 1' }, { state: 'Lesson 2' }, { state: 'Lesson 3' }, { state: 'Lesson 4' }, { state: 'Lesson 5' }]);
</script>
