// .vitepress/theme/index.ts
import { h, defineComponent, onMounted } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { inject } from '@vercel/analytics'
import './style.css'

const LayoutWithAnalytics = defineComponent({
  setup() {
    onMounted(() => {
      console.log('[Analytics] Vercel inject triggered')
      inject()
    })

    return () => h(DefaultTheme.Layout)
  }
})

export default {
  extends: DefaultTheme,
  Layout: LayoutWithAnalytics
} satisfies Theme