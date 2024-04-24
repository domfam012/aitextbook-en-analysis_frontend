<template></template>

<script setup>
const props = defineProps(['series', 'labels']);

const series = ref(props.series);
const chartOptions = ref({
    chart: {
        height: 330,
        type: 'donut'
    },
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            return val.toFixed(0);
        }
    },
    labels: props.labels
});
</script>

<style lang="scss" scoped></style>
