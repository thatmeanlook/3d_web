import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';


// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react(),
    visualizer({
      open: true, // Automatically open the visualization in the browser
      filename: 'bundle-visualization.html', // Output file name
      template: 'treemap',
      // sourcemap: true, // Enable sourcemaps for better debugging
      gzipSize: true, // Shows gzip sizes
      brotliSize: true, // Shows brotli sizes
    }),
  ],

  assetsInclude: ['**/*.glb'],

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('src/components')) {
            return 'components';
          }
        },
      },
    },
  },

})

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   assetsInclude: ['**/*.glb'],
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes('node_modules')) {
//             return 'vendor'; // All node_modules go into a vendor chunk
//           }
//           if (id.includes('src/components')) {
//             return 'components'; // All components in their own chunk
//           }
//           // Other files will follow default chunking
//           return null;
//         },
//       },
//       chunkSizeWarningLimit: 500, // Set warning limit to 500 kB
//     },
//   },
// });

