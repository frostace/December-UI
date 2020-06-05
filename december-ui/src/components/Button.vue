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
        <i class="dc-icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon && !loading"></i>
        <span v-if="$slots.default">
            <slot></slot>
        </span>
        {{ content }}
        <font-awesome-icon v-if="circle" :icon="iconName" size="x" />
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
        content: {
            type: String,
            default: "button"
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
}

@mixin set-button-styling($button-theme-color) {
    @include set-bkg-color-with-hover($button-theme-color);
    @if ($button-theme-color == #fff) {
        @include default-border-style($--button-default-border-color);
    } @else {
        border: none;
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
}

.dc-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    color: $--button-default-font-color;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    margin-left: 10px;
    padding: 12px 20px;
    font-size: 12px;
    font-weight: 500;
    border-radius: 4px;
    transition: 0.1s;
    @include set-button-styling(#fff);
}

.dc-button--primary {
    @include set-button-styling($--primary-color);
}
.dc-button--success {
    @include set-button-styling($--success-color);
}
.dc-button--info {
    @include set-button-styling($--info-color);
}
.dc-button--warning {
    @include set-button-styling($--warning-color);
}
.dc-button--danger {
    @include set-button-styling($--danger-color);
}

.is-circle {
    border-radius: 30px;
    padding: 12px;
}
</style>
