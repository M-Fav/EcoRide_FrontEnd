<template>
    <div class="login">
      <h1>Connexion</h1>
      <form @submit.prevent="login">
        <div>
          <label for="username">Identifiant</label>
          <input
            id="username"
            type="text"
            v-model="username"
            placeholder="Entrez votre identifiant"
            required
          />
        </div>
        <div>
          <label for="password">Mot de passe</label>
          <input
            id="password"
            type="password"
            v-model="password"
            placeholder="Entrez votre mot de passe"
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
  
      <!-- Affichage du token ou des erreurs -->
      <!--<div v-if="token">
        <h2>Token d'accès :</h2>
        <p>{{ token }}</p>
      </div>-->
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import { loginUser } from "../services/backend-api.js";
  import "../assets/styles/login.css";
  
  export default {
    data() {
      return {
        username: "",
        password: "",
        token: null,
        error: null,
      };
    },
    methods: {
    async login() {
      try {
        this.error = null;
        const credentials = { pseudo: this.username, password: this.password };
        const data = await loginUser(credentials);

        console.log("Token récupéré :", data.access_token);

        // Redirection avec le token
        this.$router.push({ name: "token-display", query: { token: data.access_token } });
      } catch (errorMessage) {
        console.error("Erreur lors de la connexion :", errorMessage);
        this.error = errorMessage;
      }
    },
  },
};
</script>
  
  <style scoped>
  /* Votre style ici */
  </style>
  