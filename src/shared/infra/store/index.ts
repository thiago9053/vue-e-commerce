import { createStore } from "vuex";
import { moduleFoo } from "@/modules/foo/vuex/foo.module";

export const store = createStore({
  modules: { foo: moduleFoo },
});
