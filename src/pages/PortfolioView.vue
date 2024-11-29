<template>
  <MainNav />
  <Socials />
  <div class="page">Portfolio</div>
</template>

<script>
  import MainNav from '@/components/MainNav.vue'
  import Socials from '@/components/Socials.vue'

  export default {
    name: 'PortfolioView',
    components: MainNav,
    Socials,
  }
</script>

<style>
/* Your styles here */
</style>
