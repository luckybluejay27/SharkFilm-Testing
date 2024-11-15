<template>
  <div id="app" class="container">
    <router-view />
  </div>
  <h1 class="break-line" />
  <BottomPanel />
</template>

<script>
  import BottomPanel from './components/BottomPanel.vue'
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
