<template>
  <v-container class="fill-height bg-background pa-0">
    <AppHeader />
    <v-responsive class="align-center text-center fill-height">
      <v-row
        no-gutters
        justify="center"
        align="center"
        class="fill-height"
      >
        <v-col
          cols="12"
          sm="10"
          md="8"
          lg="6"
        >
          <Logo />
          <v-container class="px-4">
            <AppStoreButtons />
            <p class="text-body-1 text-medium-emphasis mt-8 mb-4 description-text">
              {{ t("contact.description") }}
            </p>
            <v-expand-transition>
              <SocialLinks
                v-if="$vuetify.display.smAndDown"
                class="mt-8"
              />
            </v-expand-transition>
          </v-container>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style scoped>
.bg-background {
  min-height: 100vh;
  position: relative;
}

.description-text {
  white-space: pre-line;
}

@media (max-width: 600px) {
  .bg-background {
    padding: 1rem 0;
  }
}
</style>
