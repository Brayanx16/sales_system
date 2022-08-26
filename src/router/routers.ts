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
        path: "add/client",
        name: "Cadastrar cliente",
        component: () => import("@/views/clients/AddClient.vue"),
      },
      {
        path: "/products",
        name: "Produtos",
        component: () => import("@/views/products/ListProducts.vue"),
      },
      {
        path: "add/product",
        name: "Cadastrar produto",
        component: () => import("@/views/products/AddProduct.vue"),
      },
    ],
  },
];

export default routes;
