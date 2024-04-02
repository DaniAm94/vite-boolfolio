<script>
import ProjectsList from '../components/projects/ProjectsList.vue';
import BasePagination from '../components/BasePagination.vue';
import AppAlert from '../components/AppAlert.vue';
import axios from 'axios';
const defaultEndpoint = 'http://localhost:8000/api/projects/';

export default {
    name: 'Home Page',
    components: { ProjectsList, BasePagination, AppAlert },
    data: () => ({
        projects: {
            data: [],
            links: []
        },
        isLoading: false,
        isAlertOpen: false
    }),
    methods: {
        fetchProjects(endpoint = defaultEndpoint) {
            this.isLoading = true;
            axios.get(endpoint).then(res => {
                this.isAlertOpen = false;
                const { data, links } = res.data;
                this.projects = { data, links };
            }).catch(err => {
                console.error(err);
                this.isAlertOpen = true;
            }).then(() => {
                this.isLoading = false;
            })
        }
    },
    created() {
        this.fetchProjects();
    }
}
</script>

<template>
    <AppAlert :show="isAlertOpen" @close="isAlertOpen = false" @retry="fetchProjects" />
    <h1>Boolfolio</h1>

    <div v-if="!isLoading">
        <ProjectsList :projects="projects.data" />
        <BasePagination :links="projects.links" @changePage="fetchProjects" />
    </div>
</template>

<style>
/*Css*/
</style>