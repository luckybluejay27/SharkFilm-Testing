<template>
  <div id="app">
    <!-- Your app starts here -->
    <HomeView />
    <HomeNav />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import HomeNav from "./components/HomeNav.vue";
import HomeView from "./views/HomeView.vue";
import "../src/css/GlobalDark.css";

export default defineComponent({
  name: "App",
  components: { HomeView, HomeNav },
});
//import css
import "../src/css/GlobalDark.css";
</script>
