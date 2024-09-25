import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react';
//import svgr from '@honkhonk/vite-plugin-svgr';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: '',
    silent: false,
    onConsoleLog(log: string, type: 'stdout' | 'stderr'): false | void {
        console.log('log in test: ', log);
        if (log === 'message from third party library' && type === 'stdout') {
          return false;
        }
      },
  },
});