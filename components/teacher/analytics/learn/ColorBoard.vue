<template>
    <div class="colorboard" :class="{ paintable: props.paintable }">
        <div
            v-for="cell in props.grid"
            :key="cell.id"
            :class="[{ grid: true, painted: cell.painted }, cell.color]"
            @click="setColor(cell)"
        ></div>
        <div v-if="stamp" class="board-stamp bg-white">
            <v-img :src="stampSrc" alt="어떻게 이렇게까지 잘하는 거지" />
        </div>
    </div>
</template>
<script setup>
import stamp01 from '@/assets/images/img_stamp_01.svg';
import stamp02 from '@/assets/images/img_stamp_02.svg';
import stamp03 from '@/assets/images/img_stamp_03.svg';
import stamp04 from '@/assets/images/img_stamp_04.svg';
import stamp05 from '@/assets/images/img_stamp_05.svg';
import stamp06 from '@/assets/images/img_stamp_06.svg';
import stamp07 from '@/assets/images/img_stamp_07.svg';
import stamp08 from '@/assets/images/img_stamp_08.svg';
import stamp09 from '@/assets/images/img_stamp_09.svg';
import stamp10 from '@/assets/images/img_stamp_10.svg';
const props = defineProps({
    paintable: { type: Boolean, default: false },
    grid: { type: Array, default: [] },
    stamp: { type: Number, default: 0 }
});

const setColor = value => {
    value.painted = !value.painted;
};

const stampSrc = computed(() => {
    switch (props.stamp) {
        case 1:
            return stamp01;
        case 2:
            return stamp02;
        case 3:
            return stamp03;
        case 4:
            return stamp04;
        case 5:
            return stamp05;
        case 6:
            return stamp06;
        case 7:
            return stamp07;
        case 8:
            return stamp08;
        case 9:
            return stamp09;
        case 10:
            return stamp10;
        default:
            return ''; // Return a default value or handle error case
    }
});
</script>

<style scoped lang="scss">
.colorboard {
    max-width: 25rem;
    height: 23.5rem;
    display: flex;
    flex-wrap: wrap;

    &.paintable {
        max-width: 49.4rem;
        max-height: 49.4rem;
        // height: 51.3rem;
        height: 100%;
        .grid {
            width: 2.6rem;
            height: 2.6rem;
        }
    }

    .grid {
        width: 1.3rem;
        height: 1.3rem;
        border: 0.5px solid black;
        cursor: pointer;
    }

    .painted {
        &.blue {
            background: #46a7e5;
        }

        &.green {
            background: #81b01b;
        }

        &.darkgreen {
            background: #0a8;
        }
        &.red {
            background: #fd6e7f;
        }
        &.yellow {
            background: #ffd44d;
        }
    }
}
</style>
