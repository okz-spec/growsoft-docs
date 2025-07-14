<template>
  <button @click="toggleTheme" class="theme-toggle">
    {{ isDark ? '🌙 Dark' : '☀️ Light' }}
  </button>
</template>

<script setup>
import { useColorMode } from 'vitepress'

const { isDark, toggle } = useColorMode()

const toggleTheme = () => {
  toggle()
}
</script>

<style scoped>
.theme-toggle {
  cursor: pointer;
  border: none;
  background: transparent;
  font-size: 1rem;
  padding: 0.5rem;
}
</style>
