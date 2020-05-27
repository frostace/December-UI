<template>
    <div>
        <h2>Button</h2>
        <p>Commonly used button</p>
        <h3>Basic usage</h3>
        <div class="demo">
            <div class="demo-block">
                <div class="dc-row dc-row-default">
                    <Button
                        :key="index"
                        v-for="(buttonprop, index) in buttonPropsDefault"
                        v-bind:type="buttonprop.type"
                        :content="buttonprop.content"
                        :size="buttonprop.size"
                    />
                </div>
                <div class="dc-row dc-row-plain">
                    <Button
                        :key="index"
                        v-for="(buttonprop, index) in buttonPropsPlain"
                        v-bind:type="buttonprop.type"
                        :content="buttonprop.content"
                        :size="buttonprop.size"
                        plain
                    />
                </div>
                <div class="dc-row dc-row-round">
                    <Button
                        :key="index"
                        v-for="(buttonprop, index) in buttonPropsRound"
                        v-bind:type="buttonprop.type"
                        :content="buttonprop.content"
                        :size="buttonprop.size"
                        round
                    />
                </div>
                <div class="dc-row dc-row-circle">
                    <Button
                        :key="index"
                        v-for="(buttonprop, index) in buttonPropsCircle"
                        v-bind:type="buttonprop.type"
                        :content="buttonprop.content"
                        :size="buttonprop.size"
                        :iconName="buttonprop.iconName"
                        circle
                    />
                </div>
            </div>
            <div class="code-block">
                <div class="description">
                    Use
                    <code class="little-code">type</code>,
                    <code class="little-code">plain</code>,
                    <code class="little-code">round</code> and
                    <code class="little-code">circle</code> to define Button's
                    style.
                </div>
                <pre><div class="code-area"><code class="html">
<span class="hljs-tag">&lt;</span><span class="hljs-name">dc-row</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button</span><span class="hljs-tag">&gt;</span>Default<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="primary"</span><span class="hljs-tag">&gt;</span>Primary<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="success"</span><span class="hljs-tag">&gt;</span>Success<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="info"</span><span class="hljs-tag">&gt;</span>Info<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="warning"</span><span class="hljs-tag">&gt;</span>Warning<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="danger"</span><span class="hljs-tag">&gt;</span>Danger<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-row</span><span class="hljs-tag">&gt;</span>

<span class="hljs-tag">&lt;</span><span class="hljs-name">dc-row</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button plain</span><span class="hljs-tag">&gt;</span>Plain<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="primary" plain</span><span class="hljs-tag">&gt;</span>Primary<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="success" plain</span><span class="hljs-tag">&gt;</span>Success<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="info" plain</span><span class="hljs-tag">&gt;</span>Info<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="warning" plain</span><span class="hljs-tag">&gt;</span>Warning<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="danger" plain</span><span class="hljs-tag">&gt;</span>Danger<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-row</span><span class="hljs-tag">&gt;</span>

<span class="hljs-tag">&lt;</span><span class="hljs-name">dc-row</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button round</span><span class="hljs-tag">&gt;</span>Round<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="primary" round</span><span class="hljs-tag">&gt;</span>Primary<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="success" round</span><span class="hljs-tag">&gt;</span>Success<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="info" round</span><span class="hljs-tag">&gt;</span>Info<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="warning" round</span><span class="hljs-tag">&gt;</span>Warning<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button type="danger" round</span><span class="hljs-tag">&gt;</span>Danger<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-row</span><span class="hljs-tag">&gt;</span>

<span class="hljs-tag">&lt;</span><span class="hljs-name">dc-row</span><span class="hljs-tag">&gt;</span>
    <span class="hljs-tag">&lt;</span><span class="hljs-name">dc-button icon="dl-icon-search" circle</span><span class="hljs-tag">&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>dc-button type="primary" icon="dl-icon-edit" circle</span><span
    class="hljs-tag"
>&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>dc-button type="success" icon="dl-icon-check" circle</span><span
    class="hljs-tag"
>&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>dc-button type="info" icon="dl-icon-message" circle</span><span
    class="hljs-tag"
>&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>dc-button type="warning" icon="dl-icon-star-off" circle</span><span
    class="hljs-tag"
>&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
    <span class="hljs-tag">&lt;</span><span
    class="hljs-name"
>dc-button type="danger" icon="dl-icon-delete" circle</span><span
    class="hljs-tag"
