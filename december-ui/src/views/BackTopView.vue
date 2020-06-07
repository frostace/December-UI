<template>
    <div>
        <BackToTop :bottom="100">UP</BackToTop>
        <h2>Backtop</h2>
        <p>A button to back to top</p>

        <h3>Basic usage</h3>
        <p>Scroll down to see the bottom-right button.</p>
        <DemoBlock>
            <template v-slot:demo-area>
                <p>Scroll down to see the bottom-right button.</p>
            </template>
            <template v-slot:code-area>
                <BackTopCode />
            </template>
        </DemoBlock>

        <h3>Customizations</h3>
        <p>Display area is 40px * 40px.</p>
        <DemoBlock>
            <template v-slot:demo-area>
                <p>Scroll down to see the bottom-right button.</p>
            </template>
            <template v-slot:code-area>
                <BackTopCode />
            </template>
        </DemoBlock>

        <h3>Attributes</h3>
        <Table :heads="heads" :rows="rows" />
    </div>
</template>

<script>
import BackTopCode from "../groups/BackTopCode";
import DemoBlock from "../components/DemoBlock";
import BackToTop from "../components/BackToTop";
import Table from "../components/Table";
export default {
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
                    "target",
                    "the target to trigger scroll",
                    "string",
                    "—",
                    "—"
                ],
                row2: [
                    "visibility-height",
                    "the button will not show until the scroll height reaches this value",
                    "number",
                    "—",
                    200
                ],
                row3: ["right", "right distance", "number", "—", 40],
                row4: ["left", "left distance", "number", "—", 40]
            }
        };
    },
    components: {
        DemoBlock,
        BackTopCode,
        Table,
        BackToTop
    }
};
</script>

<style lang="scss" scoped>
div > h3 {
    margin-top: 55px;
}

.demo-block p {
    margin: 0;
}
</style>