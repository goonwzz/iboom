var gulp = require('gulp')
  , path = require('path')
  , webpack = require('webpack')
  , WebpackDevServer = require('webpack-dev-server')
  , config = require('./webpack.config')


gulp.task('default', function () {
  /**
   * start a webpack dev server
   * use ip 0.0.0.0 for remote dev
   */
  new WebpackDevServer(webpack(config), config.devServer)
    .listen(config.devServer.port, '0.0.0.0', (err) => {
      if (err) {
        console.log(err)
        return
      }
      console.log('Listening at localhost:' + config.devServer.port)
    })
})
