<template>
    <div class="dashboard-area">
        <slot />
    </div>
</template>

<script setup>
onMounted(() => {
    useWindowSize();
});
</script>

<style lang="scss">
.dashboard-area {
    width: 100%;
    padding: 3rem;
    background: #f5f6fa;

    &.student {
        background: #334152;
        border-top-right-radius: 2.5rem;
    }
}
</style>
