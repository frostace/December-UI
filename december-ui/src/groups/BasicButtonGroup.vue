<template>
    <div id="demo-block">
        <div class="dc-row dc-row-default">
            <dc-button
                :key="index"
                v-for="(buttonprop, index) in buttonPropsDefault"
                v-bind:type="buttonprop.type"
            >{{buttonprop.content}}</dc-button>
        </div>
        <div class="dc-row dc-row-plain">
            <dc-button
                :key="index"
                v-for="(buttonprop, index) in buttonPropsPlain"
                v-bind:type="buttonprop.type"
                plain
            >{{buttonprop.content}}</dc-button>
        </div>
        <div class="dc-row dc-row-round">
            <dc-button
                :key="index"
                v-for="(buttonprop, index) in buttonPropsRound"
                v-bind:type="buttonprop.type"
                round
            >{{buttonprop.content}}</dc-button>
        </div>
        <div class="dc-row dc-row-circle">
            <dc-button
                :key="index"
                v-for="(buttonprop, index) in buttonPropsCircle"
                v-bind:type="buttonprop.type"
                circle
            >
                <font-awesome-icon :icon="buttonprop.iconName" />
            </dc-button>
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
                    type: "default",
                    content: "Default"
                },
                {
                    type: "primary",
                    content: "Primary"
                },
                {
                    type: "success",
                    content: "Success"
                },
                {
                    type: "info",
                    content: "Info"
                },
                {
                    type: "warning",
                    content: "Warning"
                },
                {
                    type: "danger",
                    content: "Danger"
                }
            ],
            buttonPropsPlain: [
                {
                    type: "default",
                    content: "Plain"
                },
                {
                    type: "primary",
                    content: "Primary",
                    plain: "true"
                },
                {
                    type: "success",
                    content: "Success"
                },
                {
                    type: "info",
                    content: "Info"
                },
                {
                    type: "warning",
                    content: "Warning"
                },
                {
                    type: "danger",
                    content: "Danger",
                    plain: "true"
                }
            ],
            buttonPropsRound: [
                {
                    type: "",
                    content: "Round",
                    plain: "true"
                },
                {
                    type: "primary",
                    content: "Primary"
                },
                {
                    type: "success",
                    content: "Success"
                },
                {
                    type: "info",
                    content: "Info"
                },
                {
                    type: "warning",
                    content: "Warning"
                },
                {
                    type: "danger",
                    content: "Danger"
                }
            ],
            buttonPropsCircle: [
                {
                    type: "",
                    content: "",
                    iconName: "search"
                },
                {
                    type: "primary",
                    content: "",
                    iconName: "edit"
                },
                {
                    type: "success",
                    content: "",
                    iconName: "check"
                },
                {
                    type: "info",
                    content: "",
                    iconName: "envelope"
                },
                {
                    type: "warning",
                    content: "",
                    iconName: "star"
                },
                {
                    type: "danger",
                    content: "",
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