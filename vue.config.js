const path = require('path')
module.exports = {
    chainWebpack:(config)=>{
        config.resolve.alias
        .set('style',path.join(__dirname,'./src/assets/style/'))
        .set('@',path.join(__dirname,'./src/'))
    },
    devServer: {
        proxy: {
            '/api':{
                target:'http://localhost:8080',
                pathRewrite:{
                    '^/api':'/mock'
                }
            }
      }
    }
  }