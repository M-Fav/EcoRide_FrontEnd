<template>
  <div id="app">
    
    <HeaderView />
    
    <!-- Le composant sera rendu ici en fonction de la route active -->
    <router-view />
  </div>
</template>

<script>
  import HeaderView from './components/HeaderView.vue';
  export default {
    name: 'App',
    components: {
    HeaderView,  
    },
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
