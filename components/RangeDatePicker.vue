<template>
    <div class="date_picker_slot">
        <vc-date-picker
            v-model="range"
            is-range
            :model-config="{
                type: 'string',
                mask: 'YYYY-MM-DD'
            }"
            :masks="{ L: 'YYYY-MM-DD', title: 'YYYY년 MMM' }"
        >
            <template #default="{ inputValue, togglePopover }">
                <div class="date_selector">
                    <div class="start_date">
                        <input :value="inputValue.start || 'YYYY.MM.DD'" @click="() => togglePopover()" />
                        <i class="ico calendar" @click="() => togglePopover()"></i>
                    </div>
                    <p>~</p>
                    <div class="end_date">
                        <input :value="inputValue.end || 'YYYY.MM.DD'" @click="() => togglePopover()" />
                        <i class="ico calendar" @click="() => togglePopover()"></i>
                    </div>
                </div>
            </template>
            <template #footer>
                <div class="footer_text">
                    <p>
                        <span>{{ footerText }}</span>
                    </p>
                </div>
            </template>
        </vc-date-picker>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const range = ref({
    start: null,
    end: null
});
</script>
