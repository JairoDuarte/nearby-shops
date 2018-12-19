import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/AppHeader";
import Starter from "./views/Starter";
import AppFooter from "./layout/AppFooter";
import ShopList from "./layout/ShopList";
import Signin from "./layout/auth/Signin";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: Header,
        default: ShopList
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/signin",
      name: "signin",
      components: {
        header: Header,
        default: Signin
      }
    },
    {
      path: "/signout",
      name: "signout",
      components: {
        header: Header
      }
    },
    {
      path: "/prefered",
      name: "prefered",
      components: {
        header: Header,
        default: ShopList
      },
      meta: {
        requiresAuth: true
      }
    }
  ]
});
