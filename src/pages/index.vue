<template>
  <PrimeNavIndex />
  <Socials />
  <div class="page">
    <SharkLogo class="SharkSplash" />
    <h2 :class="{ 'animate-text': isAnimating }">{{ animationText }}</h2>
    <PromotionalView />
  </div>

</template>

<script>
  import PrimeNavIndex from '@/components/PrimeNavIndex.vue'
  import PromotionalView from '../components/PromotionalView.vue'
  import Socials from '../components/Socials.vue'

  export default {
    name: 'Home',
    components: PromotionalView,
    Socials,
    PrimeNavIndex,
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
</style>
