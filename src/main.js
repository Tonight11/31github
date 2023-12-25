import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { anu } from "anu-vue";
import { MotionPlugin } from "@vueuse/motion";

// UnoCSS import
import "uno.css";

// anu styles
import "anu-vue/dist/style.css";

// default theme styles
import "@anu-vue/preset-theme-default/dist/style.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(anu, {
  registerComponents: false,
  initialTheme: "dark",
  themes: {
    light: {
      colors: {
        primary: "32.9,100%,50%",
        secondary: "110 231 183",
      },
      cssVars: {
        "body-bg-c": "1.8%,95.9%",
        "surface-c": "0, 0%, 100%",
      },
    },
    dark: {
      colors: {
        primary: "40.7,96.8%,62.9%",
        secondary: "110 231 183",
      },
      cssVars: {
        "body-bg-c": "var(--a-primary-hue), 15%, 5%",
        "surface-c": "var(--a-primary-hue), 7%, 10%",
      },
    },
  },
});
app.use(createPinia());
app.use(MotionPlugin);
app.use(router);

app.mount("#app");
