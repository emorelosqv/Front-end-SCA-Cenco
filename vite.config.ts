import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@Assets': fileURLToPath(new URL('./src/assets/', import.meta.url)),
      '@Common': fileURLToPath(new URL('./src/common/', import.meta.url)),
      '@Views': fileURLToPath(new URL('./src/views/', import.meta.url)),
      '@Store': fileURLToPath(new URL('./src/store/', import.meta.url)),
      '@Service': fileURLToPath(new URL('./src/services/', import.meta.url)),
      '@Helpers': fileURLToPath(new URL('./src/helpers/', import.meta.url)),
      '@Modules': fileURLToPath(new URL('./src/modules/', import.meta.url)),
      '@Guards': fileURLToPath(new URL('./src/guards/', import.meta.url)),
      '@Router': fileURLToPath(new URL('./src/router/', import.meta.url)),
      '@Components': fileURLToPath(new URL('./src/components/', import.meta.url)),
      '@Layouts': fileURLToPath(new URL('./src/layouts/', import.meta.url)),
    }
  }
})
