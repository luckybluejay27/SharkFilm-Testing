<template>
  <div class="page">
    <!-- Shark Splash -->
    <div class="SharkSplash">
      <img src="../assets/SharkSplashTitle.svg">
      <h1 class="index-title">Animation: Untethered</h1>
    </div>
    <!-- Carousel -->
    <CarouselPromo />
    <h1>Hello World</h1>
    <!-- Our Mission -->
    <div class="OurMission">
      <p>
        Empower Creativity, Fund Ingenuity, Shape Tomorrow
      </p>
    </div>
  </div>
</template>

<script>
  import CarouselPromo from '../components/CarouselPromo.vue'

  export default {
    name: 'Home',
    components: {
      CarouselPromo,
    },
  }
</script>
