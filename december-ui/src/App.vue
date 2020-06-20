<template>
    <div @click="hideDropdown" id="app">
        <BackToTop>
            <font-awesome-icon icon="caret-up" />
        </BackToTop>
        <NavBar ref="navbar" class="navbar" />
        <!-- add currentPage.includes('guide') || below to enable left sidebar in Guide page -->
        <LeftSidebar
            v-if="
                currentPage.includes('guide') ||  currentPage.includes('component')
            "
            class="leftsidebar"
        />
        <!-- outer level router view -->
        <router-view v-bind:class="getRouterViewClass" />
    </div>
</template>

<script>
import NavBar from "./components/NavBar";
import LeftSidebar from "./components/LeftSidebar";
import BackToTop from "./components/BackToTop";
export default {
    name: "App",
    components: {
        NavBar,
        LeftSidebar,
        BackToTop
    },
    computed: {
        // used to dynamically assign class to router-view so that it's not full in guide and component
        getRouterViewClass() {
            if (
                this.currentPage.includes("guide") ||
                this.currentPage.includes("component")
            ) {
                return "subcontent";
            }
            return "fullcontent";
        },
        currentPage() {
            // returning a string, e.g. "/theme" if the active router-link is theme
            var routerPath = this.$route.path;
            return routerPath;
        },
        currentSubPage() {
            var routerPath = this.$route.path;
            // console.log(
            //     routerPath.includes("component")
            //         ? routerPath.slice(routerPath.lastIndexOf("/") + 1)
            //         : undefined
            // );
            return routerPath.includes("component")
                ? routerPath.slice(routerPath.lastIndexOf("/") + 1)
                : undefined;
        }
    },
    methods: {
        hideDropdown(e) {
            e.stopPropagation();
            let langSelect = this.$refs.navbar.$children[
                this.$refs.navbar.$children.length - 1
            ];
            if (e.target.className !== "selected-container") {
                langSelect.hide();
            }
        }
    }
};
</script>

<style lang="scss">
@import "./assets/var.scss";
@import "./assets/presets.scss";

$content-font-size: 14px;
$key-color: #38ada9;
$font-color: #2c3e50;

html {
    overflow: hidden;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0 0 0 10vw;
    height: 100vh;
    color: $font-color;
    display: grid;
    grid-template-columns: repeat(4, 1fr) calc(10vw - 1.5rem);
    grid-template-rows: min-content auto;
    grid-gap: 1.5rem;
}

.navbar {
    /* grid-area: navbar; */
    grid-column: 1 / span 4;
    grid-row: 1 / span 1;
}

.leftsidebar {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
}

.subcontent {
    overflow: auto;
    scroll-padding-right: 30px;
    padding: 0 12.5% 0 0;
    grid-column: 2 / span 4;
    grid-row: 2 / span 1;

    @include decent-scrollbar-style;
}

.fullcontent {
    grid-column: 1 / span 5;
    grid-row: 2 / span 1;
}

div > h3 {
    margin-top: 55px;
}

div > p {
    font-size: 14px;
}
</style>
