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
    text-align: center;
    color: #2c3e50;
    display: grid;
    grid-template-areas:
        "navbar navbar navbar navbar"
        "leftsidebar content content content";
    grid-gap: 1rem;
}

.navbar {
    grid-area: navbar;
}

.leftsidebar {
    grid-area: leftsidebar;
}

.content {
    grid-area: content;
}
</style>
