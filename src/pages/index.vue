<template>
  <div class="page">
    <!-- Shark Splash -->
    <div class="SharkSplash">
      <img src="../assets/SharkSplashTitle.svg">
      <h1 class="index-title">Animation: Untethered</h1>
    </div>
    <!-- Carousel -->
    <CarouselPromo />
    <!-- Our Mission -->
    <div class="OurMission">
      <h1>Our Mission</h1>
      <p>
        To empower creation without external pressure, fostering an environment
        free from convention. Through collaboration, we support each other.
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
