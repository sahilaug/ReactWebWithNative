const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: ['./web/index.js']
    },
    output: {
        path: __dirname + '/web/web-build', // This is where images AND js will go
        publicPath: '/',
        filename: 'bundle.[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['css-loader' ]
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 for <=8k images, direct URLs for the rest
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './web/index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.json']
    },
};