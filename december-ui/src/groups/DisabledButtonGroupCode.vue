<template>
    <pre><div class="code-area"><code class="html">
<span class="hljs-tag">&lt;</span><span class="hljs-name">dc-row</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button disabled</span><span class="hljs-tag">&gt;</span>Default<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="primary" disabled</span><span class="hljs-tag">&gt;</span>Primary<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="success" disabled</span><span class="hljs-tag">&gt;</span>Success<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="info" disabled</span><span class="hljs-tag">&gt;</span>Info<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="warning" disabled</span><span class="hljs-tag">&gt;</span>Warning<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="danger" disabled</span><span class="hljs-tag">&gt;</span>Danger<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-row</span><span class="hljs-tag">&gt;</span>

<span class="hljs-tag">&lt;</span><span class="hljs-name">dc-row</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button plain disabled</span><span class="hljs-tag">&gt;</span>Plain<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="primary" plain disabled</span><span class="hljs-tag">&gt;</span>Primary<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="success" plain disabled</span><span class="hljs-tag">&gt;</span>Success<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="info" plain disabled</span><span class="hljs-tag">&gt;</span>Info<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="warning" plain disabled</span><span class="hljs-tag">&gt;</span>Warning<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="danger" plain disabled</span><span class="hljs-tag">&gt;</span>Danger<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-row</span><span class="hljs-tag">&gt;</span>
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