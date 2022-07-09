import { resolve } from 'path'
import { defineConfig } from 'vite'
import stylelint from 'vite-plugin-stylelint'
import handlebars from 'vite-plugin-handlebars'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../app',
    rollupOptions: {
      input: { main: resolve(__dirname, 'src/index.html') },
    },
  },
  plugins: [
    stylelint(),
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
    }),
    eslint(),
  ],
  publicDir: true,
})
