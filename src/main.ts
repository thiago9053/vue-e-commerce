import { createApp } from "vue";
import "@/shared/styles/global.scss";
import App from "./App.vue";

import { router } from "@/shared/infra/routers";
import { vuetify } from "@/shared/infra/vuetify";
import { store } from "@/shared/infra/store";

createApp(App).use(store).use(vuetify).use(router).mount("#app");
