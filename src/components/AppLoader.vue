<script>
export default {
    name: 'App Loader'
}
</script>

<template>
    <div class="loader-overlay">
        <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    .spinner-border {
        width: 100px;
        height: 100px;
    }
}
</style>