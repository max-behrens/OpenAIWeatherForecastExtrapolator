import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  // Load env variables
  const env = loadEnv(mode, process.cwd(), '');
  const baseUrl = env.ASSET_URL || '';
  
  return {
    base: mode === 'production' ? baseUrl : '/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
        }
    },
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        react(),
    ],
    build: {
        outDir: 'public/build',
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['vue', 'react', 'react-dom'],
                },
            },
        },
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
        hmr: {
          host: 'localhost',
        },
    },
    optimizeDeps: {
        include: ['@angular/core', '@angular/common', 'rxjs', 'zone.js']
    },
  };
});