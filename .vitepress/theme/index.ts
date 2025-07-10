// .vitepress/theme/index.ts
import { h, onMounted } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { inject } from '@vercel/analytics'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout)
  },
  enhanceApp() {
    // Обеспечиваем запуск только на клиенте
    if (typeof window !== 'undefined') {
      onMounted(() => {
        inject()
      })
    }
  }
} satisfies Theme