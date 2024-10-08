<template>
  <div id="map" class="map-container">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14773.848848507781!2d-49.8829101!3d-22.2225351!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bfd762e59fe319%3A0x8f9f16dd7b9ea687!2sEspa%C3%A7o%20W!5e0!3m2!1spt-BR!2sbr!4v1727842396912!5m2!1spt-BR!2sbr" 
      width="100%" 
      height="500" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</template>

<script setup>
</script>

<style scoped>
.map-container {
  display: flex;
  justify-content: center; /* Centraliza o mapa horizontalmente */
  margin: 20px 0; /* Margens para o mapa */
}
</style>
