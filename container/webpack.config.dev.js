const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.config.common");

const port = 3000;

const devConfig = {
    mode: "development",

    devtool: "source-map",

    output: {
        publicPath: `http://localhost:${port}/`
    },

    devServer: {
        port: port,
        historyApiFallback: true
    },

    plugins: [
        new ModuleFederationPlugin({
            remotes: {
                another: `another@http://localhost:3003/remoteEntry.js`,
                demo: `demo@http://localhost:3002/remoteEntry.js`,
                navigation: `navigation@http://localhost:3001/remoteEntry.js`
            }
        })
    ]
}

module.exports = merge(commonConfig, devConfig);