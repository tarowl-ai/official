<template>
  <v-app-bar
    flat
    class="px-4"
    height="64"
    color="transparent"
    v-if="$vuetify.display.mdAndUp"
  >
    <v-spacer />
    <v-slide-x-transition>
      <div class="d-flex align-center">
        <v-btn
          v-for="(link, index) in socialLinks"
          :key="index"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          icon
          variant="text"
          color="white"
          class="social-icon mx-1"
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
      </div>
    </v-slide-x-transition>
  </v-app-bar>
</template>

<script lang="ts">
const socialLinks = [
  {
    icon: "mdi-instagram",
    url: "https://www.instagram.com/tarowl404/",
  },
  {
    isThreads: true,
    url: "https://www.threads.net/@tarowl404",
  },
  {
    isX: true,
    url: "https://x.com/TarowlA27961",
  },
  {
    icon: "mdi-facebook",
    url: "https://www.facebook.com/profile.php?id=61571791611669",
  },
  {
    icon: "mdi-message-text",
    url: "https://tarowlai.featurebase.app/",
  },
  {
    icon: "mdi-email",
    url: "mailto:tarowl.app@gmail.com",
  },
];

export default {
  name: "AppHeader",
  setup() {
    return {
      socialLinks,
    };
  },
};
</script>

<style scoped>
.social-icon {
  opacity: 0.8;
  transition: all 0.3s ease;
}

.social-icon:hover {
  opacity: 1;
  transform: translateY(-2px);
}

.threads-icon,
.x-icon {
  width: 20px;
  height: 20px;
}
</style> 