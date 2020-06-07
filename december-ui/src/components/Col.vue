<template>
    <div class="dc-col">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "DcCol",
    props: {
        span: {
            type: Number,
            default: 24
        },
        tag: {
            type: String,
            default: "div"
        },
        offset: Number,
        pull: Number,
        push: Number,
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object],
        xl: [Number, Object]
    },
    computed: {
        gutter() {
            let parent = this.$parent;
            while (parent && parent.$options._componentTag !== "dc-row") {
                parent = parent.$parent;
            }
            return parent ? parent.gutter : 0;
        },
        classNames() {
            let classList = [];
            ["span", "offset", "pull", "push"].forEach(prop => {
                if (this[prop] || this[prop] === 0) {
                    classList.push(
                        prop !== "span"
                            ? `dc-col-${prop}-${this[prop]}`
                            : `dc-col-${this[prop]}`
                    );
                }
            });

            ["xs", "sm", "md", "lg", "xl"].forEach(size => {
                if (typeof this[size] === "number") {
                    classList.push(`dc-col-${size}-${this[size]}`);
                } else if (typeof this[size] === "object") {
                    let props = this[size];
                    Object.keys(props).forEach(prop => {
                        classList.push(
                            prop !== "span"
                                ? `dc-col-${size}-${prop}-${props[prop]}`
                                : `dc-col-${size}-${props[prop]}`
                        );
                    });
                }
            });
            return classList;
        }
    },
    mounted() {
        this.classNames.forEach(className => {
            this.$el.classList.add(className);
        });
        if (this.gutter) {
            this.$el.style.paddingLeft = this.gutter / 2 + "px";
            this.$el.style.paddingRight = this.$el.style.paddingLeft;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/var";
@import "../assets/presets";

[class*="dc-col-"] {
    // float: left;
    display: inline-block;
    box-sizing: border-box;
}
.dc-col-0 {
    display: none;
}

@for $i from 0 through 24 {
    .dc-col-#{$i} {
        width: (1 / 24 * $i * 100) * 1%;
    }

    .dc-col-offset-#{$i} {
        margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .dc-col-pull-#{$i} {
        position: relative;
        right: (1 / 24 * $i * 100) * 1%;
    }

    .dc-col-push-#{$i} {
        position: relative;
        left: (1 / 24 * $i * 100) * 1%;
    }
}

.grid-content {
    min-height: 32px;
    border-radius: 4px;
}

.bg-purple {
    background-color: #d3dce6;
    &-dark {
        background-color: darken($color: #d3dce6, $amount: 20%);
    }
    &-light {
        background-color: lighten($color: #d3dce6, $amount: 6%);
    }
}
</style>