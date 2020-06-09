<template>
    <pre><div class="code-area"><code class="html">
<span class="hljs-tag">&lt;</span><span class="hljs-name">div class="block"</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>span class="demonstration"</span><span
    class="hljs-tag"
>&gt;</span>Breakpoints not displayed<span class="hljs-tag">&lt;</span><span class="hljs-name">/span</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>dc-slider v-moodel="value1" :step="10"</span><span
    class="hljs-tag"
>&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-slider</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">/div</span><span class="hljs-tag">&gt;</span>
<span class="hljs-tag">&lt;</span><span class="hljs-name">div class="block"</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>span class="demonstration"</span><span
    class="hljs-tag"
>&gt;</span>Breakpoints displayed<span class="hljs-tag">&lt;</span><span class="hljs-name">/span</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>dc-slider v-moodel="value2" :step="10" show-stops</span><span
    class="hljs-tag"
>&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-slider</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">/div</span><span class="hljs-tag">&gt;</span>

<span class="hljs-tag">&lt;</span><span class="hljs-name">script</span><span class="hljs-tag">&gt;</span>
    export default {
        data() {
            return {
                value1: 0,
                value2: 0,
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
