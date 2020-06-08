<template>
    <pre><div class="code-area"><code class="html">
<span class="hljs-tag">&lt;</span><span class="hljs-name">el-radio-group v-model="selected1"</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="New York"</span><span class="hljs-tag">&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="Washington"</span><span class="hljs-tag">&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="Los Angeles"</span><span class="hljs-tag">&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="Chicago"</span><span class="hljs-tag">&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">/el-radio-group</span><span class="hljs-tag">&gt;</span>
<span class="hljs-tag">&lt;</span><span class="hljs-name">el-radio-group v-model="selected2"</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="New York"</span><span class="hljs-tag">&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="Washington"</span><span class="hljs-tag">&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="Los Angeles"</span><span class="hljs-tag">&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="Chicago"</span><span class="hljs-tag">&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">/el-radio-group</span><span class="hljs-tag">&gt;</span>
<span class="hljs-tag">&lt;</span><span class="hljs-name">el-radio-group v-model="selected3"</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="New York"</span><span class="hljs-tag">&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="Washington" disabled</span><span class="hljs-tag">&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="Los Angeles"</span><span class="hljs-tag">&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="Chicago"</span><span class="hljs-tag">&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">/el-radio-group</span><span class="hljs-tag">&gt;</span>
<span class="hljs-tag">&lt;</span><span class="hljs-name">el-radio-group v-model="selected4"</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="New York" disabled</span><span class="hljs-tag">&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="Washington" disabled</span><span class="hljs-tag">&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="Los Angeles" disabled</span><span class="hljs-tag">&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-radio label="Chicago" disabled</span><span class="hljs-tag">&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-radio</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">/el-radio-group</span><span class="hljs-tag">&gt;</span>

<span class="hljs-tag">&lt;</span><span class="hljs-name">script</span><span class="hljs-tag">&gt;</span>
    export default {
        data () {
            return {
                selected1: 'New York'
                selected2: 'New York'
                selected3: 'New York'
                selected4: 'New York'
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