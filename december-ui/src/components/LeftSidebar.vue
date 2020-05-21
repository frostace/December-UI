<template>
    <div id="sidebar">
        <SearchBox v-if="currentPage.includes('component') ? true : false" />

        <a>Development</a>
        <ul class="pure-menu-list">
            <li class="nav-item">
                <router-link
                    v-if="currentPage.includes('component') ? true : false"
                    to="/component/installation"
                    >Installation
                </router-link>
            </li>
            <li class="nav-item">
                <router-link
                    v-if="currentPage.includes('component') ? true : false"
                    to="/component/quickstart"
                    >Quick Start
                </router-link>
            </li>
            <li class="nav-item">
                <router-link
                    v-if="currentPage.includes('component') ? true : false"
                    to="/component/i18n"
                    >Internationalization
                </router-link>
            </li>
            <li class="nav-item">
                <router-link
                    v-if="currentPage.includes('component') ? true : false"
                    to="/component/customtheme"
                    >Custom Theme
                </router-link>
            </li>
            <li class="nav-item">
                <router-link
                    v-if="currentPage.includes('component') ? true : false"
                    to="/component/builtintransition"
                    >Built-in transition
                </router-link>
            </li>
            <p v-if="currentPage.includes('component') ? true : false">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                reiciendis culpa sed cupiditate aperiam, nostrum asperiores a?
                Excepturi aliquam ut voluptatum, vero ducimus veniam similique
                consequuntur eaque dolores illum iure?
            </p>
            <p v-if="currentPage.includes('component') ? true : false">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                reiciendis culpa sed cupiditate aperiam, nostrum asperiores a?
                Excepturi aliquam ut voluptatum, vero ducimus veniam similique
                consequuntur eaque dolores illum iure?
            </p>
            <p v-if="currentPage.includes('component') ? true : false">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                reiciendis culpa sed cupiditate aperiam, nostrum asperiores a?
                Excepturi aliquam ut voluptatum, vero ducimus veniam similique
                consequuntur eaque dolores illum iure?
            </p>
        </ul>
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

<style lang="scss" scoped>
$green: #38ada9;

#sidebar {
    width: 10rem;
    display: flex;
    overflow: scroll;
    flex-direction: column;
    align-items: left;
    > a {
        font-weight: bold;
    }
}

#searchbox {
    margin-top: 24px;
}

a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 15px 0 0 0;
    height: 40px;
    text-decoration: none;
}

ul {
    margin: 0;
    list-style: none;
    padding: 0;
    font-size: 14px;
}

.nav-item a {
    margin: 0;
    color: black;
}

.nav-item a.router-link-exact-active {
    color: $green;
}
</style>
