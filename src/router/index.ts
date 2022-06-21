import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layouts/MainLayout/index.vue";

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
          component: () => import("@/views/Home/index.vue"),
          meta: {
            title: "Home",
          },
        },
        {
          path: "/home/:id",
          name: "Post",
          component: () => import("@/views/Post/index.vue"),
          meta: {
            title: "Post",
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
          component: () => import("@/views/About.vue"),
          meta: {
            title: "About",
          },
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/Login/index.vue"),
      meta: {
        title: "Login",
      },
    },
    {
      path: "/signup",
      name: "Sign Up",
      component: () => import("@/views/Signup/index.vue"),
      meta: {
        title: "Sign Up",
      },
    },
  ],
});

export default router;
