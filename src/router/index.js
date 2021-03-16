import Vue from 'vue'
import VueRouter from 'vue-router'
import VIP from "../views/VIP";
import REG from "../views/REG";
Vue.use(VueRouter)

const routes = [
  {
    path: '/VIP',
    name: 'VIP',
    component: VIP
  },
  {
    path: '/REG',
    name: 'REG',
    component: REG
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
