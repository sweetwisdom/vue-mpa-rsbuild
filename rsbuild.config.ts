import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import path from "node:path";
import { glob } from "glob"
// export default defineConfig({
//   plugins: [pluginVue()],
// });
export default defineConfig(async () => {
  const entryFiles = await glob("./src/pages/**/index.{ts,tsx,js,jsx}");
  const templates = Object.fromEntries(
    entryFiles.map((file) => {
      const entryName = path.basename(path.dirname(file));
      return [entryName, "./" + file];
    })
  );
  console.log('⚠️:[ entryFiles ]🎈：', entryFiles)

  return {
    root: "./",
    source: {
      entry: {
        ...templates,
      },
    },

    server: {
      host: "localhost",
      open: false,
    },
    output: {
      assetPrefix: "./",
    },
    plugins: [pluginVue()],
  };
});