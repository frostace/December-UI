<template>
    <div>
        <h2>{{$t('radioView.title')}}</h2>
        <p>{{$t('radioView.intro')}}</p>

        <h3>{{$t('radioView.basic.name')}}</h3>
        <p>{{$t('radioView.basic.intro')}}</p>
        <DemoBlock>
            <template v-slot:demo-area>
                <dc-radio v-model="selected" label="1">Option A</dc-radio>
                <dc-radio v-model="selected" label="2">Option B</dc-radio>
            </template>
            <template v-slot:description-area>
                <div class="description">
                    Creating a radio component is easy, you just need to bind a variable to Radio's
                    <code
                        class="little-code"
                    >v-model</code>. It equals to the value of
                    <code class="little-code">label</code> of hte chosen radio. The type of the
                    <code class="little-code">label</code> is
                    <code class="little-code">String</code>,
                    <code class="little-code">Number</code>,
                    <code class="little-code">Boolean</code>
                </div>
            </template>
            <template v-slot:code-area>
                <BasicRadioCode />
            </template>
        </DemoBlock>

        <h3>{{$t('radioView.disabled.name')}}</h3>
        <p>{{$t('radioView.disabled.intro')}}</p>
        <DemoBlock>
            <template v-slot:demo-area>
                <dc-radio v-model="selected2" label="disabled" disabled>Option A</dc-radio>
                <dc-radio v-model="selected2" label="selected and disabled" disabled>Option B</dc-radio>
            </template>
            <template v-slot:description-area></template>
            <template v-slot:code-area>
                <DisabledRadioCode />
            </template>
        </DemoBlock>

        <h3>{{$t('radioView.group.name')}}</h3>
        <p>{{$t('radioView.group.intro')}}</p>
        <DemoBlock>
            <template v-slot:demo-area>
                <dc-radio-group v-model="selected3">
                    <dc-radio label="3">Option A</dc-radio>
                    <dc-radio label="6">Option B</dc-radio>
                    <dc-radio label="9">Option C</dc-radio>
                </dc-radio-group>
            </template>
            <template v-slot:description-area></template>
            <template v-slot:code-area>
                <RadioGroupCode />
            </template>
        </DemoBlock>

        <h3>{{$t('radioView.style.name')}}</h3>
        <p>{{$t('radioView.style.intro')}}</p>
        <DemoBlock>
            <template v-slot:demo-area>
                <dc-radio-group v-model="selected4">
                    <dc-radio-button label="New York"></dc-radio-button>
                    <dc-radio-button label="Washington"></dc-radio-button>
                    <dc-radio-button label="Los Angeles"></dc-radio-button>
                    <dc-radio-button label="Chicago"></dc-radio-button>
                </dc-radio-group>
                <dc-radio-group v-model="selected5">
                    <dc-radio-button label="New York" size="medium"></dc-radio-button>
                    <dc-radio-button label="Washington" size="medium"></dc-radio-button>
                    <dc-radio-button label="Los Angeles" size="medium"></dc-radio-button>
                    <dc-radio-button label="Chicago" size="medium"></dc-radio-button>
                </dc-radio-group>
                <dc-radio-group v-model="selected6">
                    <dc-radio-button label="New York" size="small"></dc-radio-button>
                    <dc-radio-button label="Washington" size="small" disabled></dc-radio-button>
                    <dc-radio-button label="Los Angeles" size="small"></dc-radio-button>
                    <dc-radio-button label="Chicago" size="small"></dc-radio-button>
                </dc-radio-group>
                <dc-radio-group v-model="selected7">
                    <dc-radio-button label="New York" size="mini" disabled></dc-radio-button>
                    <dc-radio-button label="Washington" size="mini" disabled></dc-radio-button>
                    <dc-radio-button label="Los Angeles" size="mini" disabled></dc-radio-button>
                    <dc-radio-button label="Chicago" size="mini" disabled></dc-radio-button>
                </dc-radio-group>
            </template>
            <template v-slot:description-area></template>
            <template v-slot:code-area>
                <RadioButtonGroupCode />
            </template>
        </DemoBlock>

        <h3>{{$t('radioView.border.name')}}</h3>
        <DemoBlock>
            <template v-slot:demo-area>
                <dc-radio-group v-model="selected8">
                    <dc-radio label="1" border>Option A</dc-radio>
                    <dc-radio label="2" border>Option B</dc-radio>
                </dc-radio-group>
                <dc-radio-group v-model="selected9">
                    <dc-radio label="1" border size="medium">Option A</dc-radio>
                    <dc-radio label="2" border size="medium">Option B</dc-radio>
                </dc-radio-group>
                <dc-radio-group v-model="selected10">
                    <dc-radio label="1" border size="small">Option A</dc-radio>
                    <dc-radio label="2" border size="small" disabled>Option B</dc-radio>
                </dc-radio-group>
                <dc-radio-group v-model="selected11">
                    <dc-radio label="1" border size="mini" disabled>Option A</dc-radio>
                    <dc-radio label="2" border size="mini" disabled>Option B</dc-radio>
                </dc-radio-group>
            </template>
            <template v-slot:description-area></template>
            <template v-slot:code-area>
                <BorderedRadioGroupCode />
            </template>
        </DemoBlock>

        <div :key="idx" v-for="(table,idx) in $t('radioView.tables')">
            <h3>{{table.name}}</h3>
            <Table :heads="table.heads" :rows="table.rows" />
        </div>
    </div>
</template>

<script>
import dcRadio from "../components/Radio";
import dcRadioButton from "../components/RadioButton";
import dcRadioGroup from "../components/RadioGroup";
import BasicRadioCode from "../groups/BasicRadioCode";
import DisabledRadioCode from "../groups/DisabledRadioCode";
import RadioGroupCode from "../groups/RadioGroupCode";
import RadioButtonGroupCode from "../groups/RadioButtonGroupCode";
import BorderedRadioGroupCode from "../groups/BorderedRadioGroupCode";
import DemoBlock from "../components/DemoBlock";
import Table from "../components/Table";
export default {
    data() {
        return {
            selected: "1",
            selected2: "selected and disabled",
            selected3: "3",
            selected4: "New York",
            selected5: "New York",
            selected6: "New York",
            selected7: "New York",
            selected8: "1",
            selected9: "1",
            selected10: "1",
            selected11: "1"
        };
    },
    methods: {
        onUpdateSelected(newSelected) {
            this.selected = newSelected;
        },
        handleSelect(e) {
            console.log(e);
            // this.selected3 = $event.target.value;
        }
    },
    computed: {},
    components: {
        dcRadio,
        dcRadioButton,
        dcRadioGroup,
        BasicRadioCode,
        DisabledRadioCode,
        RadioGroupCode,
        RadioButtonGroupCode,
        BorderedRadioGroupCode,
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
.dc-radio-group {
    &:not(:last-child) {
        margin-bottom: 15px;
    }
}
</style>