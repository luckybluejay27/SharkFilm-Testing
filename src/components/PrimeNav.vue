<template>
  <div class="PrimeNav">
    <ul>
      <li v-for="route in routes" :key="route.name">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'PrimeNav',
    data () {
      return {
        routes: [
          { name: 'Home', path: '/' },
          { name: 'Commissions', path: '/CommissionsView' },
          { name: 'Support', path: '/SupportView' },
          { name: 'Login', path: '/LoginView' },
          { name: 'Library', path: '/LibraryView' },
          { name: 'Portfolio', path: '/PortfolioView' },
        ],
      }
    },
  }
</script>

<style>
</style>
