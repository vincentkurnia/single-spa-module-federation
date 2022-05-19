const { merge } = require("webpack-merge");
const path = require("path");
const commonConfig = require("./webpack.config.common");

const publicPath = "/demo";

const prodConfig = {
    mode: "production",

    devtool: "source-map",

    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "build"),
        publicPath: `${publicPath}/`
    },

    optimization: {
        minimize: false
    }
}

module.exports = merge(commonConfig, prodConfig);