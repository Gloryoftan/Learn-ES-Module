// webpack.config.js
const path = require('path')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");

module.exports = merge(commonConfig, {
    mode: "development",
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ["dist"], // 这个是非必填的
        }),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
})