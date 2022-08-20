import { createRouter, createWebHistory } from "vue-router";
// import config from '@/common/config';
import routes from "./routers";
// import store from '@/store';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.name != 'auth') {
//     if (!store.getters['user/isLogged']) window.location.href = String(config.ssoUrl);
//     next();
//   } else {
//     next();
//   }
// });

export default router;
