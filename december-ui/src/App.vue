<template>
    <div id="app">
        <NavBar ref="navbar" class="navbar" />
        <LeftSidebar
            v-if="
                currentPage.includes('guide') ||
                    currentPage.includes('component')
            "
            class="leftsidebar"
        />
        <router-view
            v-bind:class="getRouterViewClass"
            v-bind:name="currentSubPage"
        />
    </div>
</template>

<script>
import NavBar from "./components/NavBar";
import LeftSidebar from "./components/LeftSidebar";
export default {
    name: "App",
    components: {
        NavBar,
        LeftSidebar,
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
            return routerPath.includes("component")
                ? routerPath.slice(routerPath.lastIndexOf("/") + 1)
                : undefined;
        },
    },
    updated() {},
};
</script>

<style lang="scss">
$black: #2c3e50;

html {
    overflow: hidden;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0 0 0 10vw;
    height: 100vh;
    color: $black;
    display: grid;
    grid-template-columns: repeat(4, 1fr) calc(10vw - 1.5rem);
    grid-template-rows: min-content auto;
    /* grid-template-areas:
        "navbar navbar navbar navbar"
        "leftsidebar content content content"; */
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
    grid-column: 2 / span 4;
    grid-row: 2 / span 1;
}

.fullcontent {
    grid-column: 1 / span 5;
    grid-row: 2 / span 1;
}

.about {
    overflow: auto;
    scroll-padding-right: 30px;
    padding: 0 10vw 0 0;
}
</style>
