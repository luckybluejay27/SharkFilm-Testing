<!-- CommCards.vue -->
<template>
  <div class="commission-container">
    <!-- Reference Image Section -->
    <div class="reference-section">
      <img
        alt="Reference-Image"
        class="reference-image"
        src="../assets/unsplash-stock.jpg"
      >
    </div>

    <!-- Pricing Cards Section -->
    <div class="pricing-section">
      <!-- Full Body Card -->
      <div class="price-card">
        <h2>Full Body</h2>
        <div class="price-line">
          <span class="service">Sketch</span>
          <span class="dotted-line" />
          <span class="price">125 USD</span>
        </div>
        <div class="price-line">
          <span class="service">Flat Color</span>
          <span class="dotted-line" />
          <span class="price">150 USD</span>
        </div>
        <div class="price-line">
          <span class="service">Shaded</span>
          <span class="dotted-line" />
          <span class="price">200 USD</span>
        </div>
      </div>

      <!-- Half Body Card -->
      <div class="price-card">
        <h2>Half Body</h2>
        <div class="price-line">
          <span class="service">Sketch</span>
          <span class="dotted-line" />
          <span class="price">100 USD</span>
        </div>
        <div class="price-line">
          <span class="service">Flat Color</span>
          <span class="dotted-line" />
          <span class="price">125 USD</span>
        </div>
        <div class="price-line">
          <span class="service">Shaded</span>
          <span class="dotted-line" />
          <span class="price">150 USD</span>
        </div>
      </div>

      <!-- Portrait Card -->
      <div class="price-card">
        <h2>Portrait</h2>
        <div class="price-line">
          <span class="service">Sketch</span>
          <span class="dotted-line" />
          <span class="price">75 USD</span>
        </div>
        <div class="price-line">
          <span class="service">Flat Color</span>
          <span class="dotted-line" />
          <span class="price">100 USD</span>
        </div>
        <div class="price-line">
          <span class="service">Shaded</span>
          <span class="dotted-line" />
          <span class="price">150 USD</span>
        </div>
      </div>
    </div>

    <!-- Addendum Section -->
    <div class="addendum-section">
      <h2>Commission Details</h2>
      <ul>
        <li>Complex Character Designs and Simple Armor have an additional 10% upcharge</li>
        <li>Filigree, Tattoos, and Similar Intricacies have an added 20% upcharge</li>
        <li>Additional charges are based on the total and are not cumulative</li>
        <li>Added characters will be priced at the lowest tier of their size class</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CommCards',
  }
</script>
