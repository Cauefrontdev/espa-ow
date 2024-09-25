<template>
  <div>
    <CarrouselComponent />
    <HistoryComponent/>
  </div>
</template>

<script>
import CarrouselComponent from '@/components/Carrousel.vue';
import HistoryComponent from '@/components/History.vue';

export default {
  components: {
    CarrouselComponent,
    HistoryComponent,

  },
};
</script>

<style scoped>

</style>