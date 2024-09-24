<template>
  <div id="app">
    <div>
      <!-- <SharkLogo /> -->
      <NavComponent />
      <router-view />
    </div>

  </div>
</template>

<script>
  // import SharkLogo from './components/SharkLogo.vue'
  import './styles/GlobalDark.css'
  import NavComponent from './components/NavComponent.vue'

  export default {
    name: 'SharkLogo',
    components: {
      // SharkLogo,
    },
  }
</script>
