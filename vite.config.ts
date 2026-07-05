import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Workaround #16.3b — exclude the precompiled Framer bundles from React
// Fast Refresh: react-refresh's computeFullKey recurses forever on the
// bundle's mutually-referencing component maps and overflows the stack.
export default defineConfig({
  plugins: [
    react({
      // Every precompiled bundle in src/framer/ (Main pages, floating
      // companions, runtimes) must stay out of Fast Refresh.
      exclude: [/\/framer\/[^/]+\.js$/],
    }),
  ],
  server: {
    host: true,
    port: 5173,
  },
});
