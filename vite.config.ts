import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this repo at https://devguywilly.github.io/wilvalglobal-website/
// When a custom domain (e.g. wilvalglobal.com) is connected, build with VITE_BASE=/ instead.
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', 'VITE_')
  return {
    base: env.VITE_BASE || '/wilvalglobal-website/',
    plugins: [react()],
  }
})
