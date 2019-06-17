import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import bus from "@/util/Bus";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;

let token = sessionStorage.getItem("token");
if (token == null) {
  window.location.href = "./login.html";
} else {
  let role = sessionStorage.getItem("role");
  if (role == "6983f953b49c88210cb9") {
    setTimeout(() => {
      bus.$emit(bus.isAdmin, true);
    }, 1000);
  }

  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
}
