module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["vue-style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    presets: ["@vue/cli-plugin-babel/preset"],
};
