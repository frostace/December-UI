<template>
    <div>
        <div class="block">
            <span class="slider-type">Default value</span>
            <dc-slider v-model="value1" />
        </div>
        <div class="block">
            <span class="slider-type">Customized initial value</span>
            <dc-slider v-model="value2" />
        </div>
        <div class="block">
            <span class="slider-type">Hide Tooltip</span>
            <dc-slider v-model="value3" :show-tooltip="false" />
        </div>
        <div class="block">
            <span class="slider-type">Format Tooltip</span>
            <dc-slider v-model="value4" :format-tooltip="formatTooltip" />
        </div>
        <div class="block">
            <span class="slider-type">Disabled</span>
            <dc-slider v-model="value5" disabled />
        </div>
    </div>
</template>

<script>
import dcSlider from "../components/Slider";
export default {
    data() {
        return {
            value1: 0,
            value2: 50,
            value3: 36,
            value4: 48,
            value5: 42,
        };
    },
    methods: {
        formatTooltip(val) {
            return val / 100;
        },
    },
    components: {
        dcSlider,
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/var.scss";

.block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: left;

    padding: 30px 0;
    &:first-child {
        padding-top: 6px;
    }
    &:last-child {
        padding-bottom: 6px;
    }
    &:not(:last-child) {
        border-bottom: solid 1px #f4f4f4;
    }
    .slider-type {
        color: lighten($--decent-gray, 20%);
        font-size: 14px;
    }
}
</style>
