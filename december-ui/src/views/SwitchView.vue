<template>
    <div>
        <h2>{{$t('switchView.title')}}</h2>
        <p>{{$t('switchView.intro')}}</p>

        <h3>{{$t('switchView.basic.name')}}</h3>
        <DemoBlock>
            <template v-slot:demo-area>
                <dc-switch v-model="value1" />
                <dc-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949" />
            </template>
            <template v-slot:description-area>
                <div class="description">
                    Bind
                    <code class="little-code">v-model</code> to a
                    <code class="little-code">Boolean</code> typed variable. The
                    <code class="little-code">active-color</code> and
                    <code class="little-code">inactive-color</code> attribute describes the background color in two states.
                </div>
            </template>
            <template v-slot:code-area></template>
        </DemoBlock>

        <h3>{{$t('switchView.text.name')}}</h3>
        <DemoBlock>
            <template v-slot:demo-area>
                <dc-switch v-model="value3" active-text="Pay by month" inactive-text="Pay by year" />
                <dc-switch
                    v-model="value4"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-text="Pay by month"
                    inactive-text="Pay by year"
                    style="display: block"
                />
            </template>
            <template v-slot:description-area>
                <div class="description">
                    You can add
                    <code class="little-code">active-text</code> and
                    <code class="little-code">inactive-text</code> to show texts.
                </div>
            </template>
            <template v-slot:code-area></template>
        </DemoBlock>

        <h3>{{$t('switchView.extended.name')}}</h3>
        <DemoBlock>
            <template v-slot:demo-area>
                <dc-switch
                    v-model="value5"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    :active-value="100"
                    :inactive-value="0"
                />
            </template>
            <template v-slot:description-area>
                <div class="description">
                    You can set
                    <code class="little-code">active-value</code> and
                    <code class="little-code">inactive-value</code> attributes. They both receive a
                    <code class="little-code">Boolean</code> ,
                    <code class="little-code">String</code> or
                    <code class="little-code">Number</code> typed value.
                </div>
            </template>
            <template v-slot:code-area></template>
        </DemoBlock>

        <h3>{{$t('switchView.disabled.name')}}</h3>
        <DemoBlock>
            <template v-slot:demo-area>
                <dc-switch v-model="value6" disabled />
                <dc-switch v-model="value7" disabled />
            </template>
            <template v-slot:description-area>
                <div class="description">
                    Adding the
                    <code class="little-code">disabled</code> attribute disables Switch.
                </div>
            </template>
            <template v-slot:code-area></template>
        </DemoBlock>

        <div :key="idx" v-for="(table,idx) in $t('switchView.tables')">
            <h3>{{table.name}}</h3>
            <Table :heads="table.heads" :rows="table.rows" />
        </div>
    </div>
</template>

<script>
import dcSwitch from "../components/Switch";
import DemoBlock from "../components/DemoBlock";
import Table from "../components/Table";
export default {
    data() {
        return {
            value1: false,
            value2: true,
            value3: false,
            value4: true,
            value5: false,
            value6: true,
            value7: false
        };
    },
    components: {
        dcSwitch,
        DemoBlock,
        Table
    },
    mounted() {
        // TODO: make this behavior a general one
        // make scroll window back to TOP on switching router pages
        let subWindow = document.querySelector(".subcontent");
        subWindow.scrollTo(0, 0);
    }
};
</script>

<style lang="scss" scoped>
</style>