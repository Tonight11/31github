import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { anu } from "anu-vue";

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
  class: "a-theme-coffee",
  coffee: {
    colors: {
      primary: "27, 39%, 77%",
    },
  },
});
app.use(createPinia());
app.use(router);

app.mount("#app");
