<template>

    <div class="carrousel-container">
      <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="https://i.imgur.com/CVVklRl.jpeg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Foto </h5>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="https://i.imgur.com/pa95bhI.jpeg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Foto 2</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://i.imgur.com/gHdFXgJ.jpeg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Foto 3</h5>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      </div>
    </div>



</template>

<style scoped>


.carrousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
}
  @media (max-width: 844px) {
  
    .img {
      width: auto;
      height: 70vh;
    }

    .carrousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

}
</style>
