<script>
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'Boolfolio',
  components: { AppHeader }

};
</script>

<template>
  <AppHeader />
  <main class="container pt-5">
    <AppLoader v-if="isLoading" />
    <!-- Contenuti pagina-->
    <RouterView />
  </main>
</template>

<style>
/*Css*/
</style>