import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: './index.html',
      external: [
        '/js/polyfills-c67a75d1b6f99dc8.js',
        '/js/webpack-fd418f31fe4b0d08.js',
        '/js/framework-0ba0ddd33199226d.js',
        '/js/main-c0364ec597719817.js',
        '/js/_app-ccef8dd21efcc9f9.js',
        '/js/837-c19bc76e77d41ef3.js',
        '/js/984-656420980a2b2a72.js',
        '/js/803-7cd30887c5daaa8a.js',
        '/js/739-32fc889ec63fd09b.js',
        '/js/[windowId]-b1c419fdaf934173.js',
        '/js/_buildManifest.js',
        '/js/_ssgManifest.js',
        '/css/75fb90901c2ee1f9.css'
      ]
    }
  },
  publicDir: './public'
});
