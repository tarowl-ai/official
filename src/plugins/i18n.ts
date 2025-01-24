import { createI18n } from 'vue-i18n'

// Import locale messages
import en from '@/locales/en.json'
import zhHant from '@/locales/zh-Hant.json'
import zhTW from '@/locales/zh-TW.json'
import ja from '@/locales/ja.json'

// Available locales
const AVAILABLE_LOCALES = ['en', 'zh-Hant', 'ja']

// Get user's browser language
function getBrowserLocale(): string {
  // Get browser language (e.g., 'en-US', 'zh-TW', 'ja')
  const browserLang = navigator.language

  // Match with our available locales
  const locale = browserLang.toLowerCase()
  
  if (locale.startsWith('zh')) {
    // For Chinese, we're using Traditional Chinese
    return 'zh-Hant'
  }
  
  // Check if the language part matches our available locales
  const langPart = locale.split('-')[0]
  if (AVAILABLE_LOCALES.includes(langPart)) {
    return langPart
  }

  return 'en' // Default to English
}

export const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: getBrowserLocale(), // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: {
    en,
    'zh-Hant': zhHant,
    'zh-TW': zhTW,
    'ja': ja
  },
})

export default function (app: any) {
  app.use(i18n)
} 