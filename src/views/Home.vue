<template>
    <CarrouselComponent />
    <ShowsComponent/>
    <AboutComponent/>
    <PhotosComponent/>
    <ReservaComponent/>
    <RulesComponent/>
    <MapComponent/>
</template>

<script>
import CarrouselComponent from '@/components/Carrousel.vue';
import ShowsComponent from '@/components/Shows.vue';
import MapComponent from '@/components/Maps.vue';
import ReservaComponent from '@/components/Reserva.vue';
import AboutComponent from '@/components/About.vue';
import RulesComponent from '@/components/Rules.vue';
import PhotosComponent from '@/components/Photos.vue';



export default {
  components: {
    CarrouselComponent,
    ShowsComponent,
    MapComponent,
    ReservaComponent,
    AboutComponent,
    RulesComponent,
    PhotosComponent,
  },
};
</script>

<style scoped>

</style>