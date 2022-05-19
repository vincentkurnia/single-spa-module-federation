const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const commonConfig = require("./webpack.config.common");

const publicPath = "";
const remote = {
    demo: "/demo",
    another: "/another",
    navigation: "/navigation"
}

const prodConfig = {
    mode: "production",

    devtool: "source-map",

    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "build"),
        publicPath: `${publicPath}/`,
    },

    optimization: {
        minimize: false
    },

    plugins: [
        new CleanWebpackPlugin(),

        new ModuleFederationPlugin({
            remotes: {
                another: `another@${remote.another}/remoteEntry.js`,
                demo: `demo@${remote.demo}/remoteEntry.js`,
                navigation: `navigation@${remote.navigation}/remoteEntry.js`
            }
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);