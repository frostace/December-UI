<template>
    <div>
        <BackToTop>
            <font-awesome-icon icon="caret-up" />
        </BackToTop>
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
        <p>
            The
            <code class="little-code">distabled</code> attribute determines if the button is disabled.
        </p>
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

        <h3>Text Button</h3>
        <p>Buttons without border and background.</p>
        <DemoBlock>
            <template v-slot:demo-component>
                <TextButtonGroup />
            </template>

            <template v-slot:description></template>
            <template v-slot:code-area>
                <TextButtonGroupCode />
            </template>
        </DemoBlock>

        <h3>Icon Button</h3>
        <p>Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.</p>
        <DemoBlock>
            <template v-slot:demo-component>
                <IconButtonGroup />
            </template>

            <template v-slot:description>
                <div class="description">
                    Use the
                    <code class="little-code">icon</code>
                    attribute to add icon. You can find the icon list in Element icon component. Adding icons to the right side of the text is achievable with an
                    <code
                        class="little-code"
                    >&lt;i&gt;</code> tag. Custom icons can be used as well.
                </div>
            </template>
            <template v-slot:code-area>
                <IconButtonGroupCode />
            </template>
        </DemoBlock>

        <h3>Button Group</h3>
        <p>Displayed as a button group, can be used to group a series of similar operations.</p>
        <DemoBlock>
            <template v-slot:demo-component>
                <ButtonGroup />
            </template>

            <template v-slot:description>
                <div class="description">
                    Use tag
                    <code class="little-code">&lt;el-button-group&gt;</code> to group your buttons.
                </div>
            </template>
            <template v-slot:code-area>
                <ButtonGroupCode />
            </template>
        </DemoBlock>

        <h3>Loading Button</h3>
        <p>Click the button to load data, then the button displays a loading state.</p>
        <DemoBlock>
            <template v-slot:demo-component>
                <LoadingButton />
            </template>

            <template v-slot:description>
                <div class="description">
                    Set
                    <code class="little-code">loading</code> attribute to
                    <code class="little-code">true</code> to display loading state.
                </div>
            </template>
            <template v-slot:code-area>
                <LoadingButtonCode />
            </template>
        </DemoBlock>

        <h3>Sizes</h3>
        <p>Besides default size, Button component provides three additional sizes for you to choose among different scenarios.</p>
        <DemoBlock>
            <template v-slot:demo-component>
                <SizeButtonGroup />
            </template>

            <template v-slot:description>
                <div class="description">
                    Use attribute
                    <code class="little-code">size</code> to set additional sizes with
                    <code class="little-code">large</code>,
                    <code class="little-code">medium</code>,
                    <code class="little-code">small</code> or
                    <code class="little-code">mini</code>
                </div>
            </template>
            <template v-slot:code-area>
                <SizeButtonGroupCode />
            </template>
        </DemoBlock>
    </div>
</template>

<script>
import BasicButtonGroup from "../groups/BasicButtonGroup";
import BasicButtonGroupCode from "../groups/BasicButtonGroupCode";
import DisabledButtonGroup from "../groups/DisabledButtonGroup";
import DisabledButtonGroupCode from "../groups/DisabledButtonGroupCode";
import TextButtonGroup from "../groups/TextButtonGroup";
import TextButtonGroupCode from "../groups/TextButtonGroupCode";
import IconButtonGroup from "../groups/IconButtonGroup";
import IconButtonGroupCode from "../groups/IconButtonGroup";
import ButtonGroup from "../groups/ButtonGroup";
import ButtonGroupCode from "../groups/ButtonGroupCode";
import LoadingButton from "../groups/LoadingButton";
import LoadingButtonCode from "../groups/LoadingButtonCode";
import SizeButtonGroup from "../groups/SizeButtonGroup";
import SizeButtonGroupCode from "../groups/SizeButtonGroupCode";
import DemoBlock from "../components/DemoBlock";
import BackToTop from "../components/BackToTop";
export default {
    name: "comp-button",

    components: {
        BasicButtonGroup,
        BasicButtonGroupCode,
        DisabledButtonGroup,
        DisabledButtonGroupCode,
        TextButtonGroup,
        TextButtonGroupCode,
        IconButtonGroup,
        IconButtonGroupCode,
        ButtonGroup,
        ButtonGroupCode,
        LoadingButton,
        LoadingButtonCode,
        SizeButtonGroup,
        SizeButtonGroupCode,
        DemoBlock,
        BackToTop
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
