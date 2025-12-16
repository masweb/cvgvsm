import vue from '@vitejs/plugin-vue'
import { URL, fileURLToPath } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { type Plugin, defineConfig, loadEnv } from 'vite'
import purgecss from 'vite-plugin-purgecss'
import viteCompression from 'vite-plugin-compression'
import removeConsole from 'vite-plugin-remove-console'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const plugins: Plugin[] = [
    vue(),
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports: ['vue', 'pinia', 'vue-router', 'vue-i18n', 'vee-validate'],
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      dirs: [
        'src/composables/**',
        'src/plugins/**',
        'src/services/**',
        'src/utils/**',
        'src/types/**',
      ],
    }) as Plugin,
    Components({
      dirs: ['src/services/**', 'src/components/**'],
    }) as Plugin,
  ]

  // Solo agregar optimizaciones en producción
  if (mode === 'production') {
    plugins.push(
      // Eliminar CSS no utilizado
      purgecss({
        content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
        safelist: [
          // CoreUI classes que siempre necesitas
          /^c-/,
          /^sidebar/,
          /^header/,
          /^nav/,
          /^btn/,
          /^card/,
          /^modal/,
          /^table/,
          /^form/,
          // Clases dinámicas de Vue
          /^v-/,
          // Clases de tema
          /data-coreui-theme/,
          'dark',
          // Tus clases personalizadas
          'toggle-dark',
          'pic',
          'cv',
          'controls',
          'theme-info',
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      }) as Plugin,

      // Eliminar console.log en producción
      removeConsole() as Plugin,

      // Compresión brotli
      viteCompression({
        algorithm: 'brotliCompress',
        ext: '.br',
        deleteOriginFile: false,
      }) as Plugin,
    )
  }

  return {
    base: env.VITE_APP_BASE_URL || '/',
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
          quietDeps: true,
        },
      },
    },
    optimizeDeps: {
      include: ['@coreui/coreui', '@coreui/vue', '@tabler/icons-vue'],
    },
    build: {
      // Configuraciones adicionales para optimización
      target: 'esnext',
      minify: 'esbuild',
      rollupOptions: {
        output: {
          // Separar vendors en chunks
          manualChunks: {
            'vue-vendor': ['vue', 'vue-router'],
            'coreui-vendor': ['@coreui/coreui', '@coreui/vue'],
          },
        },
      },
    },
  }
})
