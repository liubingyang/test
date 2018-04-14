
const path = require('path')
const webpack=require('webpack')
const config = require('./config')
const cleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: {
    //就是这样写就对 了
            main: path.resolve(__dirname, '../src/main.js')
        },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: config.publicPath,
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    'scss': [
                        'vue-style-loader',
                        'css-loader',
                        'less-loader'
                    ]
                }
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.min.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    //新增html插件，生成main.js的同时生成index.html
    plugins:[
       new cleanWebpackPlugin(['dist'], {
            "root": path.resolve(__dirname, '../'),
        })
    ]
}    