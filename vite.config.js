// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   assetsInclude: ['**/*.glb']
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  build: {
    rollupOptions: {
      external: ['react-vertical-timeline-component'],
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // All node_modules go into a vendor chunk
          }
          if (id.includes('src/components')) {
            return 'components'; // All components in their own chunk
          }
          // Other files will follow default chunking
          return null;
        },
      },
      chunkSizeWarningLimit: 500, // Set warning limit to 500 kB
    },
  },
});

