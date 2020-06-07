<template>
    <div>
        <dc-row type="flex" class="row-bg">
            <dc-col :span="6">
                <div class="grid-content bg-purple"></div>
            </dc-col>
            <dc-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </dc-col>
            <dc-col :span="6">
                <div class="grid-content bg-purple"></div>
            </dc-col>
        </dc-row>
        <dc-row type="flex" class="row-bg" justify="center">
            <dc-col :span="6">
                <div class="grid-content bg-purple"></div>
            </dc-col>
            <dc-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </dc-col>
            <dc-col :span="6">
                <div class="grid-content bg-purple"></div>
            </dc-col>
        </dc-row>
        <dc-row type="flex" class="row-bg" justify="end">
            <dc-col :span="6">
                <div class="grid-content bg-purple"></div>
            </dc-col>
            <dc-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </dc-col>
            <dc-col :span="6">
                <div class="grid-content bg-purple"></div>
            </dc-col>
        </dc-row>
        <dc-row type="flex" class="row-bg" justify="space-between">
            <dc-col :span="6">
                <div class="grid-content bg-purple"></div>
            </dc-col>
            <dc-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </dc-col>
            <dc-col :span="6">
                <div class="grid-content bg-purple"></div>
            </dc-col>
        </dc-row>
        <dc-row type="flex" class="row-bg" justify="space-around">
            <dc-col :span="6">
                <div class="grid-content bg-purple"></div>
            </dc-col>
            <dc-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </dc-col>
            <dc-col :span="6">
                <div class="grid-content bg-purple"></div>
            </dc-col>
        </dc-row>
    </div>
</template>

<script>
import dcRow from "../components/Row";
import dcCol from "../components/Col.vue";
export default {
    components: {
        dcRow,
        dcCol
    }
};
</script>

<style lang="scss" scoped>
.dc-row:not(:last-child) {
    margin-bottom: 12px;
}

.row-bg {
    padding: 8px 0;
    background-color: #f9fafc;
}
</style>