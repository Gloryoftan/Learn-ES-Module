// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            // title: 'Webpack Output Management',
            template: "./src/index.html",
        })
    ],
}