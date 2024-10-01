<template>
  <SharkLogo />
  <div>
    <transition name="text-transition">
      <h1 v-if="!isScrolled" key="unhinged">Animation: Unhinged</h1>
      <h1 v-else key="untethered">Animation: Untethered</h1>
    </transition>
    <div class="page">
      <text>What do we do?</text>
    </div>
  </div></template>

<script>
  export default {
    name: 'Index',
    data () {
      return {
        isScrolled: false,
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll () {
        const scrollPosition = window.scrollY
        const threshold = 250 // adjust this value to control when the text changes

        if (scrollPosition > threshold) {
          this.isScrolled = true
        } else {
          this.isScrolled = false
        }
      },
    },
  }
</script>

<style scoped>
.page {
  transform: translate(0, 50vh);
  height: 100vh;
}
text {
  position: absolute;
  transform: translate(0vw, 95vh);
}
h1 {
  font-size: 3vh;
  position: absolute;
  text-align: center;
  transform-origin: center;
  transform: translate(42vw, 34vh);
  opacity: 70%;
}
/* .navbar {
  background-color: transparent;
  z-index: 0;
} */
</style>
