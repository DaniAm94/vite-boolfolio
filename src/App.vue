<script>
import AppHeader from './components/AppHeader.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
import ProjectCard from './components/projects/ProjectCard.vue';
import AppAlert from './components/AppAlert.vue';
import BasePagination from './components/BasePagination.vue';
import axios from 'axios';
import { reactive } from 'vue';
const defaultEndpoint = 'http://localhost:8000/api/projects/';
export default {
  name: 'Boolfolio',
  components: { AppHeader, ProjectCard, ProjectsList, AppAlert, BasePagination },
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
    this.fetchProjects(defaultEndpoint);
  }
};
</script>

<template>
  <AppHeader />
  <main class="container pt-5">
    <h1>Boolfolio</h1>
    <AppAlert :show="isAlertOpen" @close="isAlertOpen = false" @retry="fetchProjects" />
    <AppLoader v-if="isLoading" />
    <div v-else>
      <ProjectsList :projects="projects.data" />
      <BasePagination :links="projects.links" @changePage="fetchProjects" />
    </div>
  </main>
</template>

<style>
/*Css*/
</style>