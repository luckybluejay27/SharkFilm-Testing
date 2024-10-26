<template>
  <div id="app" class="comtainer">
    <router-view />
    <BottomPanel />
  </div>
</template>

<script>
  import BottomPanel from './components/BottomPanel.vue'
  // import './styles/GlobalDark.css'
  import './styles/GlobalDark.scss'
  export default {
    name: 'App',
    components: {
      BottomPanel,
    },
  }
</script>

<style>

</style>
