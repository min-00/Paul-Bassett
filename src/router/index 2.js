import Vue from "vue"
import VueRouter from "vue-router"
import Main from "@/components/Main.vue"
import Menu from "@/components/Menu.vue"
import MyPage from "@/components/MyPage.vue"
import Login from "@/components/Login.vue"
import Join from "@/components/Join.vue"


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

  }


]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
