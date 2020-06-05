<template>
    <div>
        <h2>Button</h2>
        <p>Commonly used button</p>
        <h3>Basic usage</h3>
        <DemoBlock>
            <template v-slot:demo-component>
                <BasicButtonGroup />
            </template>

            <template v-slot:description>
                <div class="description">
                    Use
                    <code class="little-code">type</code>,
                    <code class="little-code">plain</code>,
                    <code class="little-code">round</code> and
                    <code class="little-code">circle</code> to define Button's
                    style.
                </div>
            </template>
            <template v-slot:code-area>
                <BasicButtonGroupCode />
            </template>
        </DemoBlock>

        <h3>Disabled Button</h3>
        <DemoBlock>
            <template v-slot:demo-component>
                <DisabledButtonGroup />
            </template>

            <template v-slot:description>
                <div class="description">
                    Use
                    <code class="little-code">distabled</code>
                    attribute to determine whether a button is disabled. It accepts a
                    <code
                        class="little-code"
                    >Boolean</code>
                    value.
                </div>
            </template>
            <template v-slot:code-area>
                <DisabledButtonGroupCode />
            </template>
        </DemoBlock>
    </div>
</template>

<script>
import BasicButtonGroup from "../groups/BasicButtonGroup";
import BasicButtonGroupCode from "../groups/BasicButtonGroupCode";
import DisabledButtonGroup from "../groups/DisabledButtonGroup";
import DisabledButtonGroupCode from "../groups/DisabledButtonGroupCode";
import DemoBlock from "../components/DemoBlock";
export default {
    name: "comp-button",

    components: {
        BasicButtonGroup,
        BasicButtonGroupCode,
        DisabledButtonGroup,
        DisabledButtonGroupCode,
        DemoBlock
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/var.scss";

.description {
    background-color: white;
    padding: 16px;
    margin: 10px;
    border: {
        style: solid;
        color: #eee;
        width: 1px;
        radius: 4px;
    }

    .little-code {
        background-color: transparentize($color: $--decent-green, $amount: 0.8);
        border-radius: 2px;
        padding: 1px 5px;
        margin: 0 4px;
    }
}
</style>
