<template>
  <ul class="HomeNav">
    <!-- Turn below into working Router Links -->
    <ul>
      <li><RouterLink :to="{ name: 'HomeView' }"></RouterLink>Home</li>
      <li><RouterLink :to="{ name: 'CommsPage' }"></RouterLink>Commissions</li>
      <li><RouterLink :to="{ name: 'Library' }"></RouterLink>Library</li>
      <li><RouterLink :to="{ name: 'Login' }"></RouterLink>Login</li>
      <li><RouterLink :to="{ name: 'Portfolio' }"></RouterLink>Portfolio</li>
      <li><RouterLink :to="{ name: 'SupportView' }"></RouterLink>Fundingt</li>
    </ul>
  </ul>
</template>

<script>
import { createApp } from "vue";
import App from "../App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CommsPage from "@/views/CommsPage.vue";
import Library from "@/views/Library.vue";
import SupportView from "@/views/SupportView.vue";
import Login from "@/views/Login.vue";
import PortfolioView from "@/views/Portfolio.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/CommsPage.vue",
      name: "CommsPage",
      component: CommsPage,
    },
    {
      path: "/Library.vue",
      name: "Library",
      component: Library,
    },
    {
      path: "/Login.vue",
      name: "Login",
      component: Login,
    },
    {
      path: "/Portfolio.vue",
      name: "Portfolio",
      component: PortfolioView,
    },
    {
      path: "/SupportView.vue",
      name: "SupportView",
      component: SupportView,
    },
  ],
});
createApp(App).use(router).mount("#app");
export default router;
</script>

<style></style>
