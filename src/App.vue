<template>
    <!-- Navbar -->
    <div class="TopPanel">
      <MainNav :is-index-page="isIndexPage" />
    <Socials />
    </div>
  <!-- Content -->
    <div id="app" class="container">
      <router-view />
    </div>
  <!-- Footer -->
    <div class="break-line"></div>
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

  data() {
    return {
      isIndexPage: false,
    };
  },
  mounted() {
    if (this.$route.name === 'index') {
      this.isIndexPage = true;
    }
  }
}
</script>

<style></style>
