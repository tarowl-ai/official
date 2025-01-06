<template>
  <v-row
    justify="center"
    no-gutters
  >
    <v-col
      cols="12"
      sm="auto"
      class="mb-3 mb-sm-0"
    >
      <v-btn
        href="https://apps.apple.com/us/app/tarowl/id6737720810"
        target="_blank"
        rel="noopener noreferrer"
        variant="outlined"
        prepend-icon="mdi-apple"
        color="white"
        class="store-btn px-8 mx-sm-2"
        size="large"
        block
        :height="$vuetify.display.xs ? '56' : '48'"
      >
        App Store
      </v-btn>
    </v-col>
    <v-col
      cols="12"
      sm="auto"
    >
      <v-btn
        href="https://play.google.com/store/apps/details?id=com.tarowl.tarowl"
        target="_blank"
        rel="noopener noreferrer"
        variant="outlined"
        prepend-icon="mdi-google-play"
        color="white"
        class="store-btn px-8 mx-sm-2"
        size="large"
        block
        :height="$vuetify.display.xs ? '56' : '48'"
      >
        Play Store
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default {
  name: "AppStoreButtons",
};
</script>

<style scoped>
.store-btn {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
}

.store-btn:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

@media (max-width: 600px) {
  .store-btn {
    width: 100%;
    margin: 0.5rem 0;
    font-size: 1.1rem;
  }
}
</style> 