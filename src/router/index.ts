import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home/index.vue";
import Hospital from "@/views/Hospital/index.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  { path: "/home", name: "home", component: Home },
  { path: "/hospital", name: "hospital", component: Hospital },
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  // 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});

export default router;
