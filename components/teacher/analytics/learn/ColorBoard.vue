<template>
    <div class="colorboard" :class="{ paintable: props.paintable }" @dragover="e => e.preventDefault()">
        <div
            v-for="(cell, index) in isEdit ? studentColorBoardState[0].dsgnUseInfo : props.grid"
            :id="cell.id"
            :key="cell.id"
            :class="[{ grid: true, painted: cell.painted }, cell.color]"
            :draggable="cell.painted"
            @dragenter.prevent
            @dragover.prevent
            @dragstart="handleDragStart($event, cell)"
            @drop="handleDrop($event, cell)"
            @click="setColor(cell, index)"
        ></div>

        <div v-if="stamp" class="board-stamp">
            <v-img :src="stampSrc" :alt="t('analytics.stampImg')" />
        </div>
    </div>
</template>
<script setup>
import { v4 as uuidv4 } from 'uuid';
const { t } = useI18n();
const mode = useCookie('mode');
const props = defineProps({
    paintable: { type: Boolean, default: false },
    grid: {
        type: Array,
        default: [
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },

            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },

            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },

            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },

            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },

            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },

            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },

            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },

            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: ''
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'yellow'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'red'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'green'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'darkgreen'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            },
            {
                id: uuidv4(),
                painted: true,
                color: 'blue'
            }
        ]
    },
    page: {
        type: Number
    },
    selectedColor: {
        type: String
    },
    stamp: { type: Number, default: 0 },
    isEdit: { type: Boolean, default: false }
});
const studentCuriApiStore = useApiCuriStore();

const { studentColorBoardState, studnetCollectedColorState, studentRemainingColorState, studentCollectedColorBoardState } =
    storeToRefs(studentCuriApiStore);

const stampSrc = computed(() => {
    switch (props.stamp) {
        case 1:
            return useAsset('images/img_stamp_01.svg');
        case 2:
            return useAsset('images/img_stamp_02.svg');
        case 3:
            return useAsset('images/img_stamp_03.svg');

        case 4:
            return useAsset('images/img_stamp_04.svg');

        case 5:
            return useAsset('images/img_stamp_05.svg');

        case 6:
            return useAsset('images/img_stamp_06.svg');

        case 7:
            return useAsset('images/img_stamp_07.svg');

        case 8:
            return useAsset('images/img_stamp_08.svg');

        case 9:
            return useAsset('images/img_stamp_09.svg');

        case 10:
            return useAsset('images/img_stamp_10.svg');

        default:
            return '';
    }
});

const handleDragStart = (event, item) => {
    event.dataTransfer.dropEffect = 'move';
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('itemID', item.id);
};
const handleDrop = (event, endedItem) => {
    const startedItemID = event.dataTransfer.getData('itemID');
    const findItem = studentColorBoardState.value[props.page].dsgnUseInfo.find(item => item.id === startedItemID);
    if (findItem.color === endedItem.color) {
        findItem.painted = false;
        endedItem.painted = true;
    }
};

