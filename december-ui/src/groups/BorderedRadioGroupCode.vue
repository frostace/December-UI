<template>
    <pre><div class="code-area"><code class="html">
<span class="hljs-tag">&lt;</span><span class="hljs-name">el-radio-group v-model="selected1"</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="1" border</span><span class="hljs-tag">&gt;</span>Option A<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="2" border</span><span class="hljs-tag">&gt;</span>Option B<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">/el-radio-group</span><span class="hljs-tag">&gt;</span>
<span class="hljs-tag">&lt;</span><span class="hljs-name">el-radio-group v-model="selected2"</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="1" border size="medium"</span><span class="hljs-tag">&gt;</span>Option A<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="2" border size="medium"</span><span class="hljs-tag">&gt;</span>Option B<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">/el-radio-group</span><span class="hljs-tag">&gt;</span>
<span class="hljs-tag">&lt;</span><span class="hljs-name">el-radio-group v-model="selected3"</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="1" border size="small"</span><span class="hljs-tag">&gt;</span>Option A<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="2" border size="small"</span><span class="hljs-tag">&gt;</span>Option B<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">/el-radio-group</span><span class="hljs-tag">&gt;</span>
<span class="hljs-tag">&lt;</span><span class="hljs-name">el-radio-group v-model="selected4"</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="1" border size="mini"</span><span class="hljs-tag">&gt;</span>Option A<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="2" border size="mini"</span><span class="hljs-tag">&gt;</span>Option B<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">/el-radio-group</span><span class="hljs-tag">&gt;</span>

<span class="hljs-tag">&lt;</span><span class="hljs-name">script</span><span class="hljs-tag">&gt;</span>
    export default {
        data () {
            return {
                selected1: '1'
                selected2: '1'
                selected3: '1'
                selected4: '1'
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