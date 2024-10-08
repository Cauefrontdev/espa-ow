<template>
  <div class="normas-container">
    <div class="container p-relative">
      <ul class="list-unstyled">
        <li v-for="(section, index) in sections" :key="index" class="fade-in" ref="animatedSections">
          <h1 v-if="section.isTitle">{{ section.title }}</h1>
          <p v-else>{{ section.content }}</p>

        </li>
      </ul>
      <img style="max-width: 80px;" src="https://i.imgur.com/8kUFfWO.png" alt="logo" class="fade-in w" ref="animatedSections">
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';

const sections = [
  { title: 'Sobre o Espaço', isTitle: true },
  {
    content:
      'O Espaço W é um local projetado para oferecer experiências inesquecíveis em um ambiente acolhedor e sofisticado. Seja para festas, casamentos, eventos corporativos ou encontros familiares.',
  },
  { title: 'Ambientes', isTitle: true },
  {
    content:
      'Oferecemos diversos ambientes, cada um pensado para criar a atmosfera ideal para o seu evento e uma Estrutura fantástica, aliada a um espaço aconchegante, que permite vários formatos de eventos, com opções que atendem a diferentes estilos e necessidades.',
  },
];

// Definindo o ref para armazenar os elementos que receberão animação
const animatedSections = ref([]); 

onMounted(() => {
  // Aguarda o DOM estar completamente renderizado
  nextTick(() => {
    // Preenche o array com as referências dos elementos animados
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


@media (min-width: 844px) {

.fade-in {
width: 100%;
display: flex;
align-items: center;
justify-content: center;
text-align: left;
opacity: 0;
transform: translateY(50px);
transition: opacity 1s ease-out, transform 1s ease-out;
}

.normas-container {
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 100px;
}

.w {
  display: none !important;
}
}



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

ul {
  font-size: 25px;
  color: #f5f5f5; /* Texto branco */
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
