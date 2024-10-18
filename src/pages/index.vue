<template>
  <div class="page">
    <SharkLogo class="SharkSplash" />
    <h2 :class="{ 'animate-text': isAnimating }">{{ animationText }}</h2>
    <PromotionalView />
  </div>

</template>

<script>
  import PromotionalView from '../components/PromotionalView.vue'

  export default {
    name: 'Home',
    components: { PromotionalView },
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

<style>
.SharkSplash {
  position: absolute;
  transform-origin: center;
}

h2 {
  font-size: 3vmin;
  opacity: 0.8;
  font-family: 'ConcertOne';
  transform: translate(76vmin, 55vmin);
}

.animate-text {
  transition: all 0.5s;
}
</style>
