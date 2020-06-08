<template>
    <div>
        <h2>Button</h2>
        <p>Commonly used button</p>
        <h3>Basic usage</h3>
        <DemoBlock>
            <template v-slot:demo-area>
                <BasicButtonGroup />
            </template>

            <template v-slot:description-area>
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
            <template v-slot:demo-area>
                <DisabledButtonGroup />
            </template>

            <template v-slot:description-area>
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
            <template v-slot:demo-area>
                <TextButtonGroup />
            </template>

            <template v-slot:description-area></template>
            <template v-slot:code-area>
                <TextButtonGroupCode />
            </template>
        </DemoBlock>

        <h3>Icon Button</h3>
        <p>Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.</p>
        <DemoBlock>
            <template v-slot:demo-area>
                <IconButtonGroup />
            </template>

            <template v-slot:description-area>
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
            <template v-slot:demo-area>
                <ButtonGroup />
            </template>

            <template v-slot:description-area>
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
            <template v-slot:demo-area>
                <LoadingButton />
            </template>

            <template v-slot:description-area>
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
            <template v-slot:demo-area>
                <SizeButtonGroup />
            </template>

            <template v-slot:description-area>
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

        <h3>Attributes</h3>
        <Table :heads="heads" :rows="rows" />
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
import Table from "../components/Table";
export default {
    name: "comp-button",
    data() {
        return {
            heads: [
                "Attribute",
                "Description",
                "Type",
                "Accepted Values",
                "Default"
            ],
            rows: {
                row1: [
                    "size",
                    "button size",
                    "string",
                    "medium / small / mini",
                    "—"
                ],
                row2: [
                    "type",
                    "button type",
                    "string",
                    "primary / success / warning / danger / info / text",
                    "—"
                ],
                row3: [
                    "plain",
                    "determine whether it's a plain button",
                    "boolean",
                    "—",
                    "false"
                ],
                row4: [
                    "round",
                    "determine whether it's a round button",
                    "boolean",
                    "—",
                    "false"
                ],
                row5: [
                    "circle",
                    "determine whether it's a circle button",
                    "boolean",
                    "—",
                    "false"
                ],
                row6: [
                    "loading",
                    "determine whether it's loading",
                    "boolean",
                    "—",
                    "false"
                ],
                row7: [
                    "disabled",
                    "disable the button",
                    "boolean",
                    "—",
                    "false"
                ],
                row8: ["icon", "icon class name", "string", "—", "—"],
                row9: [
                    "autofocus",
                    "same as native button's autofocus",
                    "boolean",
                    "—",
                    "false"
                ],
                row10: [
                    "native-type",
                    "same as native button's type",
                    "string",
                    "button / submit / reset",
                    "button"
                ]
            }
        };
    },
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
        Table
    },
    mounted() {
        // make scroll window back to TOP on switching router pages
        let subWindow = document.querySelector(".subcontent");
        subWindow.scrollTo(0, 0);
    }
};
</script>

<style lang="scss" scoped>
</style>
