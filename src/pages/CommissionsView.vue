<template>
  <Socials />
  <PrimeNav />
  <!-- Seperator -->
  <CommCards />
</template>

<script>
  import PrimeNav from '@/components/PrimeNav.vue'
  import Socials from '@/components/Socials.vue'
  import CommCards from '@/components/CommCards.vue'

  export default {
    name: 'CommissionsView',
    components: PrimeNav,
    Socials,
    CommCards,
  }
</script>

<style>
/* Your styles here */
</style>
