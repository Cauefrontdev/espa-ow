<template>
    <div style="margin-top: 100px;" id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="slogan-box">
        <h1><b>Espaço</b>W</h1>
        <h2>Um novo conceito em eventos.</h2>
      </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://imgur.com/sjJgvkJ" class="d-block img" alt="">
    </div>
  </div>
</div>

  </template>
  
  <style scoped>

   h1 {
    font-family: "Playfair Display", system-ui;
   }

   h1 {
    font-size: 90px;
   }
   b {
    font-weight: 100;
    font-size: 35px;
    letter-spacing: 10px;
    text-transform: uppercase;
   }

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
      max-width: 200px;
      font-weight: 400;
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
  