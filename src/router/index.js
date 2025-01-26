import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../components/LoginView.vue'
import TokenView from '../components/TokenView.vue'  // Assurez-vous que ce fichier existe

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/token',
    name: 'token-display',  // Assurez-vous que ce nom de route est utilisé dans this.$router.push
    component: TokenView,
    props: route => ({ token: route.state?.token }) // Utilisez "state" pour récupérer le token
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
