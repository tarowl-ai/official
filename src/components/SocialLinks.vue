<template>
  <v-row
    justify="center"
    class="mb-32"
  >
    <v-col
      cols="auto"
      v-for="(social, index) in socials"
      :key="index"
    >
      <v-btn
        :href="social.link"
        target="_blank"
        rel="noopener noreferrer"
        icon
        variant="text"
        size="x-large"
        class="social-btn mx-2"
        color="white"
      >
        <template v-if="social.isThreads">
          <font-awesome-icon
            :icon="['fab', 'threads']"
            class="threads-icon"
          />
        </template>
        <template v-else-if="social.isX">
          <font-awesome-icon
            :icon="['fab', 'x-twitter']"
            class="x-icon"
          />
        </template>
        <v-icon
          v-else
          :icon="social.icon"
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
const socials = [
  {
    icon: "mdi-instagram",
    link: "https://www.instagram.com/tarowl404/",
  },
  {
    isThreads: true,
    link: "https://www.threads.net/@tarowl404",
  },
  {
    isX: true,
    link: "https://x.com/TarowlA27961",
  },
  {
    icon: "mdi-facebook",
    link: "https://www.facebook.com/profile.php?id=61571791611669",
  },
  {
    icon: "mdi-message-text",
    link: "https://tarowlai.featurebase.app/",
  },
  {
    icon: "mdi-email",
    link: "mailto:tarowl.app@gmail.com",
  },
];
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