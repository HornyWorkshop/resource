import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'

import autoImports from 'unplugin-auto-import/vite'
import autoIcons from 'unplugin-icons/vite'

import autoComponents from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import autoRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [
    autoRouter({
      dts: './.types/auto-routes.d.ts',
    }),
    vue(),
    autoIcons({
      autoInstall: true,
    }),
    autoImports({
      dts: './.types/auto-imports.d.ts',
      imports: [
        'vue',
        '@vueuse/core',
        VueRouterAutoImports,
        {
          from: 'uuid',
          imports: [{ name: 'v4', as: 'createIdentity' }],
        },
      ],
    }),
    autoComponents({
      dts: './.types/auto-components.d.ts',
      directoryAsNamespace: true,
    }),
  ],

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,

  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1421,
    strictPort: true,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ['**/src-tauri/**'],
    },
  },

  resolve: {
    alias: {
      '@shared': fileURLToPath(new URL('./src/modules/shared', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
