<template>
    <div>
        <dc-row :gutter="20">
            <dc-col :span="16">
                <div class="grid-content bg-purple"></div>
            </dc-col>
            <dc-col :span="8">
                <div class="grid-content bg-purple"></div>
            </dc-col>
        </dc-row>
        <dc-row :gutter="20">
            <dc-col :span="8">
                <div class="grid-content bg-purple"></div>
            </dc-col>
            <dc-col :span="8">
                <div class="grid-content bg-purple"></div>
            </dc-col>
            <dc-col :span="4">
                <div class="grid-content bg-purple"></div>
            </dc-col>
            <dc-col :span="4">
                <div class="grid-content bg-purple"></div>
            </dc-col>
        </dc-row>
        <dc-row :gutter="20">
            <dc-col :span="4">
                <div class="grid-content bg-purple"></div>
            </dc-col>
            <dc-col :span="16">
                <div class="grid-content bg-purple"></div>
            </dc-col>
            <dc-col :span="4">
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
</style>