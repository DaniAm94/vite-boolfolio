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
    <section id="projects-list">
        <ul v-if="projects.length" class="list-unstyled row row-cols-1 row-gap-4">
            <li class="col" v-for="project in projects" :key="project.id">
                <ProjectCard :isDetailPage="false" :project="project" />

            </li>
        </ul>
        <h4 v-else>Non ci sono progetti</h4>
    </section>
</template>

<style>
/*Css*/
</style>