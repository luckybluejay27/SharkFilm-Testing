<template>
  <PrimeNav
    :is-prime-index="true"
    :is-prime-stick="isSticky"
  />
  <Socials />
  <CarouselPromo />
  <!-- Shark Splash -->
  <div class="SharkSplash">
    <img src="../assets/SharkSplashTitle.svg">
    <h1 class="index-title"> Animation: Untethered</h1>
  </div>
  <!-- Our Mission -->
  <div class="OurMission">
    <h1> Our Mission </h1>
    <p> Our mission is to empower artists to collaborate on products that resonate with authenticity and creative freedom. Through a network of crowdfunded projects, we aim to foster an environment where creators feel confident producing their best work, unrestricted by external pressures, and supported by a community that values creativity over commercial influence.</p>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
  import { onMounted, onUnmounted, ref } from 'vue'
  import PrimeNav from '@/components/PrimeNav.vue'
  import CarouselPromo from '../components/CarouselPromo.vue'
  import Socials from '../components/Socials.vue'

  export default {
    name: 'Home',
    components: {
      PrimeNav,
      CarouselPromo,
      Socials,
    },
    setup () {
      const isSticky = ref(false)

      const handleScroll = () => {
        const navPosition = window.innerHeight - 50 // Adjust this value based on your nav height
        isSticky.value = window.scrollY >= navPosition
      }

      onMounted(() => {
        window.addEventListener('scroll', handleScroll)
      })

      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
      })

      return {
        isSticky,
      }
    },
  }
</script>
