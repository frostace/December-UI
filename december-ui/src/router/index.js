import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "../views/Welcome.vue";
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
        // route level code-splitting
        // this generates a separate chunk (Component.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        components: {
            default: () =>
                import(
                    /* webpackChunkName: "Component/Installation" */ "../views/Installation.vue"
                ),
            installation: () =>
                import(
                    /* webpackChunkName: "Component/Installation" */ "../views/Installation.vue"
                ),
            quickstart: () =>
                import(
                    /* webpackChunkName: "Component/QuickStart" */ "../views/QuickStart.vue"
                ),
            i18n: () =>
                import(
                    /* webpackChunkName: "Component/Internationalization" */ "../views/Internationalization.vue"
                ),
            customtheme: () =>
                import(
                    /* webpackChunkName: "Component/CustomTheme" */ "../views/CustomTheme.vue"
                ),
            builtintransition: () =>
                import(
                    /* webpackChunkName: "Component/BuiltinTransition" */ "../views/BuiltinTransition.vue"
                ),
        },
        children: [
            {
                path: "/guide/installation",
                name: "installation",
                component: () =>
                    import(
                        /* webpackChunkName: "Installation" */ "../views/Installation.vue"
                    ),
            },
            {
                path: "/guide/quickstart",
                name: "quickstart",
                component: import(
                    /* webpackChunkName: "QuickStart" */ "../views/QuickStart.vue"
                ),
            },
            {
                path: "/guide/i18n",
                name: "i18n",
                component: import(
                    /* webpackChunkName: "Internationalization" */ "../views/Internationalization.vue"
                ),
            },
            {
                path: "/guide/customtheme",
                name: "customtheme",
                component: import(
                    /* webpackChunkName: "CustomTheme" */ "../views/CustomTheme.vue"
                ),
            },
            {
                path: "/guide/builtintransition",
                name: "builtintransition",
                component: import(
                    /* webpackChunkName: "BuiltinTransition" */ "../views/BuiltinTransition.vue"
                ),
            },
        ],
    },
    {
        path: "/component",
        name: "component",
        component: () =>
            import(/* webpackChunkName: "Theme" */ "../views/Component.vue"),
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
