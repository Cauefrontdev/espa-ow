<template>
    <div id="local" class="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d118216.09575015013!2d-50.02271408072814!3d-22.19248977654676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-22.1480294!2d-49.9932577!4m5!1s0x94bfd762e59fe319%3A0x8f9f16dd7b9ea687!2sRua%20Fabio%20Mascarim%20da%20Silva%2C%20125%20-%20Pedro%20L%C3%BAcio!3m2!1d-22.222535099999998!2d-49.8829101!5e0!3m2!1spt-BR!2sbr!4v1727460782427!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    name: "LocationMap",
  };
  </script>
  
  <style scoped>
  .map-container {
    width: 100%;
    height: 40vh;
    filter: grayscale(60%);
  }
  </style>
  