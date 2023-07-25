import { createI18n } from 'vue-i18n'

import en from './locale/en.json'
import ar from './locale/ar.json'

function loadlocaleMessages() {
  const locale = [{ en }, { ar }]
  const messages = {} || 'en'
  locale.forEach((lang) => {
    const key = Object.keys(lang)
    messages[key] = lang[key]
  })
  return messages
}

export default createI18n({
  locale: 'ar',
  fallbackLocale: 'ar',
  messages: loadlocaleMessages()
})
