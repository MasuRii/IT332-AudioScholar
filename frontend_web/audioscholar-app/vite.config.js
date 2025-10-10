// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    port: 5173, // This is usually the default, but good to be explicit
    proxy: {
      '/api': {
        target: 'http://localhost:8081', // <--- **THIS IS THE CRITICAL LINE TO ADD/UPDATE**
        changeOrigin: true,
        // The 'rewrite' rule might be needed depending on your backend's exact path structure.
        // If your Spring Boot @RequestMapping for auth is /api/auth, then you probably don't need rewrite.
        // If your Spring Boot @RequestMapping for auth is just /auth, then you'd uncomment and adjust rewrite.
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})