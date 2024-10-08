<template>
    <div class="container-patrocinio">
        <div class="patrocinio-container">
          <div class="parceiros">
            <div class="parceiros-shadow"></div> 
            <div class="parceiros-container">
              <img v-for="(img, index) in imagens" :key="index" :src="img" :alt="'Parceiro ' + (index + 1)" />
              <img v-for="(img, index) in imagens" :key="'dup1-' + index" :src="img" :alt="'Parceiro ' + (index + 1)" />
              <img v-for="(img, index) in imagens" :key="'dup2-' + index" :src="img" :alt="'Parceiro ' + (index + 1)" />
            </div>
            <div class="parceiros-shadow"></div> 
          </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imagens: [
          "https://i.imgur.com/a1LTSfz.png",
          "https://i.imgur.com/CyMsIOn.png",
          "https://i.imgur.com/hsfHquE.png",
        ]
      };
    }
  };
  </script>
  
  <style scoped>

@media (min-width: 844px) {
    .container-patrocinio {
        display: none !important;
    }

}

  .container-patrocinio  {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .patrocinio-container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; 
    position: relative;
    width: 100%;
  }
  
  .parceiros {
    white-space: nowrap;
    display: flex;
    position: relative;
    overflow: hidden; 
  }
  
  .parceiros-shadow {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 0 !important;
    width: 50px; 
    background: linear-gradient(to left, transparent, #030303);
    z-index: 2; 
  }
  
  .parceiros-shadow:last-of-type {
    right: -5px;
    background: linear-gradient(to right, transparent, #030303); 
  }
  
  .parceiros-container {
    display: flex;
    gap: 30px; 
    animation: move 15s linear infinite; 
    will-change: transform; 
    z-index: 1; 
  }
  
  .parceiros-container img {
    max-height: 50px; 
    object-fit: contain;
  }
  

  @keyframes move {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-33.33%); 
    }
  }
  </style>
  