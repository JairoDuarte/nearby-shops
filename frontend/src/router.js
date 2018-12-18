import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/AppHeader";
import Starter from "./views/Starter";
import AppFooter from "./layout/AppFooter";
import ShopList from "./layout/ShopList";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: Header,
        default: Starter
      },
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: "/signin",
      name: "signin",
      components: {
        header: Header,
        default: Starter
      },
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: "/signup",
      name: "signup",
      components: {
        header: Header,
        default: AppFooter
      },
      meta: {
        requiresVisitor: true
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
      }
    }
  ]
});
