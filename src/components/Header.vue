<template>
      <header>
        <div class="container">
        
                <nav class="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
                  <div class="container-fluid ">
                    <img style="max-width: 100px;" src="https://i.imgur.com/8kUFfWO.png" alt="logo">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav me-auto mb-4 mb-lg-0">
                        <li class="nav-item active">
                          <RouterLink class="nav-link" aria-current="page" to="/">Home</RouterLink>
                        </li>
                        <li class="nav-item active">
                          <RouterLink class="nav-link" aria-current="page" to="/Events">Eventos</RouterLink>
                        </li>
                        <li class="nav-item active">
                          <RouterLink class="nav-link" aria-current="page" to="/Contact">Contatos</RouterLink>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Ingressos</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
        </div>
      </header>
</template>

<style scoped>
.navbar-scroll .nav-link,
.navbar-scroll .fa-bars,
.navbar-scroll .navar-brand {
  color: #9f9f9f;
}

.navbar-scroll .nav-link:hover {
  color: #4a4a4a;
}

/* Color of the links AFTER scroll */
.navbar-scrolled .nav-link,
.navbar-scrolled .fa-bars,
.navbar-scrolled .navar-brand {
  color: #6e6e6e;
}

/* Color of the navbar AFTER scroll */
.navbar-scroll,
.navbar-scrolled {
  background-color: #000000;
}

/* An optional height of the navbar AFTER scroll */
.navbar.navbar-scroll.navbar-scrolled {
  padding-top: 5px;
  padding-bottom: 5px;
}

</style>