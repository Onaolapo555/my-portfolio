import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


export default defineConfig({
  plugins: [react(), tailwindcss(),
    ViteImageOptimizer({
      png: { quality: 75 },
      jpeg: { quality: 70 },
      jpg: { quality: 70 },
      webp: { quality: 75 }, // Automatically optimizes webp targets
    }),
  ],
  build: {
    chunkSizeWarningLimit: 800, // Reduces warning noise
    rollupOptions: {
      output: {
        // Converted from an object to a function to satisfy Rolldown
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor';
            }
            if (id.includes('lottie-web')) {
              return 'lottie';
            }
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
