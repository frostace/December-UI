import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// add code block lib
import "../node_modules/vue-hljs/dist/vue-hljs.min.css";
import vueHljs from "vue-hljs";

library.add(faChevronDown);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(vueHljs);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
