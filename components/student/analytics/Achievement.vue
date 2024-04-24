<template>
    <v-card height="56rem" elevation="0" class="v-card-blue flex1">
        <div class="achievement">
            <v-card-item>
                <v-card-title>
                    <p>영역별 학업 성취도</p>
                    <v-spacer></v-spacer>
                    <v-btn class="icon_only icon_only-sm" rounded flat @click="openModal({ type: 'achievement' })"
                        ><i class="ico more"
                    /></v-btn>
                </v-card-title>
            </v-card-item>
            <v-card-text class="px30 py30">
                <div class="box"></div>
            </v-card-text>
        </div>
    </v-card>
    <template v-if="modalData.type === 'achievement'">
        <ModalAchievement />
    </template>
</template>
<script setup>
const { modalData, openModal } = useModalStore();
</script>
