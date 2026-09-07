import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/math-method-atlas/' : '/',
  build: { rollupOptions: { output: { manualChunks(id) {
    if (id.replaceAll('\\', '/').includes('/content/')) return 'content';
    if (id.includes('@xyflow')) return 'graph';
    if (id.includes('katex')) return 'math';
  } } } },
});
