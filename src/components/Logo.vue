<template>
  <div class="logo-container">
    <v-img
      :height="$vuetify.display.xs ? '120' : '160'"
      src="@/assets/logo.png"
      contain
      class="logo-image"
    />
    <p class="text-h4 font-weight-bold mt-4">{{ $t('app.name') }}</p>
    <p class="text-h6 font-weight-medium text-grey">{{ $t('app.subtitle') }}</p>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.logo-container {
  position: relative;
  padding: 2rem;
  margin-bottom: 2rem;
}

.logo-image {
  filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.1));
  transition: all 0.3s ease;
}

@media (max-width: 600px) {
  .logo-container {
    padding: 1rem;
    margin-bottom: 1rem;
  }
}
</style> 