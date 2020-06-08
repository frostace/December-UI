<template>
    <div class="layout">
        <h2>Layout</h2>
        <p>Quickly and easily create layouts with the basic 24-column.</p>

        <h3>Basic layout</h3>
        <p>Create basic grid layout using columns</p>
        <DemoBlock>
            <template v-slot:demo-area>
                <BasicLayoutGroup />
            </template>

            <template v-slot:description-area>
                <div class="description">
                    With
                    <code class="little-code">rol</code> and
                    <code class="little-code">col</code>, we can easily manipulate the layout using the
                    <code class="little-code">span</code> attribute.
                </div>
            </template>
            <template v-slot:code-area>
                <BasicLayoutGroupCode />
            </template>
        </DemoBlock>

        <h3>Column Spacing</h3>
        <p>Column spacing is supported</p>
        <DemoBlock>
            <template v-slot:demo-area>
                <ColumnSpacingLayoutGroup />
            </template>

            <template v-slot:code-area>
                <ColumnSpacingLayoutGroupCode />
            </template>
        </DemoBlock>

        <h3>Hybrid layout</h3>
        <p>Form a more complex hybrid layout by combining the basic 1/24 columns.</p>
        <DemoBlock>
            <template v-slot:demo-area>
                <HybridLayoutGroup />
            </template>

            <template v-slot:code-area>
                <HybridLayoutGroupCode />
            </template>
        </DemoBlock>

        <h3>Custom offset</h3>
        <p>You can specify column offsets.</p>
        <DemoBlock>
            <template v-slot:demo-area>
                <CustomOffsetLayoutGroup />
            </template>

            <template v-slot:code-area>
                <CustomOffsetLayoutGroupCode />
            </template>
        </DemoBlock>

        <h3>Alignment</h3>
        <p>Use the flex layout to make flexible alignment of columns.</p>
        <DemoBlock>
            <template v-slot:demo-area>
                <AlignmentLayoutGroup />
            </template>

            <template v-slot:code-area>
                <AlignmentLayoutGroupCode />
            </template>
        </DemoBlock>
        <div :key="idx" v-for="(table, idx) in tables">
            <h3>{{table.name}}</h3>
            <Table :heads="table.heads" :rows="table.rows" />
        </div>

        <!-- TODO: add responsive layout -->
    </div>
</template>

<script>
import DemoBlock from "../components/DemoBlock";
import BasicLayoutGroup from "../groups/BasicLayoutGroup";
import BasicLayoutGroupCode from "../groups/BasicLayoutGroupCode";
import ColumnSpacingLayoutGroup from "../groups/ColumnSpacingLayoutGroup";
import ColumnSpacingLayoutGroupCode from "../groups/ColumnSpacingLayoutGroupCode";
import HybridLayoutGroup from "../groups/HybridLayoutGroup";
import HybridLayoutGroupCode from "../groups/HybridLayoutGroupCode";
import CustomOffsetLayoutGroup from "../groups/CustomOffsetLayoutGroup";
import CustomOffsetLayoutGroupCode from "../groups/CustomOffsetLayoutGroupCode";
import AlignmentLayoutGroup from "../groups/AlignmentLayoutGroup";
import AlignmentLayoutGroupCode from "../groups/AlignmentLayoutGroupCode";
import Table from "../components/Table";
export default {
    data() {
        return {
            tables: [
                {
                    name: "Row Attribute",
                    heads: [
                        "Attribute",
                        "Description",
                        "Type",
                        "Accepted Values",
                        "Default"
                    ],
                    rows: {
                        row1: ["gutter", "grid spacing", "number", "—", "0"],
                        row2: [
                            "type",
                            "layout mode, you can use flex, works in modern browsers",
                            "string",
                            "—",
                            "—"
                        ],
                        row3: [
                            "justify",
                            "horizontal alignment of flex layout",
                            "string",
                            "start/end/center/space-around/space-between",
                            "start"
                        ],
                        row4: [
                            "align",
                            "vertical alignment of flex layout",
                            "string",
                            "top/middle/bottom",
                            "top"
                        ],
                        row5: [
                            "tag",
                            "custom element tag",
                            "string",
                            "*",
                            "div"
                        ]
                    }
                },
                {
                    name: "Col Attribute",
                    heads: [
                        "Attribute",
                        "Description",
                        "Type",
                        "Accepted Values",
                        "Default"
                    ],
                    rows: {
                        row1: [
                            "span",
                            "number of column the grid spans",
                            "number",
                            "—",
                            "24"
                        ],
                        row2: [
                            "offset",
                            "number of spacing on the left side of the grid	",
                            "number",
                            "—",
                            "0"
                        ],
                        row3: [
                            "push",
                            "number of columns that grid moves to the right	",
                            "number",
                            "—",
                            "0"
                        ],
                        row4: [
                            "pull",
                            "number of columns that grid moves to the left",
                            "number",
                            "—",
                            "0"
                        ],
                        row5: ["...", "...", "...", "...", "..."]
                    }
                }
            ]
        };
    },
    components: {
        DemoBlock,
        Table,
        BasicLayoutGroup,
        BasicLayoutGroupCode,
        ColumnSpacingLayoutGroup,
        ColumnSpacingLayoutGroupCode,
        HybridLayoutGroup,
        HybridLayoutGroupCode,
        CustomOffsetLayoutGroup,
        CustomOffsetLayoutGroupCode,
        AlignmentLayoutGroup,
        AlignmentLayoutGroupCode
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