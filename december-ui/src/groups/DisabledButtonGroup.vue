<template>
    <div id="demo-block">
        <div class="dc-row dc-row-default">
            <dc-button
                :key="index"
                v-for="(buttonprop, index) in buttonPropsDefault"
                v-bind:type="buttonprop.type"
                :size="buttonprop.size"
                disabled
            >{{buttonprop.content}}</dc-button>
        </div>
        <div class="dc-row dc-row-plain">
            <dc-button
                :key="index"
                v-for="(buttonprop, index) in buttonPropsPlain"
                v-bind:type="buttonprop.type"
                :size="buttonprop.size"
                plain
                disabled
            >{{buttonprop.content}}</dc-button>
        </div>
    </div>
</template>

<script>
import dcButton from "../components/Button";
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
        dcButton
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/var.scss";

#demo-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
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