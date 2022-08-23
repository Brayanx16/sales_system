import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/containers/BasePage.vue"),
    children: [
      {
        path: "/",
        name: "Inicio",
        component: () => import("@/views/Dashboard.vue"),
      },
      {
        path: "/clients",
        name: "Clientes",
        component: () => import("@/views/clients/ClientsList.vue"),
      },
    ],
  },
];

export default routes;
