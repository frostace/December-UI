<template>
    <label
        class="dc-radio"
        :class="['dc-radio--'+computedSize, {'is-checked': radioChecked, 'is-disabled': disabled, 'is-bordered': border}]"
    >
        <span class="dc-radio__input">
            <span class="dc-radio__inner"></span>
        </span>
        <input
            type="radio"
            @change="onSelect"
            name="test"
            :value="value"
            :size="size"
            :checked="radioChecked"
            :disabled="disabled"
            :border="border"
        />
        <span class="dc-radio__label">
            <slot></slot>
        </span>
    </label>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ""
        },
        size: {
            type: String,
            default: "default"
        },
        label: {
            type: String,
            default: "1"
        },
        disabled: Boolean,
        border: Boolean
    },
    data() {
        return {};
    },
    computed: {
        radioChecked() {
            return (
                this.value === this.label ||
                this.$parent.selectedLabel === this.label
            );
        },
        computedSize() {
            return this.border ? this.size : "default";
        }
    },
    methods: {
        onSelect() {
            let newSelected = this.label;
            this.$emit("input", newSelected);
            this.$parent.$emit("select", newSelected);
        }
    },
    mounted() {
        // console.log(this.value, this.label);
        // console.log(this.$parent, this.value);
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/var";
@import "../assets/presets";

.dc-radio {
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-size: 14px;

    &:not(:last-child) {
        margin-right: 20px;
    }

    // checked styling
    &.is-checked:not(.is-disabled) {
        span.dc-radio__input {
            background-color: $--primary-color;
            border-color: $--primary-color;

            span.dc-radio__inner::after {
                transform: translate(100%, 100%);
            }
        }
        span.dc-radio__label {
            color: $--primary-color;
        }
    }

    // disabled styling
    &.is-disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    &.is-disabled {
        span.dc-radio__input {
            background-color: #e4ecf8;
            &:hover {
                border-color: #ccc;
            }
        }

        &.is-checked span.dc-radio__inner::after {
            transform: translate(100%, 100%);
            background-color: #242424;
        }
    }

    // bordered styling
    &.is-bordered {
        @include default-border-style(#ccc);
        padding: 8px 10px;
        border-radius: 4px;
        &:not(.is-disabled).is-checked {
            border-color: $--primary-color;
        }
        &.is-disabled.is-checked {
            border-color: #ccc;
        }
    }

    // mimic input radio
    span.dc-radio__input {
        position: relative;
        height: 12px;
        width: 12px;
        background-color: #fff;
        @include default-border-style(#ccc);
        border-radius: 50%;
        &:hover {
            border-color: $--primary-color;
        }

        span.dc-radio__inner::after {
            position: absolute;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            content: "";
            transform: translate(100%, 100%) scale(0);
            transition: transform 0.15s ease-in;
            background-color: #fff;
        }
    }

    // hide the real input radio
    input[type="radio"] {
        @include clear-default-appearance-all;
    }
    span {
        @include decent-transition(0.05s);
    }

    // diff size styling
    &--medium {
        &.is-bordered {
            padding: 7px 10px;
        }
    }
    &--small {
        &.is-bordered {
            padding: 7px 8px;
            font-size: 12px;
        }
        &.is-checked:not(.is-disabled) {
            span.dc-radio__input {
                width: 10px;
                height: 10px;
                span.dc-radio__inner::after {
                    transform: translate(75%, 75%);
                }
            }
        }
    }
    &--mini {
        &.is-bordered {
            padding: 6px 8px;
            font-size: 12px;
        }
        &.is-checked:not(.is-disabled) {
            span.dc-radio__input {
                width: 10px;
                height: 10px;
                span.dc-radio__inner::after {
                    transform: translate(75%, 75%);
                }
            }
        }
    }
}
</style>