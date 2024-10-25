<template>
  <PrimeNav />
  <Socials />
  <div class="page">
    Portfolio
  </div>
</template>

<script>
  import PrimeNav from '@/components/PrimeNav.vue'
  import Socials from '@/components/Socials.vue'

  export default {
    name: 'PortfolioView',
    components: PrimeNav,
    Socials,
  }
</script>

<style>
/* Your styles here */
</style>
