const path=require('path')

let isdev=process.env.NODE_ENV=='development'?true:false

let config={
    isdev:isdev,
    publicPath:'http://localhost:3000/',
    port:'3000'
}

module.exports=config