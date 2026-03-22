import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          data: ['./src/data/quiz', './src/data/ranking'],
        },
      },
    },
  },
})
