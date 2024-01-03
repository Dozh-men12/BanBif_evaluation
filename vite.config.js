import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@components': '/src/components',
      /* '@routes': '/src/routes', */
      '@src': '/src',
      '@hooks': '/src/hooks',
     /*  '@layouts': '/src/layouts', */
      '@styles': '/src/styles'
    }
  }
})
