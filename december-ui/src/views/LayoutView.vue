<template>
    <div class="layout">
        <h2>{{$t('layoutView.title')}}</h2>
        <p>{{$t('layoutView.intro')}}</p>

        <h3>{{$t('layoutView.basic.name')}}</h3>
        <p>{{$t('layoutView.basic.intro')}}</p>
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

        <h3>{{$t('layoutView.column.name')}}</h3>
        <p>{{$t('layoutView.column.intro')}}</p>
        <DemoBlock>
            <template v-slot:demo-area>
                <ColumnSpacingLayoutGroup />
            </template>

            <template v-slot:code-area>
                <ColumnSpacingLayoutGroupCode />
            </template>
        </DemoBlock>

        <h3>{{$t('layoutView.hybrid.name')}}</h3>
        <p>{{$t('layoutView.hybrid.intro')}}</p>
        <DemoBlock>
            <template v-slot:demo-area>
                <HybridLayoutGroup />
            </template>

            <template v-slot:code-area>
                <HybridLayoutGroupCode />
            </template>
        </DemoBlock>

        <h3>{{$t('layoutView.offset.name')}}</h3>
        <p>{{$t('layoutView.offset.intro')}}</p>
        <DemoBlock>
            <template v-slot:demo-area>
                <CustomOffsetLayoutGroup />
            </template>

            <template v-slot:code-area>
                <CustomOffsetLayoutGroupCode />
            </template>
        </DemoBlock>

        <h3>{{$t('layoutView.align.name')}}</h3>
        <p>{{$t('layoutView.align.intro')}}</p>
        <DemoBlock>
            <template v-slot:demo-area>
                <AlignmentLayoutGroup />
            </template>

            <template v-slot:code-area>
                <AlignmentLayoutGroupCode />
            </template>
        </DemoBlock>

        <div :key="idx" v-for="(table, idx) in $t('layoutView.tables')">
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
        return {};
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