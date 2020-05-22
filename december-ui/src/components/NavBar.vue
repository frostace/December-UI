<template>
    <div>
        <div id="NavBar">
            <router-link
                :id="'nav-link-' + navItem.alias"
                v-bind:key="index"
                v-for="(navItem, index) in $t('navbarItems')"
                @mouseenter.native="hoveringLink = navItem.alias"
                @mouseleave.native="hoveringLink = 'none'"
                :class="[
                    currentHoveringLinkIs(navItem.alias)
                        ? 'nav-link-hovered'
                        : currentMainPage.includes(navItem.alias)
                        ? 'router-link-exact-active'
                        : 'nav-link',
                ]"
                :to="'/' + navItem.alias"
                >{{
                    navItem.name.charAt(0).toUpperCase() + navItem.name.slice(1)
                }}
            </router-link>

            <Dropdown class="nav-dropdown nav-lang" />
        </div>
    </div>
</template>

<script>
import Dropdown from "./Dropdown";
import {} from "vuex";
export default {
    name: "NavBar",
    components: {
        Dropdown,
    },
    data() {
        return {
            hoveringLink: "",
            activeClass: "active",
        };
    },
    methods: {
        currentHoveringLinkIs(linkName) {
            return this.hoveringLink === linkName;
        },
    },
    computed: {
        currentMainPage() {
            // usage:
            // :class="[currentPage.includes('theme') ? classNameA : classNameB]"
            var routerPath = this.$route.path;
            return routerPath.lastIndexOf("/") === 0
                ? routerPath.slice(1)
                : routerPath.slice(1, routerPath.lastIndexOf("/"));
        },
        currentPage() {
            // usage:
            // :class="[currentPage.includes('theme') ? classNameA : classNameB]"
            var routerPath = this.$route.path;
            return routerPath;
        },
    },
};
</script>

<style lang="scss" scoped>
$green: #38ada9;

#NavBar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 4rem;
    border-bottom: 1px #ccc solid;
    a {
        font-weight: bold;
        color: #2c3e50;
        opacity: 0.5;
        text-decoration: none;
        height: 4rem;
        display: flex;
        align-items: center;
        -webkit-transition: all 0.1s ease-in-out;
        -moz-transition: all 0.1s ease-in-out;
        -ms-transition: all 0.1s ease-in-out;
        -o-transition: all 0.1s ease-in-out;
    }

    a.nav-link-hovered {
        color: $green;
        opacity: 1;
    }

    a.router-link-exact-active {
        color: $green;
        opacity: 1;
        border-spacing: 10px;
        border-bottom: 2px $green solid;
    }
}

// responsive design
@media (max-width: 375px) {
    #NavBar {
        display: grid;
        grid-template-columns: 1fr;
        height: fit-content;
        border: none;
    }

    #NavBar a {
        height: 2rem;
    }

    #NavBar a.router-link-exact-active {
        color: $green;
        opacity: 1;
        border: none;
    }
}
</style>
