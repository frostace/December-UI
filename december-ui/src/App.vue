<template>
    <div id="app">
        <NavBar class="navbar" />
        <LeftSidebar class="leftsidebar" />
        <router-view class="content" />
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
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0 0 0 10vw;
    height: 100vh;
    color: #2c3e50;
    display: grid;
    grid-template-columns: repeat(4, 1fr) calc(10vw - 1.5rem);
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

.content {
    grid-column: 2 / span 4;
    grid-row: 2 / span 1;
}

.about {
    overflow: scroll;
    scroll-padding-right: 30px;
    padding: 0 10vw 0 0;
}
</style>
