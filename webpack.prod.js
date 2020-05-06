// webpack.config.js
const path = require('path')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(commonConfig, {
    mode: "production",
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name]_[contentHash].css"
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimizer: [new OptimizeCssAssetsWebpackPlugin(), new TerserPlugin()]
    },
    output: {
        filename: '[name]_[contentHash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ],
        }]
    }
})