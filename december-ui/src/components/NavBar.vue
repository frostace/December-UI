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
                    currentMainPage.includes(navItem.alias)
                        ? 'router-link-exact-active'
                        : currentHoveringLinkIs(navItem.alias)
                        ? 'nav-link-hovered'
                        : 'nav-link',
                ]"
                :to="'/' + navItem.alias"
            >
                {{
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
        Dropdown
    },
    data() {
        return {
            hoveringLink: "",
            activeClass: "active"
        };
    },
    methods: {
        currentHoveringLinkIs(linkName) {
            return this.hoveringLink === linkName;
        }
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
        }
    }
};
</script>

<style lang="scss" scoped>
$key-color: #38ada9;
$font-color: #2c3e50;
%mouse-hover-active-color {
    color: $key-color;
    opacity: 1;
}

%x-browser-transition {
    -webkit-transition: all 0.1s ease-in-out;
    -moz-transition: all 0.1s ease-in-out;
    -ms-transition: all 0.1s ease-in-out;
    -o-transition: all 0.1s ease-in-out;
}

#NavBar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 4rem;
    // display: none; // comment this and  height to recover navbar display
    border-bottom: 1px #ccc solid;
    a {
        font-weight: bold;
        color: $font-color;
        opacity: 0.5;
        text-decoration: none;
        height: 4rem;
        display: flex;
        align-items: center;
        @extend %x-browser-transition;

        &.nav-link-hovered,
        &.router-link-exact-active {
            @extend %mouse-hover-active-color;
        }

        &.router-link-exact-active {
            border-spacing: 10px;
            border-bottom: 2px $key-color solid;
        }
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
        color: $key-color;
        opacity: 1;
        border: none;
    }
}
</style>
