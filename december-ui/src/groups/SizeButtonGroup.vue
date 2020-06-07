<template>
    <div id="demo-block">
        <div class="dc-row dc-row-default">
            <dc-button>Default</dc-button>
            <dc-button size="medium">Medium</dc-button>
            <dc-button size="small">Small</dc-button>
            <dc-button size="mini">Mini</dc-button>
        </div>
        <div class="dc-row dc-row-default">
            <dc-button round>Default</dc-button>
            <dc-button round size="medium">Medium</dc-button>
            <dc-button round size="small">Small</dc-button>
            <dc-button round size="mini">Mini</dc-button>
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
    justify-content: flex-start;
    align-items: left;

    .dc-row {
        display: inline-flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: left;
        align-items: center;

        &:not(:last-child) {
            margin-right: 15px;
            margin-bottom: 20px;
        }

        .dc-button:not(:last-child) {
            margin-right: 5px;
        }
    }
}
</style>