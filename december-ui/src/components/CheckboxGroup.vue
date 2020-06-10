<template>
    <div class="dc-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        value: Array,
        min: Number,
        max: Number
    },
    data() {
        return {
            checkedList: this.value,
            maximumReached: this.value.length === this.max,
            minimumReached: this.value.length === this.min
        };
    },
    updated() {
        console.log(this.maximumReached, this.minimumReached);
    },
    mounted() {
        this.$on("check", checkedLabel => {
            if (checkedLabel[Object.keys(checkedLabel)[0]]) {
                // checked set to true
                this.checkedList.splice(this.checkedList.length + 1);
                this.$set(
                    this.checkedList,
                    this.checkedList.length,
                    Object.keys(checkedLabel)[0]
                );
                // this.checkedList = [
                //     ...this.checkedList,
                //     Object.keys(checkedLabel)[0]
                // ];
            } else {
                for (let i = 0; i < this.checkedList.length; ++i) {
                    if (this.checkedList[i] === Object.keys(checkedLabel)[0]) {
                        this.checkedList.splice(i, 1);
                        break;
                    }
                }
                // this.checkedList = this.checkedList.filter(
                //     item => item !== Object.keys(checkedLabel)[0]
                // );
            }
            this.$emit("change", this.checkedList);
        });
    }
};
</script>

<style lang="scss" scoped>
</style>