<template>
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
</template>

<script>
import Button from "../components/Button";
export default {
    data() {
        return {
            buttonPropsDefault: [
                {
                    type: "",
                    content: "Default",
                    size: "medium"
                },
                {
                    type: "primary",
                    content: "Primary",
                    size: "medium"
                },
                {
                    type: "success",
                    content: "Success",
                    size: "medium"
                },
                {
                    type: "info",
                    content: "Info",
                    size: "medium"
                },
                {
                    type: "warning",
                    content: "Warning",
                    size: "medium"
                },
                {
                    type: "danger",
                    content: "Danger",
                    size: "medium"
                }
            ],
            buttonPropsPlain: [
                {
                    type: "",
                    content: "Plain",
                    size: "medium"
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
                    size: "medium"
                },
                {
                    type: "info",
                    content: "Info",
                    size: "medium"
                },
                {
                    type: "warning",
                    content: "Warning",
                    size: "medium"
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
                    size: "medium"
                },
                {
                    type: "success",
                    content: "Success",
                    size: "medium"
                },
                {
                    type: "info",
                    content: "Info",
                    size: "medium"
                },
                {
                    type: "warning",
                    content: "Warning",
                    size: "medium"
                },
                {
                    type: "danger",
                    content: "Danger",
                    size: "medium"
                }
            ],
            buttonPropsCircle: [
                {
                    type: "",
                    content: "",
                    size: "medium",
                    iconName: "search"
                },
                {
                    type: "primary",
                    content: "",
                    size: "medium",
                    iconName: "edit"
                },
                {
                    type: "success",
                    content: "",
                    size: "medium",
                    iconName: "check"
                },
                {
                    type: "info",
                    content: "",
                    size: "medium",
                    iconName: "envelope"
                },
                {
                    type: "warning",
                    content: "",
                    size: "medium",
                    iconName: "star"
                },
                {
                    type: "danger",
                    content: "",
                    size: "medium",
                    iconName: "trash-alt"
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
@import "../assets/var.scss";

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
</style>