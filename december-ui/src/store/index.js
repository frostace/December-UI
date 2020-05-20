import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    searchboxVisible: "search",
};

const getters = {
    searchboxType: (state) => state.searchboxType,
    languages: () => ["English", "中文", "Español", "Français"],
};

export default new Vuex.Store({
    state,
    getters,
    mutations: {},
    actions: {},
    modules: {},
});
