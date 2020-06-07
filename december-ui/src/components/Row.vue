<template>
    <div class="dc-row">
        <slot></slot>
    </div>
</template>

<script>
var validJustifyContents = {
    center: "center",
    start: "flex-start",
    end: "flex-end",
    "space-between": "space-between",
    "space-around": "space-around"
};
export default {
    props: {
        gutter: {
            type: Number,
            default: 0
        },
        type: {
            type: String,
            default: ""
        },
        justify: {
            type: String,
            default: "start"
        }
    },
    mounted() {
        if (this.type) {
            this.$el.style.display = this.type;
            console.log(this.justify in validJustifyContents);
            console.log(validJustifyContents[this.justify]);
            if (this.justify) {
                this.$el.style.justifyContent =
                    this.justify in validJustifyContents
                        ? validJustifyContents[this.justify]
                        : undefined;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.dc-row {
    position: relative;
    box-sizing: border-box;
}
</style>