<template>
    <div id="sidebar">
        <SearchBox v-if="currentPage.includes('component') ? true : false" />

        <h1>sidebar</h1>
        <router-link
            v-if="currentPage.includes('component') ? true : false"
            to="/component/installation"
            >Installation</router-link
        >
    </div>
</template>

<script>
import SearchBox from "./SearchBox";

export default {
    name: "sidebar",
    components: { SearchBox },
    computed: {
        currentPage() {
            // usage:
            // :class="[currentPage.includes('theme') ? classNameA : classNameB]"
            return this.$route.path;
        },
    },
};
</script>

<style scoped>
#sidebar {
    width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: left;
    /* border-right: solid 1px #ccc; */
}

#searchbox {
    margin-top: 30px;
}

a {
    text-decoration: none;
}
</style>
