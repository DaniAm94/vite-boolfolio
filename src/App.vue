<script>
import AppHeader from './components/AppHeader.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
import ProjectCard from './components/projects/ProjectCard.vue';
import axios from 'axios';
const defaulEndpoint = 'http://localhost:8000/api/projects/';
export default {
  name: 'Boolfolio',
  components: { AppHeader, ProjectCard, ProjectsList },
  data: () => ({
    projects: []
  }),
  methods: {
    fetchProjects(endpoint) {
      axios.get(endpoint).then(res => {
        this.projects = res.data;
      })
    }
  },
  created() {
    this.fetchProjects(defaulEndpoint);
  }
};
</script>

<template>
  <AppHeader />
  <main class="container pt-5">
    <ProjectsList :projects="projects" />
  </main>
</template>

<style>
/*Css*/
</style>