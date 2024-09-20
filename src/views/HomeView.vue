<template>
  <div class="SharkTitleBox">
    <BigTitle>SharkFilm</BigTitle>
    <SmallTitle>Studios</SmallTitle>
    <img src="../assets/FinVector.svg" alt="ShakrFin" class="finVector" />
    <HomeNav />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import HomeNav from "@/components/HomeNav.vue";

export default defineComponent({
  name: "HomeView",
  components: { HomeNav },
});
</script>
