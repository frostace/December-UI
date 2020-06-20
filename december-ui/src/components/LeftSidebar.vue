<template>
    <div id="sidebar">
        <!-- TODO: refactor it with v-for -->
        <!-- Guide Items -->
        <div class="guideSidebar" v-if="currentPage.includes('guide') ? true : false">
            <div
                v-bind:key="index"
                v-for="(guideSection, index) in $t('guideSections')"
                class="section"
            >
                <a
                    v-if="guideSection.sectionName !== ''"
                    class="section-name"
                >{{ guideSection.sectionName }}</a>
                <div
                    v-if="guideSection.subTitle === '' ? false : true"
                    class="sub-title"
                >{{ guideSection.subTitle }}</div>
                <ul class="pure-menu-list">
                    <li
                        v-bind:key="sectionItem.itemName"
                        v-for="sectionItem in guideSection.sectionItems"
                        class="nav-item"
                    >
                        <router-link v-bind:to="sectionItem.itemPath">{{ sectionItem.itemName }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Component Items -->

        <!-- <SearchBox v-if="currentPage.includes('component') ? true : false" /> -->
        <div class="componentSidebar" v-if="currentPage.includes('component') ? true : false">
            <div
                v-bind:key="index"
                v-for="(componentSection, index) in $t('componentSections')"
                class="section"
            >
                <a
                    v-if="componentSection.sectionName !== ''"
                    class="section-name"
                >{{ componentSection.sectionName }}</a>
                <div
                    v-if="componentSection.subTitle === '' ? false : true"
                    class="sub-title"
                >{{ componentSection.subTitle }}</div>
                <ul class="pure-menu-list">
                    <li
                        v-bind:key="sectionItem.itemName"
                        v-for="sectionItem in componentSection.sectionItems"
                        class="nav-item"
                    >
                        <router-link v-bind:to="sectionItem.itemPath">{{ sectionItem.itemName }}</router-link>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Theme Items -->

        <!-- Resource Items -->
    </div>
</template>

<script>
// import SearchBox from "./SearchBox";

export default {
    name: "sidebar",
    components: {
        /* SearchBox */
    },
    data() {
        return {};
    },
    methods: {
        setLang(evt) {
            // check which element triggered the event, lang info saved in data-lang directive
            const lang = evt.target.dataset.lang;
            localStorage.setItem("language", lang);
            return history.go(0);
        }
    },
    computed: {
        currentPage() {
            // usage:
            // :class="[currentPage.includes('theme') ? classNameA : classNameB]"
            console.log(this.$route.path);
            return this.$route.path;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/var.scss";
@import "../assets/presets.scss";

$key-color: #38ada9;
$font-color: #132420;
$nav-item-font-size: 10px;
$content-font-size: 14px;

#sidebar {
    width: 10rem;
    display: flex;
    overflow: auto;
    @include decent-scrollbar-style;
    flex-direction: column;
    align-items: left;
    a.section-name {
        font-weight: bold;
    }
    .section .sub-title {
        font-size: $nav-item-font-size;
        color: opacify($font-color, 0.8);
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
    font-size: $content-font-size;
    .nav-item {
        padding-left: 10px;
        a {
            margin: 0;
            color: $font-color;
            &.router-link-exact-active {
                color: $key-color;
            }
        }
    }
}
</style>
