<template>
    <div>
        <h2>{{$t('buttonView.title')}}</h2>
        <p>{{$t('buttonView.intro')}}</p>

        <h3>{{$t('buttonView.basic.name')}}</h3>
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

        <h3>{{$t('buttonView.disabled.name')}}</h3>
        <p>{{$t('buttonView.disabled.intro')}}</p>
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

        <h3>{{$t('buttonView.text.name')}}</h3>
        <p>{{$t('buttonView.text.intro')}}</p>
        <DemoBlock>
            <template v-slot:demo-area>
                <TextButtonGroup />
            </template>

            <template v-slot:description-area></template>
            <template v-slot:code-area>
                <TextButtonGroupCode />
            </template>
        </DemoBlock>

        <h3>{{$t('buttonView.icon.name')}}</h3>
        <p>{{$t('buttonView.icon.intro')}}</p>
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

        <h3>{{$t('buttonView.group.name')}}</h3>
        <p>{{$t('buttonView.group.intro')}}</p>
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

        <h3>{{$t('buttonView.loading.name')}}</h3>
        <p>{{$t('buttonView.loading.intro')}}</p>
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

        <h3>{{$t('buttonView.size.name')}}</h3>
        <p>{{$t('buttonView.size.intro')}}</p>
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

        <div :key="idx" v-for="(table,idx) in $t('buttonView.tables')">
            <h3>{{table.name}}</h3>
            <Table :heads="table.heads" :rows="table.rows" />
        </div>
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
import IconButtonGroupCode from "../groups/IconButtonGroupCode";
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
