<template>
  <div class="normas-container text-white">
    <div class="container">
      <ul class="list-unstyled">
        <li v-for="(section, index) in sections" :key="index" class="fade-in" ref="animatedSections">
          <h1 v-if="section.isTitle" class="text-center">{{ section.title }}</h1>
          <p v-else>{{ section.content }}</p>
        </li>
        <li class="fade-in" ref="animatedSections">
          <a class="btn" href="https://w.app/h7MPRb">FALE COM IGOR</a>
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
  { content: 'RESERVE SEU LUGAR COMIGO PELO WHATSAPP.' },
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
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

/* Estilos gerais */
.normas-container {
  padding-top: 100px;
  width: 100%;
  background-color: #030303; /* Fundo preto */
}

ul {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

h1 {
  font-size: 45px;
  text-transform: uppercase;
  font-family: "Playfair Display", system-ui;
  font-weight: bold;
  color: #ffffff; /* Texto branco */
}

p {
  text-align: left;
  max-width: 700px;
  font-size: 25px;
  color: #f8f8f8; /* Texto branco */
}

ul {
  font-size: 25px;
  color: #ffffff; /* Texto branco */
}

.btn {
  padding: 7px 15px;
  background-color: #f5f5f5;
  color: #030303;
  margin-bottom: 100px;
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

@media (max-width: 844px) {
  .btn {
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
</style>
