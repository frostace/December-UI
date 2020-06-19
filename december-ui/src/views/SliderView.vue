<template>
    <div>
        <h2>{{$t('sliderView.title')}}</h2>
        <p>{{$t('sliderView.intro')}}</p>

        <h3>{{$t('sliderView.basic.name')}}</h3>
        <p>{{$t('sliderView.basic.intro')}}</p>
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

        <h3>{{$t('sliderView.discrete.name')}}</h3>
        <p>{{$t('sliderView.discrete.intro')}}</p>
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

        <div :key="idx" v-for="(table, idx) in $t('sliderView.tables')">
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
        return {};
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
