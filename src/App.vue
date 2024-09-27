
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

<style >
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
   header {
    background-color: #000 !important;
   }

   .footer {
  bottom: 0;
  width: 100%;
  color: #AEAEAE; 
  background-color: #000; 
  padding: 20px 0;
}

.footer a {
  color: #AEAEAE; 
}

.footer a:hover {
  color: #fff; 
}

.wpp {
  background-color: #fff !important; padding: 20px
}
</style>
