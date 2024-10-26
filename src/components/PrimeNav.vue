<template>
  <v-conatiner class="PrimeNav">
    <v-row justify-start>
      <v-col v-for="route in routes" :key="route.name" class="nav-item">
        <router-link class="router" :to="route.path">{{ route.name }}</router-link>
      </v-col></v-row>
  </v-conatiner>
</template>

<script>
  export default {
    name: 'PrimeNav',
    data () {
      return {
        routes: [
          { name: 'Home', path: '/' },
          { name: 'CommissionsView', path: '/CommissionsView' },
          { name: 'SupportView', path: '/SupportView' },
          { name: 'LoginView', path: '/LoginView' },
          { name: 'LibraryView', path: '/LibraryView' },
          { name: 'PortfolioView', path: '/PortfolioView' },
        ],
      }
    },
  }
</script>

<style scoped>

</style>
