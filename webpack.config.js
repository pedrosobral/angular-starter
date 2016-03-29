var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    debug: true,
    minimize: true,
    entry: {
        main: './index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: [/app\/lib/, /node_modules/],
            query: {
                   presets: ['es2015']
               }
        }, {
            test: /\.html$/,
            loader: 'raw'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }]
    },
    plugins: [
        // Injects bundles in your index.html instead of wiring all manually.
        // It also adds hash to all injected assets so we don't have problems
        // with cache purging during deployment.
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
            hash: true
        }),
    ]
};
