import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import nesting from 'tailwindcss/nesting'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isAnalyze = process.argv.includes('analyze')

  return {
    server: {
      host: '0.0.0.0'
    },
    plugins: [
      vue(),
      AutoImport({
        imports: [
          'vue',
          'vue-router'
        ],
        dts: true,
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        }
      }),
      // refer: https://github.com/sxzz/unplugin-vue-macros/tree/main/packages/define-options
      DefineOptions(),
      // Inject GA to index.html
      createHtmlPlugin({
        inject: {
          data: {
            injectGA: mode === 'prod'
              ? `
              <!-- Google tag (gtag.js) -->
              <!-- Global site tag (gtag.js) - Google Analytics -->
              <!-- Google tag (gtag.js) -->
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-462G4227BG"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-462G4227BG');
              </script>
              `
              : ''
          }
        }
      }),
      isAnalyze
        ? visualizer({
          filename: path.resolve(__dirname, 'node_modules/rollup-plugin-visualizer/stats.html'),
          open: true
        })
        : undefined
    ],
    css: {
      postcss: {
        plugins: [nesting(), tailwind(), autoprefixer()]
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
})
