<template>
  <div class="video-container">
    <video
      ref="videoPlayer1"
      autoplay
      playsinline
      muted
      width="1080"
      height="1080"
      :style="{ objectFit: 'cover' }"
      @ended="playNextVideo"
    >
      <source src="/src/assets/video2.mp4" type="video/mp4" />
      Seu navegador não suporta o vídeo.
    </video>

    <video
      ref="videoPlayer2"
      autoplay
      playsinline
      muted
      width="1080"
      height="1080"
      :style="{ objectFit: 'cover', display: 'none' }"
      @ended="playNextVideo"
    >
      <source src="/src/assets/video.mp4" type="video/mp4" />
      Seu navegador não suporta o vídeo.
    </video>
  </div>
</template>

<script>
export default {
  mounted() {
    this.playFirstVideo();
  },
  methods: {
    playFirstVideo() {
      const video1 = this.$refs.videoPlayer1;
      const video2 = this.$refs.videoPlayer2;

      // Inicia o primeiro vídeo e garante que o segundo esteja oculto
      video1.style.display = "block";
      video2.style.display = "none";
      video1.play();
    },
    playNextVideo() {
      const video1 = this.$refs.videoPlayer1;
      const video2 = this.$refs.videoPlayer2;

      // Verifica qual vídeo está atualmente ativo
      if (video1.style.display === "block") {
        video1.style.display = "none"; // Esconde o primeiro vídeo
        video2.style.display = "block"; // Mostra o segundo vídeo
        video2.play(); // Inicia o segundo vídeo
      } else {
        video2.style.display = "none"; // Esconde o segundo vídeo
        video1.style.display = "block"; // Mostra o primeiro vídeo
        video1.play(); // Inicia o primeiro vídeo novamente
      }
    }
  }
};
</script>

<style scoped>
.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

@media (max-width: 844px) {
  video {
  margin-top: 100px;
  width: 100%;
  height: 800px;
  object-fit: cover;
  max-width: 100%; 
  max-height: 100%; 
}
}

@media (min-width: 844px) {
  video {
  margin-top: 100px;
  width: 40%;
  height: 800px;
  object-fit: cover;
  max-width: 100%; 
  max-height: 100%; 
}
}
</style>
