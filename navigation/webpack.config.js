const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const port = 3001;
const packageJson = require("./package.json");

module.exports = {
    mode: "development",

    output: {
        publicPath: `http://localhost:${port}/`
    },

    devServer: {
        port: port,
        historyApiFallback: true
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: ["@babel/plugin-transform-runtime"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new ModuleFederationPlugin({
            name: "container",
            // library: { type: "var", name: "container" },
            filename: "remoteEntry.js",
            remotes: {

            },
            exposes: {},
            shared: packageJson.dependencies
        })
    ]
}