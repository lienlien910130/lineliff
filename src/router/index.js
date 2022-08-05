import { createRouter,  createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/index.vue"),
    meta: {
        layout:null,
      title: "訂婚宴管理",
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/register.vue"),
    meta: {
        layout:null,
      title: "馨蓮&宗桓婚禮出席表單",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export function resetRouter() {
  const newRouter = createRouter({
    history: createWebHistory(),
    routes,
  });

  router.matcher = newRouter.matcher; // reset router
}

export default router;
