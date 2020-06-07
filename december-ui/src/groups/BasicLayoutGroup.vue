<template>
    <div>
        <dc-row>
            <dc-col :span="24">
                <div class="grid-content bg-purple-dark"></div>
            </dc-col>
        </dc-row>
        <dc-row>
            <dc-col :span="12">
                <div class="grid-content bg-purple"></div>
            </dc-col>
            <dc-col :span="12">
                <div class="grid-content bg-purple-light"></div>
            </dc-col>
        </dc-row>
        <dc-row>
            <dc-col :span="8">
                <div class="grid-content bg-purple"></div>
            </dc-col>
            <dc-col :span="8">
                <div class="grid-content bg-purple-light"></div>
            </dc-col>
            <dc-col :span="8">
                <div class="grid-content bg-purple"></div>
            </dc-col>
        </dc-row>
        <dc-row>
            <dc-col :span="6">
                <div class="grid-content bg-purple"></div>
            </dc-col>
            <dc-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </dc-col>
            <dc-col :span="6">
                <div class="grid-content bg-purple"></div>
            </dc-col>
            <dc-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </dc-col>
        </dc-row>
        <dc-row>
            <dc-col :span="4">
                <div class="grid-content bg-purple"></div>
            </dc-col>
            <dc-col :span="4">
                <div class="grid-content bg-purple-light"></div>
            </dc-col>
            <dc-col :span="4">
                <div class="grid-content bg-purple"></div>
            </dc-col>
            <dc-col :span="4">
                <div class="grid-content bg-purple-light"></div>
            </dc-col>
            <dc-col :span="4">
                <div class="grid-content bg-purple"></div>
            </dc-col>
            <dc-col :span="4">
                <div class="grid-content bg-purple-light"></div>
            </dc-col>
        </dc-row>
    </div>
</template>

<script>
import dcRow from "../components/Row";
import dcCol from "../components/Col";
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
</style>