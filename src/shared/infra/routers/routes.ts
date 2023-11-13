import { HomePage, FooPage } from "@/pages";
import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "index",
    component: HomePage,
    meta: { title: "Home" },
  },
  {
    path: "/foo",
    name: "foo",
    component: FooPage,
    meta: { title: "Foo" },
  },
];
