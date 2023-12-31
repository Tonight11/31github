import { fileURLToPath, URL } from "node:url";
import Unocss from "unocss/vite";
import Components from "unplugin-vue-components/vite";
import { AnuComponentResolver } from "anu-vue";
import { templateCompilerOptions } from "@tresjs/core";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ ...templateCompilerOptions }),
    Unocss(),
    Components({
      resolvers: [AnuComponentResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
