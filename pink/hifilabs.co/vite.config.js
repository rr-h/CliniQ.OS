import { defineConfig } from 'vite';

export default defineConfig({
    root: '.',
    build: {
        rollupOptions: {
            input: './index.html',
            external: [
                '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
                '/_next/static/chunks/webpack-fd418f31fe4b0d08.js',
                '/_next/static/chunks/framework-0ba0ddd33199226d.js',
                '/_next/static/chunks/main-c0364ec597719817.js',
                '/_next/static/chunks/pages/_app-ccef8dd21efcc9f9.js',
                '/_next/static/chunks/837-c19bc76e77d41ef3.js',
                '/_next/static/chunks/984-656420980a2b2a72.js',
                '/_next/static/chunks/803-7cd30887c5daaa8a.js',
                '/_next/static/chunks/739-32fc889ec63fd09b.js',
                '/_next/static/chunks/pages/[windowId]-b1c419fdaf934173.js',
                '/_next/static/_qbKLC8NwpL61siZyGWi2/_buildManifest.js',
                '/_next/static/_qbKLC8NwpL61siZyGWi2/_ssgManifest.js'
            ]
        }
    }
});