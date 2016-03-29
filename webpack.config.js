var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map', // inline-source-map
    debug: true,
    minimize: true,
    entry: {
        main: './index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    // ISPARTA LOADER
    // Reference: https://github.com/deepsweet/isparta-loader
    isparta: {
        embedSource: true,
        noAutoWrap: true,
        // these babel options will be passed only to isparta and not to babel-loader
        babel: {
            presets: ['es2015']
        }
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: 'raw'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }],
        preLoaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: [/app\/lib/, /node_modules/],
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.js$/,
            exclude: [
                /node_modules/,
                /\.spec\.js$/
            ],
            loader: 'isparta'
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
