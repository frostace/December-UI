<template>
    <button
        class="dc-button"
        @click="handleClick"
        :disabled="buttonDisabled || loading"
        :autofocus="autofocus"
        :type="nativeType"
        :class="[
            type ? 'dc-button--' + type : '',
            buttonSize ? 'dc-button--' + buttonSize : '',
            {
                'is-disabled': buttonDisabled,
                'is-loading': loading,
                'is-plain': plain,
                'is-round': round,
                'is-circle': circle,
            },
        ]"
    >
        <font-awesome-icon class="dc-icon-loading" icon="spinner" v-if="loading" />
        <!-- <i class="dc-icon-loading" v-if="loading"></i> -->
        <!-- <i :class="icon" v-if="icon && !loading"></i> -->
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: "dc-button",
    inject: {
        elForm: {
            default: ""
        },
        elFormItem: {
            default: ""
        }
    },
    props: {
        type: {
            type: String,
            default: "default"
        },
        size: String,
        icon: {
            type: String,
            default: ""
        },
        nativeType: {
            type: String,
            default: "button"
        },
        loading: Boolean,
        disabled: Boolean,
        plain: Boolean,
        autofocus: Boolean,
        round: Boolean,
        circle: Boolean,
        iconName: String
    },
    computed: {
        _elFormItemSize() {
            return (this.elFormItem || {}).elFormItemSize;
        },
        buttonSize() {
            return (
                this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
            );
        },
        buttonDisabled() {
            return this.disabled || (this.elForm || {}).disabled;
        }
    },
    methods: {
        handleClick(evt) {
            this.$emit("click", evt);
        }
    }
};
</script>

<style lang="scss" scoped>
@charset "UTF-8";
@import "../assets/var";
@import "../assets/presets";
* {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
}

@mixin set-button-styling($button-theme-color) {
    @include set-bkg-color-with-hover($button-theme-color);
    @if ($button-theme-color == #fff) {
        @include default-border-style($--button-default-border-color);
    } @else {
        @include default-border-style($button-theme-color);
    }
    color: set-text-color($button-theme-color);
    &.is-plain {
        background: transparentize($button-theme-color, 0.8);
        @if ($button-theme-color != #fff) {
            color: $button-theme-color;
            @include default-border-style($button-theme-color);
            border-color: transparentize($button-theme-color, 0.4);
        }
        &:hover:not([disabled]) {
            background-color: $button-theme-color;
            @if ($button-theme-color != #fff) {
                color: white;
            }
        }
    }
    &.is-round {
        border-radius: 30px;
    }
    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
    &--text {
        border: none;
        color: $--primary-color;
        &:hover:not([disabled]) {
            background-color: #fff;
            color: transparentize($color: $--primary-color, $amount: 0.3);
        }
    }
}

.dc-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    color: $--button-default-font-color;
    @include clear-default-appearance;
    text-align: center;
    box-sizing: border-box;
    margin: 0;
    margin-left: 10px;
    padding: 12px 20px;
    font-size: 12px;
    font-weight: 500;
    border-radius: 4px;
    transition: 0.1s;
    @include set-button-styling(#fff);
    &--primary {
        @include set-button-styling($--primary-color);
    }
    &--success {
        @include set-button-styling($--success-color);
    }
    &--info {
        @include set-button-styling($--info-color);
    }
    &--warning {
        @include set-button-styling($--warning-color);
    }
    &--danger {
        @include set-button-styling($--danger-color);
    }
    &--medium {
        width: 76px;
        height: 34px;
        padding: 10px 16px;
    }
    &--small {
        width: 55px;
        height: 30px;
        padding: 8px 13px;
        font-size: 10px;
    }
    &--mini {
        width: 45px;
        height: 25px;
        padding: 6px 10px;
        font-size: 10px;
    }
}

.is-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 12px;
}

.dc-icon-loading {
    @include rotate-forever;
}
</style>
