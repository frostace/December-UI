<template>
    <div class="dc-radio-group" :value="value">
        <slot></slot>
    </div>
</template>

<script>
export default {
    // TODO: add text-color and fill property to assign radio styling when active
    props: {
        value: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            // cannot directly modify a prop bound with v-model from a child component, this would be anti-pattern
            // so we should use a data or computed instead
            selectedLabel: this.value
        };
    },
    methods: {},
    mounted() {
        this.$on("select", selected => {
            this.selectedLabel = selected;
        });
    }
};
</script>

<style lang="scss" scoped>
</style>