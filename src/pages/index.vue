<template>
  <PrimeNav />
  <Socials />
  <CarouselPromo />
  <!-- Shark Splash -->
  <div class="SharkSplash">
    <img src="../assets/SharkSplashTitle.svg">
    <h1 class="index-title"> Animation: Untethered</h1>
  </div>
  <!--  -->

</template>

<script>
  import PrimeNav from '@/components/PrimeNav.vue'
  import CarouselPromo from '../components/CarouselPromo.vue'
  import Socials from '../components/Socials.vue'

  export default {
    name: 'Home',
    components: CarouselPromo,
    Socials,
    PrimeNav,
  }
</script>

<style scoped>
</style>
