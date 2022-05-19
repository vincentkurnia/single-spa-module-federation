const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

const port = 3001;

const devConfig = {
    mode: "development",

    devtool: "source-map",

    output: {
        publicPath: `http://localhost:${port}/`
    },

    devServer: {
        port: port,
        historyApiFallback: true
    }
}

module.exports = merge(commonConfig, devConfig);