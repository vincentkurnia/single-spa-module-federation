const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

const port = 3002;

module.exports = (env) => {
    const devConfig = {
        entry: env.standalone ? "./src/standalone.js" : "./src/index.js",

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

    return merge(commonConfig, devConfig);
}