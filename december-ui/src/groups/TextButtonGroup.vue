<template>
    <div id="demo-block">
        <div class="dc-row dc-row-default">
            <dc-button type="text">Text Button</dc-button>
            <dc-button type="text" disabled>Text Button</dc-button>
        </div>
    </div>
</template>

<script>
import dcButton from "../components/Button";
export default {
    data() {
        return {};
    },
    components: {
        dcButton
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/var.scss";

#demo-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    .dc-row {
        display: inline-flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }
}
</style>