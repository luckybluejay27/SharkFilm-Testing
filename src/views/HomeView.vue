<template>
  <div class="SharkTitleContainer">
    <HomeNav />
    <div class="SharkTitle">
      <BigTitle>SharkFilm</BigTitle>
      <SmallTitle>Studio</SmallTitle>
      <img src="../assets/FinVector.svg" class="FinSVG" />
    </div>
  </div>
</template>

<script>
import HomeNav from "@/components/HomeNav.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: { HomeNav },
});
</script>
