import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import font-awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// add code block lib
import "../node_modules/vue-hljs/dist/vue-hljs.min.css";
import vueHljs from "vue-hljs";
// add i18n
import i18n from "../common/plugins/vue-i18n";

library.add(
    faChevronDown,
    faCaretDown,
    faSearch,
    faEdit,
    faCheck,
    faEnvelope,
    faStar,
    faTrashAlt
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(vueHljs);

new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
}).$mount("#app");
