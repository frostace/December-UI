<template>
    <div id="dropdown">
        <span>
            Language
            <font-awesome-icon icon="chevron-down" />
        </span>
        <div class="dropdown-content">
            <p v-bind:key="language.id" v-for="language in languages">{{language}}</p>
        </div>
        <!-- <select v-model="selected">
            <option disabled value>Language</option>
            <option v-bind:key="language.id" v-for="language in languages">
                {{
                language
                }}
            </option>
        </select>-->
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    computed: mapGetters(["languages"]),
    data() {
        return {
            selected: ""
        };
    }
};
</script>

<style scoped>
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
}

* {
    font-weight: bold;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>
