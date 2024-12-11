<template>
  <div class="CarouselPromo">
    <h1>Our Works</h1>
    <div class="break-line"></div>
    <div class="carousel-container">
      <div class="carousel-wrapper">
        <div v-for="project in projects" :key="project.id" class="carousel-item">
          <div class="image-container">
            <img :alt="project.name" class="project-image" :src="project.image">
            <div v-if="project.status === 'in-progress'" class="status-overlay">
              IN PROGRESS
            </div>
          </div>
          <p class="project-title">{{ project.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CarcinogenImg from '@/assets/Carcinogen.jpg'
  import CoffeeAndMagicImg from '@/assets/Coffee & Magic.jpg'

  export default {
    name: 'CarouselPromo',
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
