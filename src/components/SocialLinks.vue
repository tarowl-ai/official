<template>
  <v-row
    justify="center"
    class="mb-32"
  >
    <v-col
      cols="auto"
      v-for="(link, index) in socialLinks"
      :key="index"
    >
      <v-btn
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        icon
        variant="text"
        size="x-large"
        class="social-btn mx-2"
        color="white"
      >
        <template v-if="link.isThreads">
          <font-awesome-icon
            :icon="['fab', 'threads']"
            class="threads-icon"
          />
        </template>
        <template v-else-if="link.isX">
          <font-awesome-icon
            :icon="['fab', 'x-twitter']"
            class="x-icon"
          />
        </template>
        <v-icon
          v-else
          :icon="link.icon"
        />
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default {
  name: "SocialLinks",
};
</script>

<script lang="ts" setup>
import { socialLinks } from "@/data/socialLinks";
</script>

<style scoped>
.social-btn {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  width: 48px !important;
  height: 48px !important;
  border-radius: 50% !important;
}

.social-btn:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.threads-icon,
.x-icon {
  width: 20px;
  height: 20px;
}

@media (max-width: 600px) {
  .social-btn {
    width: 44px !important;
    height: 44px !important;
  }

  .threads-icon,
  .x-icon {
    width: 18px;
    height: 18px;
  }
}
</style> 