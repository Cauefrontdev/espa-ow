<template>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="slogan-box">
        <img style="max-width: 140px;" src="https://i.imgur.com/8kUFfWO.png" alt="logo">
        <h2>O lugar perfeito.</h2>
      </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.imgur.com/CVVklRl.jpeg" class="d-block img" alt="...">
    </div>
    <div class="carousel-item" >
      <img src="https://i.imgur.com/pa95bhI.jpeg" class="d-block img" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.imgur.com/gHdFXgJ.jpeg" class="d-block img" alt="...">
      
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

  .slide {
    position: relative;
  }

  .slogan-box {
    z-index: 1;
    position: absolute;
    width: 100%;
    gap: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;

    & h2 {
      font-family: "Playfair Display", system-ui;
      text-transform: uppercase;
      max-width: 200px;
      text-align: center;
    }
  }

      .img {
        width: 100vw;
        height: 90vh;
        filter: brightness(0.4);
      }

    @media (max-width: 844px) {
    
      .img {
        width: auto;
        height: 50vh;
        filter: brightness(0.4);
      }

}
  </style>
  