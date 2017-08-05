const commonPaths = require("./common-paths");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require('path');

const config = {
    entry: {
        main: './src/index.js',
        vendor: [
            'lodash',
            'jquery'
        ]
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: commonPaths.outputPath,
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(['web'], {
            root: path.resolve(__dirname, '../'),
            verbose: true
        }),
        new HtmlWebpackPlugin({
            title: 'Caching'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ]
};

module.exports = config;
