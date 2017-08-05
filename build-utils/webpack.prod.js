const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const webpack = require("webpack");

module.exports = {
    devtool: "false",
    module: {
        rules: [
            {
                test: /\.jsx?/i,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.scss$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: [
                        {
                        loader: "css-loader",
                        },
                        {
                        loader: "sass-loader",
                        }
                    ],
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin({ filename: '[name].[chunkhash].bundle.css', allChunks: true }),
        new UglifyJsWebpackPlugin({
            sourceMap: false,
        }),
        new ManifestPlugin({
            filename: 'manifest.json',
            basePath: '/web/'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
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