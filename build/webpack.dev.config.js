
const path = require('path')
const webpack=require('webpack')
//增加页面热加载字段，添加到entry中（固定写法）
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'
//新增通用配置文件
const config = require('./config')

module.exports = {
    mode: 'development',
    entry: {
    //就是这样写就对 了
            main: [path.resolve(__dirname, '../src/main.js'),hotMiddlewareScript]
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
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    //新增html插件，生成main.js的同时生成index.html
    plugins:[
        //热加载需要使用这个插件才起作用
        new webpack.HotModuleReplacementPlugin(),
    ]
}    