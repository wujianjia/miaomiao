import Vue from 'vue'
import VueRouter from 'vue-router'
import Cenima from './cenima/index.js'
import Movie from './movie/index.js'
import Mine from './mine/index.js'

Vue.use(VueRouter)

  const routes = [
    Cenima,
    Movie,
    Mine,
    {
      path:'/*',
      component:()=>import('../views/movie/Movie.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
