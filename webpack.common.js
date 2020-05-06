// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'vendor': './src/js/vendor.js',
        'index': './src/js/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '这是webpackcommon的配置',
            template: "./src/template.html",
        })
    ],
    module: {
        rules: [{
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /.(svg|png|jpg|jpeg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name]_[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"]
            },
        ],
    }
}