<template>
  <div class="normas-container text-white">
    <div class="container">
      <ul class="list-unstyled">
        <li v-for="(section, index) in sections" :key="index" class="fade-in" ref="animatedSections">
          <h1 v-if="section.isTitle" class="">{{ section.title }}</h1>
          <p v-else>{{ section.content }}</p>
        </li>
        <li class="fade-in" ref="animatedSections">
          <a class="btn" href="https://w.app/h7MPRb">FALE COM IGOR MARQUES</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';

// Definindo os textos para serem exibidos
const sections = [
  { title: 'RESERVAS', isTitle: true },
  {
    content:
      'Oferecemos uma variedade de ambientes em nossa casa, proporcionando a você a melhor experiência possível. Temos mesas confortáveis e acolhedoras, perfeitas para momentos especiais com amigos e familiares. Venha desfrutar do nosso espaço!',
  },
  { content: 'RESERVE SEU LUGAR, OU ALUGUE O ESPAÇO W COMIGO PELO WHATSAPP.' },
];

// Definindo o ref para armazenar os elementos que receberão animação
const animatedSections = ref([]);

onMounted(() => {
  // Aguarda o DOM estar completamente renderizado
  nextTick(() => {
    animatedSections.value = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Para de observar após a animação
          }
        });
      },
      { threshold: 0.1 } // Quando 10% do elemento estiver visível
    );

    animatedSections.value.forEach((section) => {
      observer.observe(section);
    });
  });
});
</script>

<style scoped>



ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h1 {
  font-family: "Playfair Display", system-ui;
  font-weight: bold;
  text-transform: uppercase;
  color: #f5f5f5; /* Texto branco */
}

p {
  
  max-width: 700px;
  font-size: 25px;
  color: #f5f5f5; /* Texto branco */
}

.btn { padding: 7px 15px; background-color: #f5f5f5; color: #030303; }

ul {
  font-size: 25px;
  color: #f5f5f5; /* Texto branco */
}

img {
  margin-bottom: 100px;
}

@media (max-width: 844px) {
  img {
    margin: 0;
  }

  .normas-container {
    padding: 50px;
    width: 100%;
  }

  h1 {
    font-size: 35px;
  }

  ul {
    font-size: 20px;
  }

  p {
    font-size: 20px;
  }
}

/* Estilos de animação */
.fade-in {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