>&gt;</span><span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-button</span><span class="hljs-tag">&gt;</span> 
<span class="hljs-tag">&lt;</span><span class="hljs-name">/dc-row</span><span class="hljs-tag">&gt;</span>
                        </code></div></pre>
            </div>
            <div class="code-block-control">
                <div class="expand-control">
                    <font-awesome-icon icon="caret-down" size="x" />
                    <span>Expand</span>
                </div>
                <button>Try It!</button>
            </div>
        </div>
    </div>
</template>

<script>
import Button from "../components/Button";
export default {
    name: "comp-button",
    data() {
        return {
            buttonPropsDefault: [
                {
                    type: "",
                    content: "Default",
                    size: "medium",
                },
                {
                    type: "primary",
                    content: "Primary",
                    size: "medium",
                },
                {
                    type: "success",
                    content: "Success",
                    size: "medium",
                },
                {
                    type: "info",
                    content: "Info",
                    size: "medium",
                },
                {
                    type: "warning",
                    content: "Warning",
                    size: "medium",
                },
                {
                    type: "danger",
                    content: "Danger",
                    size: "medium",
                },
            ],
            buttonPropsPlain: [
                {
                    type: "",
                    content: "Plain",
                    size: "medium",
                },
                {
                    type: "primary",
                    content: "Primary",
                    size: "medium",
                    plain: "true",
                },
                {
                    type: "success",
                    content: "Success",
                    size: "medium",
                },
                {
                    type: "info",
                    content: "Info",
                    size: "medium",
                },
                {
                    type: "warning",
                    content: "Warning",
                    size: "medium",
                },
                {
                    type: "danger",
                    content: "Danger",
                    size: "medium",
                    plain: "true",
                },
            ],
            buttonPropsRound: [
                {
                    type: "",
                    content: "Round",
                    size: "medium",
                    plain: "true",
                },
                {
                    type: "primary",
                    content: "Primary",
                    size: "medium",
                },
                {
                    type: "success",
                    content: "Success",
                    size: "medium",
                },
                {
                    type: "info",
                    content: "Info",
                    size: "medium",
                },
                {
                    type: "warning",
                    content: "Warning",
                    size: "medium",
                },
                {
                    type: "danger",
                    content: "Danger",
                    size: "medium",
                },
            ],
            buttonPropsCircle: [
                {
                    type: "",
                    content: "",
                    size: "medium",
                    iconName: "search",
                },
                {
                    type: "primary",
                    content: "",
                    size: "medium",
                    iconName: "edit",
                },
                {
                    type: "success",
                    content: "",
                    size: "medium",
                    iconName: "check",
                },
                {
                    type: "info",
                    content: "",
                    size: "medium",
                    iconName: "envelope",
                },
                {
                    type: "warning",
                    content: "",
                    size: "medium",
                    iconName: "star",
                },
                {
                    type: "danger",
                    content: "",
                    size: "medium",
                    iconName: "trash-alt",
                },
            ],
        };
    },
    components: {
        Button,
    },
};
</script>

<style lang="scss" scoped>
$green: #38ada9;

.demo-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    border: {
        style: solid;
        color: #eee;
        width: 1px;
        radius: 4px 4px 0 0;
    }
    padding: 24px;

    .dc-row {
        display: inline-flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }
}

.code-block-control {
    display: flex;
    height: 40px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border: {
        style: solid;
        color: #eee;
        width: 1px;
        radius: 0 0 4px 4px;
    }
    border-top: none;

    cursor: pointer;
    .expand-control {
        flex: 0 1 auto;
        position: absolute;
        left: 50%;
    }

    i,
    svg {
        color: #ccc;
        transition: 0.3s;
    }

    span {
        display: none;
        margin-left: 10px;
    }

    button {
        flex: 0 1 auto;
        margin-left: auto;
        border: none;
        display: none;
        color: $green;
        font-size: 14px;
        cursor: pointer;
        transition: 0.3s;
    }
}

div.demo:hover {
    svg {
        color: #ccc;
    }
    span {
        display: inline-block;
        color: #ccc;
    }
    button {
        display: inline;
    }
}

div.code-block-control:hover {
    svg {
        color: $green;
    }
    span {
        display: inline-block;
        color: $green;
    }
}

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
    .description {
        background-color: white;
        padding: 16px;
        margin: 10px;
        border: {
            style: solid;
            color: #eee;
            width: 1px;
            radius: 4px;
        }

        .little-code {
            background-color: transparentize($color: $green, $amount: 0.8);
            border-radius: 2px;
            padding: 1px 5px;
            margin: 0 4px;
        }
    }

    pre {
        margin: 0;
    }

    .code-area {
        padding: 12px 24px;
    }
}
</style>
