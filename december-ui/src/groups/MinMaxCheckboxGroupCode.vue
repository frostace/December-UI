<template>
    <pre><div class="code-area"><code class="html">
<span class="hljs-tag">&lt;</span><span class="hljs-name">dc-checkbox-group 
    v-model="checkedCities" 
    :min="1"
    :max="2"</span><span
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
            checkedCities: ["Shanghai", "Beijing"]
        };
    }
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