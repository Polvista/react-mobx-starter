let webpack = require('webpack');
let DefinePlugin = require('webpack/lib/DefinePlugin');
let commonConfig = require('./common.js');
let webpackMerge = require('webpack-merge');

let ENV = process.env.ENV = process.env.NODE_ENV = 'development';

module.exports = webpackMerge(commonConfig, {
    plugins: [
        new DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'NODE_ENV': JSON.stringify(ENV)
            }
        })
    ],
    devtool: "cheap-module-source-map",
    debug: true,
    devServer: {
        historyApiFallback: {
            rewrites: [
                { from: '/', to:'/app/index.html' }
            ]
        },
        stats: 'minimal',
        inline: true,
        progress: true,
        port: "4444",
        /*proxy: {
            '/api': {
                target: 'http://poolinator.dev',
                secure: false
            }
        }*/
    },
});