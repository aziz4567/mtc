import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    // Enable babel for better performance
    babel: {
      plugins: []
    }
  })],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['framer-motion', 'react-router-dom']
  },
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion'],
          icons: ['react-icons', 'lucide-react']
        }
      }
    },
    // Optimize chunks
    chunkSizeWarningLimit: 1000,
    sourcemap: false
  },
  server: {
    // Enable HMR for better development experience
    hmr: {
      overlay: true
    }
  }
});
