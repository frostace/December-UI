<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        value: Object
    },
    data() {
        return {
            checkedList: this.value
        };
    },
    mounted() {
        this.$on("check", checkedLabel => {
            this.checkedList[Object.keys(checkedLabel)[0]] =
                checkedLabel[Object.keys(checkedLabel)[0]];
        });
    }
};
</script>

<style lang="scss" scoped>
</style>