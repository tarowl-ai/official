<template>
  <div
    class="language-switcher"
    :class="{ 'is-mobile': $vuetify.display.mobile }"
  >
    <v-btn
      v-for="(lang, code) in languages"
      :key="code"
      :class="{ 'active-lang': currentLocale === code }"
      @click="changeLocale(code)"
      class="lang-btn mb-3"
      icon
      elevation="2"
      size="40"
      min-width="40"
      color="surface"
    >
      <template v-if="!$vuetify.display.mobile">
        <v-tooltip
          :text="lang"
          location="right"
          open-delay="300"
        >
          <template #activator="{ props }">
            <div
              v-bind="props"
              class="d-flex align-center justify-center"
              style="width: 100%; height: 100%"
            >
              <span class="text-body-2 font-weight-medium">{{ langShort[code] }}</span>
            </div>
          </template>
        </v-tooltip>
      </template>
      <template v-else>
        <span class="text-body-2 font-weight-medium">{{ langShort[code] }}</span>
      </template>
    </v-btn>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const currentLocale = computed(() => locale.value);

const languages = {
  en: "English",
  ja: "日本語",
  "zh-Hant": "繁體中文",
};

const langShort = {
  en: "En",
  ja: "日",
  "zh-Hant": "中",
};

const changeLocale = (code: string) => {
  locale.value = code;
};
</script>

<style scoped>
.language-switcher {
  position: fixed;
  left: 1rem;
  top: 1rem;
  z-index: 1005;
  display: flex;
  flex-direction: column;
  pointer-events: none;
}

.lang-btn {
  background: rgba(var(--v-theme-surface), 0.95) !important;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  cursor: pointer !important;
  pointer-events: auto !important;
  z-index: 1006;
}

.lang-btn :deep(.v-btn__content) {
  width: 100%;
  height: 100%;
  position: relative;
}

.lang-btn:hover {
  transform: scale(1.05);
  background: rgba(var(--v-theme-surface), 1) !important;
  border-color: rgba(var(--v-theme-primary), 0.5);
}

.active-lang {
  background: rgb(var(--v-theme-primary)) !important;
  color: rgb(var(--v-theme-on-primary)) !important;
  border-color: rgb(var(--v-theme-primary));
}

.language-switcher.is-mobile {
  flex-direction: row;
  gap: 12px;
}

.is-mobile .lang-btn {
  margin-bottom: 0 !important;
}

@media (max-width: 400px) {
  .language-switcher {
    gap: 8px;
  }
}
</style> 