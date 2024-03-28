<script>
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';
const defaulEndpoint = 'http://localhost:8000/api/projects/';
export default {
  name: 'Boolfolio',
  components: { AppHeader },
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
  <main class="container py-3">
    <ul>
      <li v-for="project in projects" :key="project.id">
        <h3>{{ project.title }}</h3>

      </li>
    </ul>
  </main>
</template>

<style>
/*Css*/
</style>