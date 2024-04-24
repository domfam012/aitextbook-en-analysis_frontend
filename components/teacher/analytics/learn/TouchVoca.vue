<template>
    <v-sheet class="inner_contents">
        <v-list class="chart_wrap gap3" max-width="105rem" v-if="vocaState?.length > 0">
            <template v-for="(item, index) in vocaState" :key="index">
                <v-list-item class="chart">
                    <div class="avatar avatar-box">
                        <v-img :src="avatarSrc" alt="아바타 이미지" class="avatar-item" max-width="5rem" />
                        <div class="avatar-info">
                            <span class="info_number">15번</span>
                            <span class="info_name">늘푸른하늘</span>
                        </div>
                    </div>
                    <div class="radial_bars">
                        <ChartMultipleRadialbars
                            @click="openModal({ type: 'vocaLearningStatus' })"
                            :values="[
                                [20, '#B0B0B0', 2],
                                [40, '#FFBF00', 3],
                                [50, '#42C5B1', 4],
                                [60, '#46A7E5', 5]
                            ]"
                        />
                    </div>
                </v-list-item>
            </template>
        </v-list>
        <div v-else class="card_no_data">
            <i class="ico no_voca ico_size_25" />
            <p>아직 응시한 학생이 없습니다.</p>
        </div>
        <div class="extra">
            <v-list class="chart_label">
                <v-list-item class="label_blue">응시한 단어 수</v-list-item>
                <v-list-item class="label_green">알고 있는 단어 수</v-list-item>
                <v-list-item class="label_yellow">조금 알거나 모르는 단어 수</v-list-item>
                <v-list-item class="label_gray">모르는 단어 수</v-list-item>
            </v-list>
        </div>
        <div class="page_buttons mgt30">
            <v-btn rounded flat class="secondary">3명 더 보기 (1/4)</v-btn>
        </div>
    </v-sheet>
    <template v-if="modalData.type === 'vocaLearningStatus'">
        <ModalVocaLearningStatus />
    </template>
</template>

<script setup>
import avatarSrc from '@/assets/images/temp/img_pho_st01.png';
const props = defineProps(['depth']);

const apiClassStore = useApiTeacherClassStore();
const { vocaState } = storeToRefs(apiClassStore);
const { modalData, openModal } = useModalStore();
</script>
