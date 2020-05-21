<template>
    <div>
        <div id="NavBar">
            <router-link
                id="nav-link-guide"
                @mouseenter.native="hoveringLink = 'guide'"
                @mouseleave.native="hoveringLink = 'none'"
                :class="[
                    currentHoveringLinkIs('guide')
                        ? 'nav-link-hovered'
                        : 'nav-link',
                ]"
                to="/"
                >Guide</router-link
            >
            <router-link
                id="nav-link-component"
                @mouseenter.native="hoveringLink = 'component'"
                @mouseleave.native="hoveringLink = 'none'"
                :class="[
                    currentHoveringLinkIs('component')
                        ? 'nav-link-hovered'
                        : 'nav-link',
                ]"
                to="/component"
                >Component</router-link
            >
            <router-link
                @mouseenter.native="hoveringLink = 'theme'"
                @mouseleave.native="hoveringLink = 'none'"
                :class="[
                    currentHoveringLinkIs('theme')
                        ? 'nav-link-hovered'
                        : 'nav-link',
                ]"
                to="/theme"
                >Theme</router-link
            >
            <router-link
                @mouseenter.native="hoveringLink = 'resource'"
                @mouseleave.native="hoveringLink = 'none'"
                :class="[
                    currentHoveringLinkIs('resource')
                        ? 'nav-link-hovered'
                        : 'nav-link',
                ]"
                to="/resource"
                >Resource</router-link
            >
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
        currentPage() {
            // usage:
            // :class="[currentPage.includes('theme') ? classNameA : classNameB]"
            return this.$route.path;
        },
    },
};
</script>

<style scoped>
#NavBar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 4rem;
    border-bottom: 1px #ccc solid;
}

#NavBar a {
    font-weight: bold;
    color: #2c3e50;
    opacity: 0.5;
    text-decoration: none;
    height: 4rem;
    display: flex;
    align-items: center;
}

#NavBar a.nav-link-hovered {
    color: #38ada9;
    opacity: 1;
    -webkit-transition: all 0.1s ease-in-out;
    -moz-transition: all 0.1s ease-in-out;
    -ms-transition: all 0.1s ease-in-out;
    -o-transition: all 0.1s ease-in-out;
}

#NavBar a.router-link-exact-active {
    color: #38ada9;
    opacity: 1;
    border-spacing: 10px;
    border-bottom: 2px #38ada9 solid;
    -webkit-transition: all 0.1s ease-in-out;
    -moz-transition: all 0.1s ease-in-out;
    -ms-transition: all 0.1s ease-in-out;
    -o-transition: all 0.1s ease-in-out;
}

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
        color: #38ada9;
        opacity: 1;
        border: none;
    }
}
</style>
