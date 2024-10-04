<template>
  <div class="page">
    <SharkLogo class="SharkSplash" />
    <h1>Scrolling</h1>
  </div>
</template>

<script>
  export default {
    name: 'Home',
  }
</script>

<style>
  h1 {
    margin-top: 100%;
  }
  .SharkSplash {
    position: absolute;
    transform-origin: center;
    /* Completely Centered, Regardless of parent, without fixed */
    transform-origin: center;
    justify-content: center;
    align-items: center;
    transform: translate(50vw, 50vh);
  }
</style>
