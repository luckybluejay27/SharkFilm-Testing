<template>
  <div class="PrimeNav">
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
  import Socials from './Socials.vue'
  export default {
    name: 'PrimeNav',
    components: Socials,
    data () {
      return {
        routes: [
          { name: 'Home', path: '/' },
          { name: 'SupportView', path: '/SupportView' },
          { name: 'LoginView', path: '/LoginView' },
          { name: 'LibraryView', path: '/LibraryView' },
          { name: 'PortfolioView', path: '/PortfolioView' },
          { name: 'CommissionsView', path: '/CommissionsView' },
        ],
        navbarHeight: 0,
      }
    },
  }
</script>

<style scoped>
</style>
