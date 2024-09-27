<template>
  <div class="navbar">
    <ul>
      <li><router-link class="router" to="/">Home</router-link></li>
      <li>
        <router-link
          class="router"
          to="/CommissionsView"
        >Commissions</router-link>
      </li>
      <li>
        <router-link class="router" to="/SupportView">Support Us</router-link>
      </li>
      <li><router-link class="router" to="/LoginView">Login</router-link></li>
      <li>
        <router-link class="router" to="/LibraryView">Library</router-link>
      </li>
      <li>
        <router-link class="router" to="/PortfolioView">Portfolio</router-link>
      </li>
    </ul>
    <SharkLogo />
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
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
      }
    },
  }
</script>

<style>
    .navbar {
        position: fixed;
    }
</style>
