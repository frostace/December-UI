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
                'is-circle': circle
            }
    ]"
    >
        <i class="dc-icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon && !loading"></i>
        <span v-if="$slots.default">
            <slot></slot>
        </span>
        {{content}}
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
        circle: Boolean
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

.dc-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: $--button-default-background-color;
    border: solid 1px #dcdfe6;
    border-color: $--button-default-border-color;
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
}

.dc-button--primary {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
}
.dc-button--success {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
}
.dc-button--info {
    background: #909399;
    border-color: #909399;
    color: #fff;
}
.dc-button--warning {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
}
.dc-button--danger {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
}

.is-plain {
    background: transparentize(#409eff, 0.8);
    color: #409eff;
    border-color: transparentize(#409eff, 0.4);
}

.is-round {
    border-radius: 30px;
}

.is-circle {
    border-radius: 30px;
}
</style>