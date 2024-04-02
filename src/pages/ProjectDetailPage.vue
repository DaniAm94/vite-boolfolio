<script>
import ProjectCard from '../components/projects/ProjectCard.vue';
import AppAlert from '../components/AppAlert.vue';
import axios from 'axios';
import { store } from '../data/store';
const defaultEndpoint = 'http://localhost:8000/api/projects/';
export default {
    name: 'Project Detail Page',
    components: { ProjectCard },
    data: () => ({
        project: null,
        isAlertOpen: false,
        store
    }),
    methods: {
        getProject() {
            store.isLoading = true;
            axios.get(defaultEndpoint + this.$route.params.slug)
                .then(res => {
                    this.isAlertOpen = false;
                    this.project = res.data;
                }).catch(err => {
                    console.error(err);
                    this.isAlertOpen = true;
                }).then(() => {
                    store.isLoading = false;
                })
        }
    },
    created() {
        this.getProject();
    }
}
</script>

<template>
    <h2>Dettaglio progetto</h2>
    <ProjectCard :is-detail-page="true" v-if="!store.isLoading && project" :project="project" />
</template>

<style>
/*Css*/
</style>