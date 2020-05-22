import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    activeRouterLink: "none",
    currLanguage: "en",
};

const actions = {
    async passSearchText({ commit }, inputText) {
        commit("returnSearchedItems", inputText);
    },
    async selectCurrLanguage({ commit }, lang) {
        commit("updateCurrLanguage", lang);
    },
};

const getters = {
    getActiveRouterLink: (state) => state.activeRouterLink,
    getCurrLanguage: (state) => {
        return state.currLanguage;
    },
    availableLanguages: () => [
        { full: "English", abbr: "en" },
        { full: "中文", abbr: "ch" },
        { full: "Español", abbr: "es" },
        { full: "Français", abbr: "fr" },
    ],
};

const mutations = {
    returnSearchedItems: (state, inputText) => {
        console.log("called returnSearchedItems with " + inputText);
        // return corresponding query items according to input text
    },
    updateCurrLanguage: (state, lang) => {
        state.currLanguage = lang;
    },
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {},
});
