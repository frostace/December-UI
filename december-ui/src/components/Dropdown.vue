<template>
    <div ref="langSelect" id="dropdown">
        <div @click="toggle" class="selected-container">
            <!-- On click we call the toggle method -->
            <div class="selected">{{ selected }}</div>
            <!-- TODO: can be modified so that it's under ::after property -->
            <font-awesome-icon class="icon" icon="chevron-down" size="xs" />
        </div>

        <div class="options" v-show="isOpen">
            <!-- v-for loops trough `options` -->
            <!-- and renders a div containing the `option`s value. -->
            <div
                class="option"
                v-bind:key="index"
                v-for="(language, index) in availableLanguages"
                @click="set(language.full, language.abbr)"
            >{{ language.full }}</div>
        </div>
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
            isOpen: false
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
            // console.log(langFull, langAbbr);

            this.selectCurrLanguage(langAbbr);
            this.$i18n.locale = langAbbr;
            // localStorage.setItem("language", langAbbr);
            this.selected = langFull;
            this.hide();
        }
    },
    mounted: function() {
        // console.log("My dropdown component is mounted!");
    }
};
</script>

<style lang="scss" scoped>
$font-color: #2c3e50;
@import "../assets/presets.scss";
@import "../assets/var.scss";

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

    .selected-container {
        cursor: pointer;
        .selected {
            display: inline-block;
            margin-right: 5px;
            @include clear-select-effect;
            @include decent-transition(0.1s);
            &:hover {
                color: $--decent-green;
            }
            pointer-events: none;
        }

        .icon {
            @include decent-transition(0.1s);
            pointer-events: none;
        }

        &:hover {
            .selected,
            .icon {
                color: $--decent-green;
            }
        }
    }

    .options {
        position: absolute;
        left: calc(0% - 7.5px);
        top: 100%;
        z-index: 1;
        width: 120%;
        transition: ease-in-out;
        padding: 10px 0;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        .option {
            @include clear-select-effect;
            cursor: pointer;
            padding: 5px 15px;
            &:hover {
                color: $--decent-green;
                background-color: lighten($--decent-green, 50%);
            }
        }
    }
    font-awesome-icon {
        margin-left: 5px;
        font-size: 1px;
    }
}

* {
    font-weight: bold;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>
