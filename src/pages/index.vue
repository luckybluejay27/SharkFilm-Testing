<template>
  <PrimeNav class="custom-prime-nav" :primes="primes" />
  <Socials class="custom-socials" :socials="socials" />
  <div class="page">
    <SharkLogo class="SharkSplash" />
    <h2 :class="{ 'animate-text': isAnimating }">{{ animationText }}</h2>
    <PromotionalView />
  </div>

</template>

<script>
  import PrimeNav from '@/components/PrimeNav.vue'
  import PromotionalView from '../components/PromotionalView.vue'
  import Socials from '../components/Socials.vue'

  export default {
    name: 'Home',
    components: PromotionalView,
    Socials,
    PrimeNav,
    data () {
      return {
        isAnimating: false,
        animationText: 'Animation: Unhinged',
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll () {
        const scrollPosition = window.scrollY

        if (scrollPosition > 100 && !this.isAnimating) {
          this.isAnimating = true
          this.animationText = 'Animation: Untethered'
        } else if (scrollPosition <= 100 && this.isAnimating) {
          this.isAnimating = false
          this.animationText = 'Animation: Unhinged'
        }
      },
    },
  }
</script>

<style scoped>
.custom-prime-nav {
  background-color: transparent;
}
.custom-socials {
  background-color: black;
  position: absolute;
}
</style>
