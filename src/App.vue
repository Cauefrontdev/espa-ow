
<template>
<HeaderComponent></HeaderComponent>
<RouterView></RouterView>
<FooterComponent></FooterComponent>

<a href="https://w.app/h7MPRb">
  <img style="position: fixed; bottom: 40px; right: 40px;" height="70px" width="70px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/768px-WhatsApp.svg.png?20220228223904" alt="">
</a>

</template>

<script setup>
import { RouterView } from 'vue-router';
import FooterComponent from './components/Footer.vue';
import HeaderComponent from './components/Header.vue';
</script>

<script>
export default {
  mounted() {
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  },
};
</script>



<style>
html {
  scroll-behavior: smooth;
}
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
  header {
    z-index: 1000;
    background-color: #030303 !important;
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
  background-color: #fff !important; padding: 20px
}
</style>
