<template>
  <div class="page">
    <SharkLogo class="SharkSplash" />
    <h2 :class="{ 'animate-text': isAnimating }">{{ animationText }}</h2>
    <h1>Promo Content Here</h1>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        isAnimating: false,
        animationText: 'Animation: Unhinged',
        scrollPosition: 0,
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
        } else if (scrollPosition < 100 && this.isAnimating) {
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
  h1 {
    margin-top: 100vh;
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
