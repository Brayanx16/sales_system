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
        component: () => import("@/views/clients/ListClients.vue"),
      },
      {
        path: "add/clients",
        name: "Cadastrar clientes",
        component: () => import("@/views/clients/AddClients.vue"),
      },
    ],
  },
];

export default routes;
