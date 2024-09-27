<template>
  <div class="container normas-container text-white">
    <ul class="list-unstyled">

      <li>
        <h1 class="text-center">Normas e Restrições</h1>
      </li>
      <li>
         <p class="lead">
      A programação está sujeita a alterações sem aviso prévio.
    </p>
      </li>
      <li class="mb-3">
        <strong>Entrada:</strong> Permitida apenas para maiores de 18 anos. É obrigatória a apresentação de um documento oficial com foto (RG ou CNH) emitido há no máximo 10 anos.
      </li>
      <li class="mb-3">
        <strong>Itens não permitidos:</strong> Boné, chapéu, gorro, touca, regata, camisa de times ou torcidas, mochila, correntes, narguilé, chinelo, sandálias abertas ou rasteirinhas, bermuda, calça capri, camisetas de fã-clubes, adereços, cartazes, faixas e câmeras fotográficas de qualquer tipo.
      </li>
      <li class="mb-3">
        <strong>Pagamentos:</strong> Apenas o titular do cartão de crédito ou débito pode utilizá-lo, mediante apresentação de um documento original com foto.
      </li>
      <li>
        <strong>Sobre filas:</strong> A casa não se responsabiliza por filas. Recomendamos chegar com antecedência para garantir sua reserva.
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
.normas-container {
  width: 70%;
  background-color: #ffffff; /* Fundo preto */
}

ul {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

h1 {
  font-size: 45px;
  text-transform: uppercase;
  font-family: "Playfair Display", system-ui;
  font-weight: bold;
  color: #000000; /* Texto branco */
}

p {
  text-align: center;
  font-size: 25px;
  color: #000000; /* Texto branco */
}

ul {
  font-size: 25px;
  color: #000000; /* Texto branco */
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
