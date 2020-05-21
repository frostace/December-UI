<template>
    <div id="searchbox">
        <input
            class="textInput"
            v-model="message"
            type="text"
            ref="search"
            placeholder="Search"
        />
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { debounce } from "lodash";
export default {
    name: "SearchBox",
    data() {
        return {
            message: "",
        };
    },
    methods: {
        ...mapActions(["passSearchText"]),
        // helper function for debounce
        callMappedAction: function() {
            this.passSearchText(this.message);
        },
        handleFocus() {
            // this.$refs.search.$el.focus();
        },
    },
    updated() {
        // use debounce to stablize search result within 1 sec
        debounce(this.callMappedAction, 1000)();
    },
    // mounted() {
    //     this.$nextTick(() => this.$refs.search.focus());
    // }
};
</script>

<style lang="scss" scoped>
$green: #38ada9;

#searchbox {
    text-align: left;
    border: none;
    outline: none;
    // border: solid 1px #ccc;
    // border-radius: 4px;
}

#searchbox .textInput {
    height: 1.2rem;
    padding: 0 10px;
    border: none;
    outline: 0;
    border-width: 2px;
    border-style: solid;
    border-color: #ccc;
    border-radius: 4px;
    &:active,
    &:focus {
        border: none;
        outline: 0;
        border-width: 2px;
        border-style: solid;
        border-color: lighten($green, 5%);
        border-radius: 4px;
        box-shadow: lighten($green, 5%);
        transition: ease-in-out;
    }
}
</style>
