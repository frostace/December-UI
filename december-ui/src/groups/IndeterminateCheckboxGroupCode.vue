<template>
    <pre><div class="code-area"><code class="html">
<span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>dc-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"</span><span
    class="hljs-tag"
>&gt;</span>Check all<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-checkbox</span><span class="hljs-tag">&gt;</span>
<span class="hljs-tag">&lt;</span><span class="hljs-name">div style="margin: 15px 0"</span><span class="hljs-tag">&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/div</span><span class="hljs-tag">&gt;</span>
<span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>dc-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange"</span><span
    class="hljs-tag"
>&gt;</span>
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>dc-checkbox v-for="(city, idx) in cities" :label="city" :key="city"</span><span
    class="hljs-tag"
>&gt;</span>city<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-checkbox</span><span class="hljs-tag">&gt;</span>
<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-checkbox-group</span><span class="hljs-tag">&gt;</span>
<span class="hljs-tag">&lt;</span><span class="hljs-name">script</span><span class="hljs-tag">&gt;</span>
const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
export default {
    data() {
        return {
            cities: cityOptions,
            isIndeterminate: true,
            checkAll: false,
            checkedCities: ["Shanghai", "Beijing"]
        };
    },
    methods: {
        handleCheckAllChange(val) {
            if (val) {
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
            let checkedCount = newCheckedCities.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate =
                checkedCount > 0 &amp;&amp; checkedCount &lt; this.cities.length;
        }
    },
};
<span
    class="hljs-tag"
>&lt;</span><span class="hljs-name">script</span><span class="hljs-tag">&gt;</span>
                        </code></div></pre>
</template>

<style lang="scss" scoped>
.code-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    height: 0px;
    overflow: hidden;
    background-color: transparentize($color: #ccc, $amount: 0.9);
    border: {
        style: solid;
        color: #eee;
        width: 1px;
    }
    border-top: none;

    pre {
        margin: 0;
    }

    .code-area {
        padding: 12px 24px;
    }
}
</style>