import { createRouter,  createWebHashHistory,  createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/register.vue"),
    meta: {
      title: "馨蓮&宗桓婚禮出席表單",
    },
    
  },
  {
    path: "/back",
    name: "back",
    component: () => import("@/index.vue"),
    meta: {
      title: "訂婚宴管理",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export function resetRouter() {
  const newRouter = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  router.matcher = newRouter.matcher; // reset router
}

export default router;
