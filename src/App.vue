<template>
  <div id="app">
    <!-- Your app content here -->
    <Navigation />
    <Socials />
    <RouterLink />
  </div>
</template>

<script>
  import './assets/fonts/Shrikhand-Regular.ttf'
  import './assets/fonts/ConcertOne-Regular.ttf'
  import Navigation from './components/Navigation.vue'
  import Socials from '../src/components/Socials.vue'
  export default {
    name: 'App',
    components: {
      Navigation,
      Socials,
    },
  }
</script>
