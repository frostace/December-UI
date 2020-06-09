<template>
    <div class="dc-checkbox" :class="{'is-checked': checkboxChecked, 'is-disabled': disabled}">
        <div class="dc-checkbox-wrapper">
            <input
                class="dc-checkbox-box"
                @change="handleInput"
                :checked="checkboxChecked"
                type="checkbox"
                :disabled="disabled"
            />
            <span v-if="$slots.default" @click="handleInput">
                <slot></slot>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        },
        disabled: Boolean,
        label: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            internalChecked:
                this.value ||
                (this.$parent.checkedList &&
                    this.$parent.checkedList[this.label])
        };
    },
    computed: {
        checkboxChecked() {
            return (
                this.internalChecked ||
                (this.$parent.checkedList &&
                    this.$parent.checkedList[this.label])
            );
        }
    },
    methods: {
        handleInput() {
            this.internalChecked = !this.internalChecked;
            this.$emit("input", this.internalChecked);
            this.$parent.$emit("check", {
                [this.label]: this.internalChecked
            });
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/var";
@import "../assets/presets";

.dc-checkbox {
    &:not(:last-child) {
        margin-right: 20px;
    }

    .dc-checkbox-wrapper {
        cursor: pointer;
        width: fit-content;
    }

    // checkbox box entity
    .dc-checkbox-box {
        cursor: pointer;
        @include decent-transition;
        margin-right: 6px;
    }

    // checkbox label
    span {
        @include decent-transition(0.1s);
    }

    // checked styling
    &:not(.is-disabled).is-checked {
        span {
            color: $--primary-color;
        }
    }

    // disabled styling
    &.is-disabled {
        opacity: 0.5;
    }
}
</style>