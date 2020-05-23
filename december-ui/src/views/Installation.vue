<template>
    <div class="about">
        <h2>Installation</h2>
        <h3 id="npm">npm</h3>
        <p>
            Installing with npm is recommended and it works seamlessly with
            <a
                href="https://webpack.js.org/"
            >webpack</a>.
        </p>
        <div class="code-container" v-highlight>
            <pre>
            <code class="shell">npm install december-ui -S</code>
            </pre>
        </div>
        <h3 id="CDN">CDN</h3>
        <p>
            Get the latest version from
            <a
                href="https://unpkg.com/browse/element-ui@2.13.2/"
            >unpkg.com/element-ui</a>, and import JavaScript and CSS file in your page.
        </p>
        <div class="code-container" v-highlight>
            <pre>
            <code class="html"><!-- import CSS -->balabala</code>
            </pre>
        </div>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut animi
            cupiditate vero delectus aliquid molestiae, at iusto quidem rerum
            nulla, eos repellendus nemo repudiandae cum consequuntur vitae nam,
            nesciunt voluptate.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut animi
            cupiditate vero delectus aliquid molestiae, at iusto quidem rerum
            nulla, eos repellendus nemo repudiandae cum consequuntur vitae nam,
            nesciunt voluptate.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut animi
            cupiditate vero delectus aliquid molestiae, at iusto quidem rerum
            nulla, eos repellendus nemo repudiandae cum consequuntur vitae nam,
            nesciunt voluptate.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut animi
            cupiditate vero delectus aliquid molestiae, at iusto quidem rerum
            nulla, eos repellendus nemo repudiandae cum consequuntur vitae nam,
            nesciunt voluptate.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut animi
            cupiditate vero delectus aliquid molestiae, at iusto quidem rerum
            nulla, eos repellendus nemo repudiandae cum consequuntur vitae nam,
            nesciunt voluptate.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut animi
            cupiditate vero delectus aliquid molestiae, at iusto quidem rerum
            nulla, eos repellendus nemo repudiandae cum consequuntur vitae nam,
            nesciunt voluptate.
        </p>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// define params
$content-font-size: 14px;
$key-color: #38ada9;
$font-color: #2c3e50;

// define placeholders
%content-style {
    font-size: $content-font-size;
    color: $font-color;
}

%code-block-style {
    color: white;
    border-radius: 4px;
    padding: 15px;
}

.h2,
h3 {
    color: $font-color;
}
.h3 {
    margin: 55px 0 20px 0;
}

p {
    @extend %content-style;
}

a {
    text-decoration: none;
    color: $key-color;
}

.code-container {
    height: fit-content;
    pre {
        margin: 13px 0;
        padding: 0;
    }
    .hljs {
        @extend %code-block-style;
    }
}
</style>
