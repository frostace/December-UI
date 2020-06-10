<template>
    <div>
        <h2>Slider</h2>
        <p>Drag the slider within a fixed range.</p>

        <h3>Basic usage</h3>
        <p>The current value is displayed when the slider is being dragged.</p>

        <DemoBlock>
            <template v-slot:demo-area>
                <BasicSliderGroup />
            </template>
            <template v-slot:description-area>
                <div class="description">
                    Customize the initial value of the slider by setting the
                    binding value.
                </div>
            </template>
            <template v-slot:code-area>
                <BasicSliderGroupCode />
            </template>
        </DemoBlock>

        <h3>Discrete values</h3>
        <p>The options can be discrete.</p>

        <DemoBlock>
            <template v-slot:demo-area>
                <DiscreteSliderGroup />
            </template>
            <template v-slot:description-area>
                <div class="description">
                    Set step size with the
                    <code class="little-code">step</code> attribute. You can
                    display breakpoints by setting the
                    <code
                        class="little-code"
                    >show-stops</code> attribute.
                </div>
            </template>
            <template v-slot:code-area>
                <DiscreteSliderGroupCode />
            </template>
        </DemoBlock>

        <div :key="idx" v-for="(table, idx) in tables">
            <h3>{{ table.name }}</h3>
            <Table :heads="table.heads" :rows="table.rows" />
        </div>
    </div>
</template>

<script>
import BasicSliderGroup from "../groups/BasicSliderGroup";
import BasicSliderGroupCode from "../groups/BasicSliderGroupCode";
import DiscreteSliderGroup from "../groups/DiscreteSliderGroup";
import DiscreteSliderGroupCode from "../groups/DiscreteSliderGroupCode";
import DemoBlock from "../components/DemoBlock";
import Table from "../components/Table";
export default {
    data() {
        return {
            tables: [
                {
                    name: "Attributes",
                    heads: [
                        "Attribute",
                        "Description",
                        "Type",
                        "Accepted Values",
                        "Default"
                    ],
                    rows: {
                        row1: [
                            "value / v-model",
                            "binding value",
                            "number",
                            "-",
                            "0"
                        ],
                        row2: ["-", "-", "-", "-", "-"]
                    }
                }
            ]
        };
    },
    components: {
        BasicSliderGroup,
        BasicSliderGroupCode,
        DiscreteSliderGroup,
        DiscreteSliderGroupCode,
        DemoBlock,
        Table
    },
    mounted() {
        let subWindow = document.querySelector(".subcontent");
        subWindow.scrollTo(0, 0);
    }
};
</script>

<style lang="scss" scoped>
.demo-block {
    padding: 0;
}
</style>