const setColor = (value, index) => {
    if (props.isEdit && !props.stamp && mode.value === 'student') {
        switch (props.selectedColor) {
            case 'blue':
                if (value.color === 'blue') {
                    if (
                        studentRemainingColorState.value[0].colorLstnnCnt === 0 &&
                        studentColorBoardState.value[props.page].dsgnUseInfo[index].painted === true
                    ) {
                        studentRemainingColorState.value[0].colorLstnnCnt += 1;

                        studentColorBoardState.value[props.page].dsgnUseInfo[index].painted =
                            !studentColorBoardState.value[props.page].dsgnUseInfo[index].painted;
                    } else if (studentRemainingColorState.value[0].colorLstnnCnt > 0) {
                        studentColorBoardState.value[props.page].dsgnUseInfo[index].painted =
                            !studentColorBoardState.value[props.page].dsgnUseInfo[index].painted;

                        studentColorBoardState.value[props.page].dsgnUseInfo[index].painted
                            ? (studentRemainingColorState.value[0].colorLstnnCnt -= 1)
                            : (studentRemainingColorState.value[0].colorLstnnCnt += 1);
                    }
                }
                break;
            case 'red':
                if (value.color === 'red') {
                    if (
                        studentRemainingColorState.value[0].colorViewCnt === 0 &&
                        studentColorBoardState.value[props.page].dsgnUseInfo[index].painted === true
                    ) {
                        studentRemainingColorState.value[0].colorViewCnt += 1;
                        studentColorBoardState.value[props.page].dsgnUseInfo[index].painted =
                            !studentColorBoardState.value[props.page].dsgnUseInfo[index].painted;
                    } else if (studentRemainingColorState.value[0].colorViewCnt > 0) {
                        studentColorBoardState.value[props.page].dsgnUseInfo[index].painted =
                            !studentColorBoardState.value[props.page].dsgnUseInfo[index].painted;
                        studentColorBoardState.value[props.page].dsgnUseInfo[index].painted
                            ? (studentRemainingColorState.value[0].colorViewCnt -= 1)
                            : (studentRemainingColorState.value[0].colorViewCnt += 1);
                    }
                }
                break;

            case 'yellow':
                if (value.color === 'yellow') {
                    if (
                        studentRemainingColorState.value[0].colorRedngCnt === 0 &&
                        studentColorBoardState.value[props.page].dsgnUseInfo[index].painted === true
                    ) {
                        studentRemainingColorState.value[0].colorRedngCnt += 1;
                        studentColorBoardState.value[props.page].dsgnUseInfo[index].painted =
                            !studentColorBoardState.value[props.page].dsgnUseInfo[index].painted;
                    } else if (studentRemainingColorState.value[0].colorRedngCnt > 0) {
                        studentColorBoardState.value[props.page].dsgnUseInfo[index].painted =
                            !studentColorBoardState.value[props.page].dsgnUseInfo[index].painted;
                        studentColorBoardState.value[props.page].dsgnUseInfo[index].painted
                            ? (studentRemainingColorState.value[0].colorRedngCnt -= 1)
                            : (studentRemainingColorState.value[0].colorRedngCnt += 1);
                    }
                }
                break;

            case 'green':
                if (value.color === 'green') {
                    if (
                        studentRemainingColorState.value[0].colorSpkngCnt === 0 &&
                        studentColorBoardState.value[props.page].dsgnUseInfo[index].painted === true
                    ) {
                        studentRemainingColorState.value[0].colorSpkngCnt += 1;
                        studentColorBoardState.value[props.page].dsgnUseInfo[index].painted =
                            !studentColorBoardState.value[props.page].dsgnUseInfo[index].painted;
                    } else if (studentRemainingColorState.value[0].colorSpkngCnt > 0) {
                        studentColorBoardState.value[props.page].dsgnUseInfo[index].painted =
                            !studentColorBoardState.value[props.page].dsgnUseInfo[index].painted;
                        studentColorBoardState.value[props.page].dsgnUseInfo[index].painted
                            ? (studentRemainingColorState.value[0].colorSpkngCnt -= 1)
                            : (studentRemainingColorState.value[0].colorSpkngCnt += 1);
                    }
                }
                break;

            case 'darkgreen':
                if (value.color === 'darkgreen') {
                    if (
                        studentRemainingColorState.value[0].colorWritngCnt === 0 &&
                        studentColorBoardState.value[props.page].dsgnUseInfo[index].painted === true
                    ) {
                        studentRemainingColorState.value[0].colorWritngCnt += 1;
                        studentColorBoardState.value[props.page].dsgnUseInfo[index].painted =
                            !studentColorBoardState.value[props.page].dsgnUseInfo[index].painted;
                    } else if (studentRemainingColorState.value[0].colorWritngCnt > 0) {
                        studentColorBoardState.value[props.page].dsgnUseInfo[index].painted =
                            !studentColorBoardState.value[props.page].dsgnUseInfo[index].painted;
                        studentColorBoardState.value[props.page].dsgnUseInfo[index].painted
                            ? (studentRemainingColorState.value[0].colorWritngCnt -= 1)
                            : (studentRemainingColorState.value[0].colorWritngCnt += 1);
                    }
                }
                break;
        }
    }
};
</script>
