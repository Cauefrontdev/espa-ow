<template>
  <div>
    <CarrouselComponent />
    <ShowsComponent/>
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



export default {
  components: {
    CarrouselComponent,
    ShowsComponent,
    MapComponent,
    ReservaComponent,
    GalleryComponent,
  },
};
</script>

<style scoped>

</style>