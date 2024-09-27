<template>
  <div id="app">
    <Navigation />
    <div class="body">
      <router-view />
    </div>
    <Socials />
  </div>
</template>

<script>
  import './assets/fonts/Shrikhand-Regular.ttf'
  import './assets/fonts/ConcertOne-Regular.ttf'
  import Navigation from './components/Navigation.vue'
  import Socials from '../src/components/Socials.vue'
  // import '../src/styles/GlobalDark.css'
  export default {
    name: 'App',
    components: {
      Navigation,
      Socials,
    },
  }
</script>

<style>
.body {
 padding-top: 250px;
}
</style>
