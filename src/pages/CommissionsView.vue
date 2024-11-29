<template>
  <Socials />
  <MainNav />
  <!-- Seperator -->
  <CommCards />
</template>

<script>
  import MainNav from '@/components/MainNav.vue'
  import Socials from '@/components/Socials.vue'
  import CommCards from '@/components/CommCards.vue'

  export default {
    name: 'CommissionsView',
    components: MainNav,
    Socials,
    CommCards,
  }
</script>

<style>
/* Your styles here */
</style>
