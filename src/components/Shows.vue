<template>
  <div class="container">
    <div id="eventos" class="carrousel-container">
      <h1 class="fade-in">Eventos Próximos</h1>
      <p class="fade-in">Clique na imagem para adquirir seu ingresso</p>
      <div id="carouselExampleAutoplaying" class="carousel slide fade-in" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <a href="https://q2ingressos.com.br/events/ratto-acustico-espaco-w18092024104545">
              <img src="https://i.imgur.com/rLrEWXS.jpeg" class="d-block img" alt="...">
            </a>
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
      <p  class="fade-in p">Fique <b>atento</b> a nossa programação. sujeito a alteração sem aviso prévio.</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      {
        threshold: 0.1 
      }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));
  }
};
</script>

<style scoped>

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (min-width: 844px) {
  .p {
    margin-bottom: 100px;
    max-width: 700px;
  }
}

.fade-in {
  opacity: 0;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in.show {
  opacity: 1;
  animation: fadeInUp 0.6s ease-out forwards;
}

.carrousel-container {
  background-color: #030303;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  text-align: left !important;
}

h1 {
  text-transform: uppercase;
  font-family: "Playfair Display", system-ui;
  font-weight: bold;
  color: #f5f5f5;
  text-align: left;
  font-size: 35px;
}

.slide {
  position: relative;
}

#eventos p {
  font-size: 24px;
  color: #f5f5f5;
}

.img {
  width: auto;
  height: 80vh;
}

@media (max-width: 844px) {
  .img {
    width: auto;
    height: 60vh;
  }

  #eventos {
    padding: 50px;
    text-align: left !important;
  }
}

@media (min-width: 844px) {

      #eventos {
        margin-top: 100px;
      }
}
</style>
