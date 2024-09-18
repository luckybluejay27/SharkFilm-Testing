<template>
  <div id="app">
    <!-- Your app starts here -->
    <HomeView />
    <StickyPrimeNav />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import StickyPrimeNav from "./components/StickyPrimeNav.vue";
import HomeView from "./views/HomeView.vue";

export default defineComponent({
  name: "App",
  components: { HomeView, StickyPrimeNav },
});
//import css
import "../src/css/GlobalDark.css";
</script>
