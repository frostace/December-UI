<template>
    <div id="searchbox">
        <input v-model="message" placeholder="Search" />
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
        }
    },
    updated() {
        // use debounce to stablize search result within 1 sec
        debounce(this.callMappedAction, 1000)();
    }
};
</script>

<style scoped>
#searchbox {
    text-align: left;
}

#searchbox input {
    height: 1.2rem;
    padding: 0 10px;
    border: none;
    border: solid 1px #ccc;
    border-radius: 4px;
}

#searchbox input:focus {
    height: 1.2rem;
    padding: 0 10px;
    border: none;
    border: solid 1px #38ada9;
    border-radius: 4px;
    box-shadow: 0 0 5px #38ada9;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
}
</style>
