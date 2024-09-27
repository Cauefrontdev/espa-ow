<template>
  <div class="normas-container">
    <div class="container">
      <ul class="list-unstyled">
        <li v-for="(section, index) in sections" :key="index" class="fade-in" ref="animatedSections">
          <h1 v-if="section.isTitle" class="text-center">{{ section.title }}</h1>
          <p v-else>{{ section.content }}</p>
        </li>
        <li>
          <img style="max-width: 80px;" src="https://i.imgur.com/8kUFfWO.png" alt="logo" class="fade-in" ref="animatedSections">
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';

const sections = [
  { title: 'Sobre o Espaço W', isTitle: true },
  {
    content:
      'O Espaço W é um local projetado para oferecer experiências inesquecíveis em um ambiente acolhedor e sofisticado. Seja para festas, casamentos, eventos corporativos ou encontros familiares, estamos aqui para atender suas necessidades.',
  },
  { title: 'Nossa Missão', isTitle: true },
  {
    content:
      'Proporcionar um espaço versátil e acolhedor, onde cada evento é realizado com cuidado e atenção aos detalhes, garantindo a satisfação de nossos clientes.',
  },
  { title: 'Nossos Valores', isTitle: true },
  {
    content:
      'Excelência no atendimento, Compromisso com a qualidade, Respeito ao meio ambiente, Inovação constante',
  },
  { title: 'Ambientes', isTitle: true },
  {
    content:
      'Oferecemos diversos ambientes, cada um pensado para criar a atmosfera ideal para o seu evento. Desde espaços ao ar livre até salas internas, temos opções que atendem a diferentes estilos e necessidades.',
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

/* Estilos normais */
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
  color: #f5f5f5; /* Texto branco */
}

p {
  text-align: left;
  max-width: 700px;
  font-size: 25px;
  color: #f5f5f5; /* Texto branco */
}

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
