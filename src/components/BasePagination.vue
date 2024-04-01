<script>
//Javascript
export default {
    name: 'Base Pagination',
    props: {
        links: Array
    },
    emits: ['change-page']
}
</script>

<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">

            <li v-for="link in links" :key="link.label" class="page-item"
                :class="{ 'active': link.active, 'disabled ': !link.url }">
                <button :disabled="!link.url" class="page-link" v-html="link.label"
                    @click="$emit('change-page', link.url)"></button>
            </li>

        </ul>
    </nav>
</template>

<style>
/*Css*/
</style>