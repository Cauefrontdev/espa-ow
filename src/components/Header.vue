

<template>
    <header>
  <div class="container-md bg-black">
    <nav data-bs-theme="dark" class="navbar bg-black navbar-expand-lg ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img style="max-width: 100px;" src="https://i.imgur.com/8kUFfWO.png" alt="logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-4 mb-lg-0">
            <li class="nav-item">
             <RouterLink  class="nav-link" aria-current="page" to="/">HOME</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/events">EVENTOS</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/contact">CONTATOS</RouterLink>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">NOSSA HISTÓRIA</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</header>
</template>

