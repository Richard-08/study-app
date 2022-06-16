import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layouts/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Layout,
      redirect: "/home",
      meta: {
        title: "Home",
      },
      children: [
        {
          path: "home",
          name: "Home",
          component: () => import("@/views/HomeView.vue"),
          meta: {
            title: "Home",
          },
        },
      ],
    },
    {
      path: "/about",
      name: "About",
      component: Layout,
      redirect: "/about/index",
      meta: {
        title: "About",
      },
      children: [
        {
          path: "/about/index",
          name: "About",
          component: () => import("@/views/AboutView.vue"),
          meta: {
            title: "About",
          },
        },
      ],
    },
  ],
});

export default router;
