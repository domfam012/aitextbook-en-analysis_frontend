<template>
    <v-card elevation="0" class="v-card-green dailyPerformance">
        <StudentAnalyticsSelector :current-page="currentPage" />
        <v-container fluid class="class-box">
            <v-list variant="flat" density="compact">
                <v-list-item v-for="item in chapterLearningStatusState">
                    <p class="tit_txt">{{ item.sctnNameEng }}</p>
                    <p class="sub_txt">{{ item.sctnNameKor }}</p>
                    <div class="extra">
                        <v-btn rounded flat size="small" class="primary">복습</v-btn>
                    </div>
                </v-list-item>
            </v-list>
        </v-container>
    </v-card>
    <template v-if="modalData.type === 'progressInfo'">
        <ModalProgressInfo />
    </template>
</template>

<script setup>
const { modalData } = useModalStore();
const todayStore = useApiTodayStore();

const { chapterLearningStatusState } = storeToRefs(todayStore);
const currentPage = ref(0);
</script>
