import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Served from the custom domain https://wilvalglobal.com (GitHub Pages, see CNAME).
// To serve from https://devguywilly.github.io/wilvalglobal-website/ without the domain, build with VITE_BASE=/wilvalglobal-website/
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', 'VITE_')
  return {
    base: env.VITE_BASE || '/',
    plugins: [react()],
  }
})
