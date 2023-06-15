import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";

import ComicDetailView from "../views/ComicDetailView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/comic/:id",
    name: "ComicDetail",
    component: ComicDetailView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
