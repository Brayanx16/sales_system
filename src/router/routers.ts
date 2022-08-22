import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/containers/BasePage.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/views/Dashboard.vue"),
      },
    ],
  },
];

export default routes;
