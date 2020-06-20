<template>
    <div class="theme-block">
        <div class="color-preview">
            <div class="key-vision">
                <div ref="keyColor" class="key-color"></div>
                <div class="key-vision-sub">
                    <div ref="keyColorLight" class="key-color-light"></div>
                    <div ref="keyColorLighter" class="key-color-lighter"></div>
                </div>
            </div>
            <div class="font-vision">
                <div ref="fontColor" class="font-color"></div>
                <div class="font-vision-sub">
                    <div ref="fontColorLighter" class="font-color-lighter"></div>
                    <div ref="fontColorLight" class="font-color-light"></div>
                </div>
            </div>
        </div>
        <div class="intro">
            <div class="intro-card">
                <div class="intro-line">
                    <div class="intro-name">{{name}}</div>
                    <div class="intro-author">{{author}}</div>
                </div>
                <div class="intro-type">{{type}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { lighten } from "../helpers/color";
export default {
    // get 2 props: key-color and font-color
    props: {
        keyColor: String,
        fontColor: String,
        name: String,
        type: String,
        author: String
    },
    mounted() {
        // pass colors in props to corresponding divs
        let keyColor = this.keyColor || "#38ada9";
        let fontColor = this.fontColor || "#303133";
        this.$refs.keyColor.style.backgroundColor = keyColor;
        this.$refs.keyColorLight.style.backgroundColor = lighten(keyColor, 40);
        this.$refs.keyColorLighter.style.backgroundColor = lighten(
            keyColor,
            80
        );
        this.$refs.fontColor.style.backgroundColor = fontColor;
        this.$refs.fontColorLight.style.backgroundColor = lighten(
            fontColor,
            50
        );
        this.$refs.fontColorLighter.style.backgroundColor = lighten(
            fontColor,
            100
        );
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/var.scss";
@import "../assets/presets.scss";

.theme-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    @include default-border-style(transparentize(#ccc, 0.5));
    @include clear-select-effect;
    width: 240px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    &:hover {
        -webkit-box-shadow: 0 0 8px 0 rgba(132, 137, 150, 0.6),
            0 2px 4px 0 rgba(132, 137, 150, 0.5);
        -moz-box-shadow: 0 0 8px 0 rgba(132, 137, 150, 0.6),
            0 2px 4px 0 rgba(132, 137, 150, 0.5);
        -ms-box-shadow: 0 0 8px 0 rgba(132, 137, 150, 0.6),
            0 2px 4px 0 rgba(132, 137, 150, 0.5);
        -o-box-shadow: 0 0 8px 0 rgba(132, 137, 150, 0.6),
            0 2px 4px 0 rgba(132, 137, 150, 0.5);
        box-shadow: 0 0 8px 0 rgba(132, 137, 150, 0.6),
            0 2px 4px 0 rgba(132, 137, 150, 0.5);
    }

    .color-preview {
        width: 100%;
        height: 120px;

        display: flex;
        flex-direction: row;
        .key-vision {
            display: flex;
            flex-direction: column;
            width: 100%;
            .key-color {
                width: 100%;
                height: 100%;
                background-color: violet;
            }
            .key-vision-sub {
                display: flex;
                flex-direction: row;
                width: 100%;
                height: 100%;
                .key-color-light {
                    width: 100%;
                    background-color: grey;
                }
                .key-color-lighter {
                    width: 100%;
                    background-color: coral;
                }
            }
        }
        .font-vision {
            display: flex;
            flex-direction: column;
            width: 100%;
            .font-color {
                width: 100%;
                height: 100%;
                background-color: black;
            }
            .font-vision-sub {
                display: flex;
                flex-direction: row;
                width: 100%;
                height: 100%;
                .font-color-light {
                    width: 100%;
                    height: 100%;
                    background-color: grey;
                }
                .font-color-lighter {
                    width: 100%;
                    height: 100%;
                    background-color: coral;
                }
            }
        }
    }
    .intro {
        background-color: white;
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        .intro-line {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: 5px;
            .intro-name {
                font-weight: 900;
            }
            .intro-author {
                opacity: 0.7;
            }
        }
        .intro-type {
            font-size: 12px;
        }
    }
}
</style>