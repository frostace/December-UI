<template>
    <div>
        <BackToTop :bottom="100">UP</BackToTop>
        <h2>{{$t('backtopView.title')}}</h2>
        <p>{{$t('backtopView.intro')}}</p>

        <h3>{{$t('backtopView.basic.name')}}</h3>
        <p>{{$t('backtopView.basic.intro')}}</p>
        <DemoBlock>
            <template v-slot:demo-area>
                <p>{{$t('backtopView.basic.intro')}}</p>
            </template>
            <template v-slot:code-area>
                <BackTopCode />
            </template>
        </DemoBlock>

        <h3>{{$t('backtopView.custom.name')}}</h3>
        <p>{{$t('backtopView.custom.intro')}}</p>
        <DemoBlock>
            <template v-slot:demo-area>
                <p>{{$t('backtopView.basic.intro')}}</p>
            </template>
            <template v-slot:code-area>
                <BackTopCustomCode />
            </template>
        </DemoBlock>

        <div :key="idx" v-for="(table, idx) in $t('backtopView.tables')">
            <h3>{{ table.name }}</h3>
            <Table :heads="table.heads" :rows="table.rows" />
        </div>
    </div>
</template>

<script>
import BackTopCode from "../groups/BackTopCode";
import BackTopCustomCode from "../groups/BackTopCustomCode";
import DemoBlock from "../components/DemoBlock";
import BackToTop from "../components/BackToTop";
import Table from "../components/Table";
export default {
    data() {
        return {};
    },
    components: {
        DemoBlock,
        BackTopCode,
        BackTopCustomCode,
        Table,
        BackToTop
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
.demo-block p {
    margin: 0;
}
</style>