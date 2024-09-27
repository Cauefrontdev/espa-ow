<template>
  <HeaderComponent></HeaderComponent>
  <RouterView></RouterView>
  <FooterComponent></FooterComponent>

  <a href="https://w.app/h7MPRb">
    <img class="wpp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/768px-WhatsApp.svg.png?20220228223904" alt="">
  </a>
</template>

<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import FooterComponent from './components/Footer.vue';
import HeaderComponent from './components/Header.vue';

onMounted(() => {
  const links = document.querySelectorAll('a[href^="#"]');
  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const offset = 100; // Offset para evitar o header fixo
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  }
});
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

/* Configura rolagem suave */
html {
  scroll-behavior: smooth; 
}

body {
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
  scroll-padding-top: 100px; /* Ajusta a rolagem para evitar que o header cubra o conteúdo */
}

header {
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: #030303;
  height: 100px; /* Defina a altura exata do header */
}

section {
  padding-top: 100px; /* Adiciona um espaçamento para que o conteúdo não fique escondido sob o header */
}

.footer {
  bottom: 0;
  width: 100%;
  color: #f5f5f5; 
  background-color: #030303; 
  padding: 20px 0;
}

.footer a {
  color: #f5f5f5; 
}

.wpp {
  z-index: 1000;
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 70px;
  height: 70px;
}

</style>
