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