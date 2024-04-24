<template>
    <div class="note_items">
        <!-- !Note 더보기 클릭시 .note_item가 증가 됩니다.  -->
        <div class="note_item" v-for="item in writtenNoteState.slice(0, currentPageCount)" :key="writtenNoteState.title">
            <div class="inner_title gap1">
                <div class="title_wrap">
                    <h3 class="bullet">{{ item.title }}</h3>
                    <span>{{ item.description }}</span>
                </div>
                <strong class="result">{{ item.count }}건</strong>
            </div>
            <div class="card_items type_wrap">
                <div class="item" v-for="index in item.imgSrc" :key="index">
                    <div class="image_wrap">
                        <v-img :src="index.img" alt="가족사진 이미지" />
                    </div>
                </div>
            </div>
        </div>
        <div class="page_buttons" v-if="currentPageCountDisplay !== totalPageCountDisplay">
            <v-btn rounded flat class="secondary" @click="getMoreNotePage"
                >더보기 {{ currentPageCountDisplay }}/{{ totalPageCountDisplay }}
            </v-btn>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['item']);

// 현재 페이지 카운트 갯수
const currentPageCount = ref(2);

const learnStore = useApiLearnStore();
const { writtenNoteState } = storeToRefs(learnStore);

const currentPageCountDisplay = computed(() => currentPageCount.value / 2);
const totalPageCountDisplay = computed(() => Math.ceil(writtenNoteState.value.length / 2));

/**
 * 더보기 버튼
 */
const getMoreNotePage = () => {
    const totalPageCount = writtenNoteState.value.length;
    if (totalPageCount > currentPageCount.value) {
        currentPageCount.value = currentPageCount.value + 2;
    }
};

onMounted(async () => {
    await learnStore.getLearnWrittenNote({
        studUuid: props.item.studUuid,
        semId: props.item.semId,
        sessId: props.item.sessId,
        chId: props.item.chId
    });
});
</script>
