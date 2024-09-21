<template>
  <div id="app">
    <!-- Your app starts here -->
    <div>
      <SharkLogo />
      <HomeNav />
    </div>

  </div>
</template>

<script>
  import SharkLogo from './components/SharkLogo.vue'
  import './styles/GlobalDark.css'
  import HomeNav from './components/HomeNav.vue'

  export default {
    name: 'SharkLogo',
    components: {
      SharkLogo,
      HomeNav,
    },
  }
</script>
