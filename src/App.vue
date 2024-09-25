
<template>
<HeaderComponent></HeaderComponent>
<RouterView></RouterView>
<FooterComponent></FooterComponent>

</template>

<script setup>
import { RouterView } from 'vue-router';
import FooterComponent from './components/Footer.vue';
import HeaderComponent from './components/Header.vue';
</script>

<style >
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
</style>
