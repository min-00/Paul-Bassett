import Vue from "vue"
import VueRouter from "vue-router"
import Main from "@/components/Main.vue"
import Menu from "@/components/Menu.vue"

import MyPage from "@/components/MyPage.vue"
import Login from "@/components/Login.vue"
import Join from "@/components/Join.vue"
import MemberShip from "@/components/membership.vue"
import gift from "@/components/gift.vue"
import MenuDetail from "@/components/MenuDetail.vue"
import Cart from '@/components/cart.vue'
import StoreSelection from "@/components/StoreSelection.vue"
import KakaoMap from "@/components/KakaoMap.vue"
import OrderHistory from "@/components/OrderHistory.vue"
import OrderInfo from "@/components/OrderInfo.vue"
import JoinEnd from "@/components/JoinEnd.vue"
import Coupon from "@/components/Coupon.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/Menu",
    name: "Menu",
    component: Menu
  },
  {
    path: "/MenuDetail/:id",
    name: "MenuDetail",
    component: MenuDetail
  },
  {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
  {
    path: "/MyPage",
    name: "MyPage",
    component: MyPage
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/Join",
    name: "Join",
    component: Join
  },
  {
    path: "/MemberShip",
    name: "MemberShip",
    component: MemberShip
  },
  {
    path: "/gift",
    name: "gift",
    component: gift
  },
  {
    path: "/JoinEnd",
    name: "JoinEnd",
    component: JoinEnd

  },
  {
    path: "/StoreSelection",
    name: "StoreSelection",
    component: StoreSelection
  },
  {
    path: "/KakaoMap",
    name: "KakaoMap",
    component: KakaoMap
  },
  {
    path: "/OrderHistory",
    name: "OrderHistory",
    component: OrderHistory
  },
  {
    path: "/OrderInfo",
    name: "OrderInfo",
    component: OrderInfo
  },
  {
    path: "/Coupon",
    name: "Coupon",
    component: Coupon
  }


]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
