<template>
  <div id="app">
    <PrimeNav />
    <div class="body">
      <router-view />
    </div>
  </div>
</template>

<script>
  import './assets/fonts/Shrikhand-Regular.ttf'
  import './assets/fonts/ConcertOne-Regular.ttf'
  import PrimeNav from './components/PrimeNav.vue'
  export default {
    name: 'App',
    components: {
      PrimeNav,
    },
  }
</script>

<style>
.body {
 padding-top: 250px;
}
</style>
