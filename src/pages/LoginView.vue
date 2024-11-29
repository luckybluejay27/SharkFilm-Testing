<template>
  <MainNav />
  <Socials />
  <div class="page">Login</div>
</template>

<script>
  import MainNav from '@/components/MainNav.vue'
  import Socials from '@/components/Socials.vue'

  export default {
    name: 'LoginView',
    components: MainNav,
    Socials,
  }
</script>

<style>
/* Your styles here */
</style>
