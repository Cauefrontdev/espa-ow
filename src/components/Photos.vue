<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    },
    {
      threshold: 0.1 // O quanto do elemento precisa estar visível antes da animação ocorrer
    }
  );

  // Seleciona todos os elementos que deseja animar
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((el) => observer.observe(el));
});
</script>

<template>
  <div class="container">
    <h1 class="fade-in" id="foto">Fotos</h1>
    <p class="fade-in">Alan Malheiro Fotografias</p>
  </div>
  <div style="padding: 50px;" id="carouselExampleAutoplaying" class="carousel slide fade-in" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://i.imgur.com/cZ5y60q.jpeg" class="d-block" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://i.imgur.com/Xctn8se.jpeg" class="d-block" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://i.imgur.com/hyr6Ny8.jpeg" class="d-block" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://i.imgur.com/1HWBjiU.jpeg" class="d-block" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://i.imgur.com/ey7U5qk.jpeg" class="d-block" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>
/* Definindo a animação */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  opacity: 0;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in.show {
  opacity: 1;
  animation: fadeInUp 0.6s ease-out forwards;
}

@media (max-width: 844px) {
  * {
    overflow: hidden;
  }
  img {
    height: 50vh;
    width: auto;
  }
}

h1 {
  margin-top: 50px;
  text-transform: uppercase;
  font-family: "Playfair Display", system-ui;
  font-weight: bold;
  color: #f5f5f5;
  text-align: left;
  font-size: 35px;
  margin-left: 50px;
}

p {
  color: #f5f5f5;
  text-align: left;
  font-size: 15px;
  margin-left: 50px;
}
</style>
