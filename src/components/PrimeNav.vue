<template>
  <div class="PrimeNav">
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
  }
</script>

<style>
</style>
