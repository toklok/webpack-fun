const commonPaths = require("./common-paths");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const webpack = require("webpack");
const path = require("path");

const config = {
    entry: {
        main: "./src/index.js",
        vendor: [
            "jquery"
        ]
    },
    output: {
        filename: "[name].[chunkhash].js",
        hashDigestLength: 5,
        path: commonPaths.outputPath,
    },
    module: {
        rules: [
            {
                test: require.resolve("slick-carousel"),
                use: "imports-loader?$=jquery"
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(["web"], {
            root: path.resolve(__dirname, "../"),
            verbose: true
        }),
        new HtmlWebpackPlugin({
            template: '!!twig-loader!src/index.html.twig',
            title: 'Caching Example, Webpack Example',
            inject: true,
            hash: true
        }),
        new PreloadWebpackPlugin({
            rel: 'prefetch'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        }),
    ]
};

module.exports = config;
