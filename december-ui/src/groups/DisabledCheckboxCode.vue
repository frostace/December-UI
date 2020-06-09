<template>
    <pre><div class="code-area"><code class="html">
<span class="hljs-tag">&lt;</span><span class="hljs-name">div class="container"</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-checkbox v-model="checked1"</span><span class="hljs-tag">&gt;</span>Option<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-checkbox</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-checkbox v-model="checked2"</span><span class="hljs-tag">&gt;</span>Option<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-checkbox</span><span class="hljs-tag">&gt;</span>
<span class="hljs-tag">&lt;</span><span class="hljs-name">/div</span><span class="hljs-tag">&gt;</span>
<span class="hljs-tag">&lt;</span><span class="hljs-name">script</span><span class="hljs-tag">&gt;</span>
export default {
    data() {
        return {
            checked1: true
            checked2: false
        };
    }
};
<span
    class="hljs-tag"
>&lt;</span><span class="hljs-name">script</span><span class="hljs-tag">&gt;</span>
<span class="hljs-tag">&lt;</span><span class="hljs-name">style</span><span class="hljs-tag">&gt;</span>
.container {
    display: flex;
    flex-direction: row;
}
<span class="hljs-tag">&lt;</span><span class="hljs-name">style</span><span class="hljs-tag">&gt;</span>
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