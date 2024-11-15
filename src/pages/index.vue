<template>
  <PrimeNav :is-prime-index="true" :is-prime-stick="isSticky" />
  <Socials />
  <CarouselPromo />
  <!-- Shark Splash -->
  <div class="SharkSplash">
    <img src="../assets/SharkSplashTitle.svg">
    <h1 class="index-title">Animation: Untethered</h1>
  </div>
  <!-- Our Mission -->
  <div class="OurMission">
    <h1>Our Mission</h1>
    <p>
      To empower creation without external pressure, fostering an environment
      free from convention. Through collaboration, we support each other.
    </p>
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
