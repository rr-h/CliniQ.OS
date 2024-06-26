import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    root: './', // Ensure Vite knows where to find the index.html
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: './index.html' // Set the entry point
        }
    }
})