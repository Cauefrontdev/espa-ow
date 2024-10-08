<template>
  <div class="container">
    <div id="regras" class=" normas-container text-white">
      <ul class="list-unstyled">
        <li v-for="(section, index) in sections" :key="index" class="fade-in" ref="animatedSections">
          <h1 v-if="section.isTitle" class="">{{ section.title }}</h1>
          <p v-else-if="section.isLead">{{ section.content }}</p>
          <p v-else>
            <strong>{{ section.strongText }}</strong> {{ section.content }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';

const sections = [
  { title: 'Normas e Restrições', isTitle: true },
  {
    content: 'A programação está sujeita a alterações sem aviso prévio.',
    isLead: true,
  },
  {
    strongText: 'Entrada:',
    content:
      'Permitida apenas para maiores de 18 anos. É obrigatória a apresentação de um documento oficial com foto (RG ou CNH) emitido há no máximo 10 anos.',
  },
  {
    strongText: 'Itens não permitidos:',
    content:
      'Boné, chapéu, gorro, touca, regata, camisa de times ou torcidas, mochila, correntes, narguilé, chinelo, sandálias abertas ou rasteirinhas, bermuda, calça capri, camisetas de fã-clubes, adereços, cartazes, faixas e câmeras fotográficas de qualquer tipo.',
  },
  {
    strongText: 'Pagamentos:',
    content:
      'Apenas o titular do cartão de crédito ou débito pode utilizá-lo, mediante apresentação de um documento original com foto.',
  },
  {
    strongText: 'Sobre filas:',
    content:
      'A casa não se responsabiliza por filas. Recomendamos chegar com antecedência para garantir sua reserva.',
  },
];

const animatedSections = ref([]);

onMounted(() => {
  nextTick(() => {
    animatedSections.value = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
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