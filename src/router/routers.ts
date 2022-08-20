import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/containers/BasePage.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/components/HelloWorld.vue"),
      },
    ],
  },
];

export default routes;
