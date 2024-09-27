<template>
  <div id="regras" class="container normas-container text-white">
    <ul class="list-unstyled">
      <li v-for="(section, index) in sections" :key="index" class="fade-in" ref="animatedSections">
        <h1 v-if="section.isTitle" class="text-center">{{ section.title }}</h1>
        <p v-else-if="section.isLead">{{ section.content }}</p>
        <p v-else>
          <strong>{{ section.strongText }}</strong> {{ section.content }}
        </p>
      </li>
    </ul>
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
/* Estilos Gerais */
.normas-container {
  padding: 50px;
  width: 70%;
  background-color: #f5f5f5; /* Fundo branco */
}

ul {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

h1 {
  font-size: 45px;
  text-transform: uppercase;
  font-family: "Playfair Display", system-ui;
  font-weight: bold;
  color: #000000; /* Texto preto */
}

p {
  text-align: center;
  font-size: 25px;
  color: #000000; /* Texto preto */
}

strong {
  color: #000000; /* Texto preto */
}

/* Animações */
.fade-in {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Responsividade */
@media (max-width: 844px) {
  .normas-container {
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
