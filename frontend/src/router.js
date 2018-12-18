
import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/starter/StarterHeader";
import Footer from "./layout/starter/StarterFooter";
import Starter from "./views/Starter";
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "starter",
      components: {
        header:Header,
        default:Starter,
        footer: Footer,
      }
    }
  ]
});

