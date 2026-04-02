
import { createRouter, createWebHistory } from "vue-router";
import Home from "../Page/Home.vue";
import Topup from "../Page/Topup.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/topup",
    name: "topup",
    component: Topup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;