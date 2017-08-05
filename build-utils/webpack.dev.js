const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

const config = {
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.jsx?/i,
                use: "babel-loader",
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin({ filename: '[name].bundle.css', allChunks: true }),
        new ManifestPlugin({
            filename: 'manifest.json',
            basePath: '/web/'
        }),
    ]
};

module.exports = config;
