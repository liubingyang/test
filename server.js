const path=require('path')
const express=require('express')
const webpack=require('webpack')
const swig=require('swig')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./build/webpack.config')
const webpackDevConfig = require('./build/webpack.dev.config')
const config=require('./build/config')

const app=express()
	
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, './'));

app.get('/',function (req,res) {
	res.type('text/html');
	res.render('index');
})

if (config.isdev) {
    console.log('server运行在开发环境')
    const compiler = webpack(webpackDevConfig)

    app.use(webpackDevMiddleware(compiler, {
        // public path should be the same with webpack config
        publicPath: 'http://localhost:3000/',
        stats: {
            colors: true
        }
    }))

    app.use(webpackHotMiddleware(compiler))

} else {
    console.log('server运行在生产环境')

    webpack(webpackConfig, function(err, stats) {
        if (err) throw err
        //输出打包信息（这里又可以用了）
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')

        app.use(express.static(path.resolve(__dirname, './dist')))

    })
}

app.listen(3000, function(){
  console.log('App is now running on port 3000!');
});

app.use('/juejinResources',require('./service/juejinResources'))