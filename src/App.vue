<template>
  <div id="app">
    <!-- Le logo Vue (optionnel) -->
    <img alt="Vue logo" src="./assets/images/logo.png">
    
    <!-- Le composant sera rendu ici en fonction de la route active -->
    <router-view />
  </div>
</template>

<script>
// Importation de LoginView n'est plus nécessaire
// import LoginView from './components/LoginView.vue';

export default {
  name: 'App',
  // Supprimer la référence au composant LoginView
  components: {
    // LoginView // Cette ligne peut être supprimée
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
