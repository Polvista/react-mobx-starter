let webpack = require('webpack');
let webpackMerge = require('webpack-merge');
let commonConfig = require('./common.js');
let DefinePlugin = require('webpack/lib/DefinePlugin');
let AssetsPlugin = require('assets-webpack-plugin');
let path = require('path');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',
    output: {
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        //new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {screw_ie8: true},
            compress: {screw_ie8: true},
            comments: false,
            screw_ie8: true
        }),
        new DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(ENV),
                'ENV': JSON.stringify(ENV)
            }
        })
    ]
});