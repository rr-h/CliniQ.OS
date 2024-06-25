import { defineConfig } from 'vite';

export default defineConfig({
  root: './hifilabs.co',
  build: {
    rollupOptions: {
      input: './index.html'
    }
  }
});
