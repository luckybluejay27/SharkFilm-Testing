<template>
  <div class="PrimeNavIndex" :class="{ 'fixed-nav': isFixed }">
    <ul>
      <li>
        <router-link class="router" to="/">Home</router-link>
      </li>
      <li>
        <router-link class="router" to="/CommissionsView">Commissions</router-link>
      </li>
      <li>
        <router-link class="router" to="/SupportView">Support Us</router-link>
      </li>
      <li>
        <router-link class="router" to="/LoginView">Login</router-link>
      </li>
      <li>
        <router-link class="router" to="/LibraryView">Library</router-link>
      </li>
      <li>
        <router-link class="router" to="/PortfolioView">Portfolio</router-link>
      </li>
    </ul>
  </div>
</template>

  <script>
  export default {
    name: 'PrimeNavIndex',
    data () {
      return {
        isFixed: false,
        navbarHeight: 0, // Store the initial navbar height
      }
    },
    mounted () {
      this.navbarHeight = this.$el.getBoundingClientRect().top + window.scrollY // Get the initial position of the navbar
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll () {
        const scrollPosition = window.scrollY

        // Check if the scroll position has reached or passed the navbar's initial position
        if (scrollPosition >= this.navbarHeight && !this.isFixed) {
          this.isFixed = true
        } else if (scrollPosition < this.navbarHeight && this.isFixed) {
          this.isFixed = false
        }
      },
    },
  }
  </script>

<style scoped>
.fixed-nav {
  position: fixed;
  top: 0;
  background-color: transparent; /* Optionally change the background color when fixed */
}
</style>
