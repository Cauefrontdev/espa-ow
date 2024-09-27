<template>
    <div style="margin-top: 100px;" id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="slogan-box">
        <img style="max-width: 140px;" src="https://i.imgur.com/8kUFfWO.png" alt="logo">
        <h2>O lugar perfeito.</h2>
      </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://imgur.com/sjJgvkJ" class="d-block img" alt="">
    </div>
  </div>
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
    background-color: #030303;

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
  