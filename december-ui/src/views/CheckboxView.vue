<template>
    <div>
        <h2>{{$t('checkboxView.title')}}</h2>
        <p>{{$t('checkboxView.intro')}}</p>

        <h3>{{$t('checkboxView.basic.name')}}</h3>
        <p>{{$t('checkboxView.basic.intro')}}</p>

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

        <h3>{{$t('checkboxView.disabled.name')}}</h3>
        <p>{{$t('checkboxView.disabled.intro')}}</p>
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

        <h3>{{$t('checkboxView.group.name')}}</h3>
        <p>{{$t('checkboxView.group.intro')}}</p>
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

        <h3>{{$t('checkboxView.indeterminate.name')}}</h3>
        <p>{{$t('checkboxView.indeterminate.intro')}}</p>
        <DemoBlock>
            <template v-slot:demo-area>
                <dc-checkbox
                    :indeterminate="isIndeterminate"
                    v-model="checkAll"
                    @change="handleCheckAllChange"
                >Check all</dc-checkbox>
                <div style="margin: 15px 0;"></div>
                <dc-checkbox-group
                    v-model="checkedCities"
                    style="display: flex; flex-direction: row"
                    @change="handleCheckedCitiesChange"
                >
                    <dc-checkbox :key="idx" v-for="(city, idx) in cities" :label="city">{{city}}</dc-checkbox>
                </dc-checkbox-group>
            </template>
            <template v-slot:description-area></template>
            <template v-slot:code-area>
                <IndeterminateCheckboxGroupCode />
            </template>
        </DemoBlock>

        <h3>{{$t('checkboxView.minmax.name')}}</h3>
        <p>{{$t('checkboxView.minmax.intro')}}</p>
        <DemoBlock>
            <template v-slot:demo-area>
                <dc-checkbox-group
                    v-model="checkedCities2"
                    :min="1"
                    :max="2"
                    style="display: flex; flex-direction: row"
                >
                    <dc-checkbox :key="idx" v-for="(city, idx) in cities" :label="city">{{city}}</dc-checkbox>
                </dc-checkbox-group>
            </template>
            <template v-slot:description-area></template>
            <template v-slot:code-area>
                <MinMaxCheckboxGroupCode />
            </template>
        </DemoBlock>

        <div :key="idx" v-for="(table,idx) in $t('checkboxView.tables')">
            <h3>{{table.name}}</h3>
            <Table :heads="table.heads" :rows="table.rows" />
        </div>
    </div>
</template>

<script>
import dcCheckbox from "../components/Checkbox";
import dcCheckboxGroup from "../components/CheckboxGroup";
import BasicCheckboxCode from "../groups/BasicCheckboxCode";
import DisabledCheckboxCode from "../groups/DisabledCheckboxCode";
import IndeterminateCheckboxGroupCode from "../groups/IndeterminateCheckboxGroupCode";
import MinMaxCheckboxGroupCode from "../groups/MinMaxCheckboxGroupCode";
import CheckboxGroupCode from "../groups/CheckboxGroupCode";

import DemoBlock from "../components/DemoBlock";
import Table from "../components/Table";
const cityOptions = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];
// const cityOptions = {
//     Shanghai: true,
//     Beijing: true,
//     Guangzhou: true,
//     Shenzhen: true
// };
export default {
    data() {
        return {
            checked: true,
            checked2: true,
            checked3: false,
            checkList: ["selected and disabled", "Option A"],
            cities: cityOptions,
            isIndeterminate: true,
            checkAll: false,
            checkedCities: ["Shanghai", "Beijing"],
            checkedCities2: ["Shanghai", "Beijing"]
        };
    },
    methods: {
        handleCheckAllChange(val) {
            // console.log(val, 123);
            if (val) {
                // use this.$set to force inform child component that the prop is updated
                // console.log(cityOptions);
                this.checkedCities.splice(cityOptions.length);
                cityOptions.forEach((city, idx) =>
                    this.$set(this.checkedCities, idx, city)
                );
            } else {
                this.checkedCities.splice(0);
            }
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(newCheckedCities) {
            // console.log(newCheckedCities);
            let checkedCount = newCheckedCities.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate =
                checkedCount > 0 && checkedCount < this.cities.length;
            // console.log(checkedCount, this.cities.length);
            // console.log(this.checkAll);
        }
    },
    components: {
        dcCheckbox,
        dcCheckboxGroup,
        BasicCheckboxCode,
        DisabledCheckboxCode,
        CheckboxGroupCode,
        IndeterminateCheckboxGroupCode,
        MinMaxCheckboxGroupCode,
        DemoBlock,
        Table
    },
    mounted() {
        let subWindow = document.querySelector(".subcontent");
        subWindow.scrollTo(0, 0);
    }
};
</script>