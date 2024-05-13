<!-- 모달 팝업 -->
<template>
    <v-dialog v-model="modalData.isOpen" persistent transition="dialog-center-transition" width="auto">
        <div class="dialog">
            <div class="dialog_message">
                <span v-if="modalData.message !== ''">{{ modalData.message }}</span>
                <slot v-else></slot>
            </div>
            <div class="dialog_btn_wrap">
                <slot name="footer">
                    <v-btn
                        v-if="modalData.buttonLabels[0]"
                        rounded
                        flat
                        class="size_md"
                        :class="[modalData.buttonLabels.length === 1 ? 'primary' : 'secondary']"
                        @click="closeModalAndEmit"
                    >
                        {{ modalData.buttonLabels[0] }}
                    </v-btn>
                    <v-btn v-if="modalData.buttonLabels[1]" class="primary size_md" flat rounded @click="$emit('handleAction')">
                        {{ modalData.buttonLabels[1] }}
                    </v-btn>
                </slot>
            </div>
            <slot name="bottom" />
        </div>
    </v-dialog>
</template>

<script setup>
const { modalData, closeModal } = useModalStore();
const emits = defineEmits(['handleAction', 'modalClosed']);
const closeModalAndEmit = () => {
    closeModal();
    emits('modalClosed');
};
</script>
