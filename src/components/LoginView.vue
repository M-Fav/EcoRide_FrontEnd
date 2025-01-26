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
  import axios from "axios";
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
            const response = await axios.post("http://localhost:8080/login", {
            pseudo: this.username,
            password: this.password,
            });

            // Récupérer le token et rediriger vers la page du token
            this.token = response.data.access_token;
            console.log("Token récupéré :", this.token);

            // Redirection avec le token en état
            this.$router.push({ name: "token-display", query: { token: this.token } });

        } catch (err) {
            console.error("Erreur lors de la connexion :", err);
            this.error = err.response?.data?.message || "Une erreur est survenue.";
        }
        }
      },
  };
  </script>
  
  <style scoped>
  /* Votre style ici */
  </style>
  