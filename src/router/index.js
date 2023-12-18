import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: { layout: "DefaultLayout" },
      component: HomeView,
    },
    {
      path: "/works",
      name: "works",
      meta: { layout: "WorksLayout" },
      component: () => import("../views/works/WorksView.vue"),
    },
    {
      path: "/works/:id",
      name: "work",
      meta: { layout: "WorksLayout" },
      props: true,
      component: () => import("../views/works/WorkItemView.vue"),
    },
  ],
});

export default router;
