import Vue from "vue";
import VueI18n from "vue-i18n";
import store from "../../src/store";
import { locale as en } from "../config/i18n/en";
import { locale as ch } from "../config/i18n/ch";
import { locale as es } from "../config/i18n/es";
import { locale as fr } from "../config/i18n/fr";
Vue.use(VueI18n);

let messages = {};
messages = { ...messages, en, ch, es, fr };
// store.getters.getCurrLanguage
const lang = store.getters.getCurrLanguage || "en";
const i18n = new VueI18n({
    locale: lang,
    messages,
});
export default i18n;
