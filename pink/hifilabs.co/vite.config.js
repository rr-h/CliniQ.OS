import { defineConfig } from 'vite';

export default defineConfig({
  root: './hifilabs.co', // Set the root to the directory containing index.html
  build: {
    rollupOptions: {
      input: './hifilabs.co/index.html' // Ensure the input points to the correct index.html
    }
  }
});
