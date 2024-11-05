<template>
  <div class="CommCard">
    <img
      alt="TriSplit Refernce Image"
      class="comm-image"
      src="../assets/unsplash-stock.jpg"
    >
    <!-- Full Bod Card -->
    <div class="column">
      <h1 class="ComCardH1"> Full</h1>
      <!-- Sketch -->
      <div class="price-line">
        <h2 class="ComCardH2"> Sketch</h2>
        <span class="dots" />
        <span class="price"> 125 USD</span>
      </div>
      <!-- Flat Color -->
      <div class="price-line">
        <h2 class="ComCardH2"> Flat Color</h2>
        <span class="dots" />
        <span class="price"> 150 USD</span>
      </div>
      <!-- Shaded Color -->
      <div class="price-line">
        <h2 class="ComCardH2"> Full Shaded</h2>
        <span class="dots" />
        <span class="price"> 200 USD</span>
      </div>
    </div>

    <!-- Half Bod Card -->
    <div class="column">
      <h1 class="ComCardH1"> Half Body</h1>
      <!-- Sketch -->
      <div class="price-line">
        <h2 class="ComCardH2"> Sketch</h2>
        <span class="dots" />
        <span class="price"> 100 USD</span>
      </div>
      <!-- Flat Color -->
      <div class="price-line">
        <h2 class="ComCardH2"> Flat Color</h2>
        <span class="dots" />
        <span class="price"> 125 USD</span>
      </div>
      <!-- Shaded Color -->
      <div class="price-line">
        <h2 class="ComCardH2"> Full Shaded</h2>
        <span class="dots" />
        <span class="price"> 150 USD</span>
      </div>
    </div>

    <!-- Head Only Card -->
    <div class="column">
      <h1 class="ComCardH1"> Portrait</h1>
      <!-- Sketch -->
      <div class="price-line">
        <h2 class="ComCardH2"> Sketch</h2>
        <span class="dots" />
        <span class="price"> 75 USD</span>
      </div>
      <!-- Flat Color -->
      <div class="price-line">
        <h2 class="ComCardH2"> Flat Color</h2>
        <span class="dots" />
        <span class="price"> 100 USD</span>
      </div>
      <!-- Shaded Color -->
      <div class="price-line">
        <h2 class="ComCardH2"> Full Shaded</h2>
        <span class="dots" />
        <span class="price"> 175 USD</span>
      </div>
    </div>
  </div>
  <div class="comm-detail">
    <ul>
      <h1>Commision Details</h1>
      <li> Complex Character Designs and Simple armor have an additional 10% upcharge</li>
      <li> Filligree, Tattoos, and Similar Intricacies have an added 20% upcharge</li>
      <li> Additional Charges are based off the total, and are not cumulative.</li>
      <li> Added Characters will be priced at the lowest teir of their size class</li>
    </ul>
  </div>
</template>

  <script>
  export default {
    name: 'CommCard',
  }
  </script>
