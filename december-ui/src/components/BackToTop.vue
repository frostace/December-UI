<template>
    <div>
        <button
            @click="backToTop"
            :target="target"
            :visibility-height="visibilityHeight"
            :right="right"
            :bottom="bottom"
            v-show="visible"
        >
            <span v-if="$slots.default">
                <slot></slot>
            </span>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        target: {
            type: String,
            default: ""
        },
        visibilityHeight: {
            type: Number,
            default: 200
        },
        right: {
            type: Number,
            default: 40
        },
        bottom: {
            type: Number,
            default: 40
        }
    },
    data() {
        return {
            visible: true
        };
    },
    methods: {
        backToTop() {
            let currentScroll = document.querySelector(".subcontent").scrollTop;
            let subWindow = document.querySelector(".subcontent");
            if (currentScroll > 0) {
                window.requestAnimationFrame(this.backToTop);
                subWindow.scrollTo(
                    0,
                    Math.floor(currentScroll - currentScroll / 5)
                );
            }
        },
        catchScroll() {
            let currentScroll = document.querySelector(".subcontent").scrollTop;
            this.visible = currentScroll > this.visibilityHeight;
        }
    },
    mounted() {
        this.visible = false;
        console.log(this.visible);
        let backTopButton = this.$el.querySelector("button");
        let subWindow = document.querySelector(".subcontent");
        backTopButton.style.right = this.right + "px";
        backTopButton.style.bottom = this.bottom + "px";
        subWindow.addEventListener("scroll", this.catchScroll);
    }
};
</script>

<style lang="scss" scoped>
@charset "UTF-8";
@import "../assets/var";
@import "../assets/presets";

button {
    position: absolute;
    z-index: 100;
    @include clear-default-appearance;
    @include decent-shadow;
    background-color: #fff;
    color: $--primary-color;
    font-size: 16px;
    line-height: 1;
    white-space: nowrap;
    box-sizing: border-box;
    margin: 0;
    padding: auto;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    &:hover {
        background-color: transparentize(
            $color: $--primary-color,
            $amount: 0.9
        );
    }
}
</style>