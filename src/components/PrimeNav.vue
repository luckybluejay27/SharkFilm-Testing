<template>
  <div ref="navRef" :class="['PrimeNav', { 'PrimeNavIndex': isIndex }]">
    <ul>
      <li v-for="route in routes" :key="route.path">
        <router-link class="router" :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'PrimeNav',
    props: {
      isIndex: {
        type: Boolean,
        default: false,
      },
    },
    data () {
      return {
        isFixed: false,
        routes: [
          { name: 'Home', path: '/' },
          { name: 'Commissions', path: '/CommissionsView' },
          { name: 'Support Us', path: '/SupportView' },
          { name: 'Login', path: '/LoginView' },
          { name: 'Library', path: '/LibraryView' },
          { name: 'Portfolio', path: '/PortfolioView' },
        ],
      }
    },
    mounted () {
      if (this.isIndex) {
        window.addEventListener('scroll', this.handleScroll)
        this.$refs.navRef.style.position = 'absolute'
        this.$refs.navRef.style.top = '95vh'
      }
    },
    beforeUnmount () {
      if (this.isIndex) {
        window.removeEventListener('scroll', this.handleScroll)
      }
    },
    methods: {
      handleScroll () {
        if (!this.isIndex) return

        const navElement = this.$refs.navRef
        const rect = navElement.getBoundingClientRect()
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop

        if (rect.top <= 0 && !this.isFixed) {
          this.isFixed = true
          navElement.style.position = 'fixed'
          navElement.style.top = '0'
        } else if (scrollTop <= window.innerHeight * 0.95 && this.isFixed) {
          this.isFixed = false
          navElement.style.position = 'absolute'
          navElement.style.top = '95vh'
        }
      },
    },
  }
</script>

<style scoped>
.PrimeNavIndex {
  font-size: larger;
  width: fit-content;
  height: fit-content;
  background-color: var(--PageDark);
  margin: auto;
  left: 3vw;
  right: 0;
}
</style>
