import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faThreads } from '@fortawesome/free-brands-svg-icons'

// Add icons to the library
library.add(faThreads)

// Types
import type { App } from 'vue'

export function registerFontAwesome(app: App) {
  app.component('font-awesome-icon', FontAwesomeIcon)
} 