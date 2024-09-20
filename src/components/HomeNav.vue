<template>
  <ul class="HomeNav">
    <!-- Turn below into working Router Links -->
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/CommsPage.vue">Commissions</RouterLink></li>
      <li><RouterLink to="/Library.vue">Library</RouterLink></li>
      <li><RouterLink to="/SupportView.vue">Support</RouterLink></li>
      <li><RouterLink to="/Login.vue">Login</RouterLink></li>
      <li><RouterLink to="/PortfolioView.vue">Portfolio</RouterLink></li>
    </ul>
  </ul>
</template>

<script>
export default {
  name: "HomeNav",
};
</script>

<style></style>
