<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/TestView">Test</router-link>
  </div>
  <router-view />
</template>

  <script>
  export default {
    name: 'Navigation',
    data () {
      return {
        routes: [
          { name: 'Home', path: '/' },
          { name: 'Test', path: '/TestView' },
        // Add more routes here as needed
        ],
      }
    },
  }
  </script>
