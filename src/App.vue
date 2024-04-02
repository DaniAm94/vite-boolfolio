<script>
import AppHeader from './components/AppHeader.vue';
import { store } from './data/store'
export default {
  name: 'Boolfolio',
  components: { AppHeader },
  data: () => ({
    store
  })

};
</script>

<template>
  <AppHeader />
  <main class="container pt-5">
    <AppLoader v-if="store.isLoading" />
    <!-- Contenuti pagina-->
    <RouterView />
  </main>
</template>

<style>
/*Css*/
</style>