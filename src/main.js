import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Register from "./components/Register.vue";
import Home from "./components/Home.vue";
import Saved from "./components/Saved.vue";

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

import "vue-material/dist/theme/default.css";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueMaterial);

const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: HelloWorld
    },
    {
      path: "/register",
      component: Register
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/saved",
      component: Saved
    }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
