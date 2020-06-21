<template>
    <pre><div class="code-area"><code class="html">
<span class="hljs-tag">&lt;</span><span class="hljs-name">dc-switch</span><span class="hljs-tag">&gt;</span>
    v-model="value1"
    active-text="Pay by year"
    inactive-text="Pay by month"
<span
    class="hljs-tag"
>&lt;</span><span class="hljs-name">/dc-switch</span><span class="hljs-tag">&gt;</span>
<span class="hljs-tag">&lt;</span><span class="hljs-name">dc-switch</span><span class="hljs-tag">&gt;</span>
    style="display: block"
    v-model="value2"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-text="Pay by year"
    inactive-text="Pay by month"
<span
    class="hljs-tag"
>&lt;</span><span class="hljs-name">/dc-switch</span><span class="hljs-tag">&gt;</span>
<span class="hljs-tag">&lt;</span><span class="hljs-name">script</span><span class="hljs-tag">&gt;</span>
    export default {
        data() {
            return {
                value1: true;
                value2: true;
            }
        }
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