import { createRouter, createWebHistory } from 'vue-router'
import {RouterNames} from "@/router/RouterNames";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouterNames.HOME,
      component: () => import('@/Pages/Movies/HomePage.vue')
    },
    {
      path: '/watch/:id',
      name: RouterNames.WATCH_MOVIE,
      component: () => import('@/Pages/Movies/WatchFilm.vue')
    },
    {
      path: '/series',
      name: RouterNames.SERIES,
      component: () => import('../Pages/Series/SeriesPage.vue')
    },
    {
      path: '/series/watch/:id',
      name: RouterNames.WATCH_SERIES,
      component: () => import('../Pages/Series/WatchSeries.vue')
    },
    {
      path: '/anime',
      name: RouterNames.ANIME,
      component: () => import('../Pages/AnimePage.vue'),
    },
    {
      path: '/tv-show',
      name: RouterNames.SHOW,
      component: () => import('../Pages/ShowPage.vue')
    }
  ]
})

export default router
