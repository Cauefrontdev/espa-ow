<template>
    <div id="eventos" class="carrousel-container">
        <h1>Próximos Eventos</h1>
        <p>Clique na imagem para adiquirir seu ingresso</p>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
        <div class="carousel-item active">
            <a href="https://q2ingressos.com.br/events/ratto-acustico-espaco-w18092024104545">  <img src="https://i.imgur.com/rLrEWXS.jpeg" class="d-block w-100" alt="..."></a>
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
    </div>

  </template>
  
  <style scoped>

  .carrousel-container {
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    text-align: center;
    padding: 50px 50px;

    & h1 {
        text-transform: uppercase;
        font-family: "Playfair Display", system-ui;
        font-weight: bold;
    }

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

    & p {
      max-width: 200px;
      text-align: center;
    }
  }

      .img {
        width: auto;
        height: 50vh;
        filter: brightness(0.6);
      }
  </style>
  