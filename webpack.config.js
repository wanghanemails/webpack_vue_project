const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "[name]-[chunkhash].js",
        path: path.resolve(__dirname, "dist/js")

    },
    module: {
        rules: [{
            test: "/\.css$/",
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: {
                    loader: "css-loader",
                    options: {
                        minimize: true //css压缩
                    }
                }

            })

        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
        }),
        new ExtractTextPlugin({
            filename: './dist/css/[name]-[contenthash].css',
        }),
    ]




}