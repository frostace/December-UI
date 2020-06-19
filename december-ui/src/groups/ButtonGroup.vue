<template>
    <div id="demo-block">
        <div class="dc-row dc-row-default">
            <dc-button type="primary">
                <font-awesome-icon icon="chevron-left" />
                <span style="margin-left: 5px">Previous Page</span>
            </dc-button>
            <dc-button type="primary">
                <span style="margin-right: 5px">Next Page</span>
                <font-awesome-icon icon="chevron-right" />
            </dc-button>
        </div>
        <div class="dc-row dc-row-default">
            <dc-button type="primary" content>
                <font-awesome-icon icon="edit" />
            </dc-button>
            <dc-button type="primary" content>
                <font-awesome-icon icon="share-alt" />
            </dc-button>
            <dc-button type="primary" content>
                <font-awesome-icon icon="trash-alt" />
            </dc-button>
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
    flex-direction: row;
    justify-content: flex-start;
    align-items: left;

    .dc-row {
        display: inline-flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: left;
        align-items: center;

        margin-left: 10px;
        &:not(:last-child) {
            margin-right: 15px;
        }

        .dc-button {
            margin: 0;
            &:not(:last-child) {
                border-right-color: hsla(0, 0%, 100%, 0.5);
                margin-right: 0px;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }
            &:not(:first-child) {
                border-left-width: 0;
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
        }
    }
}
</style>