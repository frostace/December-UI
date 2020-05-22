<template>
    <div id="dropdown">
        <!-- On click we call the toggle method -->
        <div class="selected" @click="toggle">{{ selected }}</div>
        <div class="options" v-show="isOpen">
            <!-- v-for loops trough `options` -->
            <!-- and renders a div containing the `option`s value. -->
            <div
                class="option"
                v-bind:key="index"
                v-for="(language, index) in availableLanguages"
                @click="set(language.full, language.abbr)"
            >
                {{ language.full }}
            </div>
        </div>

        <!-- TODO: can be modified so that it's under ::after property -->
        <font-awesome-icon icon="chevron-down" size="xs" />
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "dropdown",
    computed: mapGetters(["availableLanguages", "getCurrLanguage"]),
    data() {
        return {
            selected: "English",
            // Whether the options are visible or not.
            isOpen: false,
            // The selected value.
        };
    },
    methods: {
        ...mapActions(["selectCurrLanguage"]),
        toggle: function() {
            this.isOpen = !this.isOpen;
        },
        show: function() {
            this.isOpen = true;
        },
        hide: function() {
            this.isOpen = false;
        },
        // Set option as selected state and close dropdown.
        set: function(langFull, langAbbr) {
            console.log(langFull, langAbbr);

            this.selectCurrLanguage(langAbbr);
            this.$i18n.locale = langAbbr;
            // localStorage.setItem("language", langAbbr);
            this.selected = langFull;
            this.hide();
        },
    },
    mounted: function() {
        // console.log("My dropdown component is mounted!");
    },
};
</script>

<style lang="scss" scoped>
$green: #38ada9;
$black: #2c3e50;

#dropdown {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: lighter;
    position: relative;
    height: 4rem;
    width: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .selected {
        margin-right: 5px;
    }

    // .selected:before {
    //     content: <i class= "far fa-language" ></i>;
    // }

    .options {
        position: absolute;
        left: calc(0% - 7.5px);
        top: 100%;
        z-index: 1;
        width: 120%;
        border: solid 1px #ccc;
        transition: ease-in-out;
        padding: 10px 0;
        background-color: #fff;
        box-shadow: 1px 1px #ccc;
        .option {
            padding: 5px 15px;
        }
        .option:hover {
            color: $green;
            background-color: lighten($green, 50%);
        }
    }
    font-awesome-icon {
        margin-left: 5px;
        font-size: 1px;
    }
}

// .dropdown-content {
//     display: none;
//     position: absolute;
//     background-color: #f9f9f9;
//     min-width: 160px;
//     box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
//     padding: 12px 16px;
//     z-index: 1;
// }

* {
    font-weight: bold;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>
