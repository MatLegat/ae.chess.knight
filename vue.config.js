module.exports = {
  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './api',
    }
  },
  devServer: {
    host: 'localhost',
    port: 8088,
    hot: true,
    disableHostCheck: true,
  },
}
