<script>
export default {
    name: 'Not Found Page'
}
</script>

<template>
    <div class="d-flex flex-column row-gap-4 justify-content-center align-items-center"
        style="height: calc(100vh - 104px);">
        <h1>404 | Not Found</h1>
        <button class="btn btn-secondary " @click="$router.back()">Torna Indietro</button>
    </div>
</template>

<style>
/*Css*/
</style>