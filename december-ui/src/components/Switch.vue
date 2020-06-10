<template>
    <div class="dc-switch" :class="{'is-checked': switchChecked, 'is-disabled': disabled}">
        <span class="dc-switch-text dc-switch-text-inactive">{{inactiveText}}</span>
        <label class="dc-switch-wrapper">
            <span class="dc-switch-button"></span>
            <span v-if="activeValueSet" ref="tooltip" role="tooltip" class="dc-switch-tooltip">
                <div class="tooltip-value">{{currentSwitchValue}}</div>
                <div class="tooltip-arrow"></div>
            </span>
            <input
                aria-describedby="tooltip"
                @change="handleInput"
                ref="input"
                type="checkbox"
                :checked="switchChecked"
                :disabled="disabled"
            />
            <span class="slider round" ref="slider"></span>
        </label>
        <span class="dc-switch-text dc-switch-text-active">{{activeText}}</span>
    </div>
</template>

<script>
import { createPopper } from "@popperjs/core";
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        },
        activeColor: {
            type: String,
            default: "#2196f3"
        },
        inactiveColor: {
            type: String,
            default: "#ccc"
        },
        activeValue: {
            default: ""
        },
        inactiveValue: {
            default: ""
        },
        activeText: {
            type: String,
            default: ""
        },
        inactiveText: {
            type: String,
            default: ""
        },
        disabled: Boolean
    },
    data() {
        return {
            switchChecked: this.value || this.value === this.activeValue,
            activeValueSet: this.activeValue !== "" && this.inactiveValue !== ""
        };
    },
    computed: {
        // switchChecked() {
        //     return this.value === this.activeValue;
        // }
        currentSwitchValue() {
            return (
                "Value:" +
                String(
                    this.switchChecked ? this.activeValue : this.inactiveValue
                )
            );
            // return (
            //     "Switch Value: " +
            //     ()
            // );
        }
    },
    watch: {
        switchChecked() {
            // this.$refs.input.checked = this.checked;
            if (this.activeColor || this.inactiveColor) {
                this.setBackgroundColor();
            }
        }
    },
    methods: {
        handleInput() {
            this.switchChecked = !this.switchChecked;
            this.setupPopperLocation();
            this.$emit("input", this.switchChecked);
        },
        setBackgroundColor() {
            let newColor = this.switchChecked
                ? this.activeColor
                : this.inactiveColor;
            this.$refs.slider.style.borderColor = newColor;
            this.$refs.slider.style.backgroundColor = newColor;
        },
        setupPopperLocation() {
            if (!this.activeValueSet) return;
            let slider = this.$refs.slider;
            let tooltip = this.$refs.tooltip;
            createPopper(slider, tooltip, { placement: "top" });
        }
    },
    mounted() {
        if (this.activeColor || this.inactiveColor) {
            this.setBackgroundColor();
        }
        this.$refs.input.checked = this.checked;
        this.setupPopperLocation();
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/presets.scss";
@import "../assets/var.scss";

.dc-switch {
    display: inline-block;
    &:not(:last-child) {
        margin-right: 15px;
    }

    .dc-switch-wrapper {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 34px;

        // hide original input checkbox
        input {
            opacity: 0;
            width: 0;
            height: 0;
        }
    }

    &.is-disabled {
        opacity: 0.5;
        cursor: not-allowed;
        .slider,
        .dc-switch-button {
            cursor: not-allowed;
        }
    }
    &:not(.is-disabled) {
        cursor: pointer;
        .slider,
        .dc-switch-button {
            cursor: pointer;
        }
    }
}

// slider-track
.slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 20px;
    @include decent-transition(0.3s);
}

// switch-button
.dc-switch-button {
    position: relative;
    display: inline-block;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    top: 2px;
    z-index: 1;
    background-color: white;
    @include decent-transition(0.3s);
}

// active / inactive text
.dc-switch-text {
    &-active {
        margin-left: 10px;
    }
    &-inactive {
        margin-right: 10px;
    }
    @include decent-transition(0.3s);
}
.dc-switch {
    &.is-checked {
        .dc-switch-text-active {
            color: $--primary-color;
        }
    }
    &:not(.is-checked) {
        .dc-switch-text-inactive {
            color: $--primary-color;
        }
    }
}

// tooltip
// tooltip box and value
span.dc-switch-tooltip {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    transition: opacity 0.2s ease-in;

    .tooltip-value {
        min-width: 40px;
        min-height: 20px;
        flex: 0 0 auto;
        padding: 4px 10px;
        border-radius: 4px;
        text-align: center;
        background-color: $--decent-gray;
        color: white;
        font-size: 12px;
    }

    .tooltip-arrow {
        width: 0;
        height: 0;
        margin-bottom: 5px;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid $--decent-gray;
    }
}
.dc-switch {
    &:hover span.dc-switch-tooltip {
        opacity: 1;
    }
    &.is-disabled span.dc-switch-tooltip {
        display: none;
    }
}

input:focus + .slider {
    box-shadow: 0 0 1px $--primary-color;
}

.dc-switch.is-checked .dc-switch-button {
    @include x-browser-transformXY(20px, 0);
}

// Rounded sliders
.slider.round {
    border-radius: 34px;
}

.dc-switch-button {
    border-radius: 50%;
}
</style>