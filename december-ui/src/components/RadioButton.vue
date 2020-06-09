<template>
    <label
        class="dc-radio-button"
        :class="['dc-radio-button--'+size, {'is-checked': radioChecked, 'is-disabled': disabled}]"
    >
        <!-- <span class="dc-radio-button__input"></span> -->
        <input
            type="radio"
            @change="onSelect"
            name="test"
            :value="value"
            :size="size"
            :checked="radioChecked"
            :disabled="disabled"
        />
        <span class="dc-radio-button__label">
            <span class="default-label">{{label}}</span>
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
        disabled: Boolean
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

.dc-radio-button {
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-size: 14px;

    // hover
    &:not(.is-disabled) {
        span.dc-radio-button__label {
            &:hover {
                color: $--primary-color;
            }
        }
    }

    span.dc-radio-button__label {
        @include default-border-style($--button-default-border-color);
        transition: background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: border-color 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
        padding: 8px 18px;
        color: $--decent-black;
    }
    &:first-child span.dc-radio-button__label {
        border-radius: 4px 0 0 4px;
    }
    &:last-child span.dc-radio-button__label {
        border-radius: 0 4px 4px 0;
    }
    &:not(:last-child) span.dc-radio-button__label {
        border-right-width: 0;
    }

    // checked styling
    &.is-checked:not(.is-disabled) {
        span.dc-radio-button__label {
            background-color: $--primary-color;
            border-color: $--primary-color;
            color: #fff;
        }
    }

    // disabled styling
    &.is-disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    // hide the real input radio
    input[type="radio"] {
        @include clear-default-appearance-all;
        margin: 0;
    }
    span {
        @include decent-transition(0.05s);
    }

    // sizing
    &--medium span.dc-radio-button__label {
        padding: 7px 16px;
    }
    &--small span.dc-radio-button__label {
        padding: 6px 13px;
        font-size: 12px;
    }
    &--mini span.dc-radio-button__label {
        padding: 5px 13px;
        font-size: 12px;
    }
}
</style>