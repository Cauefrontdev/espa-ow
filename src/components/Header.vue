<template>
  <header class="header">
    <div class="container">
      <nav :class="{ active: isActive }" class="nav">
        <img style="max-width: 80px;" src="https://i.imgur.com/8kUFfWO.png" alt="logo">
        <button class="hamburger" @click="toggleMenu"></button>
        <ul class="nav-list">
          <li class="nav-item active">
            <a href="/" class="nav-link">Home</a>
          </li>
          <li class="nav-item active">
            <a href="#eventos" class="nav-link" aria-current="page" @click.native="closeMenu">Eventos</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="#regras" @click.native="closeMenu">Normas e restrições</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#local" @click="closeMenu">Localização</a>
          </li>
          <li class="nav-item active">
            <a href="#carouselExampleCaptions" class="nav-link" aria-current="page"  @click.native="closeMenu">Fotos</a>
          </li>
          <li class="nav-item active" @click.native="closeMenu">
            <a href="#footer" class="nav-link">Contatos</a>
          </li>
      
      
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false, // Controla se o menu está ativo
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive; // Alterna o estado do menu
    },
    closeMenu() {
      this.isActive = false; // Fecha o menu quando um link é clicado
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  font-family: "Playfair Display", system-ui;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(3, 3, 3, 0.707);  
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(9.9px);
-webkit-backdrop-filter: blur(9.9px);
  padding-inline: 16px;
}

.nav {
  max-width: 100%;
  height: 100px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 48px;
}

.nav-list {
  display: flex;
  gap: 32px;
  list-style: none;
}

.nav-list a {
  font-size: 18px;
  color: #f5f5f5;
  padding-block: 16px;
  text-transform: uppercase;
}

.hero {
  height: calc(100vh - 70px);
  background: center / cover no-repeat url("./bg.jpg");
}

.hamburger {
  display: none;
  border: none;
  background: none;
  border-top: 4px solid #fff;
  cursor: pointer;
}

.hamburger::after,
.hamburger::before {
  content: " ";
  display: block;
  width: 40px;
  height: 3px;
  background: #fff;
  margin-top: 5px;
  position: relative;
  transition: 0.3s;
}

@media (max-width: 750px) {
  .hamburger {
    display: block;
    z-index: 3;
  }





  .nav-list {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgb(3, 3, 3);  
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.9px);
    -webkit-backdrop-filter: blur(9.9px);
    clip-path: circle(100px at 90% -15%);
    transition: 1s ease-out;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
    pointer-events: none;
  }

  .nav {
    justify-content: space-between;
  }

  .nav-list a {
    font-size: 24px;
    opacity: 0;
  }

  .nav-list li:nth-child(1) a {
    transition: 0.5s 0.2s;
  }

  .nav-list li:nth-child(2) a {
    transition: 0.5s 0.4s;
  }

  .nav-list li:nth-child(3) a {
    transition: 0.5s 0.6s;
  }

  /* Estilos ativos */
  .nav.active .nav-list {
    clip-path: circle(1500px at 90% -15%);
    pointer-events: all;
  }

  .nav.active .nav-list a {
    opacity: 1;
  }

  .nav.active .hamburger {
    position: fixed;
    top: 26px;
    right: 16px;
    border-top-color: transparent;
  }

  .nav.active .hamburger::before {
    transform: rotate(135deg);
  }

  .nav.active .hamburger::after {
    transform: rotate(-135deg);
    top: -7px;
  }
}
</style>
