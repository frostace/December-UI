import Vue from "vue";
import VueRouter from "vue-router";
import Guide from "../views/Guide.vue";
import Installation from "../views/Installation.vue";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "guide",
        component: Guide,
    },
    {
        path: "/component",
        name: "Component",
        // route level code-splitting
        // this generates a separate chunk (Component.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "Component" */ "../views/Component.vue"
            ),

        children: [{ path: "installation", component: Installation }],
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
