<template>
    <div id="dropdown">
        <select>
            <option v-bind:key="language.id" v-for="language in languages">{{
                language
            }}</option>
        </select>
    </div>
</template>
<script>
// import Vue from "vue";
import { mapGetters } from "vuex";
export default {
    computed: mapGetters(["languages"]),
};
</script>

<style scoped></style>
