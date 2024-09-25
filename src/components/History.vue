<template>
  <div class="container mt-5 title">
      <h1 class="text-center">Nossa História</h1>
      <div class="row mt-4">
          <div class="col-md-6">
              <h2>A Fundação (2010)</h2>
              <p>A WX foi fundada em 2010 por um grupo de visionários que acreditavam no poder da tecnologia para transformar a vida das pessoas. Desde o início, nossa missão foi clara: criar soluções inovadoras que melhorassem a comunicação e a conectividade.</p>
          </div>
          <div class="col-md-6">
              <h2>Crescimento e Inovação (2015)</h2>
              <p>Com o aumento da demanda por nossos serviços, em 2015, expandimos nossa equipe e começamos a desenvolver novos produtos. Lançamos nossa primeira plataforma de comunicação, que rapidamente se tornou popular entre pequenas e médias empresas. Esse marco nos estabeleceu como líderes em inovação no setor.</p>
          </div>
      </div>
      <div class="row mt-4">
          <div class="col-md-6">
              <h2>Reconhecimento (2020)</h2>
              <p>Nossa compromisso com a qualidade e a inovação foi reconhecido em 2020, quando recebemos prêmios importantes da indústria. Isso não apenas validou nosso trabalho duro, mas também nos motivou a continuar a buscar a excelência.</p>
          </div>
          <div class="col-md-6">
              <h2>Olhar para o Futuro (2024)</h2>
              <p>Hoje, a WX é uma empresa global com uma equipe diversificada e apaixonada. Estamos sempre à frente das tendências tecnológicas, buscando maneiras de melhorar nossos produtos e serviços. O futuro é promissor, e estamos entusiasmados para continuar nossa jornada, impactando positivamente a vida de nossos clientes e colaboradores.</p>
          </div>
      </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');

h1 {
   margin-top: 100px;
   font-size: 45px; /* Tamanho do h1 */
   text-align: left !important; /* Alinhamento à esquerda */
   padding-left: 20px; /* Padding à esquerda */
   font-family: "Playfair Display", serif;
   text-transform: uppercase;
   font-weight: 900 !important; /* Negrito */
   transition: 500ms;
}
h2 {
   font-family: "Playfair Display", serif;
   font-size: 35px; /* Tamanho do h2 */
   text-align: left; /* Alinhamento à esquerda */
   padding-left: 20px; /* Padding à esquerda */
   font-weight: bold; /* Negrito */
   transition: 500ms;
}
p {
   font-size: 25px; /* Tamanho do parágrafo */
   text-align: left; /* Alinhamento à esquerda */
   padding-left: 20px; /* Padding à esquerda */
   font-family: 'Poppins', sans-serif;
   margin-bottom: 100px;
   transition: 500ms;
}

/* Estilos de animação */
.hidden {
   opacity: 0; /* Inicialmente invisível */
   transform: translateY(20px); /* Desloca para cima (um pouco menos) */
   transition: opacity 0.8s ease, transform 0.8s ease; /* Aumenta a duração da animação */
}
.visible {
   opacity: 1; /* Torna visível */
   transform: translateY(0); /* Move para a posição original */
}
</style>

<script>
export default {
   mounted() {
       // Função para verificar a visibilidade ao rolar
       const checkVisibility = () => {
           const windowHeight = window.innerHeight;
           const scrollY = window.scrollY;
           const offset = 150; // Distância do topo antes de ativar a animação

           const elements = document.querySelectorAll('h1, h2, p');

           elements.forEach(element => {
               const elementTop = element.getBoundingClientRect().top + scrollY;
               if (elementTop < (scrollY + windowHeight - offset)) {
                   element.classList.add('visible'); // Adiciona classe para ativar a animação
                   element.classList.remove('hidden'); // Remove classe de invisibilidade
               }
           });
       };

       // Adiciona eventos de rolagem e carregamento
       window.addEventListener('scroll', checkVisibility);
       window.addEventListener('load', checkVisibility); // Verifica ao carregar a página

       // Inicialmente oculta os elementos
       const elements = document.querySelectorAll('h1, h2, p');
       elements.forEach(element => {
           element.classList.add('hidden'); // Adiciona classe de invisibilidade
       });
   }
};
</script>
