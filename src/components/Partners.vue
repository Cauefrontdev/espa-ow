<template>
    <div class="container-patrocinio">
        <div class="patrocinio-container">
          <div class="parceiros">
            <div class="parceiros-shadow"></div> <!-- Sombra nos cantos -->
            <div class="parceiros-container">
              <!-- Duplicamos as imagens várias vezes para evitar qualquer lacuna -->
              <img v-for="(img, index) in imagens" :key="index" :src="img" :alt="'Parceiro ' + (index + 1)" />
              <img v-for="(img, index) in imagens" :key="'dup1-' + index" :src="img" :alt="'Parceiro ' + (index + 1)" />
              <img v-for="(img, index) in imagens" :key="'dup2-' + index" :src="img" :alt="'Parceiro ' + (index + 1)" />
            </div>
            <div class="parceiros-shadow"></div> <!-- Sombra nos cantos -->
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
          // Adicione mais imagens conforme necessário
        ]
      };
    }
  };
  </script>
  
  <style scoped>

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
    overflow: hidden; /* Esconde o conteúdo que sai da área visível */
    position: relative;
    width: 100%; /* Ajuste da largura para 70% */
  }
  
  .parceiros {
    white-space: nowrap;
    display: flex;
    position: relative;
    overflow: hidden; /* Para esconder o conteúdo que sai da área visível */
  }
  
  .parceiros-shadow {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 0 !important;
    width: 50px; /* Ajusta conforme necessário */
    background: linear-gradient(to left, transparent, #030303); /* Sombra na lateral esquerda */
    z-index: 2; /* Garante que a sombra fique sobre as imagens */
  }
  
  .parceiros-shadow:last-of-type {
    right: -5px;
    background: linear-gradient(to right, transparent, #030303); /* Sombra na lateral direita */
  }
  
  .parceiros-container {
    display: flex;
    gap: 30px; /* Espaçamento entre as imagens */
    animation: move 15s linear infinite; /* Aumentada a velocidade da animação */
    will-change: transform; /* Sugere ao navegador que otimize a transformação */
    z-index: 1; /* Coloca as imagens abaixo da sombra */
  }
  
  .parceiros-container img {
    max-height: 50px; /* Mantém as proporções das imagens */
    object-fit: contain;
  }
  
  /* Animação de rolagem contínua */
  @keyframes move {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-33.33%); /* Move até 1/3 do container para cobrir a primeira duplicação */
    }
  }
  </style>
  