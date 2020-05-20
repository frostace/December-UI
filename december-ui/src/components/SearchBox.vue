<template>
    <div id="searchbox">
        <input
            v-model="message"
            v-bind:type="searchboxType"
            placeholder="Search"
        />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "SearchBox",
    data() {
        return {
            message: "",
        };
    },
    computed: mapGetters(["searchboxType"]),
};
</script>

<style scoped>
#searchbox {
    text-align: left;
}
</style>
