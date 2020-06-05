import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "../views/Welcome.vue";
import Guide from "../views/Guide.vue";
import Component from "../views/Component.vue";
import Installation from "../views/Installation";
import QuickStart from "../views/QuickStart";
import Internationalization from "../views/Internationalization";
import CustomTheme from "../views/CustomTheme";
import BuiltinTransition from "../views/BuiltinTransition";
// components
import Layout from "../views/Layout";
import ButtonView from "../views/ButtonView";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "welcome",
        component: Welcome,
    },
    {
        path: "/guide",
        redirect: "/guide/installation",
        name: "guide",
        component: Guide,
        children: [
            {
                path: "installation",
                name: "installation",
                component: Installation,
            },
            {
                path: "quickstart",
                name: "quickstart",
                component: QuickStart,
            },
            {
                path: "i18n",
                name: "i18n",
                component: Internationalization,
            },
            {
                path: "customtheme",
                name: "customtheme",
                component: CustomTheme,
            },
            {
                path: "builtintransition",
                name: "builtintransition",
                component: BuiltinTransition,
            },
        ],
    },
    {
        path: "/component",
        redirect: "/component/layout",
        name: "component",
        // route level code-splitting
        // this generates a separate chunk (Component.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Component,
        children: [
            {
                path: "layout",
                name: "layout",
                component: Layout,
            },
            {
                path: "button",
                name: "button",
                component: ButtonView,
            },
        ],
    },
    {
        path: "/theme",
        name: "Theme",
        component: () =>
            import(/* webpackChunkName: "Theme" */ "../views/Theme.vue"),
    },
    {
        path: "/resource",
        name: "Resource",
        component: () =>
            import(/* webpackChunkName: "Resource" */ "../views/Resource.vue"),
    },
    {
        path: "/installation",
        name: "Installation",
        component: () =>
            import(
                /* webpackChunkName: "Installation" */ "../views/Installation.vue"
            ),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
