<template>
    <div class="scrollable_x">
        <div class="card_items">
            <div class="item" v-for="item in drillLearningListState" :key="drillLearningListState.name">
                <div class="image_wrap" :class="'stamp_0' + item.stampId">
                    <v-img :src="useAsset(item.imgSrc)" alt="가족사진 이미지" />
                </div>
                <div class="text_wrap">
                    <p>{{ item.fileName }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['item']);

const learnStore = useApiLearnStore();
const { drillLearningListState } = storeToRefs(learnStore);

onMounted(async () => {
    await learnStore.getLearnDrillLearningParticipation({
        studUuid: props.item.studUuid,
        semId: props.item.semId,
        sessId: props.item.sessId,
        chId: props.item.chId
    });
});
</script>
