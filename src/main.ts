import { createApp } from "vue";
import App from "./App.vue";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";

import router from "./router";
import store from "./store";
import "bytemd/dist/index.css";
// import axios from "axios";

import "@/plugins/axios";
import "@/access";

const app = createApp(App);

// // Add axios to global properties
// app.config.globalProperties.$axios = axios;

app.use(store).use(router).use(ArcoVue).mount("#app");
