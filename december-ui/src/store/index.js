import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {};

const actions = {
    async passSearchText({ commit }, inputText) {
        commit("returnSearchedItems", inputText);
    },
};

const getters = {
    languages: () => ["English", "中文", "Español", "Français"],
};

const mutations = {
    returnSearchedItems: (state, inputText) => {
        console.log("called returnSearchedItems with " + inputText);
        // return corresponding query items according to input text
    },
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {},
});