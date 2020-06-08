<template>
    <pre><div class="code-area"><code class="html">
<span class="hljs-tag">&lt;</span><span class="hljs-name">template</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>dc-radio v-model="selected" label="disabled" disabled</span><span
    class="hljs-tag"
>&gt;</span>Option A<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>dc-radio v-model="selected" label="selected and disabled" disabled</span><span
    class="hljs-tag"
>&gt;</span>Option B<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">/template</span><span class="hljs-tag">&gt;</span>

<span class="hljs-tag">&lt;</span><span class="hljs-name">script</span><span class="hljs-tag">&gt;</span>
    export default {
        data () {
            return {
                selected: 'selected and disabled'
            };
        },
    }
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