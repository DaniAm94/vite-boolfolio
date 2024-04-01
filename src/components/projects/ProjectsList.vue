<script>
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'Projects List',
    components: { ProjectCard },
    props: {
        projects: Array
    }
}
</script>

<template>
    <section class="my-5" id="projects-list">
        <ul v-if="projects.length" class="list-unstyled row row-cols-3 row-gap-4">
            <li class="col" v-for="project in projects" :key="project.id">
                <ProjectCard :project="project" />

            </li>
        </ul>
        <h4 v-else>Non ci sono progetti</h4>
    </section>
</template>

<style>
/*Css*/
</style>