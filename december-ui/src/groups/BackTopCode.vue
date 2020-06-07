<template>
    <pre><div class="code-area"><code class="html">
<span class="hljs-tag">&lt;</span><span class="hljs-name">template</span><span class="hljs-tag">&gt;</span>
    Scroll down to see the bottom-right button.
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>dc-backtop target=".page-component__scroll .el-scrollbar__wrap"</span><span
    class="hljs-tag"
>&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-backtop</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">/template</span><span class="hljs-tag">&gt;</span>
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