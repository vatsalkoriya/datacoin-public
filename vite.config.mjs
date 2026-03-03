import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // tell the react plugin to transform .js files as well since the project
    // uses JSX in plain .js modules
    react({
      include: ['**/*.{jsx,tsx,js,ts}'],
    }),
  ],
  esbuild: {
    // ensure esbuild parses JSX for any source file – not just plain .js
    // (the React plugin handles the transformation, but the import-analysis
    // step uses esbuild directly and needs to understand JSX syntax).
    loader: 'jsx',
    include: /src\/.+\.(js|jsx|ts|tsx)$/,
  },
  optimizeDeps: {
    // during dependency scanning, treat .js files as jsx so imports with
    // inline JSX don't crash esbuild
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  server: {
    port: 3000,
    proxy: {
      // forward requests from the frontend dev server to the backend API
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
