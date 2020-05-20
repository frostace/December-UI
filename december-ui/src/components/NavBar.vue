<template>
    <div>
        <div id="nav">
            <SearchBox />
            <router-link to="/">Guide</router-link>
            <router-link to="/component">Component</router-link>
            <router-link to="/theme">Theme</router-link>
            <router-link to="/resource">Resource</router-link>
            <Dropdown />
        </div>
    </div>
</template>

<script>
import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";
export default {
    name: "NavBar",
    components: {
        SearchBox,
        Dropdown,
    },
};
</script>

<style scoped>
#nav {
    /* padding: 30px; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 5rem;
    border: 1px #ccc solid;
}

a {
    text-decoration: none;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

@media (max-width: 500px) {
    #nav {
    }
}
</style>
