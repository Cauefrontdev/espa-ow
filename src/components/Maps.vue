<template>

    <div id="local" class="map-container custom-tiles"></div>

</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: "LocationMap",
  mounted() {
    // Inicializa o mapa com zoom travado na localização
    const map = L.map('local', {
      center: [-22.2225351, -49.8829101], // Coordenadas da localização
      zoom: 15, // Zoom aproximado para detalhar a área
      zoomControl: false, // Desativa os controles de zoom
      dragging: false, // Impede que o usuário arraste o mapa
      scrollWheelZoom: false, // Desativa zoom com rolagem
      doubleClickZoom: false, // Desativa zoom por duplo clique
    });

    // Estilo customizado em preto e branco com as cores primária e secundária
    const customTileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://carto.com/attributions">CartoDB</a>',
      className: 'custom-tiles' // Para customização via CSS
    }).addTo(map);

    // Adiciona um marcador no mapa
    L.marker([-22.2225351, -49.8829101]).addTo(map)
      .bindPopup('Rua Fábio Mascarim da Silva, 125 - Pedro Lúcio')
      .openPopup();
  },
};
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 80vh;
}

/* Customizando a cor dos tiles */
.custom-tiles {
  filter: drop-shadow(100%) ;
}
</style>
