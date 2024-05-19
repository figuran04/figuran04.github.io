<template>
  <div class="hero-background">
    <div class="hero-content">
      <img :src="heroImage.src" :alt="heroImage.alt" class="hero-image" />
      <h1 class="hero-title">{{ heroName }}</h1>
      <p class="hero-text">{{ heroText }}</p>
      <p class="hero-tagline">{{ heroTagline }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heroName: {
      type: String,
      required: true,
    },
    heroText: {
      type: String,
      required: true,
    },
    heroTagline: {
      type: String,
      required: true,
    },
    heroImage: {
      type: Object,
      required: true,
      default: () => ({
        src: '',
        alt: '',
      }),
    },
  },
}
</script>

<style>
.hero-background {
  position: relative;
  padding: 2rem;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.hero-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/logo.svg');
  background-size: cover;
  background-position: center;
  filter: blur(20px);
  z-index: -1;
  border-radius: 10px;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.hero-title {
  font-size: 3rem;
  margin: 1rem 0;
}

.hero-text {
  font-size: 1.5rem;
  margin: 1rem 0;
}

.hero-tagline {
  font-size: 1.25rem;
  margin: 1rem 0;
}
</style>
