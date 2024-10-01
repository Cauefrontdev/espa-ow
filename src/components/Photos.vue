<script setup>

</script>
<template>
 <div style="padding: 50px;" id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.imgur.com/cZ5y60q.jpeg" class="d-block" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.imgur.com/Xctn8se.jpeg" class="d-block" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.imgur.com/hyr6Ny8.jpeg" class="d-block" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.imgur.com/1HWBjiU.jpeg" class="d-block" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.imgur.com/ey7U5qk.jpeg" class="d-block" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<style scoped>

@media (max-width: 844px) {

  * {
    overflow: hidden;
  }
  img {
    height: 50vh;
    width: auto;
  }
}

</style>
