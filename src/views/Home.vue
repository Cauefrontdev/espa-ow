<template>
    <CarrouselComponent />
    <ShowsComponent/>
    <AboutComponent/>
    <GalleryComponent/>
    <ReservaComponent/>
    <MapComponent/>
    <RulesComponent/>
</template>

<script>
import CarrouselComponent from '@/components/Carrousel.vue';
import ShowsComponent from '@/components/Shows.vue';
import MapComponent from '@/components/Maps.vue';
import ReservaComponent from '@/components/Reserva.vue';
import GalleryComponent from '@/components/Gallery.vue';
import AboutComponent from '@/components/About.vue';
import RulesComponent from '@/components/Rules.vue';



export default {
  components: {
    CarrouselComponent,
    ShowsComponent,
    MapComponent,
    ReservaComponent,
    GalleryComponent,
    AboutComponent,
    RulesComponent,
  },
};
</script>

<style scoped>

</style>