import { HomePage, FooPage, LoginPage, SignupPage } from "@/pages";
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
  {
    path: "/login",
    name: "login",
    component: LoginPage,
    meta: { title: "Login" },
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupPage,
    meta: { title: "Signup" },
  },
];
