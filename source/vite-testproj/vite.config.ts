/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 8000, // This is the port which we will use in docker
    // Thanks @sergiomoura for the window fix
    // add the next lines if you're using windows and hot reload doesn't work
      watch: {
        usePolling: true
      }
  },
  test: {
   globals: true, // < ==
   environment: 'jsdom',
  },
  plugins: [
    react(),
    checker({ typescript: true }),
    // You can also disable type checking when running testing with Vitest
    // !process.env.VITEST ? checker({ typescript: true }) : undefined,
    ],
})