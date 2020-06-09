<template>
    <div>
        <h2>Checkbox</h2>
        <p>A group of options for multiple choices.</p>

        <h3>Basic usage</h3>
        <p>Checkbox can be used to switch between two states.</p>

        <DemoBlock>
            <template v-slot:demo-area>
                <dc-checkbox v-model="checked">Option</dc-checkbox>
            </template>
            <template v-slot:description-area>
                <div class="description">
                    Define
                    <code class="little-code">v-model</code> (bind variable) in
                    <code class="little-code">dc-checkbox</code>. The default value is a
                    <code class="little-code">Boolean</code> for single
                    <code class="little-code">checkbox</code> , and it becomes
                    <code class="little-code">true</code> when selected.
                    Content inside the
                    <code
                        class="little-code"
                    >dc-checkbox</code> tag will become the description following the button of the checkbox.
                </div>
            </template>
            <template v-slot:code-area>
                <BasicCheckboxCode />
            </template>
        </DemoBlock>

        <h3>Disabled state</h3>
        <p>Disabled state for checkbox.</p>

        <DemoBlock>
            <template v-slot:demo-area>
                <div style="display: flex; flex-direction: row">
                    <dc-checkbox v-model="checked2" disabled>Option</dc-checkbox>
                    <dc-checkbox v-model="checked3" disabled>Option</dc-checkbox>
                </div>
            </template>
            <template v-slot:description-area>
                <div class="description">
                    Set the
                    <code class="little-code">disabled</code> attribute.
                </div>
            </template>
            <template v-slot:code-area>
                <DisabledCheckboxCode />
            </template>
        </DemoBlock>

        <h3>Chexkbox group</h3>
        <p>It is used for multiple checkboxes which are bound in one group, and indicates whether one option is selected by checking if it is checked.</p>

        <DemoBlock>
            <template v-slot:demo-area>
                <dc-checkbox-group v-model="checkList" style="display: flex; flex-direction: row">
                    <dc-checkbox label="Option A">Option A</dc-checkbox>
                    <dc-checkbox label="Option B">Option B</dc-checkbox>
                    <dc-checkbox label="Option C">Option C</dc-checkbox>
                    <dc-checkbox label="disabled" disabled>Option D</dc-checkbox>
                    <dc-checkbox label="selected and disabled" disabled>Option E</dc-checkbox>
                </dc-checkbox-group>
            </template>
            <template v-slot:description-area>
                <div class="description">
                    adas
                    <code class="little-code">disabled</code> attribute.
                </div>
            </template>
            <template v-slot:code-area>
                <CheckboxGroupCode />
            </template>
        </DemoBlock>

        <h3>Indeterminate</h3>
        <p>The indeterminate property can help you to achieve a 'check all' effect.</p>

        <DemoBlock>
            <template v-slot:demo-area>
                <dc-checkbox>Check all</dc-checkbox>
                <dc-checkbox-group v-model="checkList" style="display: flex; flex-direction: row">
                    <dc-checkbox label></dc-checkbox>
                </dc-checkbox-group>
            </template>
            <template v-slot:description-area></template>
            <template v-slot:code-area>
                <IndeterminateCheckboxGroupCode />
            </template>
        </DemoBlock>

        <h3>Checkbox Attributes</h3>
        <Table></Table>
    </div>
</template>

<script>
import dcCheckbox from "../components/Checkbox";
import dcCheckboxGroup from "../components/CheckboxGroup";
import BasicCheckboxCode from "../groups/BasicCheckboxCode";
import DisabledCheckboxCode from "../groups/DisabledCheckboxCode";
import IndeterminateCheckboxGroupCode from "../groups/IndeterminateCheckboxGroupCode";
import CheckboxGroupCode from "../groups/CheckboxGroupCode";

import DemoBlock from "../components/DemoBlock";
import Table from "../components/Table";
export default {
    data() {
        return {
            checked: true,
            checked2: true,
            checked3: false,
            checkList: { "selected and disabled": true, "Option A": true }
        };
    },
    components: {
        dcCheckbox,
        dcCheckboxGroup,
        BasicCheckboxCode,
        DisabledCheckboxCode,
        CheckboxGroupCode,
        IndeterminateCheckboxGroupCode,
        DemoBlock,
        Table
    }
};
</script>