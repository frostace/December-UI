<template>
    <pre><div class="code-area"><code class="html">
<span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="text"</span><span class="hljs-tag">&gt;</span>Text Button<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="text" disabled</span><span class="hljs-tag">&gt;</span>Text Button<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
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