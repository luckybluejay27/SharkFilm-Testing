<template>
  <!-- Navbar -->
  <div class="TopPanel">
    <MainNav />
    <Socials />
  </div>
  <!-- Content -->
  <div id="app" class="container">
    <router-view />
  </div>
  <!-- Footer -->
  <h1 class="break-line" />
  <BottomPanel />
</template>

<script>
  import BottomPanel from './components/BottomPanel.vue'
  import MainNav from './components/MainNav.vue'
  import Socials from './components/Socials.vue'
  import './styles/GlobalDark.scss'

  export default {
    name: 'App',
    components: {
      BottomPanel,
      MainNav,
      Socials,
    },
  }
</script>

<style></style>
