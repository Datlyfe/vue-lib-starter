import Vue from "vue";
import App from "./App.vue";
import lib from "../../src/index";

Vue.config.productionTip = false;

Vue.use(lib);

new Vue({
  render: h => h(App)
}).$mount("#app");
