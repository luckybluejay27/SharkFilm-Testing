<template>
  <div id="app">
    <!-- Your app content here -->
    <Navigation />
    <RouterLink />
  </div>
</template>

<script>
  import Navigation from './components/Navigation.vue'
  export default {
    name: 'App',
    components: {
      Navigation,
    },
  }
</script>
