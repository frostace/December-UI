<template>
    <div>
        <h2>Radio</h2>
        <p>Single selection among multiple options</p>

        <h3>Basic usage</h3>
        <p>Radio should not have too many options. Otherwise, use the Select component instead.</p>
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

        <h3>Disabled</h3>
        <p>
            <code class="little-code">disabled</code> attribute is used to disable the radio.
        </p>
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

        <h3>Radio button group</h3>
        <p>Suitable for choosing from some mutually exclusive options.</p>
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

        <h3>Button style</h3>
        <p>Radio with button styles.</p>
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

        <h3>With borders</h3>
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

        <div :key="idx" v-for="(table,idx) in tables">
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
            selected11: "1",
            tables: [
                {
                    name: "Radio Attributes",
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
                            "string / number / boolean",
                            "-",
                            "-"
                        ],
                        row2: [
                            "label",
                            "the value of Radio",
                            "string / number / boolean",
                            "-",
                            "-"
                        ],
                        row3: [
                            "disabled",
                            "whether Radio is disabled",
                            "boolean",
                            "-",
                            "false"
                        ],
                        row4: [
                            "border",
                            "whether to add a border around Radio",
                            "boolean",
                            "-",
                            "false"
                        ],
                        row5: [
                            "size",
                            "size of the Radio, only works when border is true",
                            "string",
                            "medium / small / mini",
                            "-"
                        ],
                        row6: [
                            "name",
                            "native 'name' attribute",
                            "string",
                            "-",
                            "-"
                        ]
                    }
                },
                {
                    name: "Radio Event",
                    heads: ["Event Name", "Description", "Parameters"],
                    rows: {
                        row1: [
                            "change",
                            "triggers when the bound value changes",
                            "the label value of the chosen radio"
                        ]
                    }
                },
                {
                    name: "Radio-group Attributes",
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
                            "string / number / boolean",
                            "-",
                            "-"
                        ],
                        row2: [
                            "label",
                            "the value of Radio",
                            "string / number / boolean",
                            "-",
                            "-"
                        ],
                        row3: [
                            "disabled",
                            "whether Radio is disabled",
                            "boolean",
                            "-",
                            "false"
                        ]
                        // row4: [
                        //     "text-color",
                        //     "font-color when botton is active",
                        //     "string",
                        //     "-",
                        //     "#ffffff"
                        // ],
                        // row5: [
                        //     "fill",
                        //     "border and background color when button is active",
                        //     "string",
                        //     "-",
                        //     "#409EFF"
                        // ]
                    }
                },
                {
                    name: "Radio-group Event",
                    heads: ["Event Name", "Description", "Parameters"],
                    rows: {
                        row1: [
                            "change",
                            "triggers when the bound value changes",
                            "the label value of the chosen radio"
                        ]
                    }
                },
                {
                    name: "Radio-group Attributes",
                    heads: [
                        "Attribute",
                        "Description",
                        "Type",
                        "Accepted Values",
                        "Default"
                    ],
                    rows: {
                        row1: [
                            "label",
                            "the value of Radio",
                            "string / number / boolean",
                            "-",
                            "-"
                        ],
                        row2: [
                            "disabled",
                            "whether Radio is disabled",
                            "boolean",
                            "-",
                            "false"
                        ],
                        row3: [
                            "name",
                            "native 'name' attribute",
                            "string",
                            "-",
                            "-"
                        ]
                    }
                }
            ]
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