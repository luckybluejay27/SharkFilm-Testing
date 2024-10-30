<script>
  import CarcinogenImg from '@/assets/Carcinogen.jpg'
  import CoffeeAndMagicImg from '@/assets/Coffee & Magic.jpg'

  export default {
    name: 'Carousel',
    data () {
      return {
        projects: [
          {
            id: 1,
            name: 'Carcinogen',
            image: CarcinogenImg,
            status: 'in-progress',
          },
          {
            id: 2,
            name: 'Coffee & Magic',
            image: CoffeeAndMagicImg,
            status: 'completed',
          },
        ],
      }
    },
  }
</script>

<template>
  <div class="CarouselPromo">
    <h1> Our Works </h1>
    <div v-for="project in projects" :key="project.id" class="carousel-item">
      <div class="image-container" :status="project.status">
        <img :alt="project.name" :src="project.image">
        <div v-if="project.status === 'in-progress'" class="status-overlay">
          IN PROGRESS
        </div>
      </div>
      <p>{{ project.name }}</p>
    </div>
  </div>
</template>

<style lang="scss">
</style>
