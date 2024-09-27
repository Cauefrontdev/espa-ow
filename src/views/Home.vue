<template>
  <div>
    <CarrouselComponent />
    <ShowsComponent/>
    <AboutComponent/>
    <GalleryComponent/>
    <ReservaComponent/>
    <MapComponent/>
  </div>
</template>

<script>
import CarrouselComponent from '@/components/Carrousel.vue';
import ShowsComponent from '@/components/Shows.vue';
import MapComponent from '@/components/Maps.vue';
import ReservaComponent from '@/components/Reserva.vue';
import GalleryComponent from '@/components/Gallery.vue';
import AboutComponent from '@/components/About.vue';



export default {
  components: {
    CarrouselComponent,
    ShowsComponent,
    MapComponent,
    ReservaComponent,
    GalleryComponent,
    AboutComponent,
  },
};
</script>

<style scoped>

</style>