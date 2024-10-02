<template>
  <div class="video-container">
    <video
      muted
      autoplay
      playsinline
      loop
      width="1080"
      height="1080"
      :style="{ objectFit: 'cover' }"
    >
      <source src="/src/assets/video.mp4" type="video/mp4" />
      Seu navegador não suporta o vídeo.
    </video>
  </div>
</template>

<style scoped>
.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Esconde qualquer conteúdo fora da área visível */
}

video {
  margin-top: 100px;
  width: 500px;
  height: 600px;
  object-fit: cover;
  max-width: 100%; /* Garante que o vídeo não ultrapasse a tela */
  max-height: 100%; /* Mantém o vídeo dentro do container */
}
</style>
