<template>
    <div id="searchbox">
        <input class="textInput" v-model="message" type="text" ref="search" placeholder="Search" />
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { debounce } from "lodash";
export default {
    name: "SearchBox",
    data() {
        return {
            message: ""
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
        }
    },
    updated() {
        // use debounce to stablize search result within 1 sec
        debounce(this.callMappedAction, 1000)();
    }
    // mounted() {
    //     this.$nextTick(() => this.$refs.search.focus());
    // }
};
</script>

<style lang="scss" scoped>
$key-color: #38ada9;
$borderWidth: 1px;
%border-style {
    border: none;
    outline: none;
    border: {
        width: $borderWidth;
        style: solid;
        radius: 4px;
    }
}

#searchbox {
    text-align: left;
    .textInput {
        height: 1.2rem;
        padding: 0 10px;
        @extend %border-style;
        border-color: #ccc;
        &:active,
        &:focus {
            border-color: lighten($key-color, 5%);
            box-shadow: lighten($key-color, 5%);
            transition: ease-in-out;
        }
    }
}
</style>
