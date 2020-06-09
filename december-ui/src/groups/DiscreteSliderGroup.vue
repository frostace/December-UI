<template>
    <div>
        <div class="block">
            <span class="slider-type">Breakpoints not displayed</span>
            <dc-slider v-model="value1" :step="10" />
        </div>
        <div class="block">
            <span class="slider-type">Breakpoints displayed</span>
            <dc-slider v-model="value2" :step="10" show-stops />
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
