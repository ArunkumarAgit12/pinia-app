import { createRouter, createWebHistory } from "vue-router";
import AuthorView from "../views/AuthorView.vue";
import PostView from "../views/PostView.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "posts",
      component: () => import("../views/PostsView.vue"),
    },
    {
      path: "/authors",
      name: "authors",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AuthorsView.vue"),
    },
    { path: "/author/:username", name: "author", component: AuthorView },
    { path: "/post/:id", name: "post", component: PostView },
  ],
});

export default router;
