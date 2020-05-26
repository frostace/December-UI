<template>
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
                    circle
                />
            </div>
        </div>
        <div class="code-block"></div>
        <div class="code-block-control"></div>
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
                    plain: "true"
                },
                {
                    type: "primary",
                    content: "Primary",
                    size: "medium",
                    plain: "true"
                },
                {
                    type: "success",
                    content: "Success",
                    size: "medium",
                    plain: "true"
                },
                {
                    type: "info",
                    content: "Info",
                    size: "medium",
                    plain: "true"
                },
                {
                    type: "warning",
                    content: "Warning",
                    size: "medium",
                    plain: "true"
                },
                {
                    type: "danger",
                    content: "Danger",
                    size: "medium",
                    plain: "true"
                }
            ],
            buttonPropsPlain: [
                {
                    type: "",
                    content: "Plain",
                    size: "medium",
                    plain: "true"
                },
                {
                    type: "primary",
                    content: "Primary",
                    size: "medium",
                    plain: "true"
                },
                {
                    type: "success",
                    content: "Success",
                    size: "medium",
                    plain: "true"
                },
                {
                    type: "info",
                    content: "Info",
                    size: "medium",
                    plain: "true"
                },
                {
                    type: "warning",
                    content: "Warning",
                    size: "medium",
                    plain: "true"
                },
                {
                    type: "danger",
                    content: "Danger",
                    size: "medium",
                    plain: "true"
                }
            ],
            buttonPropsRound: [
                {
                    type: "",
                    content: "Round",
                    size: "medium",
                    plain: "true"
                },
                {
                    type: "primary",
                    content: "Primary",
                    size: "medium",
                    plain: "true"
                },
                {
                    type: "success",
                    content: "Success",
                    size: "medium",
                    plain: "true"
                },
                {
                    type: "info",
                    content: "Info",
                    size: "medium",
                    plain: "true"
                },
                {
                    type: "warning",
                    content: "Warning",
                    size: "medium",
                    plain: "true"
                },
                {
                    type: "danger",
                    content: "Danger",
                    size: "medium",
                    plain: "true"
                }
            ],
            buttonPropsCircle: [
                {
                    type: "",
                    content: "",
                    size: "medium",
                    plain: "true"
                },
                {
                    type: "primary",
                    content: "",
                    size: "medium",
                    plain: "true"
                },
                {
                    type: "success",
                    content: "",
                    size: "medium",
                    plain: "true"
                },
                {
                    type: "info",
                    content: "",
                    size: "medium",
                    plain: "true"
                },
                {
                    type: "warning",
                    content: "",
                    size: "medium",
                    plain: "true"
                },
                {
                    type: "danger",
                    content: "",
                    size: "medium",
                    plain: "true"
                }
            ]
        };
    },
    components: {
        Button
    }
};
</script>

<style lang="scss" scoped>
.dc-row {
    display: inline-flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    > * {
        margin-bottom: 20px;
    }
}
</style>