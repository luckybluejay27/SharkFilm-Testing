<template>
  <ul class="HomeNav">
    <li><RouterLink :to="{ name: 'Comms' }">Comms Page</RouterLink></li>
    <li><RouterLink :to="{ name: 'Home' }">Home View</RouterLink></li>
    <li><RouterLink :to="{ name: 'Library' }">Library</RouterLink></li>
    <li><RouterLink :to="{ name: 'Login' }">Login</RouterLink></li>
    <li><RouterLink :to="{ name: 'Portfolio' }">Portfolio</RouterLink></li>
    <li><RouterLink :to="{ name: 'Support' }">Support View</RouterLink></li>
  </ul>
</template>

<script>
import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CommsPage from "@/views/CommsPage.vue";
import Library from "@/views/Library.vue";
import Login from "@/views/Login.vue";
import Portfolio from "@/views/Portfolio.vue";
import SupportView from "@/views/SupportView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/comms", name: "Comms", component: CommsPage },
  { path: "/library", name: "Library", component: Library },
  { path: "/login", name: "Login", component: Login },
  { path: "/portfolio", name: "Portfolio", component: Portfolio },
  { path: "/support", name: "Support", component: SupportView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
</script>

<style>
/* Add your CSS styles here */
</style>
