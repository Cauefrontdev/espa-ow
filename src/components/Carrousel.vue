<template>
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://i.imgur.com/ZdGmc8B.jpeg" class="d-block w-100 img-1" alt="...">
          <img src="https://i.imgur.com/HgZRWlK.jpeg" alt="" class="d-block w-100 img-2">
          <div class="carousel-caption ">
                <div class="container title">
                    <img class="logo"  style="max-width: 250px;" src="https://i.imgur.com/8kUFfWO.png" alt="logo">
                    <h1>Cada Evento se Torna Inesquecível</h1>
                    <p>Descubra o lugar ideal para tornar suas ideias realidade</p>
                </div>
               
                </div>
          </div>
        </div>
      </div>
  </template>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');


.carousel-caption {
  left: 0;
  right: 0;
  top: 5vw; 
  text-align: left;

  & h1 {
    font-size: 5.7vw;
    text-transform: uppercase;
    font-weight: bold;
    font-family: "Playfair Display", serif;
  }

  & p {
    font-size: 1.5vw;
    font-weight: 100;
    font-family: 'Poppins', sans-serif;
  }

}

.img-2 {
        display: none !important; 
    }

.title {
    display: flex;
    flex-direction: column;
    gap: 70px;
  }

  @media (max-width: 992px) {

    .logo {
        display: none;
    }
   
    
    .img-1 {
        display: none !important; 
    }

    .img-2 {
        z-index: 1000;
        display: block !important; 
    }

    .carousel-caption {
        width: auto;
        top: 40%; 
        left: 35%; 
        transform: translate(-50%, -50%);


        & h1 {
            font-size: 45px;
            text-transform: uppercase;
            font-weight: bold;
            font-family: "Playfair Display", serif;
        }

        & p {
            font-size: 25px;
            font-weight: 100;
            font-family: 'Poppins', sans-serif;
        }
    }
}

  </style>
  