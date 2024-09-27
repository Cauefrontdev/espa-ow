<template>
    <div class="normas-container text-white">
      <div class="container">
        <ul class="list-unstyled">
          <li>
            <h1 class="text-center">RESERVAS</h1>
          </li>
          <li>
             <p class="lead">
              Oferecemos uma variedade de ambientes em nossa casa, proporcionando a você a melhor experiência possível. Temos mesas confortáveis e acolhedoras, perfeitas para momentos especiais com amigos e familiares. Venha desfrutar do nosso espaço!
        </p>
          </li>
         <li>
          <p>RESERVE SEU LUGAR COMIGO PELO WHATSAPP.</p>
         </li>
         <li>
          <a class="btn" href="https://w.app/h7MPRb">FALE COM IGOR</a>
         </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "RulesComponent",
  };
  </script>
  
  <style scoped>
  .btn {
    padding:7px 15px;
    background-color: #f5f5f5;
    color: #030303;
    margin-bottom: 100px;
  }
  .normas-container {
    padding-top: 100px;
    width: 100%;
  background-color: #030303; 

  }
  
  ul {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  
  h1 {
    font-size: 45px;
    text-transform: uppercase;
    font-family: "Playfair Display", system-ui;
    font-weight: bold;
    color: #ffffff; /* Texto branco */
  }
  
  p {
    text-align: left;
    max-width: 700px;
    font-size: 25px;
    color: #f8f8f8; /* Texto branco */
  }
  
  ul {
    font-size: 25px;
    color: #ffffff; /* Texto branco */
  }
  
  strong {
    color: #030303; /* Texto branco */
  }
  
  @media (max-width: 844px) {

    .btn {
      margin: 0;
    }
    .normas-container {
    padding: 50px;
    width: 100%;
  }
    h1 {
      font-size: 35px;
    }
  
    ul {
      font-size: 20px;
    }
  
    p {
      font-size: 20px;
    }
  }
  </style>
  