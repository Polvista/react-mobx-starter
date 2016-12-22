let webpack = require('webpack');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let autoprefixer = require('autoprefixer');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let path = require("path");
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: "./app/index.tsx"
    },

    output: {
        filename: "[name].js",
        publicPath: "/app/",
        path: path.join(__dirname, '../public/app')
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ['babel', 'ts'],
                exclude: /node_modules/
            },
            // ???
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'raw', 'postcss', 'sass']
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)/,
                loader: 'file-loader'
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['public/app'], {
            root: path.join(__dirname, '..'),
            verbose: true
        }),

        //new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
            template: './app/index.html',
            filename: 'index.html'
        }),

        new CopyWebpackPlugin([
            {
                from: './app/static',
                to: '.'
            }
        ])
    ],
    resolve: {
        extensions: ['', '.tsx', '.ts', '.jsx', '.js', '.css']
    },
    postcss: function () {
        return [autoprefixer()]
    }
};