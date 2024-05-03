<template>
    <div class="colorboard" :class="{ paintable: props.paintable }">
        <div v-for="cell in props.grid" :key="cell.id" :class="[{ grid: true, painted: cell.painted }, cell.color]"></div>
        <div v-if="stamp" class="board-stamp">
            <v-img :src="stampSrc" alt="어떻게 이렇게까지 잘하는 거지" />
        </div>
    </div>
</template>
<script setup>
import { v4 as uuidv4 } from 'uuid';

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
    stamp: { type: Number, default: 0 }
});

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
            return ''; // Return a default value or handle error case
    }
});
</script>
