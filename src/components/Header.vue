<template>
  <header class="header">
    <nav :class="{ active: isActive }" class="nav">
      <img style="max-width: 80px;" src="https://i.imgur.com/8kUFfWO.png" alt="logo">
      <button class="hamburger" @click="toggleMenu"></button>
      <ul class="nav-list">
        <li class="nav-item active">
          <RouterLink class="nav-link" aria-current="page" to="/" @click.native="closeMenu">Home</RouterLink>
        </li>
        <li class="nav-item active">
          <RouterLink class="nav-link" aria-current="page" to="/Events" @click.native="closeMenu">Eventos</RouterLink>
        </li>
        <li class="nav-item active">
          <RouterLink class="nav-link" aria-current="page" to="/Contact" @click.native="closeMenu">Contatos</RouterLink>
        </li>
        <li class="nav-item active">
          <RouterLink class="nav-link" aria-current="page" to="/rules" @click.native="closeMenu">Normas e restrições</RouterLink>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Local" @click="closeMenu">Localização</a>
        </li>

        <li class="nav-item active">
          <RouterLink class="nav-link" aria-current="page" to="/galeria" @click.native="closeMenu">Fotos do Local</RouterLink>
        </li>
        
        

      </ul>
    </nav>
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
  font-family: sans-serif;
  text-decoration: none;
}

.header {
  background: rgb(0, 0, 0);
  padding-inline: 16px;
}

.nav {
  max-width: 1280px;
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
  color: #A6A9AC;
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
  border-top: 3px solid #fff;
  cursor: pointer;
}

.hamburger::after,
.hamburger::before {
  content: " ";
  display: block;
  width: 30px;
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
    background: rgb(0, 0, 0);
    clip-path: circle(100px at 90% -15%);
    transition: 1s ease-out;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 0;
    pointer-events: none;
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
