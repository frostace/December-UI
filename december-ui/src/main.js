import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import font-awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faCaretDown,
    faCaretUp,
    faSearch,
    faEdit,
    faCheck,
    faEnvelope,
    faStar,
    faTrashAlt,
    faCloudUploadAlt,
    faShareAlt,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// add code block lib
import "../node_modules/vue-hljs/dist/vue-hljs.min.css";
import vueHljs from "vue-hljs";
// add i18n
import i18n from "../common/plugins/vue-i18n";

library.add(
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faCaretDown,
    faCaretUp,
    faSearch,
    faEdit,
    faCheck,
    faEnvelope,
    faStar,
    faTrashAlt,
    faCloudUploadAlt,
    faShareAlt,
    faSpinner
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
