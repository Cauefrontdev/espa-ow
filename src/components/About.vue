<template>
    <div class="normas-container text-white">
      <ul class="list-unstyled">
  
        <li>
          <h1 class="text-center">Sobre o Espaço W</h1>
        </li>
        <li>
           <p class="lead">
            O Espaço W é um local projetado para oferecer experiências inesquecíveis em um ambiente acolhedor e sofisticado. Seja para festas, casamentos, eventos corporativos ou encontros familiares, estamos aqui para atender suas necessidades.
            </p>
        </li>
        <li>
            <h1>Nossa Missão</h1>
        </li>
        <li>
            <p>Proporcionar um espaço versátil e acolhedor, onde cada evento é realizado com cuidado e atenção aos detalhes, garantindo a satisfação de nossos clientes.</p>
        </li>
       <li>
        <h1>Nossos Valores</h1>
       </li>
       <li>
        <ul>
            <li><p>Excelência no atendimento</p></li>
            <li><p>Compromisso com a qualidade</p></li>
            <li><p>Respeito ao meio ambiente</p></li>
            <li><p>Inovação constante</p></li>
            </ul>
       </li>
       <li>
         <h1>Ambientes</h1>
       </li>
       <li>
        <p> Oferecemos diversos ambientes, cada um pensado para criar a atmosfera ideal para o seu evento. Desde espaços ao ar livre até salas internas, temos opções que atendem a diferentes estilos e necessidades.</p>
       </li>
       <li>
        <img style="max-width: 80px;" src="https://i.imgur.com/8kUFfWO.png" alt="logo">
       </li>
      </ul>
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
    background-color: #fff;
    color: #030303;
  }
  .normas-container {
    padding-top: 100px;
    width: 100%;
    background-color: #030303; /* Fundo preto */
  }
  
  ul {
    align-items: left;
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
    font-size: 25px;
    color: #f8f8f8; /* Texto branco */
  }
  
  ul {
    font-size: 25px;
    color: #ffffff; /* Texto branco */
  }
  
  strong {
    color: #000000; /* Texto branco */
  }
  
  @media (max-width: 844px) {
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
  