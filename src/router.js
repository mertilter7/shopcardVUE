import Vue from "vue";

import VueRouter from "vue-router";
import Products from "./components/Products";
import Card from "./components/Card";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      component: Products,
      path: "/products",
    },
    {
      component: Card,
      path: "/Card",
    },
  ],
});
