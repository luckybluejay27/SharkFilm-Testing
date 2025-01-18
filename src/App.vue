<template>
  <!-- Navbar -->
  <TopPanel :panelClass="topPanelClass" />
  <!-- Content -->
  <div id="app" class="container">
    <router-view />
  </div>
  <!-- Footer -->
  <div class="break-line"></div>
  <BottomPanel />
</template>

<script>
import TopPanel from './components/TopPanel.vue'
import BottomPanel from './components/BottomPanel.vue'
import './styles/GlobalDark.scss'

export default {
  name: 'App',
  components: {
    BottomPanel,
    TopPanel,
  },
  computed: {
    topPanelClass() {
      return this.$route.path === '/' ? 'TopPanelHomeVar' : 'TopPanel';
    }
  }
}
</script>
