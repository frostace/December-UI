<template>
    <div id="demo-block">
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
            <dc-button type="primary">
                <font-awesome-icon icon="search" />
                <span style="margin-left: 5px">Search</span>
            </dc-button>
            <dc-button type="primary">
                <span style="margin-right: 5px">Upload</span>
                <font-awesome-icon icon="cloud-upload-alt" />
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