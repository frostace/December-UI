<template>
    <pre><div class="code-area"><code class="html">
<span class="hljs-tag">&lt;</span><span class="hljs-name">div class="block"</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>span class="demonstration"</span><span
    class="hljs-tag"
>&gt;</span>Default value<span class="hljs-tag">&lt;</span><span class="hljs-name">/span</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>dc-slider v-moodel="value1"</span><span
    class="hljs-tag"
>&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-slider</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">/div</span><span class="hljs-tag">&gt;</span>
<span class="hljs-tag">&lt;</span><span class="hljs-name">div class="block"</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>span class="demonstration"</span><span
    class="hljs-tag"
>&gt;</span>Customized initial value<span class="hljs-tag">&lt;</span><span class="hljs-name">/span</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>dc-slider v-moodel="value2"</span><span
    class="hljs-tag"
>&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-slider</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">/div</span><span class="hljs-tag">&gt;</span>
<span class="hljs-tag">&lt;</span><span class="hljs-name">div class="block"</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>span class="demonstration"</span><span
    class="hljs-tag"
>&gt;</span>Hide Tooltip<span class="hljs-tag">&lt;</span><span class="hljs-name">/span</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>dc-slider v-moodel="value3"</span><span
    class="hljs-tag"
>&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-slider</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">/div</span><span class="hljs-tag">&gt;</span>
<span class="hljs-tag">&lt;</span><span class="hljs-name">div class="block"</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>span class="demonstration"</span><span
    class="hljs-tag"
>&gt;</span>Format Tooltip<span class="hljs-tag">&lt;</span><span class="hljs-name">/span</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>dc-slider v-moodel="value4"</span><span
    class="hljs-tag"
>&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-slider</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">/div</span><span class="hljs-tag">&gt;</span>
<span class="hljs-tag">&lt;</span><span class="hljs-name">div class="block"</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>span class="demonstration"</span><span
    class="hljs-tag"
>&gt;</span>Disabled<span class="hljs-tag">&lt;</span><span class="hljs-name">/span</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>dc-slider v-moodel="value5"</span><span
    class="hljs-tag"
>&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-slider</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">/div</span><span class="hljs-tag">&gt;</span>

<span class="hljs-tag">&lt;</span><span class="hljs-name">script</span><span class="hljs-tag">&gt;</span>
    export default {
        data() {
            return {
                value1: 0,
                value2: 50,
                value3: 36,
                value4: 48,
                value5: 42,
            }
        },
        methods: {
            formatTooltip(val) {
                return val / 100;
            }
        }
    }
<span class="hljs-tag">&lt;</span><span class="hljs-name">script</span><span class="hljs-tag">&gt;</span>

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
