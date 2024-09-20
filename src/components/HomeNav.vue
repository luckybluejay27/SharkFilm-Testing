<template>
  <ul class="HomeNav">
    <li><RouterLink :to="{ name: 'CommsPage' }">CommsPage</RouterLink></li>
    <li><RouterLink :to="{ name: 'HomeView' }">Home View</RouterLink></li>
    <li><RouterLink :to="{ name: 'Library' }">Library</RouterLink></li>
    <li><RouterLink :to="{ name: 'Login' }">Login</RouterLink></li>
    <li><RouterLink :to="{ name: 'Portfolio' }">Portfolio</RouterLink></li>
    <li><RouterLink :to="{ name: 'SupportView' }">Support View</RouterLink></li>
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
  { path: "/src/views/HomeView.vue", name: "HomeView", component: HomeView },
  { path: "/src/views/CommsPage.vue", name: "CommsPage", component: CommsPage },
  { path: "/src/views/Library.vue", name: "Library", component: Library },
  { path: "/src/views/Login.vue", name: "Login", component: Login },
  {
    path: "src/views/Portfolio.vue",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "src/views/SupportView.vue",
    name: "SupportView",
    component: SupportView,
  },
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
