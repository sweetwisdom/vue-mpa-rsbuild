import { defineConfig,loadEnv } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'
import path from 'node:path'
import { glob } from 'glob'
const { publicVars } = loadEnv({ prefixes: ['VUE_APP_'] })
export default defineConfig(async () => {
  const entryFiles = await glob('./src/pages/**/index.{ts,tsx,js,jsx}', {
    ignore: ['**/store/**', '**/components/**', '**/utils/**', '**/hooks/**'],
  })
  const templates = Object.fromEntries(
    entryFiles.map(file => {
      const entryName = path.basename(path.dirname(file))
      return [entryName, './' + file]
    })
  )


  return {
    root: './',
    source: {
      entry: {
        ...templates,
      },
      define: publicVars,
    },

    server: {
      host: 'localhost',
      open: false,
    },
    plugins: [pluginVue()],
    // 打包为单个html，不需要请注释 inlineScripts inlineStyles
    output: {
      assetPrefix: './',
      legalComments: 'none', //移除开源注释
      // inlineScripts: true,
      // inlineStyles: true,
    },

    performance: {
      chunkSplit: {
        strategy: 'all-in-one',
      },
    },
  }
})
