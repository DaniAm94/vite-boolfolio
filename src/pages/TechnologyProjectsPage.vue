<script>
import ProjectsList from '../components/projects/ProjectsList.vue';
import axios from 'axios';
import { store } from '../data/store';
const defaultEndpoint = 'http://localhost:8000/api/';

export default {
    name: 'Technology Projects Page',
    components: { ProjectsList },
    data: () => ({
        projects: [],
        technologyLabel: '',
        store
    }),
    methods: {
        async fetchProjects() {
            store.isLoading = true;
            try {
                const res = await axios.get(defaultEndpoint + `technologies/${this.$route.params.slug}/projects`)
                const { projects, label } = res.data;
                this.projects = projects;
                this.technologyLabel = label;
            } catch (err) {
                console.error(err);
                this.$router.push({ name: 'not-found' });
            }
            store.isLoading = false;
        }
    },
    created() {
        this.fetchProjects();
    }
}
</script>

<template>
    <h1>Progetti della che usano la tecnologia: {{ technologyLabel }}</h1>
    <ProjectsList v-if="!store.isLoading && projects" :projects="projects" />
</template>

<style>
/*Css*/
</style>