const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const webpack = require("webpack");

module.exports = {
    devtool: "hidden-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: "css-loader",
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin("styles.css"),
        new UglifyJsWebpackPlugin({
            sourceMap: false,
        }),
        new ManifestPlugin({
            filename: 'manifest.json',
            basePath: '/web/'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        new CompressionWebpackPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.(.js|.css)$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
};