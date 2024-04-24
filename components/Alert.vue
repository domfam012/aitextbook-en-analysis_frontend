<template>
    <v-dialog v-model="alertData.isOpen" persistent transition="dialog-center-transition" width="auto">
        <div class="dialog">
            <div class="dialog_message">
                <p class="txt_tit">{{ alertData.message }}</p>
            </div>
        </div>
    </v-dialog>
</template>

<script setup>
const { alertData } = useAlertStore();
</script>
