<template>
    <div
        @input="handleChange"
        @mouseup="releaseChange"
        class="dc-slider"
        :class="{
            'is-disabled': disabled,
            'show-tooltip': showTooltip,
            dragging: dragging,
        }"
    >
        <div class="dc-slider-button-shadow"></div>
        <div class="dc-slider-stops" v-if="showStops">
            <span
                :key="idx"
                v-for="(pos, idx) in stopPositions"
                class="dc-slider-stop"
                :style="`left: calc(` + pos * 0.965 + `% + 4.5px)`"
            ></span>
        </div>
        <span role="tooltip" class="dc-slider-tooltip">
            <div class="tooltip-value">{{ formattedValue }}</div>
            <div class="tooltip-arrow"></div>
        </span>
        <input
            aria-describedby="tooltip"
            type="range"
            :id="sliderID"
            class="slider"
            name="vol"
            min="0"
            max="100"
            :step="step"
            :value="value"
            :disabled="disabled"
        />
    </div>
</template>

<script>
import { createPopper } from "@popperjs/core";
export default {
    props: {
        // this is init value (external)
        value: {
            type: Number,
            default: 0
        },
        sliderID: {
            type: String,
            default: "vol"
        },
        disabled: Boolean,
        showTooltip: {
            type: Boolean,
            default: true
        },
        formatTooltip: {
            type: Function,
            default: val => val
        },
        step: {
            type: Number,
            default: 1
        },
        showStops: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            // this is slider value (internal)
            sliderValue: this.value,
            dragging: false
        };
    },
    watch: {},
    computed: {
        formattedValue() {
            return this.formatTooltip(this.sliderValue);
        },
        stopPositions() {
            return Array(Math.floor(100 / this.step) - 1)
                .fill(null)
                .map((_, i) => (i + 1) * this.step);
        }
    },
    methods: {
        handleChange(evt) {
            this.dragging = true;
            let valueToUse = evt.target.value;
            this.sliderValue = valueToUse;
            this.$el.querySelector(".dc-slider-button-shadow").style.left =
                valueToUse * 0.98 - (valueToUse - 35) / 50 + "%";
            this.setupPopperLocation();
            this.$emit("input", ~~valueToUse);
        },
        releaseChange() {
            this.dragging = false;
        },
        setupPopperLocation() {
            let sliderBar = this.$el.querySelector(".dc-slider-button-shadow");
            let valueSticker = this.$el.querySelector(".dc-slider-tooltip");
            createPopper(sliderBar, valueSticker, { placement: "top" });
        }
    },
    mounted() {
        this.sliderValue = this.value;
        this.$el.querySelector(".dc-slider-button-shadow").style.left =
            this.value * 0.98 - (this.value - 35) / 50 + "%";
        this.setupPopperLocation();
        // console.log(this.stopPositions);
    }
};
</script>

<style lang="scss">
@import "../assets/var";
@import "../assets/presets";

.dc-slider {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 70%;

    &:not(.is-disabled) .slider:hover {
        opacity: 1;
        cursor: pointer;
    }

    &.is-disabled {
        .slider {
            cursor: not-allowed;
        }

        .slider::-webkit-slider-thumb {
            cursor: not-allowed;
        }
    }

    // tooltip box and value
    span.dc-slider-tooltip {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 0;
        transition: opacity 0.2s ease-in;

        .tooltip-value {
            min-width: 20px;
            height: 20px;
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
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-top: 4px solid $--decent-gray;
        }
    }

    // show tooltip when hovering or dragging
    &:hover,
    &.dragging {
        span.dc-slider-tooltip {
            opacity: 1;
        }
    }
    &:not(.show-tooltip) span.dc-slider-tooltip {
        display: none;
    }

    // an invisible slider bar follower
    .dc-slider-button-shadow {
        @include clear-select-effect;
        position: absolute;
        width: 12px;
        height: 12px;
        margin-top: -7px;
        border-radius: 50%;
        z-index: -10;
        opacity: 0;
    }

    // show breakpoints
    .dc-slider-stop {
        position: absolute;
        z-index: 1;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        transform: translateY(-60%);
        background-color: white;
    }
}

.slider {
    @include clear-default-appearance;
    // position: absolute;
    width: 100%;
    height: 6.68px;
    background: #d3d3d3;
    border-radius: 10px;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    &:disabled {
        &::-webkit-slider-thumb {
            background: #d3d3d3;
        }
    }

    &::-webkit-slider-runnable-track {
        z-index: 10;
    }
    &::-webkit-slider-thumb {
        @include clear-default-appearance;
        // position: relative;
        z-index: 100;
        width: 12px;
        height: 12px;
        border-radius: 10px;
        background: $--key-color;
        cursor: grab;
    }
}

// .slider

// .slider::-moz-range-thumb {
//     @include clear-default-appearance;
//     width: 12px;
//     height: 12px;
//     border-radius: 10px;
//     background: $--key-color;
//     cursor: grab;
// }

// input[type="range"]:disabled {
//     &::-webkit-slider-thumb {
//         background: red;
//     }
// }
</style>
