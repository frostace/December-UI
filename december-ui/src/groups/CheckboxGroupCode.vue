<template>
    <pre><div class="code-area"><code class="html">
<span class="hljs-tag">&lt;</span><span class="hljs-name">dc-checkbox-group vimodel="checkList""</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-checkbox label="Option A"</span><span class="hljs-tag">&gt;</span>Option<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-checkbox</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-checkbox label="Option B"</span><span class="hljs-tag">&gt;</span>Option<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-checkbox</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-checkbox label="Option C"</span><span class="hljs-tag">&gt;</span>Option<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-checkbox</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-checkbox label="disabled" disabled</span><span class="hljs-tag">&gt;</span>Option<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-checkbox</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>dc-checkbox label="selected and disabled" disabled</span><span
    class="hljs-tag"
>&gt;</span>Option<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-checkbox</span><span class="hljs-tag">&gt;</span>
<span class="hljs-tag">&lt;</span><span class="hljs-name">/div</span><span class="hljs-tag">&gt;</span>
<span class="hljs-tag">&lt;</span><span class="hljs-name">script</span><span class="hljs-tag">&gt;</span>
export default {
    data() {
        return {
            checkList: {'selected and disabled': true,'Option A': true}
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