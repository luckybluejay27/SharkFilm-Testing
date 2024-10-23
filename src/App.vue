<template>
  <div id="app" class="comtainer">
    <PrimeNav />
    <router-view />
    <BottomPanel />
  </div>
</template>

<script>
  import BottomPanel from './components/BottomPanel.vue'
  import './assets/fonts/Shrikhand-Regular.ttf'
  import './assets/fonts/ConcertOne-Regular.ttf'
  import PrimeNav from './components/PrimeNav.vue'
  export default {
    name: 'App',
    components: {
      PrimeNav,
      BottomPanel,
    },
  }
</script>

<style>

</style>
