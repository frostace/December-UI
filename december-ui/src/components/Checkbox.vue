<template>
    <div
        class="dc-checkbox"
        :class="{
            'is-checked': checkboxChecked, 
            'is-disabled': disabled, 
            'is-indeterminate' : indeterminate, 
            'group-min-reached': groupMinReached, 
            'group-max-reached': groupMaxReached
        }"
    >
        <div class="dc-checkbox-wrapper" @click="handleInput">
            <span class="dc-checkbox-box-mimic">
                <font-awesome-icon
                    v-if="checkboxChecked || indeterminate"
                    class="dc-checkbox-box-mimic-inner"
                    :icon="status"
                    size="1x"
                />
            </span>
            <input
                class="dc-checkbox-box"
                @change="handleInput"
                :checked="checkboxChecked"
                type="checkbox"
                :disabled="disabled || groupMinReached || groupMaxReached"
                :indeterminate="indeterminate"
            />
            <span class="dc-checkbox__label" v-if="$slots.default">
                <slot></slot>
            </span>
            <!-- {{String(this.checkboxChecked)}}{{String(this.value)}}{{this.indeterminate}} -->
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
        indeterminate: Boolean,
        label: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            internalChecked: this.value
        };
    },
    computed: {
        checkboxChecked() {
            return (
                !this.indeterminate &&
                (this.value ||
                    (this.$parent.checkedList !== undefined &&
                        this.$parent.checkedList.includes(this.label)))
            );
        },
        status() {
            return this.indeterminate
                ? "minus"
                : this.checkboxChecked
                ? "check"
                : "";
        },
        groupMinReached() {
            return (
                this.$parent.checkedList !== undefined &&
                this.$parent.min !== undefined &&
                this.$parent.checkedList.length === this.$parent.min
            );
        },
        groupMaxReached() {
            return (
                this.$parent.checkedList !== undefined &&
                this.$parent.max !== undefined &&
                this.$parent.checkedList.length === this.$parent.max
            );
        }
    },
    methods: {
        handleInput() {
            if (
                this.disabled ||
                (this.groupMinReached && this.internalChecked) ||
                (this.groupMaxReached && !this.internalChecked)
            )
                return;
            this.internalChecked = !this.internalChecked;
            this.$emit("input", this.internalChecked);
            this.$emit("change", this.internalChecked);
            this.$parent.$emit("check", {
                [this.label]: this.internalChecked
            });
            // console.log("inside checkbox component");
            // console.log(this.label, this.internalChecked);
            // console.log("inside checkbox component");
        }
    },
    updated() {
        // console.log(
        //     "update",
        //     this.label,
        //     this.checkboxChecked,
        //     this.$parent.checkedList
        // );
        this.internalChecked = this.checkboxChecked;
    },
    mounted() {
        this.internalChecked = this.checkboxChecked;
        // console.log(this.label, this.checkboxChecked);
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

        // mimic checkbox box
        .dc-checkbox-box-mimic {
            position: relative;

            display: inline-block;
            width: 13px;
            height: 13px;
            box-sizing: border-box;
            @include default-border-style(#ccc);
            border-radius: 2px;
            background-color: white;
            color: white;

            .dc-checkbox-box-mimic-inner {
                position: absolute;
                width: 10px;
                height: 10px;
                transform: translate(6%, 5%);
            }
        }
    }

    &:not(.is-disabled) {
        .dc-checkbox-box-mimic:hover {
            border-color: $--primary-color;
        }
    }

    // checkbox box entity
    .dc-checkbox-box {
        width: 0;
        cursor: pointer;
        @include decent-transition;
        margin-right: 5px;
    }

    // checkbox label
    span {
        @include decent-transition(0.1s);
    }

    // checked styling
    &:not(.is-disabled) {
        &.is-checked,
        &.is-indeterminate {
            span.dc-checkbox__label {
                color: $--primary-color;
            }

            .dc-checkbox-box-mimic {
                background-color: $--primary-color;
                border-color: $--primary-color;
            }
        }
    }

    // disabled styling
    &.is-disabled {
        opacity: 0.5;
        .dc-checkbox-wrapper,
        .dc-checkbox-box {
            cursor: not-allowed;
        }
        &.is-checked,
        &.is-indeterminate {
            span.dc-checkbox__label {
                color: $--decent-black;
            }

            .dc-checkbox-box-mimic {
                background-color: $--decent-black;
                border-color: $--decent-black;
            }
        }
    }

    // group min max styling
    &.group-max-reached {
        &:not(.is-checked) {
            opacity: 0.5;
            .dc-checkbox-wrapper,
            .dc-checkbox-box {
                cursor: not-allowed;
            }
        }
    }
    &.group-min-reached {
        &.is-checked {
            opacity: 0.5;
            .dc-checkbox-wrapper,
            .dc-checkbox-box {
                cursor: not-allowed;
            }

            span.dc-checkbox__label {
                color: $--decent-black;
            }

            .dc-checkbox-box-mimic {
                background-color: $--decent-black;
                border-color: $--decent-black;
            }
        }
    }
}
</style>