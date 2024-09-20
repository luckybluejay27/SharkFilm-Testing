<template>
  <div id="app">
    <!-- Your app starts here -->
    <HomeView />
    <RouterLink />
  </div>
</template>

<script>
import router from "./router";
import { defineComponent } from "vue";
import HomeView from "./views/HomeView.vue";
import "../src/css/GlobalDark.css";

export default defineComponent({
  name: "App",
  components: { HomeView },
});
//import css
import "../src/css/GlobalDark.css";
import { RouterLink } from "vue-router";
</script>
