import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/EconX-AI-Hub/' : '/',
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs'
  }
}));
