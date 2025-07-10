// .vitepress/theme/index.ts
import { h, onMounted } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { inject } from '@vercel/analytics'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    // Вызов inject внутри onMounted
    onMounted(() => {
      console.log('[Analytics] Vercel inject triggered')
      inject()
    })

    return h(DefaultTheme.Layout)
  }
} satisfies Theme