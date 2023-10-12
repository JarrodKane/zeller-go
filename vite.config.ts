import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig } from 'vite';

const __dirname = path.dirname(import.meta.url);

const aliasConfig = {
  '@styles': path.resolve(__dirname, '/src/styles'),
  '@components': path.resolve(__dirname, '/src/components'),
  '@utils': path.resolve(__dirname, '/src/utils'),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliasConfig,
  },
});
