<script setup>
import ThemeToggle from './components/ThemeToggle.vue'
</script>

<template>
  <Layout>
    <template #nav-bar-content-before>
      <ThemeToggle />
    </template>
  </Layout>
</template>

<script>
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme.Layout
}
</script>
