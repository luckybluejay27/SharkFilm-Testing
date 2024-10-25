<template>
  <PrimeNav />
  <Socials />

  <!-- Splash -->
  <div class="index">
    <img src="../assets/SharkSplashTitle.svg">
    <h1> Animation: Unhindered </h1>
  </div>

  <!-- Promotional Content -->
  <br>
  <br>
  <ProjectCarousel />

  <!-- Mission Statement -->
  <div class="carousel-title">
    Our Mission
    <h1 class="mission"> Our mission is to empower artists to collaborate on products that resonate with authenticity and creative freedom. Through a network of crowdfunded projects, we aim to foster an environment where creators feel confident producing their best work, unrestricted by external pressures, and supported by a community that values creativity over commercial influence.</h1>
  </div>
</template>

<script>
  import PrimeNav from '@/components/PrimeNav.vue'
  import ProjectCarousel from '../components/ProjectCarousel.vue'
  import Socials from '../components/Socials.vue'

  export default {
    name: 'Home',
    components: ProjectCarousel,
    Socials,
    PrimeNav,
  }
</script>
