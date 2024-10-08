<template>
  <div class="video-container">
    <video
      ref="videoPlayer"
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

<script>
export default {
  mounted() {
    const video = this.$refs.videoPlayer;

    video.muted = true;
    video.play().catch((error) => {
      console.error("Autoplay falhou no iOS: ", error);
    });
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

video {
  margin-top: 100px;
  width: 500px;
  height: 600px;
  object-fit: cover;
  max-width: 100%; 
  max-height: 100%; 
}
</style>
