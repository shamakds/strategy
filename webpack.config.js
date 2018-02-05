var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin('[name].css');

module.exports = {
    entry: "./client.js",
    output: {
        path: __dirname + "/build/",
        filename: "build.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: [
                    "css-loader",
                ],
            }),
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: [
                    "css-loader",
                    "sass-loader",
                ],
            }),
        },
        {
            test: [/\.html$/, /\.temp$/],
            loader: "html-loader"
        }]
    },
    plugins: [
        extractCSS
    ]
};