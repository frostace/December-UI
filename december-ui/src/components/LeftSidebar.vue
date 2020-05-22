<template>
    <div id="sidebar">
        <SearchBox v-if="currentPage.includes('component') ? true : false" />
        <div
            class="componentSidebar"
            v-if="currentPage.includes('component') ? true : false"
        >
            <div
                v-bind:key="componentSection.sectionName"
                v-for="componentSection in componentSections"
                class="section"
            >
                <a class="section-name">{{ componentSection.sectionName }}</a>
                <div
                    v-if="componentSection.subTitle === '' ? false : true"
                    class="sub-title"
                >
                    {{ componentSection.subTitle }}
                </div>
                <ul class="pure-menu-list">
                    <li
                        v-bind:key="sectionItem.itemName"
                        v-for="sectionItem in componentSection.sectionItems"
                        class="nav-item"
                    >
                        <router-link v-bind:to="sectionItem.itemPath"
                            >{{ sectionItem.itemName }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBox from "./SearchBox";

export default {
    name: "sidebar",
    components: { SearchBox },
    data() {
        return {
            componentSections: [
                {
                    sectionName: "Development",
                    subTitle: "",
                    sectionItems: [
                        {
                            itemName: "Installation",
                            itemPath: "/component/installation",
                        },
                        {
                            itemName: "Quick Start",
                            itemPath: "/component/quickstart",
                        },
                        {
                            itemName: "Internationalization",
                            itemPath: "/component/i18n",
                        },
                        {
                            itemName: "Custom Theme",
                            itemPath: "/component/customtheme",
                        },
                        {
                            itemName: "Built-in transition",
                            itemPath: "builtintransition",
                        },
                    ],
                },
                {
                    sectionName: "Components",
                    subTitle: "Basic",
                    sectionItems: [
                        {
                            itemName: "Layout",
                            itemPath: "/component/layout",
                        },
                        {
                            itemName: "Layout Container",
                            itemPath: "/component/layoutcontainer",
                        },
                        {
                            itemName: "Color",
                            itemPath: "/component/color",
                        },
                        {
                            itemName: "Typography",
                            itemPath: "/component/typography",
                        },
                        {
                            itemName: "Border",
                            itemPath: "/component/border",
                        },
                        {
                            itemName: "Icon",
                            itemPath: "/component/icon",
                        },
                        {
                            itemName: "Button",
                            itemPath: "/component/button",
                        },
                        {
                            itemName: "Link",
                            itemPath: "/component/link",
                        },
                    ],
                },
                // {
                //     sectionName: "",
                //     sectionItems: [],
                // },
                // {
                //     sectionName: "",
                //     sectionItems: [],
                // },
                // {
                //     sectionName: "",
                //     sectionItems: [],
                // },
            ],
        };
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

<style lang="scss" scoped>
$green: #38ada9;

#sidebar {
    width: 10rem;
    display: flex;
    overflow: scroll;
    flex-direction: column;
    align-items: left;
    a.section-name {
        font-weight: bold;
    }
    .section .sub-title {
        font-size: 10px;
        color: #999;
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
    .nav-item {
        padding-left: 10px;
    }

    .nav-item a {
        margin: 0;
        color: black;
    }

    .nav-item a.router-link-exact-active {
        color: $green;
    }
}
</style>
