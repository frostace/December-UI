<template>
    <div class="demo">
        <div class="demo-block">
            <slot name="demo-area"></slot>
        </div>
        <div class="code-block">
            <slot name="description-area"></slot>
            <slot name="code-area"></slot>
            <!-- <div class="description"></div>
                <pre><div class="code-area"><code class="html">
            </code></div></pre>-->
        </div>
        <div class="code-block-control" @click="toggleCodeBlock">
            <div class="expand-control">
                <font-awesome-icon :icon="arrowIconName" size="x" />
                <span>{{expandState}}</span>
            </div>
            <button>Try It!</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            expandState: "Expand",
            arrowIconName: "caret-down"
        };
    },
    methods: {
        toggleCodeBlock() {
            this.$el.querySelector(".code-block").style.height =
                this.expandState === "Expand" ? "auto" : "0px";
            this.arrowIconName =
                this.expandState === "Expand" ? "caret-up" : "caret-down";
            this.expandState =
                this.expandState === "Expand" ? "Hide" : "Expand";
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/var.scss";
@import "../assets/presets.scss";

.demo {
    width: auto;
}

.demo,
span,
button {
    @include clear-select-effect;
}

.demo-block {
    @include default-border-style(#eee);
    border-radius: 4px 4px 0 0;
    border-bottom: none;
    padding: 24px;
}

.code-block-control {
    height: 40px;
    position: sticky;
    position: -webkit-sticky;
    bottom: 8px;
    text-align: center;
    background-color: #fff;
    border: {
        style: solid;
        color: #eee;
        width: 1px;
        radius: 0 0 4px 4px;
    }

    cursor: pointer;
    .expand-control {
        // background-color: red;
        height: 40px;
        padding: 9px 0 9px 0;
    }

    i,
    svg {
        line-height: 40px;
        color: #ccc;
        @include decent-transition;
    }

    span {
        display: inline-block;
        @include transparentize-item;
        margin-left: 10px;
        @include decent-transition;
    }

    button {
        position: absolute;
        line-height: 26px;
        top: 0;
        right: 0;
        padding: 7px 25px 7px 5px;
        background: none;
        border: none;
        display: none;
        color: $--decent-green;
        font-size: 14px;
        cursor: pointer;
        @include decent-transition;
    }

    @include decent-transition;
}

div.demo:hover,
div.code-block-control:hover {
    svg {
        color: #ccc;
        transform: translateX(-30px);
    }
    span {
        @include opacify-item;
        transform: translateX(-30px);
        color: #ccc;
    }
    button {
        display: inline;
    }
}

div.demo:hover {
    @include decent-shadow;
}
div.code-block-control:hover {
    background: #f9fafc;
    svg {
        color: $--decent-green;
    }
    span {
        color: $--decent-green;
    }
}

.code-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    height: 0px;
    overflow: hidden;
    background-color: transparentize($color: #ccc, $amount: 0.8);
    border: {
        style: solid;
        color: #eee;
        width: 1px;
    }
    border-top: none;
    border-bottom: none;

    .code-area {
        padding: 12px 24px;
    }
}

.description {
    background-color: white;
    padding: 16px;
    margin: 10px;
    border: {
        style: solid;
        color: #eee;
        width: 1px;
        radius: 4px;
    }

    .little-code {
        background-color: transparentize($color: $--decent-green, $amount: 0.8);
        border-radius: 2px;
        padding: 1px 5px;
        margin: 0 4px;
    }
}
</style>