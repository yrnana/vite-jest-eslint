import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    host: '0.0.0.0',
    open: true,
  },
  build: {
    sourcemap: true,
  },
});
