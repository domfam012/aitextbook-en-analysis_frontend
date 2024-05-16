<template>
    <v-card elevation="0" class="v-card-green dailyPerformance" v-if="learningLessonsState">
        <StudentAnalyticsSelector :current-page="currentPage" />
        <!-- !NOTE .class-box에 scroll 퍼블리싱 작업 필요 (style임시) -->
        <v-container fluid class="class-box" style="overflow-y: scroll; height: 42rem">
            <v-list variant="flat" density="compact">
                <v-list-item v-for="item in chapterLearningStatusState">
                    <p class="tit_txt">{{ item.sctnNameEng }}</p>
                    <p class="sub_txt">{{ item.sctnNameKor }}</p>
                    <div class="extra">
                        <v-btn rounded flat size="small" class="primary">{{ t('analytics.progressInfo.review') }}</v-btn>
                    </div>
                </v-list-item>
            </v-list>
        </v-container>
    </v-card>
    <v-card elevation="0" class="v-card-green dailyPerformance" v-else>
        <v-card-item>
            <v-card-title>
                <span class="font-color-primary">
                    <time :datetime="formatDate">
                        {{ dayjs(formatDate).format(t('analytics.timeFormat')) }}
                    </time>
                    {{ t('analytics.progressInfo.classInformation') }}
                </span>
            </v-card-title>
        </v-card-item>
        <v-card-text>
            <div class="card_no_data">
                <i class="ico no_color_board ico_size_25" />
                <p>{{ t('analytics.progressInfo.noClass') }}.</p>
            </div>
        </v-card-text>
    </v-card>
    <template v-if="modalData.type === 'progressInfo'">
        <ModalProgressInfo />
    </template>
</template>

<script setup>
import dayjs from 'dayjs';
const { t } = useI18n();
const { modalData } = useModalStore();
const todayStore = useApiTodayStore();
const calendarStore = useApiCalendarStore();

const { learningLessonsState } = storeToRefs(todayStore);
const { formatDate } = storeToRefs(calendarStore);
const { chapterLearningStatusState } = storeToRefs(todayStore);

const currentPage = ref(0);
</script>
