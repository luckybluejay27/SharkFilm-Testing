<template>
  <div id="app">
    <!-- Your app content here -->
    <Navigation />
    <RouterLink />
  </div>
</template>

<script>
  import './assets/fonts/Shrikhand-Regular.ttf'
  import './assets/fonts/ConcertOne-Regular.ttf'
  import Navigation from './components/Navigation.vue'
  export default {
    name: 'App',
    components: {
      Navigation,
    },
  }
</script>
