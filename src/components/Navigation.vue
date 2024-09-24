<template>
  <div class="Navigation">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/CommissionsView">Commissions</router-link></li>
      <li><router-link to="/SupportView">Support Us</router-link></li>
      <li><router-link to="/LoginView">Login</router-link></li>
      <li><router-link to="/LibraryView">Library</router-link></li>
      <li><router-link to="/PortfolioView">Portfolio</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

  <script>
  export default {
    name: 'Navigation',
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
